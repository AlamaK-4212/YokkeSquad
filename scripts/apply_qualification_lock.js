const fs = require('fs');

console.log('--- Applying Qualification Lock Updates ---');

// 1. Update app.js
let appJs = fs.readFileSync('app.js', 'utf8');
const isAppCRLF = appJs.includes('\r\n');
let normalizedApp = appJs.replace(/\r\n/g, '\n');

// A. Insert isGroupMatchesCompleted after getCanonicalGroupMatchId
const targetCanonical = `function getCanonicalGroupMatchId(gName, teamA, teamB) {
  const cleanG = (gName || '').trim();
  const cleanA = (teamA || '').trim();
  const cleanB = (teamB || '').trim();
  const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
  return \`\${cleanG}_\${sorted[0]}_vs_\${sorted[1]}\`.replace(/\\s+/g, '_');
}`;

const helperFunc = `function getCanonicalGroupMatchId(gName, teamA, teamB) {
  const cleanG = (gName || '').trim();
  const cleanA = (teamA || '').trim();
  const cleanB = (teamB || '').trim();
  const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
  return \`\${cleanG}_\${sorted[0]}_vs_\${sorted[1]}\`.replace(/\\s+/g, '_');
}

// Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah selesai diinput
function isGroupMatchesCompleted(gName) {
  const fixtures = (typeof getGroupFixtures === 'function') ? getGroupFixtures(gName) : [];
  if (fixtures && fixtures.length > 0) {
    return fixtures.every(f => {
      const hasWinner = f.winner !== null && f.winner !== undefined && String(f.winner).trim() !== '';
      const hasScore = f.scoreA !== null && f.scoreB !== null && (Number(f.scoreA) > 0 || Number(f.scoreB) > 0);
      return hasWinner || hasScore;
    });
  }
  const teams = (groupStageData && groupStageData[gName]) || [];
  if (teams.length < 2) return false;
  return teams.every(t => {
    const played = t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0));
    return played >= (teams.length - 1);
  });
}`;

if (!normalizedApp.includes('function isGroupMatchesCompleted(')) {
  if (normalizedApp.includes(targetCanonical)) {
    normalizedApp = normalizedApp.replace(targetCanonical, helperFunc);
    console.log('✅ Added isGroupMatchesCompleted helper function to app.js');
  } else {
    console.error('❌ Could not find targetCanonical in app.js');
    process.exit(1);
  }
} else {
  console.log('ℹ️ isGroupMatchesCompleted already present in app.js');
}

// B. Update renderGroupStageUI
const targetGroupStageUI = `    const sorted = getSortedGroupTeams(gName);

    html += \`
      <div class="group-box">
        <div class="group-header">
          <span>🛡️ \${escapeHtml(gName)}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">\${gKeys.length === 8 ? 'Juara 1 & 2 ➔ Upper, Juara 3 ➔ Lower' : \`Top \${numToQualify} Lolos ke Playoff\`}</span>
        </div>
        <div style="padding:0.5rem">
          <table>
            <thead>
              <tr>
                <th>Tim</th>
                <th style="text-align:center;width:45px;" title="Pertandingan Dimainkan">Match</th>
                <th style="text-align:center;">M</th>
                <th style="text-align:center;">K</th>
                <th style="text-align:center;width:60px;" title="Agregat Game (Game Menang - Game Kalah)">Agregat</th>
                <th style="text-align:center;">Poin</th>
                <th style="text-align:center;">⭐ MVP</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              \${sorted.map((t, idx) => {
                const isQ = idx < numToQualify && t.pts > 0;
                const origIdx = groupStageData[gName].indexOf(t);

                const winCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.win}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'win', this.value)">
                \` : t.win;

                const loseCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'lose', this.value)">
                \` : t.lose;

                const diffVal = (t.diff !== undefined) ? t.diff : ((t.gameWon || 0) - (t.gameLost || 0));
                const diffSign = diffVal > 0 ? \`+\${diffVal}\` : \`\${diffVal}\`;
                const diffColor = diffVal > 0 ? 'var(--yokke-green)' : (diffVal < 0 ? '#f87171' : 'var(--text-muted)');
                const gameDetail = \`\${t.gameWon || 0}-\${t.gameLost || 0}\`;

                return \`
                  <tr style="\${isQ ? 'background:rgba(6,214,160,0.1);font-weight:bold;' : ''}">
                    <td>
                      <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">
                        <span>\${escapeHtml(t.name)}</span>
                        <!-- Invited team badge hidden per privacy rule -->
                      </div>
                    </td>
                    <td style="text-align:center;font-weight:700;color:#cbd5e1;">\${t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0))}</td>
                    <td style="text-align:center;">\${winCtrl}</td>
                    <td style="text-align:center;">\${loseCtrl}</td>
                    <td style="text-align:center;" title="Game: \${t.gameWon || 0}M - \${t.gameLost || 0}K (Selisih Game: \${diffSign})">
                      <span style="font-weight:800; color:\${diffColor};">\${diffSign}</span>
                      <div style="font-size:0.68rem; color:var(--text-muted);">\${gameDetail}</div>
                    </td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">\${t.pts}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:700;">\${t.mvpCount || 0}</td>
                    <td>\${
                      t.pts > 0 ? (
                        gKeys.length === 8 ? (
                          idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper</span>' :
                          (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                        ) : (isQ ? '<span style="color:var(--yokke-green)">Lolos</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                      ) : '-'
                    }</td>
                  </tr>
                \`;
              }).join('')}`;

