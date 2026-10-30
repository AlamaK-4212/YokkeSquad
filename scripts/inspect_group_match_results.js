const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbw5IPK87J_3FHhtQVv47y6Mt9Y_g4N7KgorapoOYLeJTMhw04lH1deWEX2KsiAtJT8PjQ/exec';

async function main() {
  const res = await fetch(WEBHOOK_URL);
  const d = await res.json();
  const mr = d.config.groupMatchResults || {};
  console.log('Total keys in groupMatchResults:', Object.keys(mr).length);
  const keys = Object.keys(mr);
  console.log('Sample 10 keys:', keys.slice(0, 10));

  // Check duplicates or reverse keys
  const seenPairs = new Map();
  let duplicateMatches = 0;
  for (const k of keys) {
    const m = mr[k];
    const pair1 = (m.gName || '') + '__' + (m.teamA || '').trim().toLowerCase() + '__' + (m.teamB || '').trim().toLowerCase();
    const pair2 = (m.gName || '') + '__' + (m.teamB || '').trim().toLowerCase() + '__' + (m.teamA || '').trim().toLowerCase();
    if (seenPairs.has(pair1) || seenPairs.has(pair2)) {
      console.log('Duplicate pair detected! Key:', k, 'vs', seenPairs.get(pair1) || seenPairs.get(pair2), 'Data:', m);
      duplicateMatches++;
    } else {
      seenPairs.set(pair1, k);
    }
  }
  console.log('Duplicate match pairs count:', duplicateMatches);

  // Check standings in groupStageData vs groupMatchResults calculation
  console.log('\n--- STANDINGS COMPARISON ---');
  const groups = d.config.groupStageData || {};
  for (const gName in groups) {
    console.log(`\n${gName}:`);
    const teams = groups[gName];
    teams.forEach(t => {
      // Hitung dari groupMatchResults
      let calcWin = 0;
      let calcLose = 0;
      let matchesFound = [];
      for (const mId in mr) {
        const m = mr[mId];
        if (m.gName === gName && m.winner) {
          if (m.winner === t.name) {
            calcWin++;
            matchesFound.push(`${m.teamA} vs ${m.teamB} (${m.scoreA}-${m.scoreB}) WIN`);
          } else if (m.teamA === t.name || m.teamB === t.name) {
            calcLose++;
            matchesFound.push(`${m.teamA} vs ${m.teamB} (${m.scoreA}-${m.scoreB}) LOSE`);
          }
        }
      }
      console.log(`  Team: ${t.name}`);
      console.log(`    Stored in groupStageData: win=${t.win}, lose=${t.lose}, pts=${t.pts}`);
      console.log(`    Calculated from fixtures: win=${calcWin}, lose=${calcLose}, pts=${calcWin * 2}`);
      if (t.win !== calcWin || t.lose !== calcLose) {
        console.log(`    ⚠️ MISMATCH DETECTED for ${t.name}! Stored: W${t.win}/L${t.lose} vs Calc: W${calcWin}/L${calcLose}`);
        console.log(`    Matches:`, matchesFound);
      }
    });
  }
}

main().catch(console.error);
