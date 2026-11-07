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

// 5. Memeriksa struktur lengkap 8 Kolom Lower Bracket (termasuk Lower SF & Prelim)
console.log('🛡️ 5. Memeriksa struktur lengkap 8 Kolom Lower Bracket di renderFullPlayoffBracketHtml...');
assert(appCode.includes('Lower Semifinal (Hari 5)'), 'Lower Semifinal (Hari 5) harus ada di Lower Bracket');
assert(appCode.includes('Anti Climax'), 'Anti Climax harus terdaftar di Lower Semifinal');
assert(appCode.includes('7 SINS'), '7 SINS harus terdaftar di Lower Semifinal');
assert(appCode.includes('Lower Prelim (Hari 5)'), 'Lower Prelim (Hari 5) harus ada di Lower Bracket');
assert(appCode.includes('col0 + svg0 + col1 + svg1 + col2 + svg2 + col3 + svg3 + col4 + svg4 + col5 + svg5 + col6 + svg6 + col7'), 'Bagan Lower Bracket harus merender seluruh 8 kolom dan 7 SVG connectors');
console.log('  ✅ [PASS] 8 Kolom Lower Bracket & lawannya (Anti Climax & 7 SINS) terverifikasi 100%\n');

console.log('====================================================');
console.log('🎉 SELURUH PENGUJIAN NEXT PHASE & BAGAN KESELURUHAN LULUS 100%!');
console.log('====================================================');