const replacementGroupStageUI = `    const sorted = getSortedGroupTeams(gName);
    const isGroupAllDone = isGroupMatchesCompleted(gName);

    html += \`
      <div class="group-box">
        <div class="group-header">
          <span>🛡️ \${escapeHtml(gName)}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">\${gKeys.length === 8 ? 'Juara 1 & 2 ➔ Upper, Juara 3 ➔ Lower' : \`Top \${numToQualify} Lolos ke Playoff\`}</span>
        </div>
        <div style="padding:0.5rem">
          <table>
            <thead>
              <tr>
                <th>Tim</th>
                <th style="text-align:center;width:45px;" title="Pertandingan Dimainkan">Match</th>
                <th style="text-align:center;">M</th>
                <th style="text-align:center;">K</th>
                <th style="text-align:center;width:60px;" title="Agregat Game (Game Menang - Game Kalah)">Agregat</th>
                <th style="text-align:center;">Poin</th>
                <th style="text-align:center;">⭐ MVP</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              \${sorted.map((t, idx) => {
                const isQ = isGroupAllDone && (idx < numToQualify);
                const origIdx = groupStageData[gName].indexOf(t);

                const winCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.win}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'win', this.value)">
                \` : t.win;

                const loseCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'lose', this.value)">
                \` : t.lose;

                const diffVal = (t.diff !== undefined) ? t.diff : ((t.gameWon || 0) - (t.gameLost || 0));
                const diffSign = diffVal > 0 ? \`+\${diffVal}\` : \`\${diffVal}\`;
                const diffColor = diffVal > 0 ? 'var(--yokke-green)' : (diffVal < 0 ? '#f87171' : 'var(--text-muted)');
                const gameDetail = \`\${t.gameWon || 0}-\${t.gameLost || 0}\`;

                return \`
                  <tr style="\${isQ ? 'background:rgba(6,214,160,0.1);font-weight:bold;' : ''}">
                    <td>
                      <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">
                        <span>\${escapeHtml(t.name)}</span>
                        <!-- Invited team badge hidden per privacy rule -->
                      </div>
                    </td>
                    <td style="text-align:center;font-weight:700;color:#cbd5e1;">\${t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0))}</td>
                    <td style="text-align:center;">\${winCtrl}</td>
                    <td style="text-align:center;">\${loseCtrl}</td>
                    <td style="text-align:center;" title="Game: \${t.gameWon || 0}M - \${t.gameLost || 0}K (Selisih Game: \${diffSign})">
                      <span style="font-weight:800; color:\${diffColor};">\${diffSign}</span>
                      <div style="font-size:0.68rem; color:var(--text-muted);">\${gameDetail}</div>
                    </td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">\${t.pts}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:700;">\${t.mvpCount || 0}</td>
                    <td>\${
                      isGroupAllDone ? (
                        gKeys.length === 8 ? (
                          idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper</span>' :
                          (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                        ) : (isQ ? '<span style="color:var(--yokke-green)">Lolos</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                      ) : '<span style="color:var(--text-muted);font-size:0.75rem;font-style:italic;" title="Status kelolosan ditutup hingga seluruh match selesai">🔒 Ditutup</span>'
                    }</td>
                  </tr>
                \`;
              }).join('')}`;

