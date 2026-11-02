const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('========================================================');
console.log('🧪 PENGUJIAN REGULASI UNDIAN PLAYOFF MLBB (SEEDED & WINGS)');
console.log('========================================================\n');

const appJsPath = path.join(__dirname, '../app.js');
const appCode = fs.readFileSync(appJsPath, 'utf8');

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
  function makeDummy() {
    return {
      innerHTML: '',
      value: '',
      style: {},
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {},
      setAttribute: () => {},
      addEventListener: () => {},
      scrollIntoView: () => {}
    };
  }
  const document = {
    getElementById: () => makeDummy(),
    createElement: () => makeDummy(),
    querySelector: () => makeDummy(),
    querySelectorAll: () => []
  };

  const confirm = () => true;
  const alert = () => {};
  const prompt = () => null;

  ${appCode}

  return {
    isTeamInvited,
    isTeamAtmo,
    isTeamAlpha,
    isTeamAppa,
    isPlayoffInvitedTeam,
    initGroupPlayoff,
    generateGroupStage,
    goToNextMLBBPlayoffPhase,
    drawMLBBPlayoffUpperBracket,
    drawMLBBPlayoffLowerBracket,
    toggleLockMLBBPlayoff,
    shuffleMLBBPlayoffBracket,
    setPlayoffMatchScore,
    resetPlayoffMatchScore,
    setGroupStageData: (d) => { groupStageData = d; },
    getGroupPlayoffMatches: () => groupPlayoffMatches,
    setParticipants: (p) => { participants = p; },
    getCurrentSelectedNode: () => currentSelectedMLBBNode,
    getTournamentStageState: () => tournamentStageState,
    setIsAdmin: (val) => { isAdmin = val; }
  };
