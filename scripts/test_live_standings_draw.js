const fs = require('fs');
const appCode = fs.readFileSync('app.js', 'utf8');

const url = 'https://script.google.com/macros/s/AKfycbw5IPK87J_3FHhtQVv47y6Mt9Y_g4N7KgorapoOYLeJTMhw04lH1deWEX2KsiAtJT8PjQ/exec';

async function test() {
  console.log('Mengambil data live dari GSheet...');
  const res = await fetch(url);
  const data = await res.json();
  const groupStageData = data.config.groupStageData || {};
  const groupMatchResults = data.config.groupMatchResults || {};

  // Extract functions
  const isSameTeamPart = appCode.match(/function isSameTeamName\([\s\S]*?\n\}/)[0];
  const comparePart = appCode.match(/function compareMLBBTeams\([\s\S]*?\n\}/)[0];
  const getSortedPart = appCode.match(/function getSortedGroupTeams\([\s\S]*?\n\}/)[0];
  const shuffleArrayPart = appCode.match(/function shuffleArray\([\s\S]*?\n\}/)[0];
  const permPart = appCode.match(/function findValidBracketPermutation\([\s\S]*?\n\}/)[0];
  const initGroupPlayoffPart = appCode.match(/function initGroupPlayoff\([\s\S]*?\n\}/)[0];

  const env = new Function('groupStageData', 'groupMatchResults', `
    ${isSameTeamPart}
    ${comparePart}
    ${getSortedPart}
    ${shuffleArrayPart}
    ${permPart}
    ${initGroupPlayoffPart}
    
    let groupPlayoffMatches = [];
    const standings = {};
    Object.keys(groupStageData).forEach(g => {
      standings[g] = getSortedGroupTeams(g).map((t, idx) => ({ rank: idx + 1, name: t.name, pts: t.pts, win: t.win, lose: t.lose }));
    });
    
    initGroupPlayoff(true);
    return { standings, groupPlayoffMatches };
  `)(groupStageData, groupMatchResults);

  console.log('\n=== KLASEMEN SAAT INI (TOP 3 MASING-MASING GRUP) ===');
  for (const [g, teams] of Object.entries(env.standings)) {
    console.log(`${g}:`);
    teams.slice(0, 3).forEach(t => console.log(`   Rank ${t.rank}: ${t.name} (Pts: ${t.pts}, W: ${t.win}, L: ${t.lose})`));
  }

  console.log('\n=== HASIL PENGUNDIAN PLAYOFF DENGAN KLASEMEN SAAT INI ===');
  const ub = env.groupPlayoffMatches[0];
  const lb = env.groupPlayoffMatches[1].slice(4, 12);

  console.log('Upper Bracket Round 1:');
  ub.forEach(m => {
    console.log(`   ${m.matchLabel}: ${m.teamA} (Home) vs ${m.teamB} (Away)`);
  });

  console.log('\nLower Bracket Round 1:');
  lb.forEach(m => {
    console.log(`   ${m.matchLabel}: ${m.teamA} (Home) vs ${m.teamB} (Away)`);
  });

  // Verifikasi anti-bentrok grup
  console.log('\n=== VERIFIKASI ANTI-BENTROK GRUP DARI DATA LIVE ===');
  const teamToGroup = {};
  for (const [g, teams] of Object.entries(groupStageData)) {
    teams.forEach(t => { teamToGroup[t.name] = g; });
  }

  let allValid = true;
  for (let i = 0; i < 8; i++) {
    const ubM = ub[i];
    const lbM = lb[i];

    const gA = teamToGroup[ubM.teamA];
    const gB = teamToGroup[ubM.teamB];
    const gLB = teamToGroup[lbM.teamB];

    console.log(`Cabang ${i + 1} (${ubM.matchLabel} & ${lbM.matchLabel}):`);
    console.log(`   Upper: ${ubM.teamA} (${gA}) vs ${ubM.teamB} (${gB})`);
    console.log(`   Lower: ${lbM.teamA} vs ${lbM.teamB} (${gLB})`);

    if (gA === gB) {
      console.error(`   ❌ Bentrok Upper di Cabang ${i + 1}: ${gA} == ${gB}`);
      allValid = false;
    }
    if (gLB === gA || gLB === gB) {
      console.error(`   ❌ Bentrok Lower di Cabang ${i + 1}: Juara 3 (${gLB}) sama dengan lawan Upper (${gA} / ${gB})`);
      allValid = false;
    }
    if (gA !== gB && gLB !== gA && gLB !== gB) {
      console.log(`   ✅ Bebas bentrok (Upper: ${gA} vs ${gB}, Lower: ${gLB})`);
    }
  }

  if (allValid) {
    console.log('\n🎉 SEMUA 8 CABANG 100% BEBAS BENTROK GRUP DENGAN DATA KLASEMEN SAAT INI!');
  }
}

test();