if (normalizedApp.includes(targetGroupStageUI)) {
  normalizedApp = normalizedApp.replace(targetGroupStageUI, replacementGroupStageUI);
  console.log('✅ Updated renderGroupStageUI in app.js');
} else {
  console.log('⚠️ Notice: targetGroupStageUI pattern not found or already updated');
}

// C. Update renderMLBBInteractiveHubUI
const targetHubUI = `    const letter = nodeKey.replace('GROUP_', '');
    const gName = \`Grup \${letter}\`;
    const teams = groupStageData[gName] || [];

    const sorted = getSortedGroupTeams(gName);

    content += \`
      <div class="detail-panel-header">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
            <span>🛡️</span> <span>Klasemen & Pertandingan: \${escapeHtml(gName)}</span>
          </h3>
          <span style="font-size:0.75rem;padding:0.2rem 0.6rem;background:rgba(0,210,255,0.12);border:1px solid rgba(0,210,255,0.3);color:var(--yokke-cyan);border-radius:12px;font-weight:700;">
            Fase 1 • Day 1
          </span>
        </div>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(6,214,160,0.12);color:var(--yokke-green);border:1px solid var(--yokke-green);">Round-Robin BO3</span>
          <span class="badge-status" style="background:rgba(255,255,255,0.06);color:var(--text-muted);">Menang Match = +2 Poin</span>
          <span class="badge-status" style="background:rgba(0,210,255,0.08);color:var(--yokke-cyan);">Juara 1 & 2 ➔ Upper Day 2</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.1);color:var(--yokke-gold);">Juara 3 ➔ Lower Day 3</span>
        </div>
      </div>

      <!-- TABEL KLASEMEN GRUP -->
      <div style="margin-bottom:1.25rem;">
        <h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">📊 Klasemen Sementara \${escapeHtml(gName)}</h4>
        <div class="table-container" style="margin:0;">
          <table>
            <thead>
              <tr>
                <th style="width:35px;">#</th>
                <th>Nama Tim</th>
                <th style="text-align:center;width:45px;" title="Pertandingan Dimainkan">Match</th>
                <th style="text-align:center;width:40px;">M</th>
                <th style="text-align:center;width:40px;">K</th>
                <th style="text-align:center;width:60px;" title="Agregat Game (Game Menang - Game Kalah)">Agregat</th>
                <th style="text-align:center;width:50px;">Poin</th>
                <th style="text-align:center;width:55px;">⭐ MVP</th>
                <th>Kelolosan</th>
              </tr>
            </thead>
            <tbody>
              \${sorted.map((t, idx) => {
                const origIdx = groupStageData[gName].indexOf(t);
                const winCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.win}" style="width:42px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'win', this.value); renderMLBBInteractiveHubUI();">
                \` : t.win;
                const loseCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'lose', this.value); renderMLBBInteractiveHubUI();">
                \` : t.lose;

                const diffVal = (t.diff !== undefined) ? t.diff : ((t.gameWon || 0) - (t.gameLost || 0));
                const diffSign = diffVal > 0 ? \`+\${diffVal}\` : \`\${diffVal}\`;
                const diffColor = diffVal > 0 ? 'var(--yokke-green)' : (diffVal < 0 ? '#f87171' : 'var(--text-muted)');
                const gameDetail = \`\${t.gameWon || 0}-\${t.gameLost || 0}\`;

                return \`
                  <tr style="\${idx < 2 ? 'background:rgba(0,210,255,0.08);' : (idx === 2 ? 'background:rgba(255,183,3,0.06);' : '')}">
                    <td style="font-weight:700;color:var(--text-muted);">\${idx + 1}</td>
                    <td style="font-weight:700;color:#fff;">\${escapeHtml(t.name)}</td>
                    <td style="text-align:center;font-weight:700;color:#cbd5e1;">\${t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0))}</td>
                    <td style="text-align:center;">\${winCtrl}</td>
                    <td style="text-align:center;">\${loseCtrl}</td>
                    <td style="text-align:center;" title="Game: \${t.gameWon || 0}M - \${t.gameLost || 0}K (Selisih Game: \${diffSign})">
                      <span style="font-weight:800; color:\${diffColor};">\${diffSign}</span>
                      <div style="font-size:0.68rem; color:var(--text-muted);">\${gameDetail}</div>
                    </td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">\${t.pts}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:700;">\${t.mvpCount || 0}</td>
                    <td>\${
                      idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper Bracket (Day 2)</span>' :
                      (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower Bracket (Day 3)</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                    }</td>
                  </tr>
                \`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- DAFTAR MATCH & INPUT SKOR BO3 -->
      <div>
        <h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3 (\${escapeHtml(gName)})</h4>
    \`;

    const fixtures = getGroupFixtures(gName);`;

