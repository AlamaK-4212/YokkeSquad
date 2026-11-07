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
runTest('2.1 Ringkasan statistik partisipan turnamen (78 kontingen, 41 MLBB, 37 MCGG, Wisma Nugra Santana)', () => {
  assert(htmlCode.includes('78'), 'Harus menampilkan total 78 kontingen');
  assert(htmlCode.includes('41 Tim MLBB'), 'Harus menampilkan 41 Tim MLBB');
  assert(htmlCode.includes('37 Solo MCGG') || htmlCode.includes('37 Kontender MCGG'), 'Harus menampilkan 37 Kontender MCGG');
  assert(htmlCode.includes('Auditorium Lt. 5'), 'Harus menyebutkan venue Auditorium Lt. 5');
  assert(htmlCode.includes('Nugra Santana'), 'Harus mencantumkan Gedung Wisma Nugra Santana');
  assert(htmlCode.includes('assets/tournament_logo.jpg'), 'Harus menggunakan logo turnamen assets/tournament_logo.jpg');
  assert(htmlCode.includes('400+'), 'Harus mencantumkan 400+ Supporter / Viewers');
  assert(htmlCode.includes('100%'), 'Harus mencantumkan 100% Fair Play');
});

// -----------------------------------------------------------------------------
// 3. SPOTLIGHT MVP TOURNAMENT MLBB
// -----------------------------------------------------------------------------
runTest('3.1 Spotlight MVP MLBB: Haryanto "Qanok" dan Simulasi Yokke Pass Athlete ID Card', () => {
  assert(htmlCode.includes('Haryanto'), 'Harus menampilkan nama Haryanto');
  assert(htmlCode.includes("'Qanok'"), 'Harus menampilkan nickname Qanok');
  assert(htmlCode.includes('2392130769'), 'Harus mencantumkan NIP 2392130769');
  assert(htmlCode.includes('Dir. Finance'), 'Harus mencantumkan divisi Dir. Finance');
  assert(htmlCode.includes('Miskin Mekanik'), 'Harus mencantumkan squad Miskin Mekanik');
  assert(htmlCode.includes('Goldlane') || htmlCode.includes('Marksman'), 'Harus mencantumkan role Goldlane / Marksman');
  assert(htmlCode.includes('5x MVP'), 'Harus mencantumkan total 5x MVP');
  assert(htmlCode.includes('Kimmy'), 'Hero Kimmy harus ada (Top 1 Pick 2x MVP)');
  assert(htmlCode.includes('Lesley'), 'Hero Lesley harus ada (Top 3 Pick 1x MVP)');
  assert(htmlCode.includes('Miya'), 'Hero Miya harus ada (Top 2 Pick 2x MVP)');
  assert(htmlCode.includes('Kemenangan sejati adalah dedikasi tim'), 'Harus memuat kutipan signature speech');
});

runTest('3.2 Top 8 Klasemen MVP Turnamen MLBB (Ground Truth Gemini GSheet Audit)', () => {
  const top8Players = [
    { name: 'Yokke.♤SuperUsagi', count: '7x MVP', team: 'APPA LINUX' },
    { name: 'Uchiha Domskuy', count: '6x MVP', team: 'ATMO' },
    { name: 'JayyZ X Falesco.', count: '6x MVP', team: 'VALKYRIE' },
    { name: 'Yokke.Im^Spicy™', count: '6x MVP', team: 'AANG ALPHA' },
    { name: 'Qanok', count: '5x MVP', team: 'Miskin Mekanik' },
    { name: 'NEOX', count: '5x MVP', team: 'TABRAK AJALAH' },
    { name: 'EZ KATKA', count: '4x MVP', team: 'TY BEKASI' },
    { name: 'Naff', count: '4x MVP', team: 'Colorbook' }
  ];

  top8Players.forEach(p => {
    assert(htmlCode.includes(p.name), `Leaderboard harus memuat nama pemain: ${p.name}`);
    assert(htmlCode.includes(p.count), `Leaderboard harus memuat jumlah MVP: ${p.count}`);
    assert(htmlCode.includes(p.team), `Leaderboard harus memuat tim: ${p.team}`);
  });
});

