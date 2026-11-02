const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('========================================================');
console.log('🧪 PENGUJIAN REGULASI UNDIAN PLAYOFF MLBB (SEEDED & WINGS)');
console.log('========================================================\n');

const appJsPath = path.join(__dirname, '../app.js');
const appCode = fs.readFileSync(appJsPath, 'utf8');

// Buat isolated sandbox execution
const sandbox = new Function(`
  const window = {
    addEventListener: () => {}
  };
  const localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  };
  const sessionStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  };
  const document = {
    getElementById: () => null,
    createElement: () => ({ appendChild: () => {}, setAttribute: () => {} }),
    querySelectorAll: () => []
  };

  ${appCode}

  return {
    isTeamInvited,
    isTeamAtmo,
    isTeamAlpha,
    isPlayoffInvitedTeam,
    initGroupPlayoff,
    drawMLBBPlayoffUpperBracket,
    drawMLBBPlayoffLowerBracket,
    setGroupStageData: (d) => { groupStageData = d; },
    getGroupPlayoffMatches: () => groupPlayoffMatches,
    setParticipants: (p) => { participants = p; }
  };
`)();

// 1. Verifikasi fungsi identifikasi tim invited
console.log('1. Verifikasi Identifikasi Tim Invited & Powerhouse:');
assert.strictEqual(sandbox.isTeamAtmo('ATMO'), true, 'ATMO harus dikenali');
assert.strictEqual(sandbox.isTeamAtmo('Tim Atmo Esports'), true, 'Tim Atmo Esports harus dikenali');
assert.strictEqual(sandbox.isTeamAlpha('AANG ALPHA'), true, 'AANG ALPHA harus dikenali');
assert.strictEqual(sandbox.isTeamAlpha('Alpha Team'), true, 'Alpha Team harus dikenali');
assert.strictEqual(sandbox.isTeamAlpha('Aang Beta'), false, 'Aang Beta tidak boleh dianggap Alpha');