const replacementHubUI = `    const letter = nodeKey.replace('GROUP_', '');
    const gName = \`Grup \${letter}\`;
    const teams = groupStageData[gName] || [];

    const sorted = getSortedGroupTeams(gName);
    const fixtures = getGroupFixtures(gName);
    const isGroupAllDone = isGroupMatchesCompleted(gName);

    content += \`
      <div class="detail-panel-header">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
            <span>🛡️</span> <span>Klasemen & Pertandingan: \${escapeHtml(gName)}</span>
          </h3>
          <span style="font-size:0.75rem;padding:0.2rem 0.6rem;background:rgba(0,210,255,0.12);border:1px solid rgba(0,210,255,0.3);color:var(--yokke-cyan);border-radius:12px;font-weight:700;">
            Fase 1 • Day 1
          </span>
        </div>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(6,214,160,0.12);color:var(--yokke-green);border:1px solid var(--yokke-green);">Round-Robin BO3</span>
          <span class="badge-status" style="background:rgba(255,255,255,0.06);color:var(--text-muted);">Menang Match = +2 Poin</span>
          <span class="badge-status" style="background:rgba(0,210,255,0.08);color:var(--yokke-cyan);">Juara 1 & 2 ➔ Upper Day 2</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.1);color:var(--yokke-gold);">Juara 3 ➔ Lower Day 3</span>
        </div>
      </div>

      <!-- TABEL KLASEMEN GRUP -->
      <div style="margin-bottom:1.25rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.5rem;">
          <h4 style="margin:0;font-size:0.92rem;color:var(--yokke-gold);">📊 Klasemen \${isGroupAllDone ? 'Akhir' : 'Sementara'} \${escapeHtml(gName)}</h4>
          <span style="font-size:0.75rem;padding:0.18rem 0.6rem;border-radius:12px;font-weight:600;\${
            isGroupAllDone
              ? 'background:rgba(6,214,160,0.12);color:var(--yokke-green);border:1px solid var(--yokke-green);'
              : 'background:rgba(255,255,255,0.06);color:var(--text-muted);border:1px solid rgba(255,255,255,0.1);'
          }">
            \${isGroupAllDone ? '✅ Klasemen Final (Kelolosan Terbuka)' : '🔒 Kelolosan Ditutup (Match Berlangsung)'}
          </span>
        </div>
        <div class="table-container" style="margin:0;">
          <table>
            <thead>
              <tr>
                <th style="width:35px;">#</th>
                <th>Nama Tim</th>
                <th style="text-align:center;width:45px;" title="Pertandingan Dimainkan">Match</th>
                <th style="text-align:center;width:40px;">M</th>
                <th style="text-align:center;width:40px;">K</th>
                <th style="text-align:center;width:60px;" title="Agregat Game (Game Menang - Game Kalah)">Agregat</th>
                <th style="text-align:center;width:50px;">Poin</th>
                <th style="text-align:center;width:55px;">⭐ MVP</th>
                <th>Kelolosan</th>
              </tr>
            </thead>
            <tbody>
              \${sorted.map((t, idx) => {
                const origIdx = groupStageData[gName].indexOf(t);
                const winCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.win}" style="width:42px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'win', this.value); renderMLBBInteractiveHubUI();">
                \` : t.win;
                const loseCtrl = isAdmin ? \`
                  <input type="number" min="0" value="\${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('\${gName}', \${origIdx}, 'lose', this.value); renderMLBBInteractiveHubUI();">
                \` : t.lose;

                const diffVal = (t.diff !== undefined) ? t.diff : ((t.gameWon || 0) - (t.gameLost || 0));
                const diffSign = diffVal > 0 ? \`+\${diffVal}\` : \`\${diffVal}\`;
                const diffColor = diffVal > 0 ? 'var(--yokke-green)' : (diffVal < 0 ? '#f87171' : 'var(--text-muted)');
                const gameDetail = \`\${t.gameWon || 0}-\${t.gameLost || 0}\`;

                const rowBg = isGroupAllDone
                  ? (idx < 2 ? 'background:rgba(0,210,255,0.08);' : (idx === 2 ? 'background:rgba(255,183,3,0.06);' : ''))
                  : '';

                const kelolosanBadge = isGroupAllDone ? (
                  idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper Bracket (Day 2)</span>' :
                  (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower Bracket (Day 3)</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                ) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolosan akan otomatis terbuka setelah seluruh pertandingan di ' + escapeHtml(gName) + ' selesai diinput">🔒 Ditutup (Match Berlangsung)</span>';

                return \`
                  <tr style="\${rowBg}">
                    <td style="font-weight:700;color:var(--text-muted);">\${idx + 1}</td>
                    <td style="font-weight:700;color:#fff;">\${escapeHtml(t.name)}</td>
                    <td style="text-align:center;font-weight:700;color:#cbd5e1;">\${t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0))}</td>
                    <td style="text-align:center;">\${winCtrl}</td>
                    <td style="text-align:center;">\${loseCtrl}</td>
                    <td style="text-align:center;" title="Game: \${t.gameWon || 0}M - \${t.gameLost || 0}K (Selisih Game: \${diffSign})">
                      <span style="font-weight:800; color:\${diffColor};">\${diffSign}</span>
                      <div style="font-size:0.68rem; color:var(--text-muted);">\${gameDetail}</div>
                    </td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">\${t.pts}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:700;">\${t.mvpCount || 0}</td>
                    <td>\${kelolosanBadge}</td>
                  </tr>
                \`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- DAFTAR MATCH & INPUT SKOR BO3 -->
      <div>
        <h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3 (\${escapeHtml(gName)})</h4>
    \`;`;

