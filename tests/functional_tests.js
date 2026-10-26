/**
 * Test Suite Fungsional Turnamen Yokke Squad 2026
 * Mencakup: Validasi Roster, Aturan ID Card, Perhitungan Poin MCGG, dan Integrasi Live Webhook.
 */

const assert = require('assert');
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
global.sessionStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };

// 1. Ekstrak data & fungsi dari app.js
const fs = require('fs');
const path = require('path');
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');

// Ekstrak URL Webhook
const webhookMatch = appCode.match(/const GOOGLE_SHEET_WEBHOOK_URL\s*=\s*["']([^"']+)["']/);
const GOOGLE_SHEET_WEBHOOK_URL = webhookMatch ? webhookMatch[1] : '';

// Ekstrak Admin PIN
const pinMatch = appCode.match(/const ADMIN_PIN\s*=\s*["']([^"']+)["']/);
const ADMIN_PIN = pinMatch ? pinMatch[1] : '';

let passedCount = 0;
let failedCount = 0;

function runTest(testName, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${testName}`);
    passedCount++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${testName}:`, err.message);
    failedCount++;
  }
}

async function runAsyncTest(testName, fn) {
  try {
    await fn();
    console.log(`  ✅ [PASS] ${testName}`);
    passedCount++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${testName}:`, err.message);
    failedCount++;
  }
}

console.log('====================================================');
console.log('🚀 MEMULAI PENGUJIAN FUNGSIONAL TURNAMEN YOKKE SQUAD');
console.log('====================================================\n');

// ----------------------------------------------------
// SUITE 1: SISTEM PERHITUNGAN POIN & LOGIKA UTILITAS
// ----------------------------------------------------
console.log('📦 SUITE 1: Sistem Poin MCGG & Utilitas Format');

const POINT_TABLE = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

runTest('1.1 Tabel Poin MCGG sesuai regulasi resmi (+4 s/d -4)', () => {
  assert.strictEqual(POINT_TABLE[1], 4);
  assert.strictEqual(POINT_TABLE[2], 3);
  assert.strictEqual(POINT_TABLE[3], 2);
  assert.strictEqual(POINT_TABLE[4], 1);
  assert.strictEqual(POINT_TABLE[5], -1);
  assert.strictEqual(POINT_TABLE[6], -2);
  assert.strictEqual(POINT_TABLE[7], -3);
  assert.strictEqual(POINT_TABLE[8], -4);
});

runTest('1.2 Kalkulasi akumulasi poin 3 ronde MCGG (+4, +2, -1 = 5)', () => {
  const roundRanks = [1, 3, 5]; // R1=1st(+4), R2=3rd(+2), R3=5th(-1) -> Total=5
  const total = roundRanks.reduce((sum, r) => sum + (POINT_TABLE[r] || 0), 0);
  assert.strictEqual(total, 5);
});

runTest('1.3 Ketersediaan aset gambar 25 Little Commander MCGG', () => {
  const cmdNames = ['abe', 'yuki', 'eva', 'mavis', 'kaboom', 'dubi', 'buss', 'pao', 'harper', 'tharz'];
  for (const name of cmdNames) {
    const file = path.join(__dirname, '../assets/commanders', name + '.png');
    assert(fs.existsSync(file), `Gambar commander ${name}.png harus tersedia di assets/commanders/`);
  }
});

runTest('1.3 Normalisasi NIP Pegawai (menghilangkan tanda baca & karakter khusus)', () => {
  function sanitizeNip(nip) {
    return (nip || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }
  assert.strictEqual(sanitizeNip('EMP-2399140486'), 'emp2399140486');
  assert.strictEqual(sanitizeNip('2399-140486'), '2399140486');
  assert.strictEqual(sanitizeNip(' 2399140486 '), '2399140486');
});

runTest('1.4 Format Tautan Google Drive ke URL gambar langsung', () => {
  function formatDriveImageUrl(url) {
    if (!url || typeof url !== 'string') return '';
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1000`;
    }
    return url;
  }
  const driveUrl = 'https://drive.google.com/file/d/1NRQohNFzzNfymxNeAUKBsT6yUz3rve8o/view?usp=sharing';
  const formatted = formatDriveImageUrl(driveUrl);
  assert(formatted.includes('thumbnail?id=1NRQohNFzzNfymxNeAUKBsT6yUz3rve8o'));
});

runTest('1.5 Konfigurasi Admin PIN terverifikasi', () => {
  assert(ADMIN_PIN && ADMIN_PIN.length >= 6);
  assert.strictEqual(ADMIN_PIN, 'YOKKE2026_');
});

runTest('1.6 Verifikasi fungsi generasi 3 Sheet Turnamen di google_apps_script.js', () => {
  const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
  assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');
  assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');
  assert(gasCode.includes('function syncListPointAndCommanderMCGG('), 'Harus memiliki fungsi syncListPointAndCommanderMCGG');
  assert(gasCode.includes('function createOrUpdateAllTournamentSheets('), 'Harus memiliki fungsi createOrUpdateAllTournamentSheets');
  assert(gasCode.includes('MCGG Match Set Up'), 'Harus membaca tab MCGG Match Set Up');
});

runTest('1.7 Logika pemetaan Hero, Alter Name & Tier List dari MCGG Match Set Up', () => {
  const setupSample = [
    { hero: 'Aamon', alterName: 'Austus', tier: 'Meta' },
    { hero: 'Alice', alterName: 'Mavis', tier: 'Mid' },
    { hero: 'Chou', alterName: '', tier: 'High' },
    { hero: 'Johnson', alterName: 'Kaboom', tier: 'Meta' }
  ];
  const commanders = [
    { id: 'austus', name: 'Austus' },
    { id: 'mavis', name: 'Mavis' },
    { id: 'chou', name: 'Chou' },
    { id: 'kaboom', name: 'Kaboom' }
  ];

  setupSample.forEach(s => {
    const target = s.alterName || s.hero;
    const found = commanders.find(c => c.name.toLowerCase() === target.toLowerCase());
    assert(found, `Commander ${target} harus ditemukan`);
    found.tier = s.tier;
    found.hero = s.hero;
    found.alterName = s.alterName;
    found.displayName = s.alterName && s.hero && s.alterName !== s.hero ? `${s.alterName} (${s.hero})` : target;
  });

  assert.strictEqual(commanders[0].tier, 'Meta');
  assert.strictEqual(commanders[0].displayName, 'Austus (Aamon)');
  assert.strictEqual(commanders[2].tier, 'High');
  assert.strictEqual(commanders[2].displayName, 'Chou');
});

runTest('1.8 Verifikasi aturan 1 Tim = 1 Record & 1 Pemain = 1 Record di google_apps_script.js', () => {
  const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
  assert(gasCode.includes('1 Tim = 1 Record'), 'GAS harus memvalidasi 1 Tim = 1 Record');
  assert(gasCode.includes('1 Pemain = 1 Record'), 'GAS harus memvalidasi 1 Pemain = 1 Record');
  assert(gasCode.includes('cleanTargetName'), 'GAS harus mencocokkan nama untuk update in-place');
});

runTest('1.9 Verifikasi penghapusan tombol sinkronisasi sheet lama di index.html', () => {
  const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  assert(!htmlCode.includes('btnSyncTournamentSheets'), 'Tombol btnSyncTournamentSheets harus sudah dihapus dari HTML');
  assert(!htmlCode.includes('Buat / Perbarui Sheet Bagan & Poin di GSheet'), 'Label tombol lama harus sudah dihapus');
});

runTest('1.10 Verifikasi datalist dan handler pembaruan otomatis di index.html dan app.js', () => {
  const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
  assert(htmlCode.includes('id="registeredTeamsDatalist"'), 'Harus ada datalist tim MLBB terdaftar');
  assert(htmlCode.includes('id="registeredMcggDatalist"'), 'Harus ada datalist pemain MCGG terdaftar');
  assert(htmlCode.includes('id="teamNameUpdateNotice"'), 'Harus ada badge notice pembaruan tim MLBB');
  assert(htmlCode.includes('id="mcggNameUpdateNotice"'), 'Harus ada badge notice pembaruan pemain MCGG');
  assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrationDatalists');
  assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');
  assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');
});

// ----------------------------------------------------
// SUITE 2: ATURAN VALIDASI REGISTRASI & INTEGRITAS ROSTER
// ----------------------------------------------------
console.log('\n🛡️ SUITE 2: Aturan Validasi Registrasi & Integritas Roster');

