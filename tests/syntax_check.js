#!/usr/bin/env node
/**
 * Skrip Validasi Sintaks & Parsing JavaScript Mandiri
 * Turnamen Yokke Squad 2026
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const FILES_TO_CHECK = [
  'app.js',
  'google_apps_script.js'
];

// File opsional jika ada
const OPTIONAL_FILES = [
  'mcgg_engine.js',
  'tests/mcgg_engine_tests.js',
  'scripts/mcgg_cli_runner.js'
];

console.log('========================================================');
console.log('🔍 VALIDASI SINTAKS & PARSING JAVASCRIPT');
console.log('========================================================');

let errorCount = 0;

function checkFile(relPath) {
  const fullPath = path.join(ROOT_DIR, relPath);
  if (!fs.existsSync(fullPath)) return;

  try {
    let code = fs.readFileSync(fullPath, 'utf8');
    // Strip shebang jika ada
    if (code.startsWith('#!')) {
      code = '//' + code.slice(2);
    }
    new vm.Script(code, { filename: relPath });
    console.log(`  ✅ [OK] ${relPath} (Parsed successfully, no syntax errors)`);
  } catch (err) {
    console.error(`  ❌ [ERROR] ${relPath}: ${err.message}`);
    errorCount++;
  }
}

FILES_TO_CHECK.forEach(checkFile);
OPTIONAL_FILES.forEach(checkFile);

console.log('========================================================');
if (errorCount === 0) {
  console.log('🎉 SELURUH BERKAS VALID SECARA SINTAKS (100% OK)\n');
  process.exit(0);
} else {
  console.error(`💥 DITEMUKAN ${errorCount} KESALAHAN SINTAKS!\n`);
  process.exit(1);
}

