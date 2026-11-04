const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 PENGUJIAN SERVER-SIDE ADMIN PIN VALIDATION');
console.log('====================================================\n');

const appPath = path.join(__dirname, '../app.js');
const gasPath = path.join(__dirname, '../google_apps_script.js');
const htmlPath = path.join(__dirname, '../index.html');

const appCode = fs.readFileSync(appPath, 'utf8');
const gasCode = fs.readFileSync(gasPath, 'utf8');
const htmlCode = fs.readFileSync(htmlPath, 'utf8');

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

console.log('🔒 1. Memeriksa Proteksi Kebocoran PIN di google_apps_script.js (Backend)...');
runTest('1.1 google_apps_script.js TIDAK mengekspos adminPassword pada appConfig / doGet', () => {
  assert(!gasCode.includes('appConfig.adminPassword ='), 'appConfig tidak boleh mengisi properti adminPassword');
  assert(!gasCode.includes('adminPassword: null,'), 'appConfig tidak boleh memiliki inisialisasi adminPassword');
});

runTest('1.2 Action VERIFY_ADMIN_PIN terdefinisi di doPost(e)', () => {
  assert(gasCode.includes('data.action === "VERIFY_ADMIN_PIN"'), 'doPost wajib menangani action VERIFY_ADMIN_PIN');
  assert(gasCode.includes('function getValidAdminPins(ss)'), 'google_apps_script.js wajib memiliki helper getValidAdminPins');
});

console.log('\n🌐 2. Memeriksa Proteksi Cache & Validasi Server di app.js (Frontend)...');
runTest('2.1 app.js membersihkan yokke_admin_pin dari localStorage saat inisialisasi', () => {
  assert(appCode.includes("localStorage.removeItem('yokke_admin_pin')"), 'app.js harus menghapus yokke_admin_pin dari localStorage');
});

runTest('2.2 app.js TIDAK PERNAH menyimpan yokke_admin_pin ke localStorage', () => {
  assert(!appCode.includes("localStorage.setItem('yokke_admin_pin'"), 'app.js tidak boleh menyimpan yokke_admin_pin ke localStorage');
});

runTest('2.3 verifyAdminPin() merupakan fungsi async yang memvalidasi via Google Apps Script', () => {
  assert(appCode.includes('async function verifyAdminPin()'), 'verifyAdminPin wajib dideklarasikan async');
  assert(appCode.includes("action: 'VERIFY_ADMIN_PIN'"), 'verifyAdminPin wajib mengirim action VERIFY_ADMIN_PIN ke server');
});

runTest('2.4 logoutAdmin() membersihkan seluruh sesi admin dan token', () => {
  assert(appCode.includes('function logoutAdmin()'), 'logoutAdmin harus tersedia');
  assert(appCode.includes("sessionStorage.removeItem('yokke_admin_session_auth')"), 'logoutAdmin harus menghapus sesi otentikasi');
});

console.log('\n🖥️ 3. Memeriksa Modal Login di index.html...');
runTest('3.1 Input PIN mendukung enter key dan tombol submit ber-ID btnLoginSubmit', () => {
  assert(htmlCode.includes('id="btnLoginSubmit"'), 'Tombol login submit harus memiliki id btnLoginSubmit');
  assert(htmlCode.includes("onkeydown=\"if(event.key==='Enter') verifyAdminPin()\""), 'Input PIN harus mendukung submit via tombol Enter');
});

console.log('\n====================================================');
console.log(`📊 RINGKASAN: ${passed} LULUS, ${failed} GAGAL`);
console.log('====================================================');

if (failed > 0) process.exit(1);