if (normalizedApp.includes(targetHubUI)) {
  normalizedApp = normalizedApp.replace(targetHubUI, replacementHubUI);
  console.log('✅ Updated renderMLBBInteractiveHubUI in app.js');
} else {
  console.error('❌ Could not find targetHubUI in app.js');
  process.exit(1);
}

// Write back app.js preserving CRLF
fs.writeFileSync('app.js', isAppCRLF ? normalizedApp.replace(/\n/g, '\r\n') : normalizedApp, 'utf8');
console.log('🎉 app.js updated successfully!');


// 2. Update google_apps_script.js
let gasJs = fs.readFileSync('google_apps_script.js', 'utf8');
const isGasCRLF = gasJs.includes('\r\n');
let normalizedGas = gasJs.replace(/\r\n/g, '\n');

const targetGasStandings = `    sorted.forEach((t, idx) => {
      const mp = t.matchCount !== undefined ? t.matchCount : ((parseInt(t.win) || 0) + (parseInt(t.lose) || 0) + (parseInt(t.draw) || 0));
      const is8Group = Object.keys(groupData).length === 8;
      let status = 'Menunggu Match';
      if (t.pts > 0) {
        if (is8Group) {
          status = (idx < 2) ? 'Lolos Upper Bracket' : (idx === 2 ? 'Lolos Lower Bracket' : 'Gugur');
        } else {
          status = (idx < 2) ? 'Lolos Playoff' : 'Gugur';
        }
      }
      const diffVal = (t.diff !== undefined) ? parseInt(t.diff, 10) : ((parseInt(t.gameWon, 10) || 0) - (parseInt(t.gameLost, 10) || 0));
      const diffStr = (diffVal > 0 ? '+' : '') + diffVal;
      mlbbPointRows.push([
        gName,
        \`#\${idx + 1}\`,
        t.name || '-',
        mp,
        t.win || 0,
        t.lose || 0,
        diffStr,
        t.pts || 0,
        status,
        teamMvpCount[t.name] || t.mvpCount || 0
      ]);
    });`;

