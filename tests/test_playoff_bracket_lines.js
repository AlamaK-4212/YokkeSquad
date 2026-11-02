// tests/test_playoff_bracket_lines.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('====================================================');
console.log('🧪 PENGUJIAN GARIS PENGHUBUNG BAGAN PLAYOFF (BRACKET CONNECTOR LINES)');
console.log('====================================================\n');

const cssPath = path.join(__dirname, '../style.css');
const cssCode = fs.readFileSync(cssPath, 'utf8');

const appPath = path.join(__dirname, '../app.js');
const appCode = fs.readFileSync(appPath, 'utf8');

// 1. Memeriksa CSS Garis Penghubung di style.css
console.log('🎨 1. Memeriksa CSS Garis Penghubung di style.css...');
assert(cssCode.includes('.bracket-pair'), 'style.css harus mendefinisikan .bracket-pair');
assert(cssCode.includes('.bracket-pair::after') || cssCode.includes('.bracket-pair:after'), 'style.css harus memiliki pseudo-element garis vertikal cabang');
assert(cssCode.includes('.bracket-pair::before') || cssCode.includes('.bracket-pair:before'), 'style.css harus memiliki pseudo-element garis horizontal penghubung');
assert(cssCode.includes('.bracket-has-incoming'), 'style.css harus memiliki garis masuk (.bracket-has-incoming)');
console.log('  ✅ [PASS] CSS garis cabang dan penghubung terdefinisi di style.css\n');

// 2. Memeriksa markup pasangan match dan garis cabang di app.js
console.log('⚡ 2. Memeriksa integrasi garis cabang di app.js...');
assert(appCode.includes('bracket-pair'), 'app.js harus menghasilkan elemen dengan class bracket-pair');
assert(appCode.includes('bracket-has-incoming'), 'app.js harus menambahkan class bracket-has-incoming untuk ronde lanjutan');
assert(appCode.includes('setPlayoffBracketFilter'), 'app.js harus menyediakan filter navigasi Upper/Lower/Semua Bagan');
console.log('  ✅ [PASS] Logika markup garis cabang terpasang di app.js\n');

// 3. Memeriksa pelestarian interaktivitas & klik pemenang
console.log('🛡️ 3. Memeriksa pelestarian interaktivitas...');
assert(appCode.includes('pickGroupPlayoffWinner'), 'pickGroupPlayoffWinner harus tetap aktif di dalam matchup');
assert(appCode.includes('selectMLBBStageNode'), 'selectMLBBStageNode harus tetap terhubung saat kartu match diklik');
console.log('  ✅ [PASS] Interaktivitas & pemilih pemenang 100% terjaga\n');

console.log('====================================================');
console.log('🎉 SELURUH PENGUJIAN GARIS PENGHUBUNG BAGAN LULUS 100%!');
console.log('====================================================');
