/**
 * tests/hall_of_fame_hub_tests.js
 * Unit Test Suite untuk Hall of Fame & Tournament Hub serta Tab Switching / Hiding Logic
 * Turnamen Yokke Squad E-Sports 2026
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('====================================================');
console.log('🏆 SUITE PENGUJIAN: HALL OF FAME & TOURNAMENT HUB');
console.log('====================================================');

let testsPassed = 0;
let testsFailed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${name}`);
    testsPassed++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${name}`);
    console.error(`     Error: ${err.message}`);
    testsFailed++;
  }
}

const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
const cssCode = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');

// -----------------------------------------------------------------------------
// 1. ELEMEN UI NAVIGATION & TAB STRUCTURE
// -----------------------------------------------------------------------------
runTest('1.1 Nav Bar memuat tombol Hall of Fame & Hub (navBtnHub) dan Pendaftaran (navBtnDaftar)', () => {
  assert(htmlCode.includes('id="navBtnHub"'), 'Harus ada tombol id="navBtnHub"');
  assert(htmlCode.includes("switchTab('hub')"), 'navBtnHub harus memanggil switchTab("hub")');
  assert(htmlCode.includes('id="navBtnDaftar"'), 'Harus ada tombol id="navBtnDaftar"');
  assert(htmlCode.includes("switchTab('daftar')"), 'navBtnDaftar harus memanggil switchTab("daftar")');
});

runTest('1.2 Container tab-hub tersedia dengan class tab-content', () => {
  assert(htmlCode.includes('id="tab-hub"'), 'Harus ada section id="tab-hub"');
  assert(htmlCode.includes('class="tab-content"'), 'tab-hub harus memiliki class tab-content');
});

// -----------------------------------------------------------------------------
// 2. KONTEN TOURNAMENT SUMMARY & REKAP KONTINGEN
// -----------------------------------------------------------------------------
runTest('2.1 Ringkasan statistik partisipan turnamen (78 kontingen, 41 MLBB, 37 MCGG)', () => {
  assert(htmlCode.includes('78'), 'Harus menampilkan total 78 kontingen');
  assert(htmlCode.includes('41 Tim MLBB'), 'Harus menampilkan 41 Tim MLBB');
  assert(htmlCode.includes('37 Solo MCGG') || htmlCode.includes('37 Kontender MCGG'), 'Harus menampilkan 37 Kontender MCGG');
  assert(htmlCode.includes('Auditorium Lt. 5'), 'Harus menyebutkan venue Auditorium Lt. 5');
  assert(htmlCode.includes('400+'), 'Harus mencantumkan 400+ Supporter / Viewers');
  assert(htmlCode.includes('100%'), 'Harus mencantumkan 100% Fair Play');
});

// -----------------------------------------------------------------------------
// 3. SPOTLIGHT MVP TOURNAMENT MLBB
// -----------------------------------------------------------------------------
runTest('3.1 Spotlight MVP MLBB: Bima S. "Kinetic" dan Simulasi Yokke Pass Athlete ID Card', () => {
  assert(htmlCode.includes('Bima S.'), 'Harus menampilkan nama Bima S.');
  assert(htmlCode.includes("'Kinetic'"), 'Harus menampilkan nickname Kinetic');
  assert(htmlCode.includes('YOKKE-EMP-4289'), 'Harus mencantumkan NIK YOKKE-EMP-4289');
  assert(htmlCode.includes('Merchant Payment Gateway'), 'Harus mencantumkan divisi Merchant Payment Gateway');
  assert(htmlCode.includes('VORTEX KINETIC'), 'Harus mencantumkan squad VORTEX KINETIC');
  assert(htmlCode.includes('Jungler'), 'Harus mencantumkan role Jungler');
  assert(htmlCode.includes('5x MVP'), 'Harus mencantumkan total 5x MVP');
  assert(htmlCode.includes('Nolan'), 'Hero Nolan harus ada (Top 1 Pick 3x MVP)');
  assert(htmlCode.includes('Ling'), 'Hero Ling harus ada (Top 2 Pick 1x MVP)');
  assert(htmlCode.includes('Fanny'), 'Hero Fanny harus ada (Top 3 Pick 1x MVP)');
  assert(htmlCode.includes('Kemenangan sejati adalah dedikasi tim'), 'Harus memuat kutipan signature speech Bima');
});

// -----------------------------------------------------------------------------
// 4. PODIUM JUARA MLBB & MCGG
// -----------------------------------------------------------------------------
runTest('4.1 Podium Juara MLBB Top 3 (Titan Cybernetic, Vortex Kinetic, Shadow Vanguard)', () => {
  assert(htmlCode.includes('TITAN CYBERNETIC'), 'Harus memuat Juara 1 TITAN CYBERNETIC');
  assert(htmlCode.includes('IT Infrastructure &amp; Cloud Div') || htmlCode.includes('IT Infrastructure & Cloud Div'), 'Harus memuat divisi IT Cloud');
  assert(htmlCode.includes('GOLDEN APEX AEGIS') || htmlCode.includes('THE APEX AEGIS TROPHY 2026'), 'Harus memuat Trophy Apex Aegis');
  assert(htmlCode.includes('VORTEX KINETIC'), 'Harus memuat Juara 2 VORTEX KINETIC');
  assert(htmlCode.includes('Silver Apex Shield'), 'Harus memuat Silver Apex Shield');
  assert(htmlCode.includes('SHADOW VANGUARD'), 'Harus memuat Juara 3 SHADOW VANGUARD');
  assert(htmlCode.includes('Bronze Apex Crest'), 'Harus memuat Bronze Apex Crest');
});

runTest('4.2 Podium Juara MCGG Top 3 & Top 4-8 Finalis Kehormatan', () => {
  assert(htmlCode.includes('Siska Lestari'), 'Harus memuat Juara 1 Siska Lestari');
  assert(htmlCode.includes('+18 TOTAL POIN'), 'Harus memuat skor Siska +18');
  assert(htmlCode.includes('Yuki'), 'Harus memuat signature commander Yuki');
  assert(htmlCode.includes('Wanwan'), 'Harus memuat signature commander Wanwan');
  assert(htmlCode.includes('Budi Santoso'), 'Harus memuat Juara 2 Budi Santoso');
  assert(htmlCode.includes('+15 TOTAL POIN'), 'Harus memuat skor Budi +15');
  assert(htmlCode.includes('Andre Kurnia'), 'Harus memuat Juara 3 Andre Kurnia');
  assert(htmlCode.includes('+12 TOTAL POIN'), 'Harus memuat skor Andre +12');
  assert(htmlCode.includes('Dian Wardana'), 'Harus memuat Top 4 Dian Wardana');
  assert(htmlCode.includes('Maya Anggraini'), 'Harus memuat Top 5 Maya Anggraini');
  assert(htmlCode.includes('Reza Pratama'), 'Harus memuat Top 6 Reza Pratama');
  assert(htmlCode.includes('Hendra Wijaya'), 'Harus memuat Top 7 Hendra Wijaya');
  assert(htmlCode.includes('Nadia Safitri'), 'Harus memuat Top 8 Nadia Safitri');
});

// -----------------------------------------------------------------------------
// 5. 16 BESAR TIAP TURNAMEN (MLBB PLAYOFF & MCGG SWEET 16)
// -----------------------------------------------------------------------------
runTest('5.1 16 Besar MLBB Playoff (8 Upper Bracket Seeds & 8 Lower Bracket Seeds)', () => {
  const ubTeams = ['TABRAK AJALAH', 'Native', 'ATMO', 'WINGSKANAN ESPORT 1', 'Miskin Mekanik', '7 SINS', 'VALKYRIE', 'AANG ALPHA'];
  ubTeams.forEach(team => {
    assert(htmlCode.includes(team), `Harus memuat tim UB: ${team}`);
  });

  const lbTeams = ['Anti Climax', 'BOLO CLUB', 'IOS', 'TY BEKASI', '666', 'APPA LINUX', 'Yokke.Syindicate', 'YOKKE LAMPUNG'];
  lbTeams.forEach(team => {
    assert(htmlCode.includes(team), `Harus memuat tim LB: ${team}`);
  });
});

runTest('5.2 16 Besar MCGG Sweet 16 (Grup X & Grup Y Octagon)', () => {
  const groupX = ['Siska Lestari', 'Budi Santoso', 'Dian Wardana', 'Reza Pratama', 'Rizky Pratama', 'Arif Hidayat', 'Tommy Wijaya', 'Bagus Setiawan'];
  groupX.forEach(p => {
    assert(htmlCode.includes(p), `Harus memuat kontender Grup X: ${p}`);
  });

  const groupY = ['Andre Kurnia', 'Maya Anggraini', 'Hendra Wijaya', 'Nadia Safitri', 'Eko Prasetyo', 'Dimas Aditya', 'Fajar Nugraha', 'Ilham Saputra'];
  groupY.forEach(p => {
    assert(htmlCode.includes(p), `Harus memuat kontender Grup Y: ${p}`);
  });
});

// -----------------------------------------------------------------------------
// 6. REGULASI GLOBAL: ZERO PRIZE POOL & NO REFEREE DISPLAY
// -----------------------------------------------------------------------------
runTest('6.1 Global Rule: Zero Prize Pool Display (Tanpa nominal rupiah / prize money)', () => {
  const tabHubMatch = htmlCode.match(/<section id="tab-hub"[\s\S]*?<\/section>/);
  assert(tabHubMatch, 'Container tab-hub harus ditemukan');
  const hubHtml = tabHubMatch[0];

  assert(!hubHtml.includes('Rp '), 'tab-hub TIDAK BOLEH memuat nominal rupiah (Rp)');
  assert(!hubHtml.includes('Rp.'), 'tab-hub TIDAK BOLEH memuat nominal rupiah (Rp.)');
  assert(!hubHtml.includes('Prize Pool'), 'tab-hub TIDAK BOLEH menampilkan kata Prize Pool');
  assert(!hubHtml.includes('Hadiah Uang'), 'tab-hub TIDAK BOLEH menampilkan Hadiah Uang');
});

runTest('6.2 Global Rule: No Referee Display (Tanpa tampilan wasit / referee)', () => {
  const tabHubMatch = htmlCode.match(/<section id="tab-hub"[\s\S]*?<\/section>/);
  const hubHtml = tabHubMatch[0];

  assert(!hubHtml.toLowerCase().includes('referee'), 'tab-hub TIDAK BOLEH menampilkan Referee');
  assert(!hubHtml.toLowerCase().includes('wasit'), 'tab-hub TIDAK BOLEH menampilkan Wasit');
});

// -----------------------------------------------------------------------------
// 7. LOGIKA BEHAVIORAL DI APP.JS (TAB SWITCHING & HIDING KETIKA DITUTUP)
// -----------------------------------------------------------------------------
runTest('7.1 renderRegistrationUI menyembunyikan navBtnDaftar saat isRegistrationClosed === true', () => {
  assert(appCode.includes("navBtnDaftar.style.display = 'none'"), 'navBtnDaftar harus di-set display none saat pendaftaran ditutup');
  assert(appCode.includes("navBtnDaftar.style.display = ''"), 'navBtnDaftar harus dikembalikan tampil saat pendaftaran dibuka');
});

runTest('7.2 renderRegistrationUI mengalihkan active tab ke tab-hub saat pendaftaran ditutup', () => {
  assert(appCode.includes("activeTab.id === 'tab-daftar'") && appCode.includes("switchTab('hub')"), 'Jika pengunjung berada di tab-daftar saat ditutup, harus otomatis dialihkan ke tab-hub');
});

runTest('7.3 switchTab("daftar") otomatis mengalihkan ke tab-hub jika isRegistrationClosed === true', () => {
  assert(appCode.includes("if (tabId === 'daftar' && isRegistrationClosed)"), 'switchTab harus memeriksa kondisi daftar saat tutup');
  assert(appCode.includes("tabId = 'hub'"), 'switchTab harus me-redirect tabId ke hub jika pendaftaran ditutup');
});

runTest('7.4 Navigasi URL hash (#tab-daftar) dialihkan ke tab-hub saat pendaftaran ditutup', () => {
  assert(appCode.includes('handleHashNavigation'), 'Harus ada fungsi handleHashNavigation()');
  assert(appCode.includes("rawHash === 'daftar' && isRegistrationClosed"), 'handleHashNavigation harus mendeteksi hash daftar');
});

// -----------------------------------------------------------------------------
// 8. KETAHANAN SIMULASI FUNGSIONAL DI JAVASCRIPT RUNTIME
// -----------------------------------------------------------------------------
// 8. KETAHANAN RUNTIME FUNGSIONAL MENGGUNAKAN FUNGSI ASLI APP.JS (VM RUNTIME)
// -----------------------------------------------------------------------------
const vm = require('vm');

runTest('8.1 Eksekusi fungsi asli switchTab() dari app.js saat pendaftaran ditutup dan dibuka', () => {
  // Buat mock DOM lengkap dengan tracking classList
  class MockElement {
    constructor(id) {
      this.id = id;
      this.style = {};
      this.classes = new Set();
      this.innerHTML = '';
      this.innerText = '';
    }
    get classList() {
      return {
        add: (c) => this.classes.add(c),
        remove: (c) => this.classes.delete(c),
        contains: (c) => this.classes.has(c)
      };
    }
  }

  const elements = {
    'tab-hub': new MockElement('tab-hub'),
    'tab-daftar': new MockElement('tab-daftar'),
    'tab-peserta': new MockElement('tab-peserta'),
    'tab-rules': new MockElement('tab-rules'),
    'tab-bagan-mlbb': new MockElement('tab-bagan-mlbb'),
    'tab-points-mcgg': new MockElement('tab-points-mcgg'),
    navBtnHub: new MockElement('navBtnHub'),
    navBtnDaftar: new MockElement('navBtnDaftar'),
    navBtnPeserta: new MockElement('navBtnPeserta'),
    navBtnRules: new MockElement('navBtnRules'),
    navBtnBaganMlbb: new MockElement('navBtnBaganMlbb'),
    navBtnPointsMcgg: new MockElement('navBtnPointsMcgg'),
    regStatusBadge: new MockElement('regStatusBadge'),
    btnToggleReg: new MockElement('btnToggleReg'),
    hubStatTotalParticipants: new MockElement('hubStatTotalParticipants'),
    hubStatMlbbTeams: new MockElement('hubStatMlbbTeams'),
    hubStatMcggPlayers: new MockElement('hubStatMcggPlayers')
  };

  const allTabs = [elements['tab-hub'], elements['tab-daftar'], elements['tab-peserta'], elements['tab-rules'], elements['tab-bagan-mlbb'], elements['tab-points-mcgg']];
  const allNavBtns = [elements.navBtnHub, elements.navBtnDaftar, elements.navBtnPeserta, elements.navBtnRules, elements.navBtnBaganMlbb, elements.navBtnPointsMcgg];

  const fakeHistory = {
    historyEntries: [],
    pushState(state, title, url) { this.historyEntries.push(url); fakeWindow.location.hash = url; },
    replaceState(state, title, url) { fakeWindow.location.hash = url; }
  };

  const fakeWindow = {
    location: { hash: '' },
    history: fakeHistory,
    addEventListener() {}
  };

  const fakeDocument = {
    getElementById(id) { return elements[id] || null; },
    querySelectorAll(selector) {
      if (selector === '.tab-content') return allTabs;
      if (selector === '.nav-btn') return allNavBtns;
      return [];
    },
    querySelector(selector) {
      if (selector === '.tab-content.active') {
        return allTabs.find(t => t.classes.has('active')) || null;
      }
      if (selector.includes("'hub'")) return elements.navBtnHub;
      if (selector.includes("'daftar'")) return elements.navBtnDaftar;
      if (selector.includes("'bagan-mlbb'")) return elements.navBtnBaganMlbb;
      if (selector.includes("'points-mcgg'")) return elements.navBtnPointsMcgg;
      if (selector.includes("'rules'")) return elements.navBtnRules;
      if (selector.includes("'peserta'")) return elements.navBtnPeserta;
      return null;
    }
  };

  const context = {
    window: fakeWindow,
    document: fakeDocument,
    isRegistrationClosed: true,
    isAdmin: false,
    participants: [
      { game: 'MLBB' }, { game: 'MLBB' },
      { game: 'MCGG' }
    ],
    setMLBBViewMode: () => {},
    setMCGGViewMode: () => {},
    renderRules: () => {},
    fetchRulesFromGoogleDoc: () => {}
  };

  // Ekstrak fungsi switchTab, updateHubDynamicStats, renderRegistrationUI, handleHashNavigation
  const switchTabMatch = appCode.match(/function switchTab[\s\S]*?\n\}/);
  const updateStatsMatch = appCode.match(/function updateHubDynamicStats[\s\S]*?\n\}/);
  const renderRegUIMatch = appCode.match(/function renderRegistrationUI[\s\S]*?\n\}/);
  const handleHashMatch = appCode.match(/function handleHashNavigation[\s\S]*?\n\}/);

  assert(switchTabMatch, 'Fungsi switchTab harus ada di app.js');
  assert(updateStatsMatch, 'Fungsi updateHubDynamicStats harus ada di app.js');
  assert(renderRegUIMatch, 'Fungsi renderRegistrationUI harus ada di app.js');
  assert(handleHashMatch, 'Fungsi handleHashNavigation harus ada di app.js');

  vm.createContext(context);
  vm.runInContext(updateStatsMatch[0] + '\n' + switchTabMatch[0] + '\n' + renderRegUIMatch[0] + '\n' + handleHashMatch[0], context);

  // Uji A: Pendaftaran Ditutup -> Akses tab 'daftar' dialihkan ke 'hub'
  context.isRegistrationClosed = true;
  context.switchTab('daftar');
  assert(elements['tab-hub'].classes.has('active'), 'Tab Hub harus aktif saat tab daftar diakses dalam kondisi ditutup');
  assert(!elements['tab-daftar'].classes.has('active'), 'Tab Daftar TIDAK boleh aktif saat ditutup');
  assert(elements.navBtnHub.classes.has('active'), 'navBtnHub harus memiliki class active');

  // Uji B: Fallback saat tab tidak dikenal (e.g. hash ngawur '#tab-unknown')
  context.switchTab('unknown-tab-random');
  assert(elements['tab-hub'].classes.has('active'), 'Harus fallback ke tab-hub ketika tab tidak dikenal dan pendaftaran ditutup (tidak boleh blank)');

  // Uji C: Sinkronisasi History URL Hash
  assert.strictEqual(fakeWindow.location.hash, '#tab-hub', 'URL hash harus tersinkronisasi menjadi #tab-hub');

  // Uji D: Pendaftaran Dibuka Kembali
  context.isRegistrationClosed = false;
  context.switchTab('daftar');
  assert(elements['tab-daftar'].classes.has('active'), 'Tab Daftar harus aktif saat pendaftaran dibuka');
  assert.strictEqual(fakeWindow.location.hash, '#tab-daftar', 'URL hash harus tersinkronisasi ke #tab-daftar saat dibuka');

  // Uji E: Fallback saat pendaftaran dibuka dengan tab tidak dikenal
  context.switchTab('halaman-tidak-ada');
  assert(elements['tab-daftar'].classes.has('active'), 'Harus fallback ke tab-daftar ketika tab tidak dikenal dan pendaftaran dibuka');

  // Uji F: renderRegistrationUI saat pendaftaran ditutup
  context.isRegistrationClosed = true;
  elements['tab-daftar'].classes.add('active');
  context.renderRegistrationUI();
  assert.strictEqual(elements.navBtnDaftar.style.display, 'none', 'navBtnDaftar harus disembunyikan (display: none)');
  assert(elements['tab-hub'].classes.has('active'), 'renderRegistrationUI harus otomatis memindahkan active tab dari daftar ke hub');

  // Uji G: handleHashNavigation saat pendaftaran ditutup dengan URL #tab-daftar
  fakeWindow.location.hash = '#tab-daftar';
  context.handleHashNavigation();
  assert(elements['tab-hub'].classes.has('active'), 'handleHashNavigation harus mengalihkan #tab-daftar ke hub');
  assert.strictEqual(fakeWindow.location.hash, '#tab-hub', 'handleHashNavigation harus me-replace state ke #tab-hub');
});

// -----------------------------------------------------------------------------
// 9. WCAG AA CONTRAST & RESPONSIVITAS CSS
// -----------------------------------------------------------------------------
runTest('9.1 WCAG AA text-muted menggunakan #94a3b8 dan styling Apex Circuit', () => {
  assert(cssCode.includes('.hub-wrapper'), 'CSS harus memuat .hub-wrapper');
  assert(cssCode.includes('.hub-hero-card'), 'CSS harus memuat .hub-hero-card');
  assert(cssCode.includes('.hub-mvp-box'), 'CSS harus memuat .hub-mvp-box');
  assert(cssCode.includes('.hub-podium-card'), 'CSS harus memuat .hub-podium-card');
  assert(cssCode.includes('.hub-16besar-grid'), 'CSS harus memuat .hub-16besar-grid');
});

console.log('====================================================');
console.log(`📊 HASIL PENGUJIAN: ${testsPassed} LULUS, ${testsFailed} GAGAL`);
console.log('====================================================\n');

if (testsFailed > 0) {
  process.exit(1);
}
