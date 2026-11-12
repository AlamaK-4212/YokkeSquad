const POINT_TABLE = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

function calcStandings(players, matches) {
  const result = {};
  players.forEach(p => {
    result[p] = { name: p, ranks: [], total: 0, r1: 0, r2: 0, r3: 0, mvpCount: 0 };
  });

  matches.forEach((m, mIdx) => {
    m.forEach((p, rIdx) => {
      const rank = rIdx + 1;
      if (result[p]) {
        result[p].ranks.push(rank);
        result[p][`r${mIdx + 1}`] = rank;
        result[p].total += POINT_TABLE[rank];
        if (rank === 1) result[p].mvpCount++;
      }
    });
  });

  const list = Object.values(result);
  list.sort((a, b) => {
    if (b.total !== a.total) return b.total - a.total;
    if (b.mvpCount !== a.mvpCount) return b.mvpCount - a.mvpCount;
    // Top 4 finish count
    const aTop4 = a.ranks.filter(r => r <= 4).length;
    const bTop4 = b.ranks.filter(r => r <= 4).length;
    if (bTop4 !== aTop4) return bTop4 - aTop4;
    return a.name.localeCompare(b.name);
  });

  return list;
}

// ----------------------------------------------------
// 1. GROUP A (32 Besar)
// ----------------------------------------------------
const groupAPlayers = ['whyJude', 'Mugiwara', 'skuidwert', 'Wienie.10', 'Queen•', 'Disk', 'HOKKIE', 'hutanlindung'];
const groupAMatches = [
  // Match 1 (ID: 387847673315874325)
  ['Mugiwara', 'Wienie.10', 'hutanlindung', 'skuidwert', 'HOKKIE', 'Disk', 'Queen•', 'whyJude'],
  // Match 2 (ID: 392046983100259883)
  ['hutanlindung', 'Mugiwara', 'HOKKIE', 'skuidwert', 'Disk', 'Wienie.10', 'Queen•', 'whyJude']
];

console.log('=== KLASEMEN 32 BESAR - GRUP A ===');
const resA = calcStandings(groupAPlayers, groupAMatches);
resA.forEach((p, i) => {
  const status = i < 4 ? '🟢 LOLOS SEMIFINAL' : '🔴 GUGUR';
  console.log(`#${i + 1} ${p.name.padEnd(14)} | R1: ${p.r1} | R2: ${p.r2} | Total: ${p.total >= 0 ? '+' + p.total : p.total} pt | MVP: ${p.mvpCount} | ${status}`);
});

// ----------------------------------------------------
// 2. GROUP C (32 Besar)
// ----------------------------------------------------
const groupCPlayers = ['BagusSt', 'En D M0', 'dhimssky', 'BuzzFeed', 'Hipp', 'EhhChaky', 'Eldrid', 'mfsamudra'];
const groupCMatches = [
  // Match 1 (ID: 388195763235346119)
  ['BuzzFeed', 'EhhChaky', 'En D M0', 'BagusSt', 'Eldrid', 'mfsamudra', 'Hipp', 'dhimssky'],
  // Match 2 (ID: 392424141358391006)
  ['BuzzFeed', 'En D M0', 'Eldrid', 'EhhChaky', 'Hipp', 'dhimssky', 'mfsamudra', 'BagusSt']
];

console.log('\n=== KLASEMEN 32 BESAR - GRUP C ===');
const resC = calcStandings(groupCPlayers, groupCMatches);
resC.forEach((p, i) => {
  const status = i < 4 ? '🟢 LOLOS SEMIFINAL' : '🔴 GUGUR';
  console.log(`#${i + 1} ${p.name.padEnd(14)} | R1: ${p.r1} | R2: ${p.r2} | Total: ${p.total >= 0 ? '+' + p.total : p.total} pt | MVP: ${p.mvpCount} | ${status}`);
});

// ----------------------------------------------------
// 3. GROUP D (32 Besar)
// ----------------------------------------------------
const groupDPlayers = ['Yona', 'Yokke.DHANNKEBOT', 'BladeSpy', 'ganool', 'KoncoKentel', 'Mokondo.Hideung', 'sadistic_killer', 'Alis Setan17'];
const groupDMatches = [
  // Match 1 (ID: 388318071019034373)
  ['Yona', 'Yokke.DHANNKEBOT', 'BladeSpy', 'ganool', 'KoncoKentel', 'Mokondo.Hideung', 'sadistic_killer', 'Alis Setan17'],
  // Match 2 (ID: 392177528631221865)
  ['BladeSpy', 'Alis Setan17', 'ganool', 'Yona', 'sadistic_killer', 'KoncoKentel', 'Mokondo.Hideung', 'Yokke.DHANNKEBOT'],
  // Match 3 (ID: 396412877486188051)
  ['Yona', 'Alis Setan17', 'Mokondo.Hideung', 'ganool', 'sadistic_killer', 'Yokke.DHANNKEBOT', 'BladeSpy', 'KoncoKentel']
];

console.log('\n=== KLASEMEN 32 BESAR - GRUP D ===');
const resD = calcStandings(groupDPlayers, groupDMatches);
resD.forEach((p, i) => {
  const status = i < 4 ? '🟢 LOLOS SEMIFINAL' : '🔴 GUGUR';
  console.log(`#${i + 1} ${p.name.padEnd(16)} | R1: ${p.r1} | R2: ${p.r2} | R3: ${p.r3} | Total: ${p.total >= 0 ? '+' + p.total : p.total} pt | MVP: ${p.mvpCount} | ${status}`);
});
