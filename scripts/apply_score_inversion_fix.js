const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../app.js');
const gasJsPath = path.join(__dirname, '../google_apps_script.js');

let appJs = fs.readFileSync(appJsPath, 'utf8');
let gasJs = fs.readFileSync(gasJsPath, 'utf8');

console.log('1. Patching app.js...');

// --- 1.A Patch getGroupFixtures in app.js ---
const targetFixtureScore = `    // Peta skor orientasi Home vs Away agar skor selalu sesuai dengan nama tim yang bersangkutan
    let scoreA = null;
    let scoreB = null;
    if (saved.scoreA !== undefined && saved.scoreA !== null && saved.scoreB !== undefined && saved.scoreB !== null) {
      if (Number(saved.scoreA) === 0 && Number(saved.scoreB) === 0 && !saved.winner) {
        // Pertandingan belum dimainkan (bukan hasil WO ganda / draw resmi)
        scoreA = null;
        scoreB = null;
      } else if (saved.teamA === p.teamA) {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      } else if (saved.teamA === p.teamB) {
        scoreA = saved.scoreB;
        scoreB = saved.scoreA;
      } else {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      }
    }`;

const replacementFixtureScore = `    // Peta skor orientasi Home vs Away agar skor selalu sesuai dengan nama tim yang bersangkutan
    let scoreA = null;
    let scoreB = null;
    if (saved.scoreA !== undefined && saved.scoreA !== null && saved.scoreB !== undefined && saved.scoreB !== null) {
      if (Number(saved.scoreA) === 0 && Number(saved.scoreB) === 0 && !saved.winner) {
        // Pertandingan belum dimainkan (bukan hasil WO ganda / draw resmi)
        scoreA = null;
        scoreB = null;
      } else if (isSameTeamName(saved.teamA, p.teamA)) {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      } else if (isSameTeamName(saved.teamA, p.teamB)) {
        scoreA = saved.scoreB;
        scoreB = saved.scoreA;
      } else {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      }
    }

    // Auto-heal jika skor terbalik dibanding pemenang match
    if (saved.winner && scoreA !== null && scoreB !== null) {
      const wLower = (saved.winner || '').toLowerCase().trim();
      if (!wLower.includes('wo') && !wLower.includes('imbang') && !wLower.includes('seri')) {
        if (isSameTeamName(saved.winner, p.teamA) && Number(scoreA) < Number(scoreB)) {
          const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
          if (saved.matchId) {
            if (isSameTeamName(saved.teamA, p.teamA)) {
              saved.scoreA = scoreA; saved.scoreB = scoreB;
            } else {
              saved.scoreA = scoreB; saved.scoreB = scoreA;
            }
          }
        } else if (isSameTeamName(saved.winner, p.teamB) && Number(scoreB) < Number(scoreA)) {
          const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
          if (saved.matchId) {
            if (isSameTeamName(saved.teamA, p.teamB)) {
              saved.scoreA = scoreB; saved.scoreB = scoreA;
            } else {
              saved.scoreA = scoreA; saved.scoreB = scoreB;
            }
          }
        }
      }
    }`;

// Normalize line endings for replacement
const normalizeL = s => s.replace(/\r\n/g, '\n');
const toCRLF = s => s.replace(/\n/g, '\r\n');

let appJsNorm = normalizeL(appJs);

if (appJsNorm.includes(normalizeL(targetFixtureScore))) {
  appJsNorm = appJsNorm.replace(normalizeL(targetFixtureScore), normalizeL(replacementFixtureScore));
  console.log('  ✅ [PASS] getGroupFixtures score auto-heal patched.');
} else {
  console.warn('  ⚠️ [WARN] targetFixtureScore not found directly in app.js.');
}