assert.strictEqual(sandbox.isPlayoffInvitedTeam('ATMO'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('APPA LINUX'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('Native'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('AANG ALPHA'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('Wingskanan Esport 1'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('Gado-Gado'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('Anti Klimax'), true);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('Tim Reguler Biasa'), false);

// Verifikasi toggle admin
sandbox.setParticipants([
  { id: 99, category: 'MLBB', name: 'Kuda Terbang', isInvited: true }
]);
assert.strictEqual(sandbox.isPlayoffInvitedTeam('Kuda Terbang'), true, 'Tim yang di-toggle admin harus dikenali sebagai invited');
console.log('   ✅ [PASS] Seluruh identifikasi tim invited & powerhouse valid!\n');

// 2. Simulasi 100x Pengundian Babak Playoff 8 Grup
console.log('2. Uji 100x Pengundian Playoff dengan ATMO, APPA, NATIVE, AANG ALPHA:');

const mockGroupData = {
  'Grup A': [{ name: 'ATMO', pts: 6 }, { name: 'Runner A', pts: 4 }, { name: 'Ketiga A', pts: 2 }],
  'Grup B': [{ name: 'APPA LINUX', pts: 6 }, { name: 'Runner B', pts: 4 }, { name: 'Ketiga B', pts: 2 }],
  'Grup C': [{ name: 'Native', pts: 6 }, { name: 'Runner C', pts: 4 }, { name: 'Ketiga C', pts: 2 }],
  'Grup D': [{ name: 'AANG ALPHA', pts: 6 }, { name: 'Runner D', pts: 4 }, { name: 'Ketiga D', pts: 2 }],
  'Grup E': [{ name: 'Juara E', pts: 6 }, { name: 'Runner E', pts: 4 }, { name: 'Ketiga E', pts: 2 }],
  'Grup F': [{ name: 'Juara F', pts: 6 }, { name: 'Runner F', pts: 4 }, { name: 'Ketiga F', pts: 2 }],
  'Grup G': [{ name: 'Juara G', pts: 6 }, { name: 'Runner G', pts: 4 }, { name: 'Ketiga G', pts: 2 }],
  'Grup H': [{ name: 'Juara H', pts: 6 }, { name: 'Runner H', pts: 4 }, { name: 'Ketiga H', pts: 2 }]
};

sandbox.setGroupStageData(mockGroupData);

for (let iter = 0; iter < 100; iter++) {
  sandbox.initGroupPlayoff(true);
  const playoff = sandbox.getGroupPlayoffMatches();
  const ubR1 = playoff[0];
  const lbR1 = playoff[1].slice(4, 12);

  assert.strictEqual(ubR1.length, 8, 'Upper R1 harus 8 match');
  assert.strictEqual(lbR1.length, 8, 'Lower R1 harus 8 match');

  // Cari posisi slot ATMO dan AANG ALPHA
  let atmoSlot = -1;
  let alphaSlot = -1;

  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    if (sandbox.isTeamAtmo(m.teamA) || sandbox.isTeamAtmo(m.teamB)) atmoSlot = s;
    if (sandbox.isTeamAlpha(m.teamA) || sandbox.isTeamAlpha(m.teamB)) alphaSlot = s;
  }

  assert(atmoSlot !== -1, `ATMO harus terundi di Upper R1 pada iterasi ${iter}`);
  assert(alphaSlot !== -1, `AANG ALPHA harus terundi di Upper R1 pada iterasi ${iter}`);

  // Aturan 1: ATMO dan ALPHA harus di wings / pool yang berbeda
  const atmoPool = atmoSlot < 4 ? 'TOP' : 'BOTTOM';
  const alphaPool = alphaSlot < 4 ? 'TOP' : 'BOTTOM';
  assert.notStrictEqual(atmoPool, alphaPool, `ATMO (slot ${atmoSlot}) dan ALPHA (slot ${alphaSlot}) harus berada di sayap/pool berbeda pada iterasi ${iter}!`);

  // Aturan 2: Tidak ada dua tim invited yang saling berhadapan di 16 Besar (Ronde 1)
  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    const aInv = sandbox.isPlayoffInvitedTeam(m.teamA);
    const bInv = sandbox.isPlayoffInvitedTeam(m.teamB);
    assert(!(aInv && bInv), `Match ${s + 1} mempertemukan sesama tim invited (${m.teamA} vs ${m.teamB}) pada iterasi ${iter}`);
  }

  // Aturan 3: Keseimbangan 4 sayap (Wings 0, 1, 2, 3 masing-masing tepat 1 tim invited)
  const wingCounts = [0, 0, 0, 0];
  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    const w = Math.floor(s / 2);
    if (sandbox.isPlayoffInvitedTeam(m.teamA)) wingCounts[w]++;
    if (sandbox.isPlayoffInvitedTeam(m.teamB)) wingCounts[w]++;
  }
  wingCounts.forEach((cnt, wIdx) => {
    assert.strictEqual(cnt, 1, `Sayap Wing ${wIdx} harus berisi tepat 1 tim invited, ditemukan: ${cnt} pada iterasi ${iter}`);
  });

  // Aturan 4: Anti-Rematch Grup di Upper Bracket
  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    let groupA = '';
    let groupB = '';
    for (const g in mockGroupData) {
      if (mockGroupData[g].some(t => t.name === m.teamA)) groupA = g;
      if (mockGroupData[g].some(t => t.name === m.teamB)) groupB = g;
    }
    assert.notStrictEqual(groupA, groupB, `Rematch grup ${groupA} terdeteksi di match ${s} pada iterasi ${iter}`);
  }
}

console.log('   ✅ [PASS] 100/100 pengundian terverifikasi: ATMO & ALPHA beda sayap, 4 sayap seimbang, 0 bentrok grup!\n');

// 3. Skenario Tim Invited Tersebar di Juara 1 dan Juara 2
console.log('3. Uji Skenario Tim Tersebar di Juara 1 dan Juara 2 (misal ATMO Juara 2):');
const mockGroupDataSplit = {
  'Grup A': [{ name: 'Juara A1', pts: 6 }, { name: 'ATMO', pts: 4 }, { name: 'Ketiga A', pts: 2 }],
  'Grup B': [{ name: 'APPA LINUX', pts: 6 }, { name: 'Runner B', pts: 4 }, { name: 'Ketiga B', pts: 2 }],
  'Grup C': [{ name: 'Native', pts: 6 }, { name: 'Runner C', pts: 4 }, { name: 'Ketiga C', pts: 2 }],
  'Grup D': [{ name: 'AANG ALPHA', pts: 6 }, { name: 'Runner D', pts: 4 }, { name: 'Ketiga D', pts: 2 }],
  'Grup E': [{ name: 'Juara E', pts: 6 }, { name: 'Runner E', pts: 4 }, { name: 'Ketiga E', pts: 2 }],
  'Grup F': [{ name: 'Juara F', pts: 6 }, { name: 'Runner F', pts: 4 }, { name: 'Ketiga F', pts: 2 }],
  'Grup G': [{ name: 'Juara G', pts: 6 }, { name: 'Runner G', pts: 4 }, { name: 'Ketiga G', pts: 2 }],
  'Grup H': [{ name: 'Juara H', pts: 6 }, { name: 'Runner H', pts: 4 }, { name: 'Ketiga H', pts: 2 }]
};

sandbox.setGroupStageData(mockGroupDataSplit);

for (let iter = 0; iter < 100; iter++) {
  sandbox.initGroupPlayoff(true);
  const playoff = sandbox.getGroupPlayoffMatches();
  const ubR1 = playoff[0];

  let atmoSlot = -1;
  let alphaSlot = -1;

  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    if (sandbox.isTeamAtmo(m.teamA) || sandbox.isTeamAtmo(m.teamB)) atmoSlot = s;
    if (sandbox.isTeamAlpha(m.teamA) || sandbox.isTeamAlpha(m.teamB)) alphaSlot = s;
  }

  const atmoPool = atmoSlot < 4 ? 'TOP' : 'BOTTOM';
  const alphaPool = alphaSlot < 4 ? 'TOP' : 'BOTTOM';
  assert.notStrictEqual(atmoPool, alphaPool, `ATMO (J2) dan ALPHA (J1) harus beda pool pada iterasi ${iter}!`);

  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    let groupA = '';
    let groupB = '';
    for (const g in mockGroupDataSplit) {
      if (mockGroupDataSplit[g].some(t => t.name === m.teamA)) groupA = g;
      if (mockGroupDataSplit[g].some(t => t.name === m.teamB)) groupB = g;
    }
    assert.notStrictEqual(groupA, groupB, `Anti-rematch grup terlanggar di match ${s} pada iterasi ${iter}`);
  }
}

console.log('   ✅ [PASS] 100/100 pengundian skenario split J1/J2 berhasil dan valid!\n');

console.log('========================================================');
console.log('🎉 SELURUH PENGUJIAN REGULASI UNDIAN PLAYOFF LULUS (100% OK)');
console.log('========================================================');
