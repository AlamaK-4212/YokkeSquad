const fs = require('fs');
const assert = require('assert');

console.log('====================================================');
console.log('🧪 PENGUJIAN PARSER GAS: REKONSTRUKSI 38 MATCH PLAYOFF');
console.log('====================================================');

const gasCode = fs.readFileSync('google_apps_script.js', 'utf8');

// 1. Sintaks check
assert(gasCode.length > 0);

// 2. Mock Google Spreadsheet dengan data riil dari Google Sheet (Rows 87-106 dsb)
class MockSheet {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
  getLastRow() { return this.data.length; }
  getDataRange() {
    return {
      getValues: () => this.data
    };
  }
}

class MockSpreadsheet {
  constructor() {
    this.sheets = {};
  }
  getSheetByName(name) {
    return this.sheets[name] || null;
  }
  addSheet(name, data) {
    this.sheets[name] = new MockSheet(name, data);
  }
}

// 85 baris grup (dummy header + rows)
const baganData = [
  ['Match ID', 'Fase', 'Format', 'Tim A', 'Skor A', 'Skor B', 'Tim B', 'Pemenang', 'MVP Player', 'MVP Hero', 'Status']
];
for (let g = 1; g <= 85; g++) {
  baganData.push([`GRP_${g}`, 'Fase Grup - Grup A', 'BO3', 'Team A', '-', '-', 'Team B', 'TBD', '-', '-', 'SCHEDULED']);
}

// Baris 87 - 94: Upper Bracket 16 Besar (Ground Truth Image 1)
const ubR1Pairs = [
  ['Anti Climax', 'Miskin Mekanik'],
  ['ATMO', 'IOS'],
  ['7 SINS', 'APPA LINUX'],
  ['BOLO CLUB', 'Native'],
  ['VALKYRIE', 'Yokke.Syindicate'],
  ['TY BEKASI', 'WINGSKANAN ESPORT 1'],
  ['666', 'AANG ALPHA'],
  ['TABRAK AJALAH', 'YOKKE LAMPUNG']
];
ubR1Pairs.forEach(([tA, tB]) => {
  baganData.push([
    `Upper_Bracket_16_Besar_(Hari_3)_${tA.replace(/\s+/g, '_')}_vs_${tB.replace(/\s+/g, '_')}`,
    'Fase Grup - Upper Bracket 16 Besar (Hari 3)',
    'BO3',
    tA,
    '-',
    '-',
    tB,
    'TBD'
  ]);
});

// Baris 95 - 98: Upper Bracket Perempat Final
const ubQfPairs = [
  ['Pemenang UB R1 1', 'Pemenang UB R1 2'],
  ['Pemenang UB R1 3', 'Pemenang UB R1 4'],
  ['Pemenang UB R1 5', 'Pemenang UB R1 6'],
  ['Pemenang UB R1 7', 'Pemenang UB R1 8']
];
ubQfPairs.forEach(([tA, tB], idx) => {
  baganData.push([
    `Upper_Bracket_Perempat_Final_(Hari_3-4)_Pemenang_UB_R1_${idx*2+1}_vs_Pemenang_UB_R1_${idx*2+2}`,
    'Fase Grup - Upper Bracket Perempat Final (Hari 3-4)',
    'BO3',
    tA,
    '-',
    '-',
    tB,
    'TBD'
  ]);
});

// Baris 99 - 106: Lower Bracket Ronde 1
const lbR1Pairs = [
  ['DEADLINE SLAYER', 'Gugur UB R1 1'],
  ['Gugur UB R1 2', 'MiracleXStars'],
  ['Gugur UB R1 3', 'LOLO'],
  ['Gugur UB R1 4', 'Yokke Batam Squad (YBS)'],
  ['Gugur UB R1 5', 'Red Razor'],
  ['Gugur UB R1 6', 'My Palembang'],
  ['Gugur UB R1 7', 'Colorbook'],
  ['Gugur UB R1 8', 'Yokke Batam']
];
lbR1Pairs.forEach(([tA, tB]) => {
  baganData.push([
    `Lower_Bracket_Ronde_1_(Hari_3-4)_${tA.replace(/\s+/g, '_')}_vs_${tB.replace(/\s+/g, '_')}`,
    'Fase Grup - Lower Bracket Ronde 1 (Hari 3-4)',
    'BO3',
    tA,
    '-',
    '-',
    tB,
    'TBD'
  ]);
});

// UB Semifinal (2 match)
baganData.push(['Upper_Bracket_Semifinal_(Hari_4)_P1_vs_P2', 'Upper Bracket Semifinal (Hari 4)', 'BO3', 'Pemenang UB QF 1', '-', '-', 'Pemenang UB QF 2', 'TBD']);
baganData.push(['Upper_Bracket_Semifinal_(Hari_4)_P3_vs_P4', 'Upper Bracket Semifinal (Hari 4)', 'BO3', 'Pemenang UB QF 3', '-', '-', 'Pemenang UB QF 4', 'TBD']);