// --- 1.B Patch deduplicateGroupMatchResults in app.js ---
const targetDedup = `function deduplicateGroupMatchResults() {
  if (!groupMatchResults || typeof groupMatchResults !== 'object') return;
  const cleanMr = {};
  for (const mId in groupMatchResults) {
    const m = groupMatchResults[mId];
    if (!m || !m.teamA || !m.teamB || !m.gName) {
      cleanMr[mId] = m;
      continue;
    }
    const canonId = getCanonicalGroupMatchId(m.gName, m.teamA, m.teamB);
    const existing = cleanMr[canonId];
    if (!existing) {
      cleanMr[canonId] = { ...m, matchId: canonId };
    } else {
      // Prioritaskan entri yang memiliki skor dan pemenang valid
      const preferNew = (m.winner && !existing.winner) || (m.scoreA !== null && existing.scoreA === null);
      cleanMr[canonId] = {
        ...existing,
        teamA: existing.teamA || m.teamA,
        teamB: existing.teamB || m.teamB,
        scoreA: preferNew ? m.scoreA : (existing.scoreA !== null ? existing.scoreA : m.scoreA),
        scoreB: preferNew ? m.scoreB : (existing.scoreB !== null ? existing.scoreB : m.scoreB),
        winner: m.winner || existing.winner,
        mvpPlayer: m.mvpPlayer || existing.mvpPlayer,
        mvpHero: m.mvpHero || existing.mvpHero,
        mvpTeam: m.mvpTeam || existing.mvpTeam,
        gameMvps: preferNew ? (m.gameMvps || existing.gameMvps) : (existing.gameMvps || m.gameMvps)
      };
    }
  }
  groupMatchResults = cleanMr;
}`;

const replacementDedup = `function deduplicateGroupMatchResults() {
  if (!groupMatchResults || typeof groupMatchResults !== 'object') return;
  const cleanMr = {};
  for (const mId in groupMatchResults) {
    const m = groupMatchResults[mId];
    if (!m || !m.teamA || !m.teamB || !m.gName) {
      cleanMr[mId] = m;
      continue;
    }
    const cleanG = (m.gName || '').trim();
    const cleanA = (m.teamA || '').trim();
    const cleanB = (m.teamB || '').trim();
    const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
    const canonId = \`\${cleanG}_\${sorted[0]}_vs_\${sorted[1]}\`.replace(/\\s+/g, '_');
    const canonTeamA = sorted[0];
    const canonTeamB = sorted[1];

    // Selaraskan skor sesuai tim jika m tersimpan dengan urutan tim terbalik
    let normScA = m.scoreA;
    let normScB = m.scoreB;
    if (isSameTeamName(m.teamA, canonTeamB) && isSameTeamName(m.teamB, canonTeamA)) {
      normScA = m.scoreB;
      normScB = m.scoreA;
    }

    // Auto-heal jika skor terbalik dibanding pemenang match
    let normWinner = m.winner || null;
    if (normWinner && normScA !== null && normScA !== undefined && normScB !== null && normScB !== undefined) {
      const wLower = normWinner.toLowerCase().trim();
      if (!wLower.includes('wo') && !wLower.includes('imbang') && !wLower.includes('seri')) {
        const sA = Number(normScA);
        const sB = Number(normScB);
        if (isSameTeamName(normWinner, canonTeamA) && sA < sB) {
          const tmp = normScA; normScA = normScB; normScB = tmp;
        } else if (isSameTeamName(normWinner, canonTeamB) && sB < sA) {
          const tmp = normScA; normScA = normScB; normScB = tmp;
        }
      }
    }

    const normItem = {
      ...m,
      matchId: canonId,
      gName: cleanG,
      teamA: canonTeamA,
      teamB: canonTeamB,
      scoreA: normScA,
      scoreB: normScB,
      winner: normWinner
    };

    const existing = cleanMr[canonId];
    if (!existing) {
      cleanMr[canonId] = normItem;
    } else {
      // Prioritaskan entri yang memiliki skor dan pemenang valid
      const preferNew = (normItem.winner && !existing.winner) || (normItem.scoreA !== null && existing.scoreA === null);
      let mergedScA = preferNew ? normItem.scoreA : (existing.scoreA !== null ? existing.scoreA : normItem.scoreA);
      let mergedScB = preferNew ? normItem.scoreB : (existing.scoreB !== null ? existing.scoreB : normItem.scoreB);
      let mergedWinner = normItem.winner || existing.winner;

      if (mergedWinner && mergedScA !== null && mergedScA !== undefined && mergedScB !== null && mergedScB !== undefined) {
        const wLower = mergedWinner.toLowerCase().trim();
        if (!wLower.includes('wo') && !wLower.includes('imbang') && !wLower.includes('seri')) {
          const sA = Number(mergedScA);
          const sB = Number(mergedScB);
          if (isSameTeamName(mergedWinner, canonTeamA) && sA < sB) {
            const tmp = mergedScA; mergedScA = mergedScB; mergedScB = tmp;
          } else if (isSameTeamName(mergedWinner, canonTeamB) && sB < sA) {
            const tmp = mergedScA; mergedScA = mergedScB; mergedScB = tmp;
          }
        }
      }

      cleanMr[canonId] = {
        ...existing,
        teamA: canonTeamA,
        teamB: canonTeamB,
        scoreA: mergedScA,
        scoreB: mergedScB,
        winner: mergedWinner,
        mvpPlayer: normItem.mvpPlayer || existing.mvpPlayer,
        mvpHero: normItem.mvpHero || existing.mvpHero,
        mvpTeam: normItem.mvpTeam || existing.mvpTeam,
        gameMvps: preferNew ? (normItem.gameMvps || existing.gameMvps) : (existing.gameMvps || normItem.gameMvps)
      };
    }
  }
  groupMatchResults = cleanMr;
}`;

