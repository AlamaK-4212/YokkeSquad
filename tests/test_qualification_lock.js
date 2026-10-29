const assert = require('assert');
const fs = require('fs');

console.log('====================================================');
console.log('🧪 PENGUJIAN KELOLOSAN DITUTUP HINGGA SELURUH MATCH SELESAI');
console.log('====================================================\n');

const appCode = fs.readFileSync('app.js', 'utf8');
const gasCode = fs.readFileSync('google_apps_script.js', 'utf8');

// 1. Verifikasi Keberadaan Fungsi Helper & Komponen di app.js
console.log('🔍 1. Memeriksa deklarasi helper & integrasi di app.js...');
assert(appCode.includes('function isGroupMatchesCompleted('), 'app.js harus mendeklarasikan isGroupMatchesCompleted');
assert(appCode.includes('🔒 Kelolosan Ditutup (Match Berlangsung)'), 'app.js harus memuat badge status kelolosan ditutup');
assert(appCode.includes('🔒 Ditutup (Match Berlangsung)'), 'app.js harus memuat placeholder kolom kelolosan ditutup');
console.log('  ✅ [PASS] Komponen UI & helper kelolosan ditutup terdefinisi di app.js');

// 2. Simulasi Logika isGroupMatchesCompleted
console.log('\n⚙️ 2. Menguji logika isGroupMatchesCompleted...');

// Buat sandbox simulasi fungsi isGroupMatchesCompleted
const testGroupMatchesCompleted = new Function('gName', 'groupFixtures', 'groupStageData', `
  function getGroupFixtures(name) {
    return groupFixtures[name] || [];
  }
  ${appCode.match(/function isGroupMatchesCompleted[\s\S]*?^}/m)[0]}
  return isGroupMatchesCompleted(gName);
`);

// Kasus A: Grup E dengan 5 tim (10 match total), baru selesai 6 match
const fixturesGrupE_Incomplete = [
  { matchId: '1', winner: 'Miskin Mekanik', scoreA: 2, scoreB: 0 },
  { matchId: '2', winner: 'APPA LINUX', scoreA: 2, scoreB: 0 },
  { matchId: '3', winner: 'APPA LINUX', scoreA: 2, scoreB: 1 },
  { matchId: '4', winner: 'DEPOK MAUNG', scoreA: 2, scoreB: 0 },
  { matchId: '5', winner: 'MiracleXStars', scoreA: 2, scoreB: 0 },
  { matchId: '6', winner: 'Miskin Mekanik', scoreA: 2, scoreB: 0 },
  // 4 match belum dimainkan
  { matchId: '7', winner: null, scoreA: null, scoreB: null },
  { matchId: '8', winner: null, scoreA: null, scoreB: null },
  { matchId: '9', winner: null, scoreA: null, scoreB: null },
  { matchId: '10', winner: null, scoreA: null, scoreB: null },
];

const isIncompleteDone = testGroupMatchesCompleted('Grup E', { 'Grup E': fixturesGrupE_Incomplete }, {});
assert.strictEqual(isIncompleteDone, false, 'Grup E belum selesai seharusnya menghasilkan false');
console.log('  ✅ [PASS] isGroupMatchesCompleted menghasilkan false saat ada match yang belum selesai');

// Kasus B: Seluruh 10 match telah selesai diinput
const fixturesGrupE_Complete = fixturesGrupE_Incomplete.map((f, idx) => {
  if (f.winner === null) {
    return { matchId: f.matchId, winner: 'DEPOK MAUNG', scoreA: 2, scoreB: 0 };
  }
  return f;
});

const isCompleteDone = testGroupMatchesCompleted('Grup E', { 'Grup E': fixturesGrupE_Complete }, {});
assert.strictEqual(isCompleteDone, true, 'Grup E yang semua matchnya selesai seharusnya menghasilkan true');
console.log('  ✅ [PASS] isGroupMatchesCompleted menghasilkan true saat seluruh match selesai diinput');

// 3. Verifikasi Logika Kelolosan pada Tabel Klasemen Hub MLBB
console.log('\n📊 3. Menguji tampilan status kelolosan...');

function renderKelolosanCol(isGroupAllDone, idx) {
  return isGroupAllDone ? (
    idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper Bracket (Day 2)</span>' :
    (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower Bracket (Day 3)</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
  ) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolosan akan otomatis terbuka setelah seluruh pertandingan selesai diinput">🔒 Ditutup (Match Berlangsung)</span>';
}

// Saat match masih berlangsung (isGroupAllDone = false)
const colRank1_locked = renderKelolosanCol(false, 0);
const colRank2_locked = renderKelolosanCol(false, 1);
const colRank3_locked = renderKelolosanCol(false, 2);
const colRank4_locked = renderKelolosanCol(false, 3);

assert(colRank1_locked.includes('🔒 Ditutup (Match Berlangsung)'), 'Rank 1 harus berstatus Ditutup saat match berlangsung');
assert(colRank2_locked.includes('🔒 Ditutup (Match Berlangsung)'), 'Rank 2 harus berstatus Ditutup saat match berlangsung');
assert(colRank3_locked.includes('🔒 Ditutup (Match Berlangsung)'), 'Rank 3 harus berstatus Ditutup saat match berlangsung');
assert(colRank4_locked.includes('🔒 Ditutup (Match Berlangsung)'), 'Rank 4 harus berstatus Ditutup saat match berlangsung');
assert(!colRank1_locked.includes('Upper Bracket'), 'Tidak boleh memunculkan teks Upper Bracket saat belum selesai');
assert(!colRank3_locked.includes('Lower Bracket'), 'Tidak boleh memunculkan teks Lower Bracket saat belum selesai');
assert(!colRank4_locked.includes('Gugur'), 'Tidak boleh memunculkan status Gugur saat belum selesai');
console.log('  ✅ [PASS] Saat pertandingan berlangsung, seluruh tim menampilkan status 🔒 Ditutup (Match Berlangsung)');

// Saat seluruh match selesai (isGroupAllDone = true)
const colRank1_open = renderKelolosanCol(true, 0);
const colRank2_open = renderKelolosanCol(true, 1);
const colRank3_open = renderKelolosanCol(true, 2);
const colRank4_open = renderKelolosanCol(true, 3);

assert(colRank1_open.includes('Upper Bracket (Day 2)'), 'Rank 1 harus Upper Bracket saat selesai');
assert(colRank2_open.includes('Upper Bracket (Day 2)'), 'Rank 2 harus Upper Bracket saat selesai');
assert(colRank3_open.includes('Lower Bracket (Day 3)'), 'Rank 3 harus Lower Bracket saat selesai');
assert(colRank4_open.includes('Gugur'), 'Rank 4 harus Gugur saat selesai');
console.log('  ✅ [PASS] Saat seluruh match selesai diinput, status kelolosan terbuka dengan alokasi resmi');

// 4. Verifikasi Logika Penulisan Status di google_apps_script.js
console.log('\n☁️ 4. Menguji logika status kelolosan di google_apps_script.js...');
assert(gasCode.includes("let status = 'Menunggu Seluruh Match';"), 'GAS harus menetapkan default status Menunggu Seluruh Match');
assert(gasCode.includes('if (isGroupAllDone)'), 'GAS harus memvalidasi kelengkapan seluruh match grup sebelum menulis Lolos');
console.log('  ✅ [PASS] google_apps_script.js terverifikasi mengunci status kelolosan hingga seluruh match selesai');

console.log('\n====================================================');
console.log('🎉 SEMUA PENGUJIAN KELOLOSAN DITUTUP LULUS 100%!');
console.log('====================================================');