`)();

// 1. Verifikasi fungsi identifikasi tim invited
console.log('1. Verifikasi Identifikasi Tim Invited & Powerhouse:');
assert.strictEqual(sandbox.isTeamAtmo('ATMO'), true, 'ATMO harus dikenali');
assert.strictEqual(sandbox.isTeamAtmo('Tim Atmo Esports'), true, 'Tim Atmo Esports harus dikenali');
assert.strictEqual(sandbox.isTeamAlpha('AANG ALPHA'), true, 'AANG ALPHA harus dikenali');
assert.strictEqual(sandbox.isTeamAlpha('Alpha Team'), true, 'Alpha Team harus dikenali');
assert.strictEqual(sandbox.isTeamAlpha('Aang Beta'), false, 'Aang Beta tidak boleh dianggap Alpha');
assert.strictEqual(sandbox.isTeamAppa('APPA LINUX'), true, 'APPA LINUX harus dikenali');
assert.strictEqual(sandbox.isTeamAppa('Appa'), true, 'Appa harus dikenali');

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
console.log('2. Uji 100x Pengundian: ATMO & ALPHA Beda Pool, APPA LINUX Bebas Bentrok Awal:');

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

  // Cari posisi slot ATMO, AANG ALPHA, dan APPA LINUX
  let atmoSlot = -1;
  let alphaSlot = -1;
  let appaSlot = -1;

  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    if (sandbox.isTeamAtmo(m.teamA) || sandbox.isTeamAtmo(m.teamB)) atmoSlot = s;
    if (sandbox.isTeamAlpha(m.teamA) || sandbox.isTeamAlpha(m.teamB)) alphaSlot = s;
    if (sandbox.isTeamAppa(m.teamA) || sandbox.isTeamAppa(m.teamB)) appaSlot = s;
  }

  assert(atmoSlot !== -1, `ATMO harus terundi di Upper R1 pada iterasi ${iter}`);
  assert(alphaSlot !== -1, `AANG ALPHA harus terundi di Upper R1 pada iterasi ${iter}`);
  assert(appaSlot !== -1, `APPA LINUX harus terundi di Upper R1 pada iterasi ${iter}`);

  const atmoWing = Math.floor(atmoSlot / 2);
  const alphaWing = Math.floor(alphaSlot / 2);
  const appaWing = Math.floor(appaSlot / 2);

  // Aturan 1: ATMO dan ALPHA harus di wings / pool yang berbeda
  const atmoPool = atmoWing < 2 ? 'TOP' : 'BOTTOM';
  const alphaPool = alphaWing < 2 ? 'TOP' : 'BOTTOM';
  assert.notStrictEqual(atmoPool, alphaPool, `ATMO (slot ${atmoSlot}) dan ALPHA (slot ${alphaSlot}) harus berada di sayap/pool berbeda pada iterasi ${iter}!`);

  // Aturan 2: APPA LINUX tidak boleh satu sayap dengan ATMO maupun ALPHA di match awal (16 Besar & QF)
  assert.notStrictEqual(appaWing, atmoWing, `APPA LINUX tidak boleh satu sayap QF dengan ATMO pada iterasi ${iter}!`);
  assert.notStrictEqual(appaWing, alphaWing, `APPA LINUX tidak boleh satu sayap QF dengan ALPHA pada iterasi ${iter}!`);

  // Aturan 3: Tidak ada dua tim invited yang saling berhadapan di 16 Besar (Ronde 1)
  for (let s = 0; s < 8; s++) {
    const m = ubR1[s];
    const aInv = sandbox.isPlayoffInvitedTeam(m.teamA);
    const bInv = sandbox.isPlayoffInvitedTeam(m.teamB);
    assert(!(aInv && bInv), `Match ${s + 1} mempertemukan sesama tim invited (${m.teamA} vs ${m.teamB}) pada iterasi ${iter}`);
  }

  // Aturan 4: Keseimbangan 4 sayap (Wings 0, 1, 2, 3 masing-masing tepat 1 tim invited)
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

  // Aturan 5: Anti-Rematch Grup di Upper Bracket
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

console.log('   ✅ [PASS] 100/100 pengundian terverifikasi: ATMO & ALPHA beda pool, APPA bebas bentrok awal, 4 sayap seimbang!\n');

// 3. Verifikasi Tombol "Lanjut ke Babak Playoff & Undi Bagan ➔"
console.log('3. Verifikasi Fungsi Tombol Lanjut ke Playoff & Undi Bagan:');
sandbox.goToNextMLBBPlayoffPhase();
assert.strictEqual(sandbox.getCurrentSelectedNode(), 'PLAYOFF_OVERVIEW', 'Node aktif harus berubah ke PLAYOFF_OVERVIEW');
const matchesAfterNext = sandbox.getGroupPlayoffMatches();
assert(Array.isArray(matchesAfterNext) && matchesAfterNext.length > 0, 'Playoff matches harus terbentuk');
console.log('   ✅ [PASS] goToNextMLBBPlayoffPhase berhasil mengundi bagan dan mengarahkan ke PLAYOFF_OVERVIEW!\n');

// 4. Verifikasi Tombol Lock Undian Playoff
console.log('4. Verifikasi Fitur Lock Undian Playoff:');
sandbox.setIsAdmin(true);
const stageState = sandbox.getTournamentStageState();
assert.strictEqual(stageState.mlbb.isPlayoffLocked, false, 'State awal isPlayoffLocked harus false');

// Kunci undian
sandbox.toggleLockMLBBPlayoff();
assert.strictEqual(stageState.mlbb.isPlayoffLocked, true, 'isPlayoffLocked harus true setelah toggleLockMLBBPlayoff');

// Catat susunan match saat dikunci
const matchesBefore = JSON.stringify(sandbox.getGroupPlayoffMatches()[0]);

// Coba shuffle saat dikunci -> harus diblokir dan susunan tidak boleh berubah
sandbox.shuffleMLBBPlayoffBracket();
const matchesAfterAttempt = JSON.stringify(sandbox.getGroupPlayoffMatches()[0]);
assert.strictEqual(matchesBefore, matchesAfterAttempt, 'Susunan bagan tidak boleh berubah saat undian playoff dikunci');

// Buka kunci undian
sandbox.toggleLockMLBBPlayoff();
assert.strictEqual(stageState.mlbb.isPlayoffLocked, false, 'isPlayoffLocked harus false setelah toggle ulang');
console.log('   ✅ [PASS] toggleLockMLBBPlayoff berhasil mengunci & membuka kunci, serta memblokir shuffle ulang saat terkunci!\n');

// 5. Verifikasi Penentuan Win or Lose dari Skor Pertandingan
console.log('5. Verifikasi Penentuan Win or Lose Playoff Berdasarkan Skor:');
const matches = sandbox.getGroupPlayoffMatches();
const m0 = matches[0][0];
assert(m0 && m0.teamA && m0.teamB, 'Match 0 harus memiliki teamA dan teamB');

// 5.1 Tes tolak skor imbang pada playoff
const drawResult = sandbox.setPlayoffMatchScore(0, 0, 1, 1);
assert.strictEqual(drawResult, false, 'Playoff harus menolak skor imbang');
assert.strictEqual(m0.winner, null, 'Winner harus null jika skor imbang ditolak');

// 5.2 Tes Team A menang 2 - 0
const winAResult = sandbox.setPlayoffMatchScore(0, 0, 2, 0);
assert.strictEqual(winAResult, true, 'setPlayoffMatchScore 2-0 harus berhasil');
assert.strictEqual(m0.scoreA, 2, 'scoreA harus 2');
assert.strictEqual(m0.scoreB, 0, 'scoreB harus 0');
assert.strictEqual(m0.winner, m0.teamA, 'Winner harus ditentukan sebagai Team A');
assert.strictEqual(matches[1][0].teamA, m0.teamA, 'Pemenang Match 0 harus maju ke Upper QF 1 Slot A');
assert.strictEqual(matches[1][4].teamA, m0.teamB, 'Tim yang kalah harus turun ke Lower Bracket R1 Match 1 Slot A');

// 5.3 Tes Team B menang 1 - 2 (Reversal)
const winBResult = sandbox.setPlayoffMatchScore(0, 0, 1, 2);
assert.strictEqual(winBResult, true, 'setPlayoffMatchScore 1-2 harus berhasil');
assert.strictEqual(m0.scoreA, 1, 'scoreA harus 1');
assert.strictEqual(m0.scoreB, 2, 'scoreB harus 2');
assert.strictEqual(m0.winner, m0.teamB, 'Winner harus berganti ke Team B');
assert.strictEqual(matches[1][0].teamA, m0.teamB, 'Pemenang Match 0 harus diupdate ke Team B di Upper QF 1');
assert.strictEqual(matches[1][4].teamA, m0.teamA, 'Tim yang kalah harus diupdate ke Team A di Lower Bracket');

// 5.4 Tes Reset Skor Match
sandbox.resetPlayoffMatchScore(0, 0);
assert.strictEqual(m0.scoreA, null, 'scoreA harus kembali null setelah reset');
assert.strictEqual(m0.scoreB, null, 'scoreB harus kembali null setelah reset');
assert.strictEqual(m0.winner, null, 'winner harus kembali null setelah reset');
console.log('   ✅ [PASS] Penentuan menang/kalah berbasis skor terverifikasi: tolak seri, otomatis majukan winner/loser, & dukung reset skor!\n');

console.log('========================================================');
console.log('🎉 SELURUH PENGUJIAN REGULASI UNDIAN PLAYOFF LULUS (100% OK)');
console.log('========================================================');