if (appJsNorm.includes(normalizeL(targetDedup))) {
  appJsNorm = appJsNorm.replace(normalizeL(targetDedup), normalizeL(replacementDedup));
  console.log('  ✅ [PASS] deduplicateGroupMatchResults patched.');
} else {
  console.warn('  ⚠️ [WARN] targetDedup not found directly in app.js.');
}

// --- 1.C Patch setGroupMatchScore in app.js ---
const targetSetScore = `  // Canonicalize Match ID agar tidak ada duplikasi antara A_vs_B dan B_vs_A
  const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`;

const replacementSetScore = `  // Auto-heal jika skor terbalik dibanding pemenang resmi
  if (winner && scoreA !== null && scoreB !== null) {
    const wLow = winner.toLowerCase().trim();
    if (!wLow.includes('wo') && !wLow.includes('imbang') && !wLow.includes('seri')) {
      if (isSameTeamName(winner, teamA) && Number(scoreA) < Number(scoreB)) {
        const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
      } else if (isSameTeamName(winner, teamB) && Number(scoreB) < Number(scoreA)) {
        const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
      }
    }
  }

  // Canonicalize Match ID agar tidak ada duplikasi antara A_vs_B dan B_vs_A
  const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`;

if (appJsNorm.includes(normalizeL(targetSetScore))) {
  appJsNorm = appJsNorm.replace(normalizeL(targetSetScore), normalizeL(replacementSetScore));
  console.log('  ✅ [PASS] setGroupMatchScore auto-heal patched.');
} else {
  console.warn('  ⚠️ [WARN] targetSetScore not found directly in app.js.');
}

// --- 1.D Patch recalculateGroupStandingsFromFixtures in app.js ---
const targetRecalc = `        } else if (isWinnerThisTeam) {
          // Tim pemenang (termasuk menang WO karena lawan WO)
          winCount++;
          if (hasValidGameScores && (Number(scThis) > 0 || Number(scOpp) > 0)) {
            gameWonCount += Number(scThis) || 0;
            gameLostCount += Number(scOpp) || 0;
          } else {
            // Default kemenangan BO3
            gameWonCount += 2;
            gameLostCount += 0;
          }
        } else if (m.winner) {
          // Tim lawan (atau tim yang WO sendiri): DIANGGAP KALAH
          loseCount++;
          if (hasValidGameScores && (Number(scThis) > 0 || Number(scOpp) > 0)) {
            gameWonCount += Number(scThis) || 0;
            gameLostCount += Number(scOpp) || 0;
          } else {
            // Default kekalahan BO3
            gameWonCount += 0;
            gameLostCount += 2;
          }
        }`;