// LB R2 (4 match)
for (let i = 1; i <= 4; i++) {
  baganData.push([`Lower_Bracket_Ronde_2_(Hari_4)_M${i}`, 'Lower Bracket Ronde 2 (Hari 4)', 'BO3', `Pemenang LB R1 ${i*2-1}`, '-', '-', `Pemenang LB R1 ${i*2}`, 'TBD']);
}
// LB R3 (4 match)
for (let i = 1; i <= 4; i++) {
  baganData.push([`Lower_Bracket_Ronde_3_(Hari_4)_M${i}`, 'Lower Bracket Ronde 3 (Hari 4)', 'BO3', `Pemenang LB R2 ${i}`, '-', '-', `Gugur UB QF ${i}`, 'TBD']);
}
// LB QF (2 match)
for (let i = 1; i <= 2; i++) {
  baganData.push([`Lower_Bracket_Perempat_Final_(Hari_4)_M${i}`, 'Lower Bracket Perempat Final (Hari 4)', 'BO3', `Pemenang LB R3 ${i*2-1}`, '-', '-', `Pemenang LB R3 ${i*2}`, 'TBD']);
}
// Round 4 (5 match)
baganData.push(['Upper_Bracket_Final_(Hari_5)', 'Upper Bracket Final (Hari 5)', 'BO3', 'Pemenang UB SF 1', '-', '-', 'Pemenang UB SF 2', 'TBD']);
baganData.push(['Lower_Bracket_Semifinal_1_(Hari_5)', 'Lower Bracket Semifinal (Hari 5)', 'BO3', 'Pemenang LB QF 1', '-', '-', 'Gugur UB SF 1', 'TBD']);
baganData.push(['Lower_Bracket_Semifinal_2_(Hari_5)', 'Lower Bracket Semifinal (Hari 5)', 'BO3', 'Pemenang LB QF 2', '-', '-', 'Gugur UB SF 2', 'TBD']);
baganData.push(['Lower_Bracket_Final_Penantang_(Hari_5)', 'Lower Bracket Final Penantang (Hari 5)', 'BO3', 'Pemenang LB SF 1', '-', '-', 'Pemenang LB SF 2', 'TBD']);
baganData.push(['Lower_Bracket_Final_Penentu_(Hari_5)', 'Lower Bracket Final Penentu (Hari 5)', 'BO3', 'Pemenang LB Prelim', '-', '-', 'Gugur UB Final', 'TBD']);
// Round 5 (1 match)
baganData.push(['Grand_Final_(Hari_5)', 'Grand Final BO5 (Hari 5)', 'BO5', 'Juara Upper Bracket', '-', '-', 'Juara Lower Bracket', 'TBD']);

const ss = new MockSpreadsheet();
ss.addSheet('MLBB - Bagan & MVP', baganData);
ss.addSheet('Pengaturan Turnamen', [
  ['Key', 'Value'],
  ['groupPlayoffMatches', '[]']
]);

// Jalankan getInitialData di VM
const gasVm = new Function('ss', `
  function getMlbbTimListing() { return []; }
  function getMlbbPesertaListing() { return []; }
  function getMcggListing() { return []; }
  ${gasCode}
  return getInitialData(ss);
`);

const initialData = gasVm(ss);
assert(initialData && initialData.config, 'initialData.config must exist');
const po = initialData.config.groupPlayoffMatches;
assert(Array.isArray(po), 'groupPlayoffMatches must be an array');
assert.strictEqual(po.length, 6, 'groupPlayoffMatches must have 6 rounds');

let totalMatches = 0;
po.forEach((r, idx) => {
  totalMatches += r.length;
  console.log(`  Ronde ${idx}: ${r.length} match`);
});
assert.strictEqual(totalMatches, 38, 'Must reconstruct exactly 38 matches');

// Verifikasi Ground Truth Upper 16 Besar
console.log('\n🔍 Verifikasi Ronde 0 (UB 16 Besar):');
ubR1Pairs.forEach(([expA, expB], idx) => {
  const m = po[0][idx];
  assert(m, `Match ${idx} in Round 0 must exist`);
  assert.strictEqual(m.teamA, expA, `UB R1 ${idx+1} teamA mismatch: expected ${expA}, got ${m.teamA}`);
  assert.strictEqual(m.teamB, expB, `UB R1 ${idx+1} teamB mismatch: expected ${expB}, got ${m.teamB}`);
  console.log(`  ✅ [PASS] UB_R1_${idx+1}: ${m.teamA} vs ${m.teamB}`);
});

// Verifikasi Ground Truth Lower Bracket Ronde 1
console.log('\n🔍 Verifikasi Ronde 1 Lower Bracket R1:');
lbR1Pairs.forEach(([expA, expB], idx) => {
  const m = po[1][4 + idx];
  assert(m, `Match ${4 + idx} in Round 1 must exist`);
  assert.strictEqual(m.teamA, expA, `LB R1 ${idx+1} teamA mismatch: expected ${expA}, got ${m.teamA}`);
  assert.strictEqual(m.teamB, expB, `LB R1 ${idx+1} teamB mismatch: expected ${expB}, got ${m.teamB}`);
  console.log(`  ✅ [PASS] LB_R1_${idx+1}: ${m.teamA} vs ${m.teamB}`);
});

console.log('\n====================================================');
console.log('🎉 REKONSTRUKSI 38 MATCHES DARI GOOGLE SHEET 100% SUKSES!');
console.log('====================================================');
