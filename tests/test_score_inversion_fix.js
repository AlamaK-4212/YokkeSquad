const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 PENGUJIAN PERBAIKAN SKOR & AGREGAT TERBALIK (APPA LINUX vs Tugu Muda)');
console.log('====================================================');

const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');

// 1. Ekstrak helper & fungsi dari app.js
const isSameTeamName = (a, b) => (a || '').toLowerCase().trim() === (b || '').toLowerCase().trim();
const getCanonicalGroupMatchId = (gName, teamA, teamB) => {
  const cleanG = (gName || '').trim();
  const cleanA = (teamA || '').trim();
  const cleanB = (teamB || '').trim();
  const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
  return `${cleanG}_${sorted[0]}_vs_${sorted[1]}`.replace(/\s+/g, '_');
};

// 2. Mock state grup E seperti di turnamen
const mockGroupStageData = {
  'Grup E': [
    { name: 'APPA LINUX', win: 0, lose: 0, pts: 0, matchCount: 0, gameWon: 0, gameLost: 0, diff: 0 },
    { name: 'DEPOK MAUNG', win: 0, lose: 0, pts: 0, matchCount: 0, gameWon: 0, gameLost: 0, diff: 0 },
    { name: 'Tugu Muda', win: 0, lose: 0, pts: 0, matchCount: 0, gameWon: 0, gameLost: 0, diff: 0 },
    { name: 'MiracleXStars', win: 0, lose: 0, pts: 0, matchCount: 0, gameWon: 0, gameLost: 0, diff: 0 },
    { name: 'Miskin Mekanik', win: 0, lose: 0, pts: 0, matchCount: 0, gameWon: 0, gameLost: 0, diff: 0 }
  ]
};

// 3. Mock data match:
// Match 1: APPA LINUX vs DEPOK MAUNG -> APPA LINUX menang 2-0
// Match 2: APPA LINUX vs Tugu Muda -> APPA LINUX menang, TAPI skor awalnya terbalik (0 - 2) seperti di tangkapan layar user
// Match 3: Miskin Mekanik vs APPA LINUX -> Miskin Mekanik menang 2-0
// Match 4: Miskin Mekanik vs MiracleXStars -> Miskin Mekanik menang 2-0
// Match 5: DEPOK MAUNG vs Tugu Muda -> DEPOK MAUNG menang 2-0
// Match 6: MiracleXStars vs Tugu Muda -> MiracleXStars menang 2-0
let mockGroupMatchResults = {
  'Grup_E_APPA_LINUX_vs_DEPOK_MAUNG': {
    matchId: 'Grup_E_APPA_LINUX_vs_DEPOK_MAUNG',
    gName: 'Grup E',
    teamA: 'APPA LINUX',
    teamB: 'DEPOK MAUNG',
    scoreA: 2,
    scoreB: 0,
    winner: 'APPA LINUX'
  },
  'Grup_E_APPA_LINUX_vs_Tugu_Muda': {
    matchId: 'Grup_E_APPA_LINUX_vs_Tugu_Muda',
    gName: 'Grup E',
    teamA: 'APPA LINUX',
    teamB: 'Tugu Muda',
    scoreA: 0, // <-- SKOR TERBALIK SEPERTI DI GSHEET USER
    scoreB: 2, // <-- SKOR TERBALIK SEPERTI DI GSHEET USER
    winner: 'APPA LINUX'
  },
  'Grup_E_APPA_LINUX_vs_Miskin_Mekanik': {
    matchId: 'Grup_E_APPA_LINUX_vs_Miskin_Mekanik',
    gName: 'Grup E',
    teamA: 'Miskin Mekanik',
    teamB: 'APPA LINUX',
    scoreA: 2,
    scoreB: 0,
    winner: 'Miskin Mekanik'
  },
  'Grup_E_MiracleXStars_vs_Miskin_Mekanik': {
    matchId: 'Grup_E_MiracleXStars_vs_Miskin_Mekanik',
    gName: 'Grup E',
    teamA: 'Miskin Mekanik',
    teamB: 'MiracleXStars',
    scoreA: 2,
    scoreB: 0,
    winner: 'Miskin Mekanik'
  },
  'Grup_E_DEPOK_MAUNG_vs_Tugu_Muda': {
    matchId: 'Grup_E_DEPOK_MAUNG_vs_Tugu_Muda',
    gName: 'Grup E',
    teamA: 'DEPOK MAUNG',
    teamB: 'Tugu Muda',
    scoreA: 2,
    scoreB: 0,
    winner: 'DEPOK MAUNG'
  },
  'Grup_E_MiracleXStars_vs_Tugu_Muda': {
    matchId: 'Grup_E_MiracleXStars_vs_Tugu_Muda',
    gName: 'Grup E',
    teamA: 'Tugu Muda',
    teamB: 'MiracleXStars',
    scoreA: 0,
    scoreB: 2,
    winner: 'MiracleXStars'
  }
};

// Ekstrak fungsi deduplicateGroupMatchResults dan recalculateGroupStandingsFromFixtures dari app.js
const dedupMatch = appCode.match(/function deduplicateGroupMatchResults\(\)\s*\{([\s\S]*?)\n\}/);
assert(dedupMatch, 'deduplicateGroupMatchResults harus ada di app.js');