const replacementRecalc = `        } else if (isWinnerThisTeam) {
          // Tim pemenang (termasuk menang WO karena lawan WO)
          winCount++;
          if (hasValidGameScores && (Number(scThis) > 0 || Number(scOpp) > 0)) {
            // SAFEGUARD: Tim pemenang selalu menerima skor menang (lebih tinggi)
            let wScore = Number(scThis) || 0;
            let lScore = Number(scOpp) || 0;
            if (wScore < lScore) {
              const tmp = wScore; wScore = lScore; lScore = tmp;
            }
            gameWonCount += wScore;
            gameLostCount += lScore;
          } else {
            // Default kemenangan BO3
            gameWonCount += 2;
            gameLostCount += 0;
          }
        } else if (m.winner) {
          // Tim lawan (atau tim yang WO sendiri): DIANGGAP KALAH
          loseCount++;
          if (hasValidGameScores && (Number(scThis) > 0 || Number(scOpp) > 0)) {
            // SAFEGUARD: Tim kalah selalu menerima skor kalah (lebih rendah)
            let lScore = Number(scThis) || 0;
            let wScore = Number(scOpp) || 0;
            if (lScore > wScore) {
              const tmp = lScore; lScore = wScore; wScore = tmp;
            }
            gameWonCount += lScore;
            gameLostCount += wScore;
          } else {
            // Default kekalahan BO3
            gameWonCount += 0;
            gameLostCount += 2;
          }
        }`;

if (appJsNorm.includes(normalizeL(targetRecalc))) {
  appJsNorm = appJsNorm.replace(normalizeL(targetRecalc), normalizeL(replacementRecalc));
  console.log('  ✅ [PASS] recalculateGroupStandingsFromFixtures safeguard patched.');
} else {
  console.warn('  ⚠️ [WARN] targetRecalc not found directly in app.js.');
}

fs.writeFileSync(appJsPath, toCRLF(appJsNorm), 'utf8');
console.log('app.js saved successfully.');

// --- 2. Patch google_apps_script.js ---
console.log('\n2. Patching google_apps_script.js...');
let gasJsNorm = normalizeL(gasJs);

// 2.A Fix pts column index in sheetMLBBPoint
const targetGasPts = `        sheetGroupData[gName].push({
          name: tName,
          win: parseInt(pRow[4], 10) || 0,
          lose: parseInt(pRow[5], 10) || 0,
          pts: parseInt(pRow[6], 10) || 0
        });`;

const replacementGasPts = `        sheetGroupData[gName].push({
          name: tName,
          win: parseInt(pRow[4], 10) || 0,
          lose: parseInt(pRow[5], 10) || 0,
          pts: (pRow[7] !== undefined && pRow[7] !== "") ? (parseInt(pRow[7], 10) || 0) : ((parseInt(pRow[4], 10) || 0) * 2)
        });`;

if (gasJsNorm.includes(normalizeL(targetGasPts))) {
  gasJsNorm = gasJsNorm.replace(normalizeL(targetGasPts), normalizeL(replacementGasPts));
  console.log('  ✅ [PASS] gasJs pts column index patched.');
} else {
  console.warn('  ⚠️ [WARN] targetGasPts not found directly in google_apps_script.js.');
}

// 2.B Auto-heal when reading sheetMLBBBagan in doGet
const targetGasReadBagan = `        var sA = (bRow[4] !== "-" && bRow[4] !== "" && !isNaN(parseInt(bRow[4], 10))) ? parseInt(bRow[4], 10) : null;
        var sB = (bRow[5] !== "-" && bRow[5] !== "" && !isNaN(parseInt(bRow[5], 10))) ? parseInt(bRow[5], 10) : null;
        var winner = (bRow[7] && bRow[7] !== "TBD" && bRow[7] !== "-") ? bRow[7].toString().trim() : null;
        var mvpPlayer = (bRow[8] && bRow[8] !== "-") ? bRow[8].toString().trim() : "";
        var mvpHero = (bRow[9] && bRow[9] !== "-") ? bRow[9].toString().trim() : "";`;