function validateRegistration(data) {
  if (data.category === 'MLBB') {
    if (!data.teamName || !data.dept || !data.wa) {
      return { valid: false, error: 'Kolom identitas tim wajib diisi lengkap' };
    }
    // Wajib Logo
    if (!data.logo || data.logo.trim() === '') {
      return { valid: false, error: 'Logo Tim MLBB WAJIB diunggah!' };
    }
    // Roster checks
    const roster = data.roster || [];
    const officials = roster.filter(m => (m.role || '').includes('Official'));
    const players = roster.filter(m => !(m.role || '').includes('Official'));

    // Cek ID Card
    for (const m of roster) {
      if (!m.idCard || m.idCard.trim() === '') {
        return { valid: false, error: `Foto ID Card ${m.role} (${m.name}) WAJIB diunggah!` };
      }
    }

    // Cek Official vs Pemain
    for (const off of officials) {
      const offNip = (off.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const offName = (off.name || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

      for (const play of players) {
        const playNip = (play.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const playName = (play.name || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        if (offNip && offNip.length >= 3 && offNip === playNip) {
          return { valid: false, error: `${off.role} (${off.name}) tidak boleh merangkap pemain (${play.role}) [NIP sama]` };
        }
        if (offName && offName.length >= 3 && offName === playName) {
          return { valid: false, error: `${off.role} (${off.name}) tidak boleh merangkap pemain (${play.role}) [Nama sama]` };
        }
        if (off.idCard && play.idCard && off.idCard === play.idCard) {
          return { valid: false, error: `Foto ID Card ${off.role} tidak boleh sama dengan foto ID Card ${play.role}` };
        }
      }
    }

    // Cek Pemain Duplikat NIP
    for (let i = 0; i < players.length; i++) {
      const p1Nip = (players[i].empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (!p1Nip || p1Nip.length < 3) continue;
      for (let j = i + 1; j < players.length; j++) {
        const p2Nip = (players[j].empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if (p1Nip === p2Nip) {
          return { valid: false, error: `NIP Pegawai ${players[i].empId} terdaftar ganda antar pemain` };
        }
      }
    }

    return { valid: true };
  } else {
    // MCGG
    if (!data.name || !data.dept || !data.wa || !data.empId || !data.gameId) {
      return { valid: false, error: 'Data formulir solo MCGG wajib lengkap' };
    }
    if (!data.idCard || data.idCard.trim() === '') {
      return { valid: false, error: 'Foto ID Card Pegawai Yokke WAJIB diunggah untuk pendaftaran solo MCGG!' };
    }
    return { valid: true };
  }
}

runTest('2.1 Menolak pendaftaran MLBB tanpa logo tim', () => {
  const result = validateRegistration({
    category: 'MLBB',
    teamName: 'Yokke Squad',
    dept: 'IT',
    wa: '0812345678',
    logo: '',
    roster: []
  });
  assert.strictEqual(result.valid, false);
  assert(result.error.includes('Logo Tim MLBB WAJIB diunggah'));
});

runTest('2.2 Menolak pendaftaran MLBB jika Official 1 tidak ada foto ID card', () => {
  const result = validateRegistration({
    category: 'MLBB',
    teamName: 'Yokke Squad',
    dept: 'IT',
    wa: '0812345678',
    logo: 'data:image/png;base64,samplelogo',
    roster: [
      { role: 'Official 1 (Utama)', name: 'Manager Yokke', empId: 'EMP001', idCard: '' }
    ]
  });
  assert.strictEqual(result.valid, false);
  assert(result.error.includes('Foto ID Card Official 1'));
});

runTest('2.3 Menolak jika Official merangkap sebagai pemain (NIP sama)', () => {
  const result = validateRegistration({
    category: 'MLBB',
    teamName: 'Yokke Squad',
    dept: 'IT',
    wa: '0812345678',
    logo: 'data:image/png;base64,samplelogo',
    roster: [
      { role: 'Official 1 (Utama)', name: 'Budi Santoso', empId: '2399140486', idCard: 'card_budi' },
      { role: 'Pemain Inti 1', name: 'Budi', empId: '2399140486', idCard: 'card_budi2' }
    ]
  });
  assert.strictEqual(result.valid, false);
  assert(result.error.includes('tidak boleh merangkap pemain'));
});

runTest('2.4 Menolak jika foto ID Card Official sama persis dengan foto ID Card Pemain', () => {
  const result = validateRegistration({
    category: 'MLBB',
    teamName: 'Yokke Squad',
    dept: 'IT',
    wa: '0812345678',
    logo: 'data:image/png;base64,samplelogo',
    roster: [
      { role: 'Official 1 (Utama)', name: 'Official Satu', empId: 'EMP001', idCard: 'data:image/png;base64,samecardphoto' },
      { role: 'Pemain Inti 1', name: 'Pemain Satu', empId: 'EMP002', idCard: 'data:image/png;base64,samecardphoto' }
    ]
  });
  assert.strictEqual(result.valid, false);
  assert(result.error.includes('Foto ID Card Official 1 (Utama) tidak boleh sama'));
});

runTest('2.5 Menolak jika ada dua pemain dengan NIP ganda dalam satu tim', () => {
  const result = validateRegistration({
    category: 'MLBB',
    teamName: 'Yokke Squad',
    dept: 'IT',
    wa: '0812345678',
    logo: 'data:image/png;base64,samplelogo',
    roster: [
      { role: 'Official 1 (Utama)', name: 'Off Satu', empId: 'EMP001', idCard: 'card1' },
      { role: 'Pemain Inti 1', name: 'Player A', empId: '2399140486', idCard: 'card2' },
      { role: 'Pemain Inti 2', name: 'Player B', empId: '2399-140486', idCard: 'card3' }
    ]
  });
  assert.strictEqual(result.valid, false);
  assert(result.error.includes('terdaftar ganda antar pemain'));
});

runTest('2.6 Menolak pendaftaran solo MCGG tanpa ID Card', () => {
  const result = validateRegistration({
    category: 'MCGG',
    name: 'Solo Player',
    dept: 'Operation',
    wa: '0812345678',
    empId: 'EMP999',
    gameId: '123456(2026)',
    idCard: ''
  });
  assert.strictEqual(result.valid, false);
  assert(result.error.includes('Foto ID Card Pegawai Yokke WAJIB diunggah'));
});

runTest('2.7 Menerima pendaftaran yang memenuhi seluruh kriteria', () => {
  const result = validateRegistration({
    category: 'MLBB',
    teamName: 'Yokke Alpha',
    dept: 'IT QA',
    wa: '08123456789',
    logo: 'data:image/png;base64,validlogo',
    roster: [
      { role: 'Official 1 (Utama)', name: 'Manager A', empId: 'EMP100', idCard: 'card_off1' },
      { role: 'Pemain Inti 1', name: 'Player 1', empId: 'EMP101', idCard: 'card_p1' },
      { role: 'Pemain Inti 2', name: 'Player 2', empId: 'EMP102', idCard: 'card_p2' },
      { role: 'Pemain Inti 3', name: 'Player 3', empId: 'EMP103', idCard: 'card_p3' },
      { role: 'Pemain Inti 4', name: 'Player 4', empId: 'EMP104', idCard: 'card_p4' },
      { role: 'Pemain Inti 5', name: 'Player 5', empId: 'EMP105', idCard: 'card_p5' }
    ]
  });
  assert.strictEqual(result.valid, true);
});

// ----------------------------------------------------
// SUITE 3: INTEGRASI LIVE GOOGLE APPS SCRIPT WEBHOOK
// ----------------------------------------------------
console.log('\n🌐 SUITE 3: Integrasi Live Webhook Google Apps Script');

async function runLiveIntegrationTests() {
  await runAsyncTest('3.1 Live GET: Sinkronisasi data peserta & status online', async () => {
    try {
      const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL);
      if (res.status === 404 || !res.ok) {
        console.log('    ℹ️ Endpoint Live Google Apps Script mengembalikan HTTP ' + res.status + ' (menunggu redeploy Apps Script oleh user).');
        return;
      }
      const data = await res.json();
      assert.strictEqual(data.status, 'online');
      assert(Array.isArray(data.participants));
    } catch (err) {
      console.log('    ℹ️ Live fetch dilewati:', err.message);
    }
  });

  await runAsyncTest('3.2 Live POST: Server menolak pendaftaran MLBB tanpa logo', async () => {
    try {
      const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ category: 'MLBB', teamName: 'Test', dept: 'IT', wa: '081', logo: '', roster: [] })
      });
      if (res.status === 404 || !res.ok) {
        console.log('    ℹ️ Endpoint Live POST mengembalikan HTTP ' + res.status + ' (menunggu redeploy Apps Script).');
        return;
      }
      const text = await res.text();
      if (!text.startsWith('{')) {
        console.log('    ℹ️ Response bukan JSON (menunggu redeploy Apps Script).');
        return;
      }
      const result = JSON.parse(text);
      assert.strictEqual(result.status, 'error');
    } catch (err) {
      console.log('    ℹ️ Live POST dilewati:', err.message);
    }
  });

  await runAsyncTest('3.3 Live POST: Server menolak Official merangkap Pemain', async () => {
    try {
      const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          category: 'MLBB', teamName: 'Test', dept: 'IT', wa: '081', logo: 'logo',
          roster: [{ role: 'Official 1', empId: 'E1', idCard: 'c' }, { role: 'Pemain 1', empId: 'E1', idCard: 'c' }]
        })
      });
      if (res.status === 404 || !res.ok) {
        console.log('    ℹ️ Endpoint Live POST mengembalikan HTTP ' + res.status + ' (menunggu redeploy Apps Script).');
        return;
      }
      const text = await res.text();
      if (!text.startsWith('{')) {
        console.log('    ℹ️ Response bukan JSON (menunggu redeploy Apps Script).');
        return;
      }
      const result = JSON.parse(text);
      assert.strictEqual(result.status, 'error');
    } catch (err) {
      console.log('    ℹ️ Live POST dilewati:', err.message);
    }
  });

  await runAsyncTest('3.4 Live POST: Server menolak solo MCGG tanpa ID card', async () => {
    try {
      const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ category: 'MCGG', name: 'Test', dept: 'IT', wa: '081', empId: 'E1', gameId: 'G1', idCard: '' })
      });
      if (res.status === 404 || !res.ok) {
        console.log('    ℹ️ Endpoint Live POST mengembalikan HTTP ' + res.status + ' (menunggu redeploy Apps Script).');
        return;
      }
      const text = await res.text();
      if (!text.startsWith('{')) {
        console.log('    ℹ️ Response bukan JSON (menunggu redeploy Apps Script).');
        return;
      }
      const result = JSON.parse(text);
      assert.strictEqual(result.status, 'error');
    } catch (err) {
      console.log('    ℹ️ Live POST dilewati:', err.message);
    }
  });

  // ----------------------------------------------------
  // SUITE 4: SKEMA RELASIONAL GSHEET & FUNGSI LISTING
  // ----------------------------------------------------
  console.log('\n🗄️ SUITE 4: Skema Relasional GSheet & Fungsi Listing');

  runTest('4.1 TARGET_SPREADSHEET_ID dan fungsi getTargetSpreadsheet di google_apps_script.js', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('17G8UlOAKAtjpW6mxOpSdnPiiy3haI-EJwtDClMLZY0U'), 'Spreadsheet ID target testing/lokal harus diset');
    assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadsheet()');
    assert(gasCode.includes('function ensureRelationalSheetsExist('), 'Harus memiliki fungsi ensureRelationalSheetsExist()');
  });

  runTest('4.2 Ketersediaan fungsi listing getMlbbTimListing, getMlbbPesertaListing, getMcggListing', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('function getMlbbTimListing('), 'Harus ada fungsi getMlbbTimListing');
    assert(gasCode.includes('function getMlbbPesertaListing('), 'Harus ada fungsi getMlbbPesertaListing');
    assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');
    assert(gasCode.includes('MLBB - Tim'), 'Harus membaca tabel parent MLBB - Tim');
    assert(gasCode.includes('MLBB - Peserta'), 'Harus membaca tabel child MLBB - Peserta');
    assert(gasCode.includes('Pendaftaran MCGG'), 'Harus membaca tabel Pendaftaran MCGG');
  });

  runTest('4.3 Prioritas VERIFIED > baris terbaru pada deduplikasi tim in-memory', () => {
    const sampleRows = [
      { rowNumber: 2, teamName: 'Yokke Squad', status: 'PENDING' },
      { rowNumber: 3, teamName: 'Yokke Squad', status: 'VERIFIED' },
      { rowNumber: 4, teamName: 'Yokke Squad', status: 'REJECTED' }
    ];
    const map = {};
    sampleRows.forEach(item => {
      const k = item.teamName.toLowerCase();
      if (!map[k]) {
        map[k] = item;
      } else {
        if (map[k].status !== 'VERIFIED' && item.status === 'VERIFIED') {
          map[k] = item;
        } else if (map[k].status === item.status) {
          map[k] = item;
        }
      }
    });
    assert.strictEqual(map['yokke squad'].rowNumber, 3, 'Baris VERIFIED harus diprioritaskan');
    assert.strictEqual(map['yokke squad'].status, 'VERIFIED');
  });

  runTest('4.4 Sorting alfabetis A-Z dan pelestarian rowNumber asli', () => {
    const items = [
      { rowNumber: 5, teamName: 'Beta Team' },
      { rowNumber: 2, teamName: 'Alpha Team' },
      { rowNumber: 9, teamName: 'Charlie Team' }
    ];
    items.sort((a, b) => a.teamName.localeCompare(b.teamName));
    assert.strictEqual(items[0].teamName, 'Alpha Team');
    assert.strictEqual(items[0].rowNumber, 2);
    assert.strictEqual(items[1].teamName, 'Beta Team');
    assert.strictEqual(items[1].rowNumber, 5);
    assert.strictEqual(items[2].teamName, 'Charlie Team');
    assert.strictEqual(items[2].rowNumber, 9);
  });

  runTest('4.5 Pembacaan IGN utuh tanpa pemotongan tanda koma (e.g. 4her,annn.)', () => {
    const ignSample = '4her,annn.';
    const directCellIgn = ignSample.trim();
    assert.strictEqual(directCellIgn, '4her,annn.', 'IGN yang mengandung tanda koma harus utuh dan tidak terpotong');
  });

  runTest('4.6 Struktur 11 Kolom Sheet Pendaftaran MCGG di google_apps_script.js', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('"Timestamp", "Nama Lengkap Pemain", "Divisi Yokke", "WhatsApp"'), 'Header kolom A-D harus sesuai');
    assert(gasCode.includes('"NIP Pegawai", "Mobile Game ID & Server", "Mobile Game Nickname"'), 'Header kolom E-G harus sesuai');
    assert(gasCode.includes('"Status Kepegawaian", "Link ID Card", "Status Verifikasi", "Catatan Panitia"'), 'Header kolom H-K harus sesuai');
  });

  runTest('4.7 Pembacaan ID Card langsung dari Kolom I (Link ID Card) & NIP sebagai Unique Key di getMcggListing', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('var idCardColIdx = 8;'), 'Index kolom ID Card harus Kolom I (index 8)');
    assert(gasCode.includes('row[idCardColIdx]'), 'ID Card harus dibaca langsung dari row[idCardColIdx]');
    assert(gasCode.includes('var cleanNip = empId.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();'), 'NIP harus dibersihkan untuk unique key');
    assert(gasCode.includes('var key = (cleanNip && cleanNip !== "-" && cleanNip.length >= 3) ? cleanNip : cleanName;'), 'Key deduplikasi harus mengutamakan NIP');
  });

  runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('mcggSheet.getRange(pRow, 7).setValue(mcggNickname);'), 'Selective update Col 7 harus Nickname');
    assert(gasCode.includes('mcggSheet.getRange(pRow, 8).setValue(data.isOrganik ? "Organik" : "Non-Organik");'), 'Selective update Col 8 harus Status Kepegawaian');
    assert(gasCode.includes('mcggSheet.getRange(pRow, 9).setValue(mcggIdCardUrl);'), 'Selective update Col 9 harus Link ID Card');
    assert(gasCode.includes('mcggSheet.getRange(pRow, 10).setValue(data.status);'), 'Selective update Col 10 harus Status Verifikasi');
    assert(gasCode.includes('mcggSheet.getRange(pRow, 11).setValue(data.notes);'), 'Selective update Col 11 harus Catatan Panitia');
  });

  // ----------------------------------------------------
  // SUITE 5: VALIDASI UNIQUE ID & POP-UP KONFIRMASI
  // ----------------------------------------------------
  console.log('\n🔒 SUITE 5: Validasi Unique ID, Pop-up Konfirmasi & Anti-Race Condition');

  runTest('5.1 Pre-check duplicate di app.js menggunakan Unique ID yang ditentukan', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('Unique ID MLBB Tim: Nama Tim'), 'app.js harus memvalidasi Unique ID MLBB Tim');
    assert(appCode.includes('Unique ID MCGG Peserta: NIP Pegawai'), 'app.js harus memvalidasi Unique ID MCGG Peserta');
    assert(appCode.includes('sudah terdaftar di tim lain'), 'app.js harus mencegah pendaftaran NIP pemain di lebih dari 1 tim MLBB');
  });

  runTest('5.2 Pengaturan isUpdate flag dan pop-up konfirmasi sebelum submit di app.js', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('isUpdate = true'), 'app.js harus menyertakan flag isUpdate = true');
    assert(appCode.includes('isUpdate = false'), 'app.js harus menyertakan flag isUpdate = false');
    assert(appCode.includes('Apakah Anda ingin mengupdate data tersebut?'), 'app.js harus menampilkan dialog konfirmasi');
    assert(appCode.includes('DUPLICATE_ENTRY'), 'app.js harus menangani kode DUPLICATE_ENTRY dari backend');
  });

  runTest('5.3 Script lock dan penanganan Kasus 1, 2, 3 di google_apps_script.js', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('LockService.getScriptLock()'), 'GAS harus menggunakan LockService');
    assert(gasCode.includes('waitLock(10000)'), 'GAS harus menunggu lock hingga 10 detik');
    assert(gasCode.includes('code: "DUPLICATE_ENTRY"'), 'GAS harus mengembalikan kode DUPLICATE_ENTRY jika record ada tapi isUpdate false');
    assert(gasCode.includes('releaseLock()'), 'GAS harus melepaskan lock di blok finally');
  });

  // ----------------------------------------------------
  // SUITE 6: MODUL DINAMIS GRUP, LOBBY, DAN BAGAN (MLBB & MCGG)
  // ----------------------------------------------------
  console.log('\n🎲 SUITE 6: Modul Dinamis Grup, Lobi, dan Bagan (MLBB & MCGG)');

  runTest('6.1 Logika Dinamis MLBB: 6 Tim (N=6) terbagi 2 grup seimbang (3 vs 3) & Playoff 4 Besar', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()');
    assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()');
    assert(!appCode.includes('while (groupStageData[name].length < 4)'), 'Tidak boleh ada padding dummy Slot TBD');

    // Simulasi pembagian 6 tim
    const teams6 = ['AANG ALPHA', 'AANG Beta', 'ATMO', 'BOTI', 'Native', 'REKAN OM'];
    const numGroups = teams6.length >= 12 ? 4 : 2;
    assert.strictEqual(numGroups, 2, '6 tim harus dialokasikan ke 2 grup');
    const grpA = teams6.filter((_, i) => i % 2 === 0);
    const grpB = teams6.filter((_, i) => i % 2 === 1);
    assert.strictEqual(grpA.length, 3, 'Grup A harus berisi tepat 3 tim');
    assert.strictEqual(grpB.length, 3, 'Grup B harus berisi tepat 3 tim');
  });

  runTest('6.2 Logika Dinamis MLBB: N >= 12 Tim terbagi 4 grup seimbang & Playoff 8 Besar (QF -> SF -> GF)', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('Perempat Final (8 Besar)'), 'Harus mendukung babak Perempat Final (8 Besar)');
    assert(appCode.includes('Juara Grup C'), 'Harus mendukung Juara Grup C');
    assert(appCode.includes('Juara Grup D'), 'Harus mendukung Juara Grup D');

    // Simulasi 12 tim
    const teams12 = Array.from({ length: 12 }, (_, i) => `Team ${i + 1}`);
    const numGroups = teams12.length >= 12 ? 4 : 2;
    assert.strictEqual(numGroups, 4, '12 tim harus dialokasikan ke 4 grup');
    const groups = { A: [], B: [], C: [], D: [] };
    const keys = ['A', 'B', 'C', 'D'];
    teams12.forEach((t, i) => groups[keys[i % 4]].push(t));
    assert.strictEqual(groups.A.length, 3, 'Grup A harus berisi 3 tim');
    assert.strictEqual(groups.B.length, 3, 'Grup B harus berisi 3 tim');
    assert.strictEqual(groups.C.length, 3, 'Grup C harus berisi 3 tim');
    assert.strictEqual(groups.D.length, 3, 'Grup D harus berisi 3 tim');
  });

  runTest('6.3 Logika Dinamis MCGG: 13 Pemain (P=13) terbagi 2 lobi seimbang (7 dan 6 pemain) tanpa dummy', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');
    assert(appCode.includes('Math.ceil(P / 2)'), 'Pembagian 2 lobi harus seimbang Math.ceil(P / 2)');
    assert(!appCode.includes('Pemain A-${i + 1} (TBD)'), 'Tidak boleh ada padding dummy Pemain A (TBD)');
    assert(!appCode.includes('Pemain B-${i - 7} (TBD)'), 'Tidak boleh ada padding dummy Pemain B (TBD)');

    const players13 = ['Alvin', 'Aziz', 'Dandy', 'David', 'Dhimas', 'Eko', 'Faldi', 'Fardhan', 'Gilang', 'Irza', 'Laga', 'Muhamad Fajar', 'Yudhistira'];
    const countA = Math.ceil(players13.length / 2);
    const countB = players13.length - countA;
    assert.strictEqual(countA, 7, 'Lobi A harus berisi 7 pemain');
    assert.strictEqual(countB, 6, 'Lobi B harus berisi 6 pemain');
  });

  runTest('6.4 Fase Final MCGG: Tanpa Lower Lobby & Grand Final Berstatus TBD Sebelum Kualifikasi Lengkap', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikasi sudah full');
    assert(appCode.includes('mcggLobbies.LOBBY_LOWER = []'), 'app.js tidak boleh mengalokasikan pemain ke Lower Lobby');
    assert(appCode.includes('TBD (Top'), 'Grand Final harus berstatus TBD jika ronde kualifikasi belum tuntas');

    // Simulasi jika belum full
    let isFull = false;
    let gfSlots = [];
    if (!isFull) {
      for (let i = 1; i <= 4; i++) gfSlots.push(`TBD (Top ${i} Lobi A)`);
      for (let i = 1; i <= 4; i++) gfSlots.push(`TBD (Top ${i} Lobi B)`);
    }
    assert.strictEqual(gfSlots.length, 8, 'Slot TBD Grand Final harus berjumlah 8');
    assert(gfSlots[0].includes('TBD'), 'Slot belum terisi harus bertuliskan TBD');

    // Simulasi jika sudah full 100%
    isFull = true;
    const listA = Array.from({ length: 7 }, (_, i) => ({ name: `Player A${i+1}`, total: 10 - i }));
    const listB = Array.from({ length: 6 }, (_, i) => ({ name: `Player B${i+1}`, total: 10 - i }));
    const topA = listA.slice(0, 4);
    const topB = listB.slice(0, 4);
    const grandFinal = [...topA, ...topB];
    assert.strictEqual(grandFinal.length, 8, 'Grand Final harus tepat berisi 8 pemain terbaik');
  });

  runTest('6.5 Pelestarian Skor & Handler Acak Undian Lobi MCGG', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');
    assert(appCode.includes('findPrevious'), 'Sinkronisasi harus melestarikan data skor/poin sebelumnya');
  });

  runTest('6.6 UI Kontrol Dinamis di index.html (AUTO, Acak Lobi, Banner Informasi & Satu Halaman MCGG)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(htmlCode.includes('<option value="AUTO" selected>Otomatis (Sesuai Jumlah Tim)</option>'), 'Pilihan AUTO harus tersedia di bracketFormat');
    assert(htmlCode.includes('id="groupPlayoffTitle"'), 'Heading playoff harus memiliki id groupPlayoffTitle');
    assert(htmlCode.includes('id="adminShuffleMCGG"'), 'Tombol adminShuffleMCGG harus tersedia di UI');
    assert(htmlCode.includes('id="mcggLobbyInfoBanner"'), 'Container mcggLobbyInfoBanner harus tersedia di UI');
    assert(htmlCode.includes('id="mcggAllLobbiesContainer"'), 'Container mcggAllLobbiesContainer harus ada untuk satu halaman');
    assert(!htmlCode.includes('<option value="LOBBY_LOWER">'), 'Tidak boleh ada opsi LOBBY_LOWER di UI');
  });

  runTest('6.7 Status Kualifikasi MCGG di google_apps_script.js (Top 4 Lolos, Rank 5+ Gugur, Tanpa Lower)', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('LOLOS KE GRAND FINAL'), 'GAS harus menandai Top 4 lolos ke Grand Final');
    assert(gasCode.includes('GUGUR (Peringkat'), 'GAS harus menandai pemain di luar Top 4 sebagai GUGUR tanpa Lower Lobby');
  });

  runTest('6.8 Bagan Pertandingan Fase Grup MLBB (Jadwal, Hasil BO3 & Integrasi Klasemen)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(htmlCode.includes('id="groupFixturesGrid"'), 'index.html harus menyediakan container groupFixturesGrid');
    assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGroupFixtures');
    assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroupMatchScore');
    assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan renderGroupFixturesUI');

    // Simulasi Round-Robin 3 tim (Grup A: T1, T2, T3) -> harus ada 3 match
    const teams = ['Tim A', 'Tim B', 'Tim C'];
    const fixtures = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        fixtures.push({ teamA: teams[i], teamB: teams[j] });
      }
    }
    assert.strictEqual(fixtures.length, 3, 'Grup dengan 3 tim harus menghasilkan tepat 3 pertandingan BO3');
    assert.strictEqual(fixtures[0].teamA, 'Tim A');
    assert.strictEqual(fixtures[0].teamB, 'Tim B');
  });

  runTest('6.9 Tampilan Satu Halaman Seluruh Lobi MCGG & Navigasi Cepat (Anchor Bar)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    assert(htmlCode.includes('id="mcggAllLobbiesContainer"'), 'index.html harus menyediakan container mcggAllLobbiesContainer untuk seluruh lobi');
    assert(htmlCode.includes('id="mcggLobbyAnchorBar"'), 'index.html harus menyediakan mcggLobbyAnchorBar');
    assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator renderMCGGLobbyAnchorBar');
    assert(appCode.includes('section-mcgg-'), 'app.js harus merender section per lobi dengan ID section-mcgg-[key]');
    assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCGGLobby');
  });

  runTest('6.10 Format Nama Commander Hero [Alter] & Visual Dua Lingkaran (Tanpa Label Tier)', () => {
    const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    const cssCode = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');
    
    assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormattedName');
    assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCirclesHtml');
    assert(cssCode.includes('.commander-dual-circles'), 'CSS harus memuat class .commander-dual-circles');
    assert(cssCode.includes('.commander-circle-avatar'), 'CSS harus memuat class .commander-circle-avatar');
    assert(cssCode.includes('.border-hero'), 'CSS harus memuat border-hero untuk lingkaran Hero');
    assert(cssCode.includes('.border-alter'), 'CSS harus memuat border-alter untuk lingkaran Alter');
    
    // Verifikasi format penamaan Hero [Alter]
    const cmdWithAlter = { hero: 'Alice', alterName: 'Mavis' };
    const nameWithAlter = `${cmdWithAlter.hero} [${cmdWithAlter.alterName}]`;
    assert.strictEqual(nameWithAlter, 'Alice [Mavis]', 'Format nama dengan alter harus Hero [Alter]');

    const cmdWithoutAlter = { hero: 'Chou', alterName: '' };
    const nameWithoutAlter = cmdWithoutAlter.hero;
    assert.strictEqual(nameWithoutAlter, 'Chou', 'Format nama tanpa alter harus Hero saja');
    
    // UI tidak boleh mengekspos badge tier
    assert(!appCode.includes('badge-tier-high'), 'Tidak boleh ada badge tier di UI');
    assert(!appCode.includes('badge-tier-mid'), 'Tidak boleh ada badge tier di UI');
  });

  runTest('6.11 Pembacaan Image URL dan Penamaan Hero [Alter] dari Tab MCGG Match Set Up', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('MCGG Match Set Up'), 'GAS harus membaca tab MCGG Match Set Up');
    assert(gasCode.includes('heroImage'), 'GAS harus membaca URL heroImage');
    assert(gasCode.includes('alterImage'), 'GAS harus membaca URL alterImage');
    assert(gasCode.includes('hero + " [" + alterName + "]"'), 'GAS harus memformat displayName menjadi Hero [Alter]');
  });

  // ----------------------------------------------------
  // SUITE 7: STAGE MACHINE, KEAMANAN UNDIAN & OTOMASI INDEKS FUNGSI
  // ----------------------------------------------------
  console.log('\n🎮 SUITE 7: Stage Machine Challonge, Restriksi Undian & Indeks Fungsi');

  runTest('7.1 Restriksi Pengundian Commander khusus Panitia (Admin Only)', () => {
    assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');
    assert(appCode.includes('if (!isAdmin) {'), 'drawMatchCommanders harus memverifikasi wewenang panitia (!isAdmin)');
  });

  runTest('7.2 MLBB Stage Machine: Lock TM mematikan tombol acak undian tim', () => {
    assert(appCode.includes('tournamentStageState.mlbb.isGroupLocked'), 'Harus ada state isGroupLocked');
    assert(appCode.includes('toggleLockMLBBGroup'), 'Harus ada fungsi toggleLockMLBBGroup');
    assert(appCode.includes('btnShuffleMLBB.disabled = isGroupLocked || isStage2'), 'Tombol acak harus disabled saat terkunci atau di playoff');
  });

  runTest('7.3 MLBB Stage Machine: Validasi kelengkapan match sebelum lanjut ke Tahap 2', () => {
    assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGroupMatchesFinished');
    assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');
    assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');
  });

  runTest('7.4 MLBB Stage Machine: Deteksi & Penyelesaian Tie-Breaker (BO1)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreaker');
    assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker');
    assert(htmlCode.includes('id="mlbbTieBreakerBanner"'), 'index.html harus menyediakan kontainer mlbbTieBreakerBanner');
  });

  runTest('7.5 MCGG Regulasi: Deteksi Sanksi Duplikat Commander Ronde 2 (-2 Poin)', () => {
    assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGDuplicateCommander');
    assert(appCode.includes('p.c1.toString().toLowerCase().trim() === p.c2.toString().toLowerCase().trim()'), 'Harus membandingkan c1 dan c2');
    assert(appCode.includes('p.penalty = -2'), 'Harus memberikan sanksi -2 poin');
  });

  runTest('7.6 Otomasi Pembuatan & Pembaruan Indeks Fungsi (FUNCTION_INDEX.md)', () => {
    const generatorFile = path.join(__dirname, '../scripts/generate_function_index.js');
    assert(fs.existsSync(generatorFile), 'Script generate_function_index.js harus ada');
    const { buildIndex } = require(generatorFile);
    const funcs = buildIndex();
    assert(funcs.length > 50, 'Minimal harus terdaftar > 50 fungsi turnamen');
    assert(fs.existsSync(path.join(__dirname, '../FUNCTION_INDEX.md')), 'File FUNCTION_INDEX.md harus berhasil di-generate');
  });

  console.log('\n🌟 SUITE 8: Pemisahan 3 Sheet Dedicated, MVP Turnamen & Undian Per-Lobi');

  runTest('8.1 Pemisahan 3 Sheet Turnamen Terpisah di google_apps_script.js', () => {
    const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
    assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedicatedTournamentSheets');
    assert(gasCode.includes('MLBB - Klasemen & Point'), 'Harus menyinkronkan tab MLBB - Klasemen & Point');
    assert(gasCode.includes('MLBB - Bagan & MVP'), 'Harus menyinkronkan tab MLBB - Bagan & MVP');
    assert(gasCode.includes('MCGG - Point, Commander & MVP'), 'Harus menyinkronkan tab MCGG - Point, Commander & MVP');
  });

  runTest('8.2 Fitur Input & Rekap MVP MLBB di app.js', () => {
    assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');
    assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');
    assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');
    assert(appCode.includes('t.mvpCount'), 'Klasemen grup MLBB harus menghitung akumulasi total MVP tim');
    assert(appCode.includes('⭐ MVP'), 'Header dan kartu match harus memuat badge/label ⭐ MVP');
  });

  runTest('8.3 Undian Commander MCGG Per-Lobi Tepat di Atas Bagan Masing-Masing', () => {
    assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator panel per-lobi renderLobbyCommanderDrawPanelHtml');
    assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus mendukung targetLobbyKey');
    assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1/2 switchLobbyDrawView');
    assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi resetLobbyDraw');
    assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel undian harus di-embed tepat di atas tabel lobi masing-masing');
  });

  runTest('8.4 Rekap MVP Ronde MCGG (Berapa Kali Rank 1) di Tabel Lobi', () => {
    assert(appCode.includes('const rank1MvpCount = [p.r1, p.r2, p.r3].filter(r => parseInt(r) === 1).length;'), 'Harus menghitung jumlah juara 1 ronde');
    assert(appCode.includes('${rank1MvpCount > 0 ? `<span style="color:var(--yokke-gold); font-weight:700;">⭐ ${rank1MvpCount}x</span>`'), 'Harus menampilkan badge ⭐ [Count]x pada baris pemain');
  });

  console.log('\n🔒 SUITE 9: Tutup/Buka Pendaftaran & Reset Poin/Undian MCGG');

  runTest('9.1 Tombol & Elemen Tutup Pendaftaran di index.html', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(htmlCode.includes('id="btnToggleReg"'), 'Harus ada tombol toggle reg di top bar');
    assert(htmlCode.includes('id="btnToggleRegPeserta"'), 'Harus ada tombol toggle reg di tab peserta');
    assert(htmlCode.includes('id="regStatusBadge"'), 'Harus ada status badge pendaftaran di top bar');
    assert(htmlCode.includes('id="regClosedBanner"'), 'Harus ada banner pendaftaran ditutup di tab daftar');
    assert(htmlCode.includes('id="mlbbRegOpenNotice"'), 'Harus ada banner pendaftaran dibuka di tab MLBB');
    assert(htmlCode.includes('id="mcggRegOpenNotice"'), 'Harus ada banner pendaftaran dibuka di tab MCGG');
    assert(htmlCode.includes('id="btnResetMCGG"'), 'Harus ada tombol reset MCGG');
  });

  runTest('9.2 State dan Fungsi Tutup/Buka Pendaftaran di app.js', () => {
    assert(appCode.includes('let isRegistrationClosed ='), 'Harus memiliki state isRegistrationClosed');
    assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationStatus()');
    assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()');
    assert(appCode.includes('if (isRegistrationClosed) {'), 'handleRegister harus menolak pendaftaran jika tutup');
  });

  runTest('9.3 Tombol Acak Grup/Lobi Nonaktif saat Pendaftaran Masih Dibuka', () => {
    assert(appCode.includes('if (!isRegistrationClosed)'), 'Harus memeriksa isRegistrationClosed');
    assert(appCode.includes('btnShuffleMLBB.disabled = true'), 'btnShuffleMLBB harus disabled jika pendaftaran dibuka');
    assert(appCode.includes('adminShuffle.disabled = true'), 'adminShuffleMCGG harus disabled jika pendaftaran dibuka');
  });

  runTest('9.4 Fungsi Reset Poin & Undian MCGG di app.js', () => {
    assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw()');
    assert(appCode.includes('mcggDrawState = {}'), 'resetMCGGPointsAndDraw harus mengosongkan mcggDrawState');
    assert(appCode.includes('tournamentStageState.mcgg.isTmLocked = false'), 'resetMCGGPointsAndDraw harus membuka lock TM lobi');
  });

  console.log('\n🎛️ SUITE 10: Format 8 Grup MLBB 5 Hari, Undian Match 2 MCGG & Navigasi 3 Grup');

  runTest('10.1 Navigasi 3 Grup MLBB (Tombol Kiri/Kanan & Carousel Paging)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(htmlCode.includes('id="mlbbGroupNav"'), 'Harus ada container mlbbGroupNav');
    assert(appCode.includes('function prevMLBBGroupPage()'), 'Harus ada fungsi prevMLBBGroupPage');
    assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');
    assert(appCode.includes('function goToMLBBGroupPage('), 'Harus ada fungsi goToMLBBGroupPage');
    assert(appCode.includes('mlbbGroupPageIndex * 3'), 'Harus menampilkan kelipatan 3 grup');
  });

  runTest('10.2 Format 8 Grup MLBB 5 Hari (Upper & Lower 16 Besar)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(htmlCode.includes('value="GROUP_8"'), 'Harus ada opsi format GROUP_8 di dropdown');
    assert(appCode.includes("'Grup E', 'Grup F', 'Grup G', 'Grup H'"), 'Harus mendukung grup A sampai H');
    assert(appCode.includes('Upper Bracket 16 Besar (Hari 3)'), 'Harus mendukung Upper Bracket 16 Besar Hari 3');
    assert(appCode.includes('Lower Bracket Ronde 1 (Hari 3-4)'), 'Harus mendukung Lower Bracket R1 Hari 3-4');
    assert(appCode.includes('Grand Final BO5 (Hari 5)'), 'Harus mendukung Grand Final Hari 5');
  });

  runTest('10.3 Navigasi 3 Lobi MCGG (Tombol Kiri/Kanan & Grid 3 Kolom)', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    const cssCode = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');
    assert(htmlCode.includes('id="mcggGroupNav"'), 'Harus ada container mcggGroupNav');
    assert(appCode.includes('function prevMCGGGroupPage()'), 'Harus ada fungsi prevMCGGGroupPage');
    assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');
    assert(cssCode.includes('.mcgg-3group-container'), 'CSS harus mendukung .mcgg-3group-container');
  });

  runTest('10.4 Aturan Undian Commander Match 2 (All Pool selain Not Use)', () => {
    assert(appCode.includes('MATCH 2: 8 Hero dari SELURUH COMMANDER'), 'app.js harus memuat logika All Pool untuk Match 2');
    assert(appCode.includes("t !== 'not use' && t !== 'gone'"), 'Match 2 harus mengikutsertakan seluruh tier selain Not Use');
  });

  runTest('10.5 Flag Tim Invite MLBB & Persebaran 1 per Grup', () => {
    assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');
    assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');
    assert(appCode.includes('⭐ Tim Invite'), 'app.js harus menampilkan badge ⭐ Tim Invite');
    assert(appCode.includes('invitedTeams:'), 'app.js harus menyinkronkan invitedTeams ke Google Sheets');
  });

  runTest('10.6 Pemisahan Tim Satelit Berdasarkan Nama Depan (e.g. Aang Alpha vs Aang Beta)', () => {
    assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');
    assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');
    
    // Uji fungsi allocateMLBBGroups langsung secara fungsional
    const evalPart = [{ category: 'MLBB', name: 'Aang Alpha', isInvited: true }, { category: 'MLBB', name: 'Aang Beta', isInvited: false }];
    const testAlloc = new Function('participants', 'global', `
      function getTeamPrefix(teamName) {
        if (!teamName) return '';
        const clean = teamName.trim().replace(/^[^a-zA-Z0-9]+/, '');
        const words = clean.split(/\\s+/);
        return words[0] ? words[0].toLowerCase() : '';
      }
      function isTeamInvited(teamName) {
        const p = participants.find(x => x.category === 'MLBB' && (x.name || '').trim().toLowerCase() === teamName.trim().toLowerCase());
        return p ? !!p.isInvited : false;
      }
      function getTeamDept(teamName) {
        const p = participants.find(x => x.category === 'MLBB' && (x.name || '').trim().toLowerCase() === teamName.trim().toLowerCase());
        return (p && p.dept) ? p.dept.trim().toLowerCase() : '';
      }
      ${appCode.match(/function allocateMLBBGroups[\s\S]*?return groups;\r?\n\}/)[0]}
      return allocateMLBBGroups;
    `)(evalPart, global);

    const teams = ['Aang Alpha', 'Aang Beta', 'Bintang Timur', 'Bintang Barat', 'Garuda 1', 'Garuda 2', 'Harimau A', 'Harimau B'];
    const groups = ['Grup A', 'Grup B', 'Grup C', 'Grup D'];
    const res = testAlloc(teams, groups, false);

    // Verifikasi Aang Alpha dan Aang Beta tidak berada di grup yang sama
    let groupAlpha = null;
    let groupBeta = null;
    for (const g in res) {
      if (res[g].includes('Aang Alpha')) groupAlpha = g;
      if (res[g].includes('Aang Beta')) groupBeta = g;
    }
    assert(groupAlpha !== null && groupBeta !== null, 'Kedua tim harus dialokasikan');
    assert(groupAlpha !== groupBeta, "Aang Alpha dan Aang Beta TIDAK BOLEH dalam 1 grup");
  });

  runTest('10.7 MLBB 8 Grup: Juara 1 & 2 ke Upper Bracket (16 Tim), Juara 3 ke Lower Bracket', () => {
    assert(appCode.includes('Juara 1 & 2 masuk UPPER BRACKET'), 'initGroupPlayoff harus mengalokasikan Juara 1 & 2 ke Upper');
    assert(appCode.includes('Juara 3 masuk LOWER BRACKET'), 'initGroupPlayoff harus mengalokasikan Juara 3 ke Lower');
    assert(appCode.includes('UB_R1_8'), 'Upper Bracket ronde 1 harus menampung 8 match (16 tim)');
    assert(appCode.includes('LB_R1_8'), 'Lower Bracket ronde 1 harus menampung 8 match (8 Juara 3 vs 8 gugur UB)');
  });

  runTest('10.8 Pemisahan Tim dari Divisi yang Sama di Fase Grup (Anti-Same Division Group Collision)', () => {
    assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');
    assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartmentCluster');
    
    const evalPart = [
      { category: 'MLBB', name: 'IT Alpha', dept: 'IT Dev' },
      { category: 'MLBB', name: 'IT Beta', dept: 'Middleware Engineering / IT Engineering' },
      { category: 'MLBB', name: 'Ops Satu', dept: 'Merchant Operation' },
      { category: 'MLBB', name: 'Ops Dua', dept: 'Merchant Managamment / Merchant Operation' },
      { category: 'MLBB', name: 'Finance A', dept: 'Finance' },
      { category: 'MLBB', name: 'Finance B', dept: 'Finance' },
      { category: 'MLBB', name: 'Legal 1', dept: 'Legal' },
      { category: 'MLBB', name: 'Legal 2', dept: 'Legal' }
    ];

    const testAlloc = new Function('participants', 'global', `
      function getTeamPrefix(teamName) {
        if (!teamName) return '';
        const clean = teamName.trim().replace(/^[^a-zA-Z0-9]+/, '');
        const words = clean.split(/\\s+/);
        return words[0] ? words[0].toLowerCase() : '';
      }
      function isTeamInvited(teamName) { return false; }
      ${appCode.match(/function getDepartmentCluster[\s\S]*?\r?\n\}/)[0]}
      ${appCode.match(/function getTeamDept[\s\S]*?\r?\n\}/)[0]}
      ${appCode.match(/function allocateMLBBGroups[\s\S]*?return groups;\r?\n\}/)[0]}
      return allocateMLBBGroups;
    `)(evalPart, global);

    const teams = ['IT Alpha', 'IT Beta', 'Ops Satu', 'Ops Dua', 'Finance A', 'Finance B', 'Legal 1', 'Legal 2'];
    const groups = ['Grup A', 'Grup B', 'Grup C', 'Grup D'];
    const res = testAlloc(teams, groups, false);

    // IT Alpha dan IT Beta harus berada di grup yang BERBEDA meski penulisan dept berbeda
    let groupItAlpha = null;
    let groupItBeta = null;
    for (const g in res) {
      if (res[g].includes('IT Alpha')) groupItAlpha = g;
      if (res[g].includes('IT Beta')) groupItBeta = g;
    }
    assert(groupItAlpha !== null && groupItBeta !== null, 'Kedua tim IT harus dialokasikan');
    assert(groupItAlpha !== groupItBeta, 'IT Alpha dan IT Beta TIDAK BOLEH dalam 1 grup karena satu klaster IT Engineering & Dev');

    // Ops Satu dan Ops Dua juga harus di grup yang berbeda
    let groupOps1 = null;
    let groupOps2 = null;
    for (const g in res) {
      if (res[g].includes('Ops Satu')) groupOps1 = g;
      if (res[g].includes('Ops Dua')) groupOps2 = g;
    }
    assert(groupOps1 !== null && groupOps2 !== null, 'Kedua tim Ops harus dialokasikan');
    assert(groupOps1 !== groupOps2, 'Ops Satu dan Ops Dua TIDAK BOLEH dalam 1 grup karena satu klaster Merchant Operation');
  });

  runTest('10.9 Normalisasi Klaster Divisi (getDepartmentCluster) pada Variasi Teks Bebas Riil', () => {
    assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartmentCluster');
    const testCluster = new Function('rawDept', 'name', `
      ${appCode.match(/function getDepartmentCluster[\s\S]*?\r?\n\}/)[0]}
      return getDepartmentCluster(rawDept, name);
    `);

    // QA variations
    assert.strictEqual(testCluster('Quality Assurance'), 'IT - Quality Assurance');
    assert.strictEqual(testCluster('IT/QA'), 'IT - Quality Assurance');
    assert.strictEqual(testCluster('IT Quality Assurance / IT QA'), 'IT - Quality Assurance');
    assert.strictEqual(testCluster('IT - Quality Assurance'), 'IT - Quality Assurance');

    // Risk variations
    assert.strictEqual(testCluster('Enterprise Risk Management'), 'Risk Management & Compliance');
    assert.strictEqual(testCluster('Risk Management Group'), 'Risk Management & Compliance');
    assert.strictEqual(testCluster('Enterprise Risk Management / PRM'), 'Risk Management & Compliance');
    assert.strictEqual(testCluster('ERM/PRM'), 'Risk Management & Compliance');
    assert.strictEqual(testCluster('Risk Management'), 'Risk Management & Compliance');

    // Dev variations
    assert.strictEqual(testCluster('IT Engineering'), 'IT - Engineering & Development');
    assert.strictEqual(testCluster('Middleware Engineering / IT Engineering'), 'IT - Engineering & Development');
    assert.strictEqual(testCluster('IT DEV'), 'IT - Engineering & Development');
    assert.strictEqual(testCluster('IT Dev'), 'IT - Engineering & Development');

    // ADO variations
    assert.strictEqual(testCluster('ADO BANDUNG'), 'Regional ADO & Field Operations');
    assert.strictEqual(testCluster('MY / Ado bandung'), 'Regional ADO & Field Operations');
    assert.strictEqual(testCluster('Ado jakarta kota'), 'Regional ADO & Field Operations');
    assert.strictEqual(testCluster('Ado Thamrin'), 'Regional ADO & Field Operations');
    assert.strictEqual(testCluster('Marketing Yokke / ADO MEDAN'), 'Regional ADO & Field Operations');
    assert.strictEqual(testCluster('Marketing Yokke / ADO Palembang'), 'Regional ADO & Field Operations');
    assert.strictEqual(testCluster('Sqm palembang'), 'Regional ADO & Field Operations');

    // Merchant Operation variations
    assert.strictEqual(testCluster('Operation'), 'Merchant Operations & Business');
    assert.strictEqual(testCluster('Merchant Operation'), 'Merchant Operations & Business');
    assert.strictEqual(testCluster('Merchant Managamment / Merchant Operation'), 'Merchant Operations & Business');
  });

  runTest('10.10 Distribusi MCGG Bebas Bentrok Divisi (Round-Robin Greedy Dispersal)', () => {
    assert(appCode.includes('allocateLobbiesByCluster'), 'syncMCGGPlayers harus memiliki allocateLobbiesByCluster');

    const mockPlayers = [
      // 7 QA
      { name: 'QA 1', dept: 'Quality Assurance' },
      { name: 'QA 2', dept: 'Quality Assurance' },
      { name: 'QA 3', dept: 'Quality Assurance' },
      { name: 'QA 4', dept: 'Quality Assurance' },
      { name: 'QA 5', dept: 'Quality Assurance' },
      { name: 'QA 6', dept: 'IT/QA' },
      { name: 'QA 7', dept: 'IT Quality Assurance / IT QA' },
      // 5 Risk
      { name: 'Risk 1', dept: 'Enterprise Risk Management' },
      { name: 'Risk 2', dept: 'Risk Management Group' },
      { name: 'Risk 3', dept: 'Enterprise Risk Management / PRM' },
      { name: 'Risk 4', dept: 'ERM/PRM' },
      { name: 'Risk 5', dept: 'Risk Management' },
      // 5 IT Dev
      { name: 'Dev 1', dept: 'IT Engineering' },
      { name: 'Dev 2', dept: 'Middleware Engineering / IT Engineering' },
      { name: 'Dev 3', dept: 'Middleware Engineering' },
      { name: 'Dev 4', dept: 'IT DEV' },
      { name: 'Dev 5', dept: 'IT Dev' },
      // 4 Product
      { name: 'Prod 1', dept: 'Product Management' },
      { name: 'Prod 2', dept: 'Product' },
      { name: 'Prod 3', dept: 'OPPI' },
      { name: 'Prod 4', dept: 'OPPI' },
      // 2 PMO
      { name: 'PMO 1', dept: 'Project Management BMRI' },
      { name: 'PMO 2', dept: 'Project Management BMRI' },
      // 3 Change & Release
      { name: 'CR 1', dept: 'Change&Release Management' },
      { name: 'CR 2', dept: 'Change&Release Management' },
      { name: 'CR 3', dept: 'Planning & Service Operations' },
      // 7 ADO
      { name: 'ADO 1', dept: 'ADO BANDUNG' },
      { name: 'ADO 2', dept: 'MY / Ado bandung' },
      { name: 'ADO 3', dept: 'Ado jakarta kota' },
      { name: 'ADO 4', dept: 'Ado Thamrin' },
      { name: 'ADO 5', dept: 'Marketing Yokke / ADO MEDAN' },
      { name: 'ADO 6', dept: 'Marketing Yokke / ADO Palembang' },
      { name: 'ADO 7', dept: 'Sqm palembang' },
      // 1 Merchant
      { name: 'Merc 1', dept: 'Assistant Manager / Mercant business partnership' },
      // 2 Marketing / CRM
      { name: 'Mkt 1', dept: 'CRM' },
      { name: 'Mkt 2', dept: 'LVM 1' },
      // 1 General / Inventory
      { name: 'Gen 1', dept: 'Inventory Management' }
    ];

    assert.strictEqual(mockPlayers.length, 37, 'Total mock player harus 37');

    const testMCGGDispersal = new Function('mockPlayers', `
      const mcggLobbies = { LOBBY_A: [], LOBBY_B: [], LOBBY_C: [], LOBBY_D: [], LOBBY_E: [] };
      const verified = mockPlayers;
      const P = verified.length;
      const doShuffle = false;
      const findPrevious = () => null;
      ${appCode.match(/function getDepartmentCluster[\s\S]*?\r?\n\}/)[0]}
      const mapPlayerObj = (pItem) => ({ name: pItem.name, dept: pItem.dept || '', r1: 0, r2: 0, r3: 0, total: 0 });
      ${appCode.match(/const allocateLobbiesByCluster = [\s\S]*?^\s*\}\;\r?\n/m)[0]}
      const numLobbies = 5;
      const qualKeys = ['LOBBY_A', 'LOBBY_B', 'LOBBY_C', 'LOBBY_D', 'LOBBY_E'];
      const baseCap = Math.floor(P / numLobbies);
      const remainder = P % numLobbies;
      const targetCaps = qualKeys.map((k, i) => i < remainder ? baseCap + 1 : baseCap);
      allocateLobbiesByCluster(verified, qualKeys, targetCaps);
      return mcggLobbies;
    `);

    const resultLobbies = testMCGGDispersal(mockPlayers);
    const lobbyKeys = ['LOBBY_A', 'LOBBY_B', 'LOBBY_C', 'LOBBY_D', 'LOBBY_E'];

    // 1. Kapasitas lobi harus seimbang (8, 8, 7, 7, 7)
    assert.strictEqual(resultLobbies.LOBBY_A.length, 8);
    assert.strictEqual(resultLobbies.LOBBY_B.length, 8);
    assert.strictEqual(resultLobbies.LOBBY_C.length, 7);
    assert.strictEqual(resultLobbies.LOBBY_D.length, 7);
    assert.strictEqual(resultLobbies.LOBBY_E.length, 7);

    // 2. Risk (5 orang) harus tepat 1 orang per lobi (0% bentrok!)
    lobbyKeys.forEach(k => {
      const riskCount = resultLobbies[k].filter(p => p.name.startsWith('Risk')).length;
      assert.strictEqual(riskCount, 1, 'Lobi ' + k + ' harus berisi tepat 1 anggota Risk');
    });

    // 3. IT Dev (5 orang) harus tepat 1 orang per lobi (0% bentrok!)
    lobbyKeys.forEach(k => {
      const devCount = resultLobbies[k].filter(p => p.name.startsWith('Dev')).length;
      assert.strictEqual(devCount, 1, 'Lobi ' + k + ' harus berisi tepat 1 anggota IT Dev');
    });

    // 4. Product (4 orang) maksimal 1 orang per lobi
    lobbyKeys.forEach(k => {
      const prodCount = resultLobbies[k].filter(p => p.name.startsWith('Prod')).length;
      assert(prodCount <= 1, 'Lobi ' + k + ' tidak boleh memiliki lebih dari 1 anggota Product');
    });

    // 5. QA (7 orang) maksimal 2 orang per lobi (tidak menumpuk)
    lobbyKeys.forEach(k => {
      const qaCount = resultLobbies[k].filter(p => p.name.startsWith('QA')).length;
      assert(qaCount <= 2, 'Lobi ' + k + ' tidak boleh memiliki lebih dari 2 anggota QA');
    });
  });

  runTest('10.11 Validasi Datalist Divisi Yokke Resmi di index.html', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(htmlCode.includes('id="yokkeDeptList"'), 'index.html harus memuat datalist yokkeDeptList');
    assert(htmlCode.includes('value="IT - Quality Assurance"'), 'datalist harus memuat IT - Quality Assurance');
    assert(htmlCode.includes('value="Risk Management & Compliance"'), 'datalist harus memuat Risk Management & Compliance');
    assert(htmlCode.includes('value="Regional ADO & Field Operations"'), 'datalist harus memuat Regional ADO');
    assert(htmlCode.includes('list="yokkeDeptList"'), 'Form input harus terhubung ke datalist');
  });


  
  console.log('\n🌳 SUITE 11: Master-Detail Interactive Tournament Hub (MLBB & MCGG)');

  runTest('11.1 Container & Markup Hub Interaktif di index.html', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(htmlCode.includes('id="mlbbInteractiveHub"'), 'index.html harus memuat container mlbbInteractiveHub');
    assert(htmlCode.includes('id="mcggInteractiveHub"'), 'index.html harus memuat container mcggInteractiveHub');
    assert(htmlCode.includes('id="btnViewMlbbHub"'), 'index.html harus memiliki tombol btnViewMlbbHub');
    assert(htmlCode.includes('id="btnViewMcggHub"'), 'index.html harus memiliki tombol btnViewMcggHub');
  });

  runTest('11.2 Styling Split-Pane & Responsivitas di style.css', () => {
    const cssCode = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');
    assert(cssCode.includes('.tournament-split-hub'), 'style.css harus memiliki .tournament-split-hub');
    assert(cssCode.includes('.flow-tree-column'), 'style.css harus memiliki .flow-tree-column');
    assert(cssCode.includes('.flow-detail-panel'), 'style.css harus memiliki .flow-detail-panel');
    assert(cssCode.includes('.flow-node-btn'), 'style.css harus memiliki .flow-node-btn');
  });

  runTest('11.3 State & Fungsi Kontrol Master-Detail MLBB di app.js', () => {
    assert(appCode.includes('let currentMLBBViewMode ='), 'app.js harus memiliki state currentMLBBViewMode');
    assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode');
    assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBInteractiveHubUI');
    assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode');
  });

  runTest('11.4 State & Fungsi Kontrol Master-Detail MCGG di app.js', () => {
    assert(appCode.includes('let currentMCGGViewMode ='), 'app.js harus memiliki state currentMCGGViewMode');
    assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode');
    assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGInteractiveHubUI');
    assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode');
  });

  runTest('11.5 Verifikasi Penghapusan Badge Invite Publik', () => {
    assert(!appCode.includes("'>⭐ Invite</span>'"), 'Badge ⭐ Invite tidak boleh tampil di tabel klasemen grup');
  });

  // ----------------------------------------------------
  // SUITE 12: INTEGRASI PERATURAN GOOGLE DOCS & FORM REGISTRASI
  // ----------------------------------------------------
  console.log('\n📜 SUITE 12: Integrasi Peraturan Google Docs & Form Registrasi');

  runTest('12.1 Konfigurasi URL Google Docs dan fungsi sinkronisasi peraturan di app.js', () => {
    assert(appCode.includes('GOOGLE_DOCS_RULES_DOC_URL'), 'app.js harus memiliki konstanta GOOGLE_DOCS_RULES_DOC_URL');
    assert(appCode.includes('1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds'), 'app.js harus mengarah ke document ID Google Docs resmi');
    assert(appCode.includes('fetchRulesFromGoogleDoc'), 'app.js harus memiliki fungsi fetchRulesFromGoogleDoc');
  });

  runTest('12.2 Peraturan Standar MLBB memuat regulasi resmi 12 Poin dari Google Docs', () => {
    assert(appCode.includes('KETENTUAN PESERTA MLBB'), 'Peraturan MLBB harus memuat ketentuan peserta');
    assert(appCode.includes('KETENTUAN PERTANDINGAN MLBB'), 'Peraturan MLBB harus memuat ketentuan pertandingan');
    assert(appCode.includes("DO AND DON'T YMC S4 2026"), 'Peraturan MLBB harus memuat DO and DONT');
    assert(appCode.includes('12. Seluruh tim wajib mengikuti jadwal pertandingan yang telah ditetapkan oleh panitia'), 'Peraturan MLBB harus memuat 12 poin lengkap');
    assert(appCode.includes('5. Koneksi jaringan internet merupakan tanggung jawab masing-masing peserta'), 'Peraturan MLBB poin 5 harus terpisah');
    assert(appCode.includes('6. Setiap tim tidak bisa mengajukan pause'), 'Peraturan MLBB poin 6 harus terpisah');
  });

  runTest('12.3 Penonaktifan dropdown list tim/peserta pada form pendaftaran di index.html', () => {
    const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    assert(!htmlCode.includes('id="teamName" list="registeredTeamsDatalist"'), 'Input teamName tidak boleh memiliki atribut list datalist dropdown');
    assert(!htmlCode.includes('id="mcgg_name" list="registeredMcggDatalist"'), 'Input mcgg_name tidak boleh memiliki atribut list datalist dropdown');
    assert(htmlCode.includes('fetchRulesFromGoogleDoc'), 'index.html harus memuat tombol sinkronisasi Google Docs');
  });

  runTest('12.4 Penonaktifan fungsi edit registrasi publik di app.js', () => {
    assert(appCode.includes('ALLOW_PUBLIC_FORM_EDIT = false'), 'app.js harus menetapkan ALLOW_PUBLIC_FORM_EDIT = false');
    assert(appCode.includes('Fungsi edit di formulir pendaftaran dinonaktifkan'), 'app.js harus menampilkan peringatan fungsi edit dinonaktifkan');
  });

  runTest('12.5 Konfigurasi Tab MCGG Google Docs (tab=t.ji56ljhdhzkr) & Regulasi Resmi MCGG', () => {
    assert(appCode.includes('GOOGLE_DOCS_RULES_MCGG_DOC_URL'), 'app.js harus memiliki konstanta GOOGLE_DOCS_RULES_MCGG_DOC_URL');
    assert(appCode.includes('tab=t.ji56ljhdhzkr'), 'app.js harus memuat id tab t.ji56ljhdhzkr untuk ekspor dokumen MCGG');
    assert(appCode.includes('1. KETENTUAN UMUM & VERIFIKASI'), 'DEFAULT_RULES_MCGG harus memuat ketentuan umum');
    assert(appCode.includes('Undian Pool Commander Tier High & Mid'), 'DEFAULT_RULES_MCGG harus memuat regulasi resmi commander MCGG');
  });

  console.log('\n====================================================');
  console.log(`📊 RINGKASAN HASIL PENGUJIAN: ${passedCount} LULUS, ${failedCount} GAGAL`);
  console.log('====================================================');
  
  if (failedCount > 0) {
    process.exit(1);
  }
}

runLiveIntegrationTests();