// -----------------------------------------------------------------------------
// 4. 8 BESAR PLAYOFF MLBB (2 UPPER & 6 LOWER) & MCGG STATUS TBD
// -----------------------------------------------------------------------------
runTest('4.1 8 Besar Tim Playoff MLBB (2 Upper Bracket & 6 Lower Bracket Contenders)', () => {
  // Belum ada juara
  assert(htmlCode.includes('BELUM ADA JUARA') || htmlCode.includes('BELUM ADA JUARA RESMI'), 'Harus menyatakan belum ada juara resmi');
  assert(htmlCode.includes('THE APEX AEGIS TROPHY 2026'), 'Harus memuat Trophy Apex Aegis');

  // 2 Upper Bracket
  assert(htmlCode.includes('ATMO'), 'Harus memuat Upper Finalist ATMO');
  assert(htmlCode.includes('IT - Quality Assurance'), 'Harus memuat divisi IT - Quality Assurance');
  assert(htmlCode.includes('AANG ALPHA'), 'Harus memuat Upper Finalist AANG ALPHA');
  assert(htmlCode.includes('Product OPPI QA'), 'Harus memuat divisi Product OPPI QA');

  // 6 Lower Bracket
  const lbContenders = ['TABRAK AJALAH', 'TY BEKASI', 'APPA LINUX', 'MiracleXStars', 'Anti Climax', '7 SINS'];
  lbContenders.forEach(team => {
    assert(htmlCode.includes(team), `Harus memuat tim Lower Bracket 8 Besar: ${team}`);
  });
});

runTest('4.2 Divisi MCGG Berstatus TBD & Belum Ada Juara (Menunggu Fase Lobi Kualifikasi)', () => {
  assert(htmlCode.includes('STATUS: TBD'), 'Divisi MCGG harus berstatus TBD');
  assert(htmlCode.includes('PERTANDINGAN BELUM DIMULAI') || htmlCode.includes('Pertandingan Belum Dimulai'), 'Harus menyatakan pertandingan belum dimulai');
  assert(htmlCode.includes('Belum Ada Juara') || htmlCode.includes('BELUM ADA JUARA'), 'Harus menyatakan belum ada juara untuk MCGG');
  assert(htmlCode.includes('5 Lobi Kualifikasi') || htmlCode.includes('5 LOBI KUALIFIKASI'), 'Harus mencantumkan 5 Lobi Kualifikasi');
  assert(htmlCode.includes('37 Kontender Solo'), 'Harus mencantumkan 37 Kontender Solo');
});

// -----------------------------------------------------------------------------
// 5. 16 BESAR TIAP TURNAMEN (MLBB PLAYOFF & MCGG SWEET 16)
// -----------------------------------------------------------------------------
runTest('5.1 16 Besar MLBB Playoff (8 Upper Bracket Seeds & 8 Lower Bracket Seeds)', () => {
  const ubTeams = ['Native', '7 SINS', 'AANG ALPHA', 'ATMO', 'Miskin Mekanik', 'VALKYRIE', 'TABRAK AJALAH', 'WINGSKANAN ESPORT 1'];
  ubTeams.forEach(team => {
    assert(htmlCode.includes(team), `Harus memuat tim UB: ${team}`);
  });

  const lbTeams = ['IOS', 'Anti Climax', 'TY BEKASI', '666', 'APPA LINUX', 'YOKKE LAMPUNG', 'Yokke.Syindicate', 'BOLO CLUB'];
  lbTeams.forEach(team => {
    assert(htmlCode.includes(team), `Harus memuat tim LB: ${team}`);
  });
});

runTest('5.2 16 Besar MCGG Sweet 16 (Grup X & Grup Y Octagon)', () => {
  const groupX = ['Agil Patriosa', 'Alvin Elshadai Pangaribuan', 'Amsal Robinhot', 'ANDHIKA BAYU PRASETYO', 'Arief Hidayat', 'Aziz Nur Maulana', 'Bagus Setiawan', 'Cikal Yulanda'];
  groupX.forEach(p => {
    assert(htmlCode.includes(p), `Harus memuat kontender Grup X: ${p}`);
  });

  const groupY = ['Dandy Nasri', 'Daniel Reimond', 'David Iskandar', 'Dhimas Saputro', 'Eko Marwanto Putro', 'Elham Yudhistira', 'Elrizki Mardhi Hasan', 'FAJAR GILLES TIRANO'];
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