const replacementGasReadBagan = `        var sA = (bRow[4] !== "-" && bRow[4] !== "" && !isNaN(parseInt(bRow[4], 10))) ? parseInt(bRow[4], 10) : null;
        var sB = (bRow[5] !== "-" && bRow[5] !== "" && !isNaN(parseInt(bRow[5], 10))) ? parseInt(bRow[5], 10) : null;
        var winner = (bRow[7] && bRow[7] !== "TBD" && bRow[7] !== "-") ? bRow[7].toString().trim() : null;
        var mvpPlayer = (bRow[8] && bRow[8] !== "-") ? bRow[8].toString().trim() : "";
        var mvpHero = (bRow[9] && bRow[9] !== "-") ? bRow[9].toString().trim() : "";

        // Auto-heal jika skor terbalik terhadap pemenang match
        if (winner && sA !== null && sB !== null) {
          var wLower = winner.toLowerCase();
          if (wLower.indexOf("wo") === -1 && wLower.indexOf("imbang") === -1 && wLower.indexOf("seri") === -1) {
            var tALower = teamA.toLowerCase();
            var tBLower = teamB.toLowerCase();
            if (wLower === tALower && sA < sB) {
              var tmpSc = sA; sA = sB; sB = tmpSc;
            } else if (wLower === tBLower && sB < sA) {
              var tmpSc = sA; sA = sB; sB = tmpSc;
            }
          }
        }`;

if (gasJsNorm.includes(normalizeL(targetGasReadBagan))) {
  gasJsNorm = gasJsNorm.replace(normalizeL(targetGasReadBagan), normalizeL(replacementGasReadBagan));
  console.log('  ✅ [PASS] gasJs read bagan auto-heal patched.');
} else {
  console.warn('  ⚠️ [WARN] targetGasReadBagan not found directly in google_apps_script.js.');
}

// 2.C Auto-heal when writing syncDedicatedTournamentSheets in google_apps_script.js
const targetGasWriteBagan = `    mlbbBaganRows.push([
      canonId,
      \`Fase Grup - \${g}\`,
      'BO3',
      m.teamA || '-',
      m.scoreA !== null && m.scoreA !== undefined ? m.scoreA : '-',
      m.scoreB !== null && m.scoreB !== undefined ? m.scoreB : '-',
      m.teamB || '-',
      m.winner || 'TBD',
      m.mvpPlayer || '-',
      m.mvpHero || '-',
      m.winner ? 'FINISHED' : 'SCHEDULED'
    ]);`;

const replacementGasWriteBagan = `    var scA = m.scoreA !== null && m.scoreA !== undefined ? m.scoreA : '-';
    var scB = m.scoreB !== null && m.scoreB !== undefined ? m.scoreB : '-';
    var w = m.winner || 'TBD';

    // Auto-heal sebelum menulis ke sheet jika skor terbalik dibanding pemenang
    if (w && w !== 'TBD' && scA !== '-' && scB !== '-') {
      var numA = parseInt(scA, 10);
      var numB = parseInt(scB, 10);
      if (!isNaN(numA) && !isNaN(numB)) {
        var wLow = w.toLowerCase().trim();
        if (wLow.indexOf('wo') === -1 && wLow.indexOf('imbang') === -1 && wLow.indexOf('seri') === -1) {
          if (wLow === (m.teamA || '').toLowerCase().trim() && numA < numB) {
            scA = numB;
            scB = numA;
          } else if (wLow === (m.teamB || '').toLowerCase().trim() && numB < numA) {
            scA = numB;
            scB = numA;
          }
        }
      }
    }

    mlbbBaganRows.push([
      canonId,
      \`Fase Grup - \${g}\`,
      'BO3',
      m.teamA || '-',
      scA,
      scB,
      m.teamB || '-',
      w,
      m.mvpPlayer || '-',
      m.mvpHero || '-',
      m.winner ? 'FINISHED' : 'SCHEDULED'
    ]);`;

if (gasJsNorm.includes(normalizeL(targetGasWriteBagan))) {
  gasJsNorm = gasJsNorm.replace(normalizeL(targetGasWriteBagan), normalizeL(replacementGasWriteBagan));
  console.log('  ✅ [PASS] gasJs write bagan auto-heal patched.');
} else {
  console.warn('  ⚠️ [WARN] targetGasWriteBagan not found directly in google_apps_script.js.');
}

fs.writeFileSync(gasJsPath, toCRLF(gasJsNorm), 'utf8');
console.log('google_apps_script.js saved successfully.');

