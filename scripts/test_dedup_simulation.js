const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwoThOWtWRE0EfH_BmxbjIHlJTL-fT8hHfXTUZO5upHNQmUIldBIMKNHbjowqPnnsIAXg/exec';

function getCanonicalMatchId(gName, teamA, teamB) {
  const cleanG = (gName || '').trim();
  const cleanA = (teamA || '').trim();
  const cleanB = (teamB || '').trim();
  const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
  return `${cleanG}_${sorted[0]}_vs_${sorted[1]}`.replace(/\s+/g, '_');
}

async function test() {
  const res = await fetch(WEBHOOK_URL);
  const d = await res.json();
  const rawMr = d.config.groupMatchResults || {};

  console.log('Original groupMatchResults count:', Object.keys(rawMr).length);

  // Deduplikasi ke canonical keys
  const cleanMr = {};
  for (const mId in rawMr) {
    const m = rawMr[mId];
    if (!m || !m.teamA || !m.teamB || !m.gName) {
      cleanMr[mId] = m;
      continue;
    }
    const canonId = getCanonicalMatchId(m.gName, m.teamA, m.teamB);
    const existing = cleanMr[canonId];
    if (!existing) {
      cleanMr[canonId] = { ...m, matchId: canonId };
    } else {
      // Merger: pertahankan skor dan pemenang jika ada
      cleanMr[canonId] = {
        ...existing,
        scoreA: m.scoreA !== null ? m.scoreA : existing.scoreA,
        scoreB: m.scoreB !== null ? m.scoreB : existing.scoreB,
        winner: m.winner || existing.winner,
        mvpPlayer: m.mvpPlayer || existing.mvpPlayer,
        mvpHero: m.mvpHero || existing.mvpHero,
        mvpTeam: m.mvpTeam || existing.mvpTeam
      };
    }
  }

  console.log('Deduplicated groupMatchResults count:', Object.keys(cleanMr).length);

  // Recalculate standings for each group
  const groups = d.config.groupStageData || {};
  for (const gName in groups) {
    console.log(`\n=== ${gName} ===`);
    const teams = groups[gName];
    teams.forEach(t => {
      let winCount = 0;
      let loseCount = 0;
      let playedMatches = [];
      for (const mId in cleanMr) {
        const m = cleanMr[mId];
        if (m.gName === gName && m.winner) {
          if (m.winner === t.name) {
            winCount++;
            playedMatches.push(`vs ${m.teamA === t.name ? m.teamB : m.teamA} (W ${m.scoreA}-${m.scoreB})`);
          } else if (m.teamA === t.name || m.teamB === t.name) {
            loseCount++;
            playedMatches.push(`vs ${m.teamA === t.name ? m.teamB : m.teamA} (L ${m.scoreA}-${m.scoreB})`);
          }
        }
      }
      console.log(`  ${t.name}: W ${winCount} | L ${loseCount} | Pts ${winCount * 2} | Matches played: ${winCount + loseCount} (${playedMatches.join(', ')})`);
    });
  }
}

test().catch(console.error);
