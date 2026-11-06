/**
 * Test Suite: Validasi Halaman Galeri 40 Komandan MCGG (Stitch SCREEN_44)
 * Menjamin integrasi tampilan, filter tier, pencarian, aset lokal, keamanan data, dan kepatuhan WCAG AA.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const vm = require('vm');

console.log('====================================================');
console.log('🧪 PENGUJIAN HALAMAN GALERI 40 KOMANDAN MCGG');
console.log('   (Stitch Screen SCREEN_44 Integration Verification)');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${description}`);
    passCount++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${description}`);
    console.error(`     Error: ${err.message}`);
    failCount++;
  }
}

const htmlPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'style.css');
const jsPath = path.join(__dirname, '..', 'app.js');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');

// ----------------------------------------------------------------------------
// SUITE 1: STRUKTUR MARKUP DI INDEX.HTML
// ----------------------------------------------------------------------------
console.log('🏛️ SUITE 1: Struktur Markup & Navigasi di index.html');

test('1.1 Tombol navigasi galeri komandan (navBtnCommanders) terpasang di header', () => {
  assert(htmlContent.includes('id="navBtnCommanders"'), 'Tombol navBtnCommanders tidak ditemukan di index.html');
  assert(htmlContent.includes("switchTab('commanders')"), 'Tombol navBtnCommanders harus memicu switchTab("commanders")');
});

test('1.2 Section tab galeri komandan (#tab-commanders) tersedia lengkap', () => {
  assert(htmlContent.includes('id="tab-commanders"'), 'Section #tab-commanders tidak ditemukan');
  assert(htmlContent.includes('commander-gallery-wrapper'), 'Container commander-gallery-wrapper tidak ditemukan');
  assert(htmlContent.includes('id="commanderCardsGrid"'), 'Container grid kartu komandan #commanderCardsGrid tidak ditemukan');
});

test('1.3 Telemetry header dan banner protokol MCGG terpasang', () => {
  assert(htmlContent.includes('MCGG.SYS // 2026'), 'Telemetry brand MCGG.SYS tidak ditemukan');
  assert(htmlContent.includes('PATCH_26.4_VETO_READY'), 'Tag patch telemetry tidak ditemukan');
  assert(htmlContent.includes('openCommanderVetoRulesModal()'), 'Tombol modal aturan veto tidak terpasang');
});

test('1.4 Toolbar pencarian dan pil filter tier terpasang', () => {
  assert(htmlContent.includes('id="commanderSearchInput"'), 'Input pencarian komandan tidak ditemukan');
  assert(htmlContent.includes('id="btnClearCommanderSearch"'), 'Tombol bersihkan pencarian tidak ditemukan');
  assert(htmlContent.includes('filterCommanderGalleryByTier(\'all\')'), 'Tombol filter tier all tidak ditemukan');
  assert(htmlContent.includes('filterCommanderGalleryByTier(\'veto_m1\')'), 'Tombol filter tier veto_m1 tidak ditemukan');
  assert(htmlContent.includes('filterCommanderGalleryByTier(\'non_meta\')'), 'Tombol filter tier non_meta tidak ditemukan');
});

test('1.5 Modal aturan veto (#commanderVetoModal) & detail (#commanderDetailModal) tersedia', () => {
  assert(htmlContent.includes('id="commanderVetoModal"'), 'Modal #commanderVetoModal tidak ditemukan');
  assert(htmlContent.includes('id="commanderDetailModal"'), 'Modal #commanderDetailModal tidak ditemukan');
  assert(htmlContent.includes('Penalti -2 Poin'), 'Modal aturan veto harus menjelaskan penalti -2 poin');
});

// ----------------------------------------------------------------------------
// SUITE 2: STYLING & DESIGN SYSTEM DI STYLE.CSS
// ----------------------------------------------------------------------------
console.log('\n🎨 SUITE 2: Desain Apex Circuit & Ergonomi di style.css');

test('2.1 Class kartu galeri komandan terdefinisi di style.css', () => {
  assert(cssContent.includes('.commander-gallery-wrapper'), '.commander-gallery-wrapper tidak ditemukan');
  assert(cssContent.includes('.commander-cards-grid'), '.commander-cards-grid tidak ditemukan');
  assert(cssContent.includes('.commander-card'), '.commander-card tidak ditemukan');
  assert(cssContent.includes('.cmd-filter-pill'), '.cmd-filter-pill tidak ditemukan');
});

test('2.2 Safeguard WCAG AA: Tidak ada penggunaan color: #64748b pada teks', () => {
  const forbiddenRegex = /color:\s*#64748b\b/gi;
  const matchesCss = cssContent.match(forbiddenRegex);
  const matchesHtml = htmlContent.match(forbiddenRegex);
  assert(!matchesCss, `Ditemukan ${matchesCss ? matchesCss.length : 0} pelanggaran color: #64748b di style.css`);
  assert(!matchesHtml, `Ditemukan ${matchesHtml ? matchesHtml.length : 0} pelanggaran color: #64748b di index.html`);
});

test('2.3 Token warna Apex Circuit diterapkan pada kartu komandan', () => {
  assert(cssContent.includes('--yokke-cyan'), 'Token --yokke-cyan harus dipakai di stylesheet kartu');
  assert(cssContent.includes('--yokke-gold'), 'Token --yokke-gold harus dipakai di stylesheet kartu');
});

// ----------------------------------------------------------------------------
// SUITE 3: LOGIKA & METADATA DI APP.JS
// ----------------------------------------------------------------------------
console.log('\n⚙️ SUITE 3: Logika Frontend & Metadata di app.js');

const noop = () => {};
const dummyEl = {
  style: {},
  classList: { add: noop, remove: noop, contains: () => false },
  innerHTML: '',
  value: '',
  addEventListener: noop
};

const sandbox = {
  console: console,
  window: {
    addEventListener: noop,
    location: { search: '' },
    navigator: {}
  },
  document: {
    getElementById: () => dummyEl,
    querySelectorAll: () => [],
    querySelector: () => dummyEl,
    createElement: () => dummyEl,
    addEventListener: noop
  },
  sessionStorage: {
    getItem: () => null,
    setItem: noop,
    removeItem: noop
  },
  localStorage: {
    getItem: () => null,
    setItem: noop,
    removeItem: noop
  },
  setTimeout: noop,
  clearTimeout: noop,
  setInterval: noop,
  clearInterval: noop
};
sandbox.window.document = sandbox.document;
vm.createContext(sandbox);

// Eksport variabel top-level ke context sandbox
const bridgeCode = `
this.MCGG_COMMANDERS = MCGG_COMMANDERS;
this.MCGG_COMMANDER_METADATA = MCGG_COMMANDER_METADATA;
`;

vm.runInContext(jsContent + '\n' + bridgeCode, sandbox);

test('3.1 Array MCGG_COMMANDERS memiliki tepat 40 komandan resmi', () => {
  assert(Array.isArray(sandbox.MCGG_COMMANDERS), 'MCGG_COMMANDERS harus berupa Array');
  assert.strictEqual(sandbox.MCGG_COMMANDERS.length, 40, `Harus tepat 40 komandan, ditemukan: ${sandbox.MCGG_COMMANDERS.length}`);
});

test('3.2 Setiap komandan memiliki id, name, heroImage lokal (assets/commanders/<id>.png), dan tier', () => {
  sandbox.MCGG_COMMANDERS.forEach((c) => {
    assert(c.id, `Komandan tanpa id: ${JSON.stringify(c)}`);
    assert(c.name, `Komandan ${c.id} tanpa name`);
    assert(c.heroImage && c.heroImage.startsWith('assets/commanders/'), `Komandan ${c.id} icon bukan lokal: ${c.heroImage}`);
    assert(c.tier, `Komandan ${c.id} tanpa tier`);
    
    // Verifikasi fisik file di disk
    const diskPath = path.join(__dirname, '..', c.heroImage);
    assert(fs.existsSync(diskPath), `File fisik icon tidak ada di disk: ${diskPath}`);
  });
});

test('3.3 Tepat 9 Komandan Tier S+ di-blacklist untuk Match 1 (isVetoM1 = true)', () => {
  const vetoCommanders = sandbox.MCGG_COMMANDERS.filter(c => {
    const meta = sandbox.MCGG_COMMANDER_METADATA[c.id];
    return meta && meta.isVetoM1 === true;
  });
  assert.strictEqual(vetoCommanders.length, 9, `Harus tepat 9 komandan Veto M1, ditemukan: ${vetoCommanders.length}`);
  
  const expectedVetoNames = ['Chou', 'Fanny', 'Vale', 'Austus', 'Brody', 'Franco', 'Ling', 'Tharz', 'Wanwan'];
  const actualVetoNames = vetoCommanders.map(c => c.name);
  expectedVetoNames.forEach(name => {
    assert(actualVetoNames.includes(name), `Komandan Veto M1 ${name} tidak ditemukan di daftar veto`);
  });
});

test('3.4 MCGG_COMMANDER_METADATA mencakup seluruh 40 komandan dengan rincian tri-skill', () => {
  assert(sandbox.MCGG_COMMANDER_METADATA, 'MCGG_COMMANDER_METADATA harus terdefinisi');
  const metadataKeys = Object.keys(sandbox.MCGG_COMMANDER_METADATA);
  assert.strictEqual(metadataKeys.length, 40, `Metadata harus memiliki rincian 40 komandan, ditemukan: ${metadataKeys.length}`);
  
  metadataKeys.forEach(k => {
    const meta = sandbox.MCGG_COMMANDER_METADATA[k];
    assert(meta.spec, `Komandan ${k} tanpa spec`);
    assert(meta.skill, `Komandan ${k} tanpa skill`);
    assert(meta.desc, `Komandan ${k} tanpa desc`);
    assert(meta.synergy, `Komandan ${k} tanpa synergy`);
  });
});

test('3.5 Fungsi galeri terdefinisi di scope global', () => {
  assert.strictEqual(typeof sandbox.renderMCGGCommanderGalleryUI, 'function', 'renderMCGGCommanderGalleryUI bukan function');
  assert.strictEqual(typeof sandbox.filterCommanderGalleryByTier, 'function', 'filterCommanderGalleryByTier bukan function');
  assert.strictEqual(typeof sandbox.handleCommanderSearchInput, 'function', 'handleCommanderSearchInput bukan function');
  assert.strictEqual(typeof sandbox.clearCommanderSearch, 'function', 'clearCommanderSearch bukan function');
  assert.strictEqual(typeof sandbox.openCommanderVetoRulesModal, 'function', 'openCommanderVetoRulesModal bukan function');
  assert.strictEqual(typeof sandbox.closeCommanderVetoRulesModal, 'function', 'closeCommanderVetoRulesModal bukan function');
  assert.strictEqual(typeof sandbox.openCommanderDetailModal, 'function', 'openCommanderDetailModal bukan function');
  assert.strictEqual(typeof sandbox.closeCommanderDetailModal, 'function', 'closeCommanderDetailModal bukan function');
});

test('3.6 switchTab("commanders") memanggil renderMCGGCommanderGalleryUI()', () => {
  assert(jsContent.includes("if (tabId === 'commanders')"), 'switchTab tidak menangani tab commanders');
  assert(jsContent.includes('renderMCGGCommanderGalleryUI()'), 'switchTab tidak memicu renderMCGGCommanderGalleryUI');
});

// ----------------------------------------------------------------------------
// SUITE 4: KEAMANAN & REGULASI TURNAMEN GLOBAL
// ----------------------------------------------------------------------------
console.log('\n🔒 SUITE 4: Keamanan & Kepatuhan Regulasi Global');

test('4.1 Zero Prize Pool Display: Tidak ada tampilan nominal uang / Rupiah di tab galeri komandan', () => {
  const commanderSectionMatch = htmlContent.match(/<section id="tab-commanders"[\s\S]*?<\/section>/);
  assert(commanderSectionMatch, 'Bagian tab-commanders tidak dapat diekstrak');
  const sectionStr = commanderSectionMatch[0];
  
  assert(!sectionStr.includes('Rp '), 'Dilarang menampilkan Rp pada tab galeri komandan');
  assert(!sectionStr.toLowerCase().includes('rupiah'), 'Dilarang menampilkan kata rupiah pada tab galeri komandan');
  assert(!sectionStr.toLowerCase().includes('prize pool'), 'Dilarang menampilkan prize pool pada tab galeri komandan');
  assert(!sectionStr.toLowerCase().includes('hadiah uang'), 'Dilarang menampilkan hadiah uang pada tab galeri komandan');
});

test('4.2 No Referee Display: Tidak ada tampilan nama atau kontak wasit pada tab galeri komandan', () => {
  const commanderSectionMatch = htmlContent.match(/<section id="tab-commanders"[\s\S]*?<\/section>/);
  const sectionStr = commanderSectionMatch[0];
  
  assert(!sectionStr.toLowerCase().includes('wasit:'), 'Dilarang mengekspos wasit publik');
  assert(!sectionStr.toLowerCase().includes('referee:'), 'Dilarang mengekspos referee publik');
});

test('4.3 Content Sanitization & Escaping pada pencarian komandan', () => {
  assert(jsContent.includes('escapeHtml'), 'Fungsi escapeHtml harus digunakan untuk sanitasi teks');
});

// ----------------------------------------------------------------------------
// SUITE 5: SIMULASI FILTER & PENCARIAN
// ----------------------------------------------------------------------------
console.log('\n🔍 SUITE 5: Simulasi Filter & Logika Pencarian');

test('5.1 Filter Tier: Menghasilkan subset komandan yang tepat', () => {
  const allCmds = sandbox.MCGG_COMMANDERS;
  const meta = sandbox.MCGG_COMMANDER_METADATA;
  
  const vetoCmds = allCmds.filter(c => meta[c.id] && meta[c.id].isVetoM1);
  assert.strictEqual(vetoCmds.length, 9, 'Filter veto_m1 harus 9 komandan');
  
  const nonMetaCmds = allCmds.filter(c => !meta[c.id] || !meta[c.id].isVetoM1);
  assert.strictEqual(nonMetaCmds.length, 31, 'Filter non_meta harus 31 komandan');
  
  const tierHigh = allCmds.filter(c => c.tier === 'High');
  assert.strictEqual(tierHigh.length, 3, 'Filter High harus 3 komandan');
  
  const tierMeta = allCmds.filter(c => c.tier === 'Meta');
  assert.strictEqual(tierMeta.length, 8, 'Filter Meta harus 8 komandan');
  
  const tierMid = allCmds.filter(c => c.tier === 'Mid');
  assert.strictEqual(tierMid.length, 6, 'Filter Mid harus 6 komandan');
  
  const tierNormal = allCmds.filter(c => c.tier === 'Normal');
  assert.strictEqual(tierNormal.length, 23, 'Filter Normal harus 23 komandan');
});

test('5.2 Logika Pencarian: Menemukan komandan berdasarkan nama dan keahlian', () => {
  const allCmds = sandbox.MCGG_COMMANDERS;
  const meta = sandbox.MCGG_COMMANDER_METADATA;
  
  // Cari 'Chou'
  const query = 'chou';
  const matchedChou = allCmds.filter(c => {
    const m = meta[c.id] || {};
    return c.name.toLowerCase().includes(query) ||
           (m.spec && m.spec.toLowerCase().includes(query)) ||
           (m.skill && m.skill.toLowerCase().includes(query));
  });
  assert(matchedChou.length >= 1, 'Pencarian Chou harus mengembalikan minimal 1 hasil');
  assert.strictEqual(matchedChou[0].name, 'Chou');
  
  // Cari kata kunci sinergi 'Gold'
  const queryGold = 'gold';
  const matchedGold = allCmds.filter(c => {
    const m = meta[c.id] || {};
    return c.name.toLowerCase().includes(queryGold) ||
           (m.spec && m.spec.toLowerCase().includes(queryGold)) ||
           (m.skill && m.skill.toLowerCase().includes(queryGold)) ||
           (m.desc && m.desc.toLowerCase().includes(queryGold));
  });
  assert(matchedGold.length >= 1, 'Pencarian kata gold pada skill komandan harus membuahkan hasil');
});

// ----------------------------------------------------------------------------
// RINGKASAN AKHIR
// ----------------------------------------------------------------------------
console.log('\n====================================================');
console.log(`📊 RINGKASAN PENGUJIAN: ${passCount} LULUS, ${failCount} GAGAL`);
console.log('====================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 SELURUH PENGUJIAN GALERI KOMANDAN MCGG LULUS 100%!');
  process.exit(0);
}
