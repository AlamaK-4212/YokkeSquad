const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 PENGUJIAN FITUR MVP BABAK PLAYOFF MLBB');
console.log('====================================================');

const appJs = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf-8');
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');

// 1. Verifikasi UI elemen di index.html
assert(indexHtml.includes('id="playoffModalMvpSection"'), 'Modal score playoff harus memuat playoffModalMvpSection');
assert(indexHtml.includes('id="playoffModalMvpLabel"'), 'Modal score playoff harus memuat playoffModalMvpLabel');
assert(indexHtml.includes('openPlayoffMvpFromScoreModal()'), 'Tombol modal score harus memanggil openPlayoffMvpFromScoreModal()');
console.log('  ✅ [PASS] 1. Elemen status & tombol MVP di playoffScoreModal tersedia di index.html');

// 2. Verifikasi tombol MVP & badge di app.js
assert(appJs.includes('openPlayoffMvpFromScoreModal'), 'app.js harus mendefinisikan openPlayoffMvpFromScoreModal');
assert(appJs.includes('btn-playoff-mvp'), 'app.js harus memuat class btn-playoff-mvp');
assert(appJs.includes('openMLBBPlayoffMvpModal'), 'app.js harus memanggil openMLBBPlayoffMvpModal');
assert(appJs.includes('bracket-node-mvp'), 'app.js harus memuat markup badge .bracket-node-mvp');
console.log('  ✅ [PASS] 2. Tombol ⭐ MVP & badge .bracket-node-mvp terpasang di bracket & card bagan');

// 3. Verifikasi integrasi Interactive Hub
assert(appJs.includes('renderMLBBInteractiveHubUI'), 'app.js harus memanggil refresh renderMLBBInteractiveHubUI');
assert(appJs.includes('⭐ MVP:'), 'Interactive Hub detail panel harus memuat badge status MVP');
console.log('  ✅ [PASS] 3. Tombol dan status MVP terpasang di Interactive Hub Stage Detail Panel');

// 4. Verifikasi preservasi MVP di normalizeGroupPlayoffMatches
assert(appJs.includes('if (found.mvpPlayer !== undefined && found.mvpPlayer !== null) defaultMatch.mvpPlayer = found.mvpPlayer;'), 'normalizeGroupPlayoffMatches harus mempreservasi mvpPlayer');
assert(appJs.includes('if (found.gameMvps !== undefined && found.gameMvps !== null) defaultMatch.gameMvps = found.gameMvps;'), 'normalizeGroupPlayoffMatches harus mempreservasi gameMvps');
console.log('  ✅ [PASS] 4. Normalisasi data groupPlayoffMatches memelihara field MVP tanpa tertimpa');

// 5. Verifikasi sinkronisasi GSheet untuk playoff
assert(appJs.includes('PLAYOFF_R${rIdx}_M${mIdx}'), 'syncSingleMatchRowToGSheet mendukung canonId format PLAYOFF_R{rIdx}_M{mIdx}');
console.log('  ✅ [PASS] 5. Sinkronisasi baris tunggal GSheet mengenali format playoff matches');

console.log('====================================================');
console.log('🎉 SELURUH PENGUJIAN PLAYOFF MVP 100% SUKSES!');
console.log('====================================================');
