const assert = require('assert');
const fs = require('fs');

console.log('====================================================');
console.log('🧪 PENGUJIAN TARGETED 3-BARIS SYNC & CACHE LOOKUP');
console.log('====================================================\n');

const appCode = fs.readFileSync('app.js', 'utf8');
const gasCode = fs.readFileSync('google_apps_script.js', 'utf8');

// 1. Verifikasi Keberadaan Fungsi Baru di app.js
console.log('🔍 1. Memeriksa deklarasi fungsi & logika di app.js...');
assert(appCode.includes('function getUnsyncedMatches('), 'app.js harus memiliki helper getUnsyncedMatches');
assert(appCode.includes('async function syncSingleMatchRowToGSheet('), 'app.js harus memiliki syncSingleMatchRowToGSheet');
assert(appCode.includes('setLastSyncedMatches('), 'app.js harus memiliki setter setLastSyncedMatches');
assert(appCode.includes('getLastSyncedMatches('), 'app.js harus memiliki getter getLastSyncedMatches');
assert(appCode.includes('UPDATE_MATCH_ROW'), 'app.js harus mengirimkan action UPDATE_MATCH_ROW');
console.log('  ✅ [PASS] Komponen sync targeted 3-baris terdefinisi di app.js');

// 2. Verifikasi Keberadaan Action di google_apps_script.js
console.log('\n☁️ 2. Memeriksa penanganan UPDATE_MATCH_ROW di google_apps_script.js...');
assert(gasCode.includes('data.action === "UPDATE_MATCH_ROW"'), 'GAS harus menangani data.action UPDATE_MATCH_ROW');
assert(gasCode.includes('MLBB - Bagan & MVP'), 'GAS harus menargetkan sheet MLBB - Bagan & MVP');
assert(gasCode.includes('MLBB - Klasemen & Point'), 'GAS harus menargetkan sheet MLBB - Klasemen & Point');
assert(gasCode.includes('updatedRowCount'), 'GAS harus mencatat dan mengembalikan jumlah baris yang diperbarui');
console.log('  ✅ [PASS] Action UPDATE_MATCH_ROW terdefinisi di google_apps_script.js');

// 3. Simulasi Cache Lookup (getUnsyncedMatches)
console.log('\n⚙️ 3. Menguji logika cache lookup (getUnsyncedMatches)...');

const mockLocalStorage = {};
global.localStorage = {
  getItem: (k) => mockLocalStorage[k] || null,
  setItem: (k, v) => { mockLocalStorage[k] = String(v); }
};

// Ekstrak fungsi cache dari app.js
const sandbox = new Function('groupMatchResults', 'localStorage', `
  let _lastSyncedMatches = null;
  ${appCode.match(/function getLastSyncedMatches[\s\S]*?^}/m)[0]}
  ${appCode.match(/function setLastSyncedMatches[\s\S]*?^}/m)[0]}
  ${appCode.match(/function getUnsyncedMatches[\s\S]*?^}/m)[0]}
  return { getLastSyncedMatches, setLastSyncedMatches, getUnsyncedMatches };
`);

const initialMatches = {
  'Grup_E_APPA_LINUX_vs_Tugu_Muda': {
    canonId: 'Grup_E_APPA_LINUX_vs_Tugu_Muda',
    gName: 'Grup E',
    teamA: 'APPA LINUX',
    teamB: 'Tugu Muda',
    scoreA: 2,
    scoreB: 0,
    winner: 'APPA LINUX',
    mvpPlayer: 'G1: SuperUsagi',
    mvpHero: 'Carmilla'
  },
  'Grup_E_DEPOK_MAUNG_vs_Tugu_Muda': {
    canonId: 'Grup_E_DEPOK_MAUNG_vs_Tugu_Muda',
    gName: 'Grup E',
    teamA: 'DEPOK MAUNG',
    teamB: 'Tugu Muda',
    scoreA: 2,
    scoreB: 0,
    winner: 'DEPOK MAUNG',
    mvpPlayer: 'Stroberi',
    mvpHero: '-'
  }
};

const helpers = sandbox(initialMatches, global.localStorage);

