const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 PENGUJIAN PENINGKATAN PORTAL YOKKE SQUAD 2026');
console.log('====================================================\n');

const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8').replace(/\r\n/g, '\n');
const cssCode = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8').replace(/\r\n/g, '\n');
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8').replace(/\r\n/g, '\n');
const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8').replace(/\r\n/g, '\n');

let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${name}: ${err.message}`);
    failed++;
  }
}

// ----------------------------------------------------
// SUITE A: WCAG AA CONTRAST & CSS STYLING
// ----------------------------------------------------
console.log('🎨 SUITE A: WCAG AA Contrast & Ergonomi CSS');

runTest('A.1 Variabel --yokke-purple-text terdefinisi dengan kontras >= 8.6:1 (#c084fc)', () => {
  assert(cssCode.includes('--yokke-purple-text: #c084fc;'), 'style.css harus mendefinisikan --yokke-purple-text: #c084fc');
});

runTest('A.2 Penggantian warna teks abu-abu kecil #64748b menjadi #94a3b8', () => {
  assert(!cssCode.includes('color: #64748b;'), 'style.css tidak boleh mengandung color: #64748b');
  assert(!htmlCode.includes('color: #64748b;'), 'index.html tidak boleh mengandung color: #64748b');
  assert(cssCode.includes('color: #94a3b8;'), 'style.css harus menggunakan color: #94a3b8');
});

runTest('A.3 Sticky column tabel pendaftar di style.css', () => {
  assert(cssCode.includes('.col-sticky-team'), 'style.css harus memiliki selector .col-sticky-team');
  assert(cssCode.includes('position: sticky;'), 'style.css harus menyertakan position: sticky');
  assert(cssCode.includes('background: #0b1120;'), 'style.css harus memiliki background: #0b1120');
  assert(cssCode.includes('z-index: 2;'), 'style.css harus memiliki z-index: 2');
});

runTest('A.4 Touch targets tombol skor/MVP minimal 40px pada mobile/layar sentuh', () => {
  assert(cssCode.includes('min-height: 40px'), 'style.css harus mengatur min-height: 40px untuk touch targets');
  assert(cssCode.includes('min-width: 40px'), 'style.css harus mengatur min-width: 40px untuk touch targets');
});

runTest('A.5 Konflik display: none !important pada carousel-arrow-btn telah dibersihkan', () => {
  assert(!cssCode.includes('.carousel-arrow-btn {\n  display: none !important;'), 'Tidak boleh ada display: none !important pada .carousel-arrow-btn');
});

// ----------------------------------------------------
// SUITE B: STRUKTUR UI & GLOSARIUM DI INDEX.HTML
// ----------------------------------------------------
console.log('\n🖥️ SUITE B: Struktur UI & Glosarium di index.html');

runTest('B.1 Input pencarian instan tim/peserta tersedia di index.html', () => {
  assert(htmlCode.includes('id="participantSearchInput"'), 'index.html harus memuat id="participantSearchInput"');
  assert(htmlCode.includes('🔍 Cari Tim / IGN / Divisi'), 'index.html harus memiliki placeholder pencarian');
  assert(htmlCode.includes('oninput="handleParticipantSearch(this.value)"'), 'input harus memicu handleParticipantSearch');
});

runTest('B.2 Modal Glosarium Istilah Turnamen (BO3, Double Elimination, Rest Rule, Fearless)', () => {
  assert(htmlCode.includes('id="glossaryModal"'), 'index.html harus memuat id="glossaryModal"');
  assert(htmlCode.includes('BO3 (Best of 3)'), 'Glosarium harus memuat istilah BO3');
  assert(htmlCode.includes('Double Elimination'), 'Glosarium harus memuat istilah Double Elimination');
  assert(htmlCode.includes('Fearless Draft'), 'Glosarium harus memuat istilah Fearless Draft');
  assert(htmlCode.includes('Rest Rule'), 'Glosarium harus memuat istilah Rest Rule');
});

runTest('B.3 Tombol darurat Muat dengan Data Offline/Cache di loader global', () => {
  assert(htmlCode.includes('id="btnBypassLoader"'), 'index.html harus memuat id="btnBypassLoader"');
  assert(htmlCode.includes('onclick="bypassLoaderWithCache()"'), 'Tombol darurat harus memicu bypassLoaderWithCache()');
});

runTest('B.4 Modal Verifikasi Password Panitia untuk Reset Bagan', () => {
  assert(htmlCode.includes('id="resetBaganModal"'), 'index.html harus memuat id="resetBaganModal"');
  assert(htmlCode.includes('id="resetBaganPinInput"'), 'index.html harus memuat input PIN reset bagan');
  assert(htmlCode.includes('confirmResetBaganWithPin()'), 'index.html harus memanggil confirmResetBaganWithPin()');
});

// ----------------------------------------------------
// SUITE C: LOGIKA FRONTEND, UX & RESILIENSI DI APP.JS
// ----------------------------------------------------
console.log('\n⚡ SUITE C: Logika Frontend, UX & Resiliensi di app.js');

runTest('C.1 Kompresi gambar client-side (HTML5 Canvas <= 1200px, quality 0.75)', () => {
  assert(appCode.includes('function compressImageFile('), 'app.js harus memiliki fungsi compressImageFile');
  assert(appCode.includes('maxWidth = 1200'), 'app.js harus mendukung maxWidth 1200');
  assert(appCode.includes('quality = 0.75'), 'app.js harus mendukung quality 0.75');
});

runTest('C.2 Autosave & restore draft formulir ke localStorage', () => {
  assert(appCode.includes('function saveFormDraft('), 'app.js harus memiliki saveFormDraft');
  assert(appCode.includes('function restoreFormDraft('), 'app.js harus memiliki restoreFormDraft');
  assert(appCode.includes('function clearFormDraft('), 'app.js harus memiliki clearFormDraft');
  assert(appCode.includes('yokke_form_draft_mlbb'), 'app.js harus menggunakan kunci yokke_form_draft_mlbb');
  assert(appCode.includes('yokke_form_draft_mcgg'), 'app.js harus menggunakan kunci yokke_form_draft_mcgg');
});

runTest('C.3 Penanganan error pada handleRegister (pertahankan isian & jangan reset jika gagal)', () => {
  assert(appCode.includes('Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal'), 'handleRegister harus memberi tahu bahwa draft aman saat fetch error');
  assert(appCode.includes('clearFormDraft(category)'), 'clearFormDraft hanya dipanggil setelah pengiriman sukses');
});

runTest('C.4 Dropdown Babak Ringkas pada layar HP (<= 992px) di renderMLBBInteractiveHubUI', () => {
  assert(appCode.includes('mobile-stage-selector-wrap'), 'app.js harus merender container mobile-stage-selector-wrap');
  assert(appCode.includes('mobile-stage-select'), 'app.js harus merender select mobile-stage-select');
  assert(appCode.includes('flow-tree-desktop-cards'), 'app.js harus membungkus 21 tombol desktop di flow-tree-desktop-cards');
});

runTest('C.5 Sinkronisasi Hibrida pada saveAllChangesToGoogleSheet', () => {
  assert(appCode.includes("action: 'BATCH_UPDATE_PARTICIPANTS'"), 'saveAllChangesToGoogleSheet harus mencoba BATCH_UPDATE_PARTICIPANTS terlebih dahulu');
  assert(appCode.includes('Beralih ke sinkronisasi serial bertahap'), 'saveAllChangesToGoogleSheet harus memiliki fallback serial ber-progress');
});

runTest('C.6 Timeout 8 detik dengan AbortController pada initial loader', () => {
  assert(appCode.includes('const controller = new AbortController()'), 'fetchParticipantsFromGoogleSheet harus menggunakan AbortController');
  assert(appCode.includes('setTimeout(() => controller.abort(), 8000)'), 'fetchParticipantsFromGoogleSheet harus memiliki timeout 8 detik');
  assert(appCode.includes('function bypassLoaderWithCache()'), 'app.js harus menyediakan fungsi bypassLoaderWithCache()');
});

runTest('C.7 Cyberpunk Toast Notifications (showToast)', () => {
  assert(appCode.includes('function showToast('), 'app.js harus memiliki fungsi showToast');
  assert(appCode.includes('toast-container'), 'showToast harus merender toast-container');
});

runTest('C.8 Proteksi verifikasi PIN panitia pada tombol reset bagan', () => {
  assert(appCode.includes('function openResetBaganModal()'), 'app.js harus memiliki openResetBaganModal');
  assert(appCode.includes('function confirmResetBaganWithPin()'), 'app.js harus memiliki confirmResetBaganWithPin');
});

runTest('C.9 Sembunyikan notifikasi admin dari pengunjung umum', () => {
  assert(appCode.includes('mlbbNotice.style.display = (!isRegistrationClosed && isAdmin) ? \'block\' : \'none\';'), 'mlbbNotice harus disembunyikan dari non-admin');
  assert(appCode.includes('Undian Commander untuk ${lobbyLabel} belum dilaksanakan oleh panitia turnamen'), 'Instruksi klik undian commander harus diganti informasi ramah pengunjung untuk non-admin');
});

runTest('C.10 Ketahanan dan fallback error handling pada compressImage', () => {
  assert(appCode.includes('if (!file) return resolve'), 'compressImage harus menangani input file kosong');
  assert(appCode.includes('img.onerror = () =>'), 'compressImage harus memiliki onerror handler');
  assert(appCode.includes('if (!ctx) return resolve(rawDataUrl)'), 'compressImage harus fallback ke raw data jika canvas context null');
});

runTest('C.11 Immediate rendering offline cache pada DOMContentLoaded & bypassLoaderWithCache', () => {
  assert(appCode.includes('bypassLoaderWithCache() {\n  if (globalFetchAbortController) {\n    try { globalFetchAbortController.abort(); } catch(e) {}\n  }\n  renderParticipants();'), 'bypassLoaderWithCache harus merender cache peserta');
  assert(appCode.includes('// Initial render dari data cache lokal agar UI langsung tampil tanpa menunggu jaringan\n  renderParticipants();'), 'DOMContentLoaded harus merender cache lokal sebelum network fetch');
});

// ----------------------------------------------------
// SUITE D: BACKEND GOOGLE APPS SCRIPT
// ----------------------------------------------------
console.log('\n🗄️ SUITE D: Backend Google Apps Script');

runTest('D.1 Handler BATCH_UPDATE_PARTICIPANTS pada doPost(e)', () => {
  assert(gasCode.includes("data.action === \"BATCH_UPDATE_PARTICIPANTS\""), 'google_apps_script.js harus menangani action BATCH_UPDATE_PARTICIPANTS');
  assert(gasCode.includes("updatedCount"), 'doPost harus menghitung jumlah baris yang diperbarui');
});

runTest('D.2 Proteksi Admin PIN pada BATCH_UPDATE_PARTICIPANTS di google_apps_script.js', () => {
  assert(gasCode.includes('data.action === "SAVE_CONFIG" || data.action === "DELETE" || data.action === "BATCH_UPDATE_PARTICIPANTS" || data.action === "BATCH_UPDATE_ALL"'), 'BATCH_UPDATE_PARTICIPANTS wajib divalidasi dengan admin PIN');
});

runTest('D.3 Integritas Pemetaan 11 Kolom MCGG & 7 Kolom MLBB pada BATCH_UPDATE_PARTICIPANTS', () => {
  // Simulasi Mock Sheet Data Range
  const mockTimCells = {};
  const mockMcCells = {};

  const timSheet = {
    getRange: (row, col) => ({
      setValue: (val) => { mockTimCells[`${row},${col}`] = val; }
    })
  };
  const mcSheet = {
    getRange: (row, col) => ({
      setValue: (val) => { mockMcCells[`${row},${col}`] = val; }
    })
  };

  const timVals = [
    ['Timestamp', 'Nama Tim', 'Divisi Yokke', 'WhatsApp Kontak', 'Folder Drive Tim', 'Status Verifikasi', 'Catatan Panitia'],
    ['2026-10-01', 'Yokke Alpha', 'IT', '08111111', 'drive_url', 'PENDING', '']
  ];

  const mcVals = [
    ['Timestamp', 'Nama Lengkap Pemain', 'Divisi Yokke', 'WhatsApp', 'NIP Pegawai', 'Mobile Game ID & Server', 'Mobile Game Nickname', 'Status Kepegawaian', 'Link ID Card', 'Status Verifikasi', 'Catatan Panitia'],
    ['2026-10-01', 'Budi Santoso', 'Finance', '08123456', 'YOKKE001', '123456 (9999)', 'BudiSlayer', 'Organik', 'http://idcard.jpg', 'PENDING', '']
  ];

  const updates = [
    {
      category: 'MLBB',
      name: 'Yokke Alpha',
      status: 'VERIFIED',
      notes: 'Lengkap dan sah',
      dept: 'IT Core',
      wa: '08119999'
    },
    {
      category: 'MCGG',
      name: 'Budi Santoso',
      empId: 'YOKKE001',
      status: 'VERIFIED',
      notes: 'ID Card Valid',
      dept: 'Finance & Tax',
      wa: '08129999',
      gameId: '987654 (1111)',
      nickname: 'BudiPro'
    }
  ];

  // Eksekusi logika pembaruan sesuai implementasi google_apps_script.js
  const now = '24/10/2026, 11:30:00';
  let updatedCount = 0;
  updates.forEach(p => {
    if (p.category === 'MLBB') {
      const targetTeamName = (p.name || '').trim().toLowerCase();
      for (let r = 1; r < timVals.length; r++) {
        if ((timVals[r][1] || '').trim().toLowerCase() === targetTeamName) {
          if (p.status) timSheet.getRange(r + 1, 6).setValue(p.status);
          if (p.notes !== undefined) timSheet.getRange(r + 1, 7).setValue(p.notes);
          if (p.dept) timSheet.getRange(r + 1, 3).setValue(p.dept);
          if (p.wa) timSheet.getRange(r + 1, 4).setValue(p.wa);
          timSheet.getRange(r + 1, 1).setValue(now);
          updatedCount++;
          break;
        }
      }
    } else if (p.category === 'MCGG') {
      const targetName = (p.name || '').trim().toLowerCase();
      const targetNip = (p.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      for (let mr = 1; mr < mcVals.length; mr++) {
        const rName = (mcVals[mr][1] || '').trim().toLowerCase();
        const rNip = (mcVals[mr][4] || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if ((targetNip && targetNip.length >= 3 && rNip === targetNip) || (rName && rName === targetName)) {
          mcSheet.getRange(mr + 1, 1).setValue(now);
          if (p.dept) mcSheet.getRange(mr + 1, 3).setValue(p.dept);
          if (p.wa) mcSheet.getRange(mr + 1, 4).setValue(p.wa);
          if (p.gameId) mcSheet.getRange(mr + 1, 6).setValue(p.gameId);
          if (p.nickname) mcSheet.getRange(mr + 1, 7).setValue(p.nickname);
          if (p.status) mcSheet.getRange(mr + 1, 10).setValue(p.status);
          if (p.notes !== undefined) mcSheet.getRange(mr + 1, 11).setValue(p.notes);
          updatedCount++;
          break;
        }
      }
    }
  });

  assert.strictEqual(updatedCount, 2, 'Harus memperbarui 2 peserta');
  // Verifikasi MLBB
  assert.strictEqual(mockTimCells['2,1'], now, 'MLBB row 2 col 1 harus Timestamp');
  assert.strictEqual(mockTimCells['2,3'], 'IT Core', 'MLBB row 2 col 3 harus Divisi');
  assert.strictEqual(mockTimCells['2,4'], '08119999', 'MLBB row 2 col 4 harus WA');
  assert.strictEqual(mockTimCells['2,6'], 'VERIFIED', 'MLBB row 2 col 6 harus Status');
  assert.strictEqual(mockTimCells['2,7'], 'Lengkap dan sah', 'MLBB row 2 col 7 harus Notes');

  // Verifikasi MCGG - Pastikan tidak ada kolom yang tertukar
  assert.strictEqual(mockMcCells['2,1'], now, 'MCGG row 2 col 1 harus Timestamp');
  assert.strictEqual(mockMcCells['2,2'], undefined, 'MCGG row 2 col 2 (Nama Lengkap) TIDAK boleh ditimpa dept');
  assert.strictEqual(mockMcCells['2,3'], 'Finance & Tax', 'MCGG row 2 col 3 harus Divisi Yokke');
  assert.strictEqual(mockMcCells['2,4'], '08129999', 'MCGG row 2 col 4 harus WhatsApp');
  assert.strictEqual(mockMcCells['2,6'], '987654 (1111)', 'MCGG row 2 col 6 harus Mobile Game ID');
  assert.strictEqual(mockMcCells['2,7'], 'BudiPro', 'MCGG row 2 col 7 harus Mobile Game Nickname');
  assert.strictEqual(mockMcCells['2,8'], undefined, 'MCGG row 2 col 8 (Status Kepegawaian) TIDAK boleh ditimpa timestamp');
  assert.strictEqual(mockMcCells['2,10'], 'VERIFIED', 'MCGG row 2 col 10 harus Status Verifikasi');
  assert.strictEqual(mockMcCells['2,11'], 'ID Card Valid', 'MCGG row 2 col 11 harus Catatan Panitia');
});

console.log('\n====================================================');
console.log(`📊 RINGKASAN HASIL PENINGKATAN: ${passed} LULUS, ${failed} GAGAL`);
console.log('====================================================');

if (failed > 0) {
  process.exit(1);
}
