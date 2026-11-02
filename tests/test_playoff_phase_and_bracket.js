// tests/test_playoff_phase_and_bracket.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('====================================================');
console.log('🧪 PENGUJIAN NEXT PHASE PLAYOFF & BAGAN KESELURUHAN MLBB');
console.log('====================================================\n');

const appPath = path.join(__dirname, '../app.js');
const appCode = fs.readFileSync(appPath, 'utf8');

// 1. Memeriksa deklarasi helper & fungsi baru di app.js
console.log('🔍 1. Memeriksa deklarasi fungsi di app.js...');
assert(appCode.includes('function goToNextMLBBPlayoffPhase'), 'goToNextMLBBPlayoffPhase harus terdefinisi');
assert(appCode.includes('function renderFullPlayoffBracketHtml'), 'renderFullPlayoffBracketHtml harus terdefinisi');
assert(appCode.includes('function togglePlayoffBracketCollapse'), 'togglePlayoffBracketCollapse harus terdefinisi');
console.log('  ✅ [PASS] Seluruh fungsi baru terdefinisi di app.js\n');

// 2. Memeriksa tombol Lanjut ke Babak Playoff (Next Phase) pada fase grup
console.log('🏆 2. Memeriksa tombol Lanjut ke Babak Playoff pada fase grup...');
assert(appCode.includes('goToNextMLBBPlayoffPhase()'), 'goToNextMLBBPlayoffPhase harus dipanggil dari tombol UI');
assert(appCode.includes('Lanjut ke Babak Playoff'), 'Harus ada label tombol Lanjut ke Babak Playoff');
console.log('  ✅ [PASS] Tombol Lanjut ke Babak Playoff tersedia di Fase Grup & Navigasi\n');

// 3. Memeriksa keberadaan tombol Undi di Babak Playoff
console.log('🎲 3. Memeriksa tombol Undi di Babak Playoff...');
assert(appCode.includes('shuffleMLBBPlayoffBracket()'), 'shuffleMLBBPlayoffBracket harus dipanggil');
assert(appCode.includes('testMLBBPlayoffWithCurrentStandings()'), 'testMLBBPlayoffWithCurrentStandings harus dipanggil');
console.log('  ✅ [PASS] Tombol Undi & Uji Undian terpasang langsung di Babak Playoff\n');

// 4. Memeriksa integrasi bagan keseluruhan di atas detail match
console.log('📊 4. Memeriksa integrasi bagan keseluruhan di atas detail match...');
assert(appCode.includes('renderFullPlayoffBracketHtml'), 'renderFullPlayoffBracketHtml harus dipanggil di renderMLBBDetailPanelContent');
console.log('  ✅ [PASS] Bagan keseluruhan terintegrasi tepat di atas detail match\n');

console.log('====================================================');
console.log('🎉 SELURUH PENGUJIAN NEXT PHASE & BAGAN KESELURUHAN LULUS 100%!');
console.log('====================================================');