const dedupFn = new Function('groupMatchResults', 'isSameTeamName', 'getCanonicalGroupMatchId', `
  ${dedupMatch[1]}
  return groupMatchResults;
`);

console.log('\n🔧 1. Menguji Auto-Heal pada deduplicateGroupMatchResults()...');
mockGroupMatchResults = dedupFn(mockGroupMatchResults, isSameTeamName, getCanonicalGroupMatchId);

const matchAppa = mockGroupMatchResults['Grup_E_APPA_LINUX_vs_Tugu_Muda'];
console.log('   Hasil setelah deduplikasi:', matchAppa.teamA, matchAppa.scoreA, '-', matchAppa.scoreB, matchAppa.teamB, '(Winner:', matchAppa.winner, ')');

assert.strictEqual(matchAppa.scoreA, 2, 'Skor A untuk APPA LINUX harus otomatis dikoreksi menjadi 2');
assert.strictEqual(matchAppa.scoreB, 0, 'Skor B untuk Tugu Muda harus otomatis dikoreksi menjadi 0');
assert.strictEqual(matchAppa.winner, 'APPA LINUX', 'Pemenang tetap APPA LINUX');
console.log('   ✅ [PASS] Skor yang terbalik di GSheet otomatis dinormalisasi menjadi 2 - 0 untuk pemenang.');

console.log('\n📊 2. Menguji Safeguard pada recalculateGroupStandingsFromFixtures()...');
const recalcMatch = appCode.match(/function recalculateGroupStandingsFromFixtures\(\)\s*\{([\s\S]*?)\n\}/);
assert(recalcMatch, 'recalculateGroupStandingsFromFixtures harus ada di app.js');

const recalcFn = new Function('groupStageData', 'groupMatchResults', 'isSameTeamName', 'getCanonicalGroupMatchId', 'deduplicateGroupMatchResults', recalcMatch[1]);
recalcFn(mockGroupStageData, mockGroupMatchResults, isSameTeamName, getCanonicalGroupMatchId, () => {});

const tAppa = mockGroupStageData['Grup E'].find(t => t.name === 'APPA LINUX');
const tTugu = mockGroupStageData['Grup E'].find(t => t.name === 'Tugu Muda');
const tMiskin = mockGroupStageData['Grup E'].find(t => t.name === 'Miskin Mekanik');

console.log(`   APPA LINUX : Match=${tAppa.matchCount}, W=${tAppa.win}, L=${tAppa.lose}, GameWon=${tAppa.gameWon}, GameLost=${tAppa.gameLost}, Diff=${tAppa.diff}, Pts=${tAppa.pts}`);
console.log(`   Tugu Muda  : Match=${tTugu.matchCount}, W=${tTugu.win}, L=${tTugu.lose}, GameWon=${tTugu.gameWon}, GameLost=${tTugu.gameLost}, Diff=${tTugu.diff}, Pts=${tTugu.pts}`);
console.log(`   Miskin Mekanik: Match=${tMiskin.matchCount}, W=${tMiskin.win}, L=${tMiskin.lose}, GameWon=${tMiskin.gameWon}, GameLost=${tMiskin.gameLost}, Diff=${tMiskin.diff}, Pts=${tMiskin.pts}`);

// Validasi APPA LINUX: 3 match, 2 win, 1 lose, 4-2 (+2 diff), 4 pts
assert.strictEqual(tAppa.matchCount, 3, 'APPA LINUX matchCount harus 3');
assert.strictEqual(tAppa.win, 2, 'APPA LINUX win harus 2');
assert.strictEqual(tAppa.lose, 1, 'APPA LINUX lose harus 1');
assert.strictEqual(tAppa.gameWon, 4, 'APPA LINUX gameWon harus 4 (2 vs DEPOK MAUNG, 2 vs Tugu Muda)');
assert.strictEqual(tAppa.gameLost, 2, 'APPA LINUX gameLost harus 2 (vs Miskin Mekanik)');
assert.strictEqual(tAppa.diff, 2, 'Agregat APPA LINUX harus +2 (4-2), BUKAN -2!');
assert.strictEqual(tAppa.pts, 4, 'Poin APPA LINUX harus 4');
console.log('   ✅ [PASS] Agregat APPA LINUX terverifikasi pulih menjadi +2 (4-2).');

// Validasi Tugu Muda: 3 match, 0 win, 3 lose, 0-6 (-6 diff), 0 pts
assert.strictEqual(tTugu.matchCount, 3, 'Tugu Muda matchCount harus 3');
assert.strictEqual(tTugu.win, 0, 'Tugu Muda win harus 0');
assert.strictEqual(tTugu.lose, 3, 'Tugu Muda lose harus 3');
assert.strictEqual(tTugu.gameWon, 0, 'Tugu Muda gameWon harus 0 (kalah seluruh game)');
assert.strictEqual(tTugu.gameLost, 6, 'Tugu Muda gameLost harus 6');
assert.strictEqual(tTugu.diff, -6, 'Agregat Tugu Muda harus -6 (0-6), BUKAN -2!');
assert.strictEqual(tTugu.pts, 0, 'Poin Tugu Muda harus 0');
console.log('   ✅ [PASS] Agregat Tugu Muda terverifikasi pulih menjadi -6 (0-6).');

console.log('\n====================================================');
console.log('🎉 SEMUA PENGUJIAN PERBAIKAN SKOR & AGREGAT TERBALIK LULUS 100%!');
console.log('====================================================');