const replacementGasStandings = `    // Cek apakah seluruh match untuk grup ini sudah selesai diinput
    const groupTeams = groupData[gName] || [];
    const n = groupTeams.length;
    let isGroupAllDone = false;
    if (n > 1) {
      // 1. Cek dari matchResults: total match round robin = n * (n - 1) / 2
      let totalPairs = (n * (n - 1)) / 2;
      let finishedPairs = 0;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const tA = groupTeams[i].name;
          const tB = groupTeams[j].name;
          let pairDone = false;
          for (const k in matchResults) {
            const m = matchResults[k];
            if (!m || !m.teamA || !m.teamB) continue;
            if ((m.teamA === tA && m.teamB === tB) || (m.teamA === tB && m.teamB === tA)) {
              if (m.winner || (m.scoreA !== null && m.scoreB !== null && (Number(m.scoreA) > 0 || Number(m.scoreB) > 0))) {
                pairDone = true;
                break;
              }
            }
          }
          if (pairDone) finishedPairs++;
        }
      }
      if (finishedPairs >= totalPairs) {
        isGroupAllDone = true;
      } else if (groupTeams.every(tm => {
        const played = tm.matchCount !== undefined ? parseInt(tm.matchCount, 10) : ((parseInt(tm.win, 10) || 0) + (parseInt(tm.lose, 10) || 0) + (parseInt(tm.draw, 10) || 0));
        return played >= (n - 1);
      })) {
        isGroupAllDone = true;
      }
    }

    sorted.forEach((t, idx) => {
      const mp = t.matchCount !== undefined ? t.matchCount : ((parseInt(t.win) || 0) + (parseInt(t.lose) || 0) + (parseInt(t.draw) || 0));
      const is8Group = Object.keys(groupData).length === 8;
      let status = 'Menunggu Seluruh Match';
      if (isGroupAllDone) {
        if (is8Group) {
          status = (idx < 2) ? 'Lolos Upper Bracket' : (idx === 2 ? 'Lolos Lower Bracket' : 'Gugur');
        } else {
          status = (idx < 2) ? 'Lolos Playoff' : 'Gugur';
        }
      }
      const diffVal = (t.diff !== undefined) ? parseInt(t.diff, 10) : ((parseInt(t.gameWon, 10) || 0) - (parseInt(t.gameLost, 10) || 0));
      const diffStr = (diffVal > 0 ? '+' : '') + diffVal;
      mlbbPointRows.push([
        gName,
        \`#\${idx + 1}\`,
        t.name || '-',
        mp,
        t.win || 0,
        t.lose || 0,
        diffStr,
        t.pts || 0,
        status,
        teamMvpCount[t.name] || t.mvpCount || 0
      ]);
    });`;

if (normalizedGas.includes(targetGasStandings)) {
  normalizedGas = normalizedGas.replace(targetGasStandings, replacementGasStandings);
  console.log('✅ Updated syncDedicatedTournamentSheets in google_apps_script.js');
} else {
  console.error('❌ Could not find targetGasStandings in google_apps_script.js');
  process.exit(1);
}

fs.writeFileSync('google_apps_script.js', isGasCRLF ? normalizedGas.replace(/\n/g, '\r\n') : normalizedGas, 'utf8');
console.log('🎉 google_apps_script.js updated successfully!');

