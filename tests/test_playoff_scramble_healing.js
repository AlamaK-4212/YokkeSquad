const fs = require('fs');
const assert = require('assert');
const vm = require('vm');

console.log('====================================================');
console.log('🧪 PENGUJIAN AUTO-HEALING ANTI-SCRAMBLE PLAYOFF MLBB');
console.log('====================================================');

const appCode = fs.readFileSync('app.js', 'utf8');

const context = {
  window: { addEventListener: () => {} },
  document: { getElementById: () => null, querySelectorAll: () => [], addEventListener: () => {} },
  localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  sessionStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  console: console
};
vm.createContext(context);
vm.runInContext(appCode, context);

// Skenario 1: Input berupa drawing acak silang yang salah (Native vs Anti Climax dsb)
const scrambledIncoming = [
  [
    { matchLabel: 'UB_R1_1', teamA: 'Native', teamB: 'Anti Climax', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_2', teamA: 'AANG ALPHA', teamB: '666', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_3', teamA: 'Miskin Mekanik', teamB: 'YOKKE LAMPUNG', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_4', teamA: 'TABRAK AJALAH', teamB: 'BOLO CLUB', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_5', teamA: '7 SINS', teamB: 'IOS', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_6', teamA: 'ATMO', teamB: 'TY BEKASI', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_7', teamA: 'VALKYRIE', teamB: 'APPA LINUX', scoreA: null, scoreB: null, winner: null },
    { matchLabel: 'UB_R1_8', teamA: 'WINGSKANAN ESPORT 1', teamB: 'Yokke.Syindicate', scoreA: null, scoreB: null, winner: null }
  ]
];

const healed = context.normalizeGroupPlayoffMatches(scrambledIncoming);

// Verifikasi auto-healing mengembalikan pasangan resmi Ground Truth
assert.strictEqual(healed[0][0].teamA, 'Anti Climax', 'UB_R1_1 teamA harus dipulihkan ke Anti Climax');
assert.strictEqual(healed[0][0].teamB, 'Miskin Mekanik', 'UB_R1_1 teamB harus dipulihkan ke Miskin Mekanik');
assert.strictEqual(healed[0][1].teamA, 'ATMO', 'UB_R1_2 teamA harus dipulihkan ke ATMO');
assert.strictEqual(healed[0][1].teamB, 'IOS', 'UB_R1_2 teamB harus dipulihkan ke IOS');
assert.strictEqual(healed[0][2].teamA, '7 SINS', 'UB_R1_3 teamA harus dipulihkan ke 7 SINS');
assert.strictEqual(healed[0][2].teamB, 'APPA LINUX', 'UB_R1_3 teamB harus dipulihkan ke APPA LINUX');
assert.strictEqual(healed[0][3].teamA, 'BOLO CLUB', 'UB_R1_4 teamA harus dipulihkan ke BOLO CLUB');
assert.strictEqual(healed[0][3].teamB, 'Native', 'UB_R1_4 teamB harus dipulihkan ke Native');
assert.strictEqual(healed[0][4].teamA, 'VALKYRIE', 'UB_R1_5 teamA harus dipulihkan ke VALKYRIE');
assert.strictEqual(healed[0][4].teamB, 'Yokke.Syindicate', 'UB_R1_5 teamB harus dipulihkan ke Yokke.Syindicate');
assert.strictEqual(healed[0][5].teamA, 'TY BEKASI', 'UB_R1_6 teamA harus dipulihkan ke TY BEKASI');
assert.strictEqual(healed[0][5].teamB, 'WINGSKANAN ESPORT 1', 'UB_R1_6 teamB harus dipulihkan ke WINGSKANAN ESPORT 1');
assert.strictEqual(healed[0][6].teamA, '666', 'UB_R1_7 teamA harus dipulihkan ke 666');
assert.strictEqual(healed[0][6].teamB, 'AANG ALPHA', 'UB_R1_7 teamB harus dipulihkan ke AANG ALPHA');
assert.strictEqual(healed[0][7].teamA, 'TABRAK AJALAH', 'UB_R1_8 teamA harus dipulihkan ke TABRAK AJALAH');
assert.strictEqual(healed[0][7].teamB, 'YOKKE LAMPUNG', 'UB_R1_8 teamB harus dipulihkan ke YOKKE LAMPUNG');

console.log('✅ [PASS] Seluruh 8 match Upper Bracket 16 Besar berhasil disembuhkan dari drawing acak usang!');
console.log('🎉 PENGUJIAN AUTO-HEALING ANTI-SCRAMBLE SELESAI DENGAN SUKSES 100%!');