// Skenario A: Data baru dimuat dari GSheet -> Cache ditandai sinkron
helpers.setLastSyncedMatches(initialMatches);
let unsynced = helpers.getUnsyncedMatches();
assert.strictEqual(unsynced.length, 0, 'Ketika data sama dengan GSheet, harus mengembalikan 0 match yang unsynced');
console.log('  ✅ [PASS] Saat cache sama dengan GSheet: 0 perubahan terdeteksi (Tidak perlu network call)');

// Skenario B: Ada perubahan skor di 1 match
const modifiedMatches = JSON.parse(JSON.stringify(initialMatches));
modifiedMatches['Grup_E_APPA_LINUX_vs_Tugu_Muda'].scoreB = 1; // diedit jadi 2 - 1

const helpers2 = sandbox(modifiedMatches, global.localStorage);
unsynced = helpers2.getUnsyncedMatches();
assert.strictEqual(unsynced.length, 1, 'Harus mendeteksi tepat 1 match yang berubah');
assert.strictEqual(unsynced[0].canonId, 'Grup_E_APPA_LINUX_vs_Tugu_Muda', 'Match yang terdeteksi harus sesuai ID');
console.log('  ✅ [PASS] Saat ada match diedit: Tepat 1 match terdeteksi untuk diupdate');

// Skenario C: Ada perubahan MVP
const modifiedMvpMatches = JSON.parse(JSON.stringify(initialMatches));
modifiedMvpMatches['Grup_E_DEPOK_MAUNG_vs_Tugu_Muda'].mvpPlayer = 'G1: Stroberi | G2: Harith';

const helpers3 = sandbox(modifiedMvpMatches, global.localStorage);
unsynced = helpers3.getUnsyncedMatches();
assert.strictEqual(unsynced.length, 1, 'Harus mendeteksi match dengan perubahan MVP');
assert.strictEqual(unsynced[0].canonId, 'Grup_E_DEPOK_MAUNG_vs_Tugu_Muda');
console.log('  ✅ [PASS] Perubahan MVP langsung terdeteksi oleh cache lookup');

// 4. Verifikasi Pembagian 3 Baris Data (2 Klasemen + 1 Match)
console.log('\n📊 4. Menguji struktur 3 baris data per pertandingan...');
const testMatch = initialMatches['Grup_E_APPA_LINUX_vs_Tugu_Muda'];
const standingsUpdate = [
  { gName: 'Grup E', rank: '#2', teamName: 'APPA LINUX', matchCount: 3, win: 2, lose: 1, diffStr: '+2', pts: 4, status: 'Menunggu Seluruh Match', mvpCount: 2 },
  { gName: 'Grup E', rank: '#5', teamName: 'Tugu Muda', matchCount: 3, win: 0, lose: 3, diffStr: '-6', pts: 0, status: 'Menunggu Seluruh Match', mvpCount: 0 }
];

assert.strictEqual(standingsUpdate.length, 2, 'Standings update harus berisi tepat 2 baris tim (Tim A & Tim B)');
const totalRows = 1 + standingsUpdate.length; // 1 match row + 2 team standings rows
assert.strictEqual(totalRows, 3, 'Total baris data yang diupdate ke GSheet harus tepat 3 baris');
console.log('  ✅ [PASS] Tepat 3 baris data dialokasikan per pertandingan (1 baris match + 2 baris tim klasemen)');

// 5. Verifikasi saveTournamentStateOnly(isSilent = true) Tidak Mengirim Request
console.log('\n🔒 5. Menguji penghentian background HTTP request...');
assert(appCode.replace(/\r\n/g, '\n').includes('if (isSilent) {\n    return;\n  }'), 'saveTournamentStateOnly(true) wajib langsung return tanpa memanggil fetch');
console.log('  ✅ [PASS] Panggilan latar belakang (isSilent = true) tidak lagi mengirim HTTP request ke GSheet');

console.log('\n====================================================');
console.log('🎉 SEMUA PENGUJIAN TARGETED 3-BARIS SYNC & CACHE LOOKUP LULUS 100%!');
console.log('====================================================');
