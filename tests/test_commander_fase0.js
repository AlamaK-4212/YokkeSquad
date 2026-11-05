const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('====================================================');
console.log('🧪 PENGUJIAN FASE 0: 40 OFFICIAL MCGG COMMANDERS');
console.log('====================================================\n');

const appPath = path.join(__dirname, '../app.js');
const appCode = fs.readFileSync(appPath, 'utf8');

const sandbox = { window: {}, document: {}, console: console };
vm.createContext(sandbox);

// Slice out POINT_TABLE through renderCommanderCirclesHtml and findCommanderById
const startIdx = appCode.indexOf('const POINT_TABLE =');
const endIdx = appCode.indexOf('// Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian');
assert(startIdx !== -1 && endIdx !== -1, 'Harus menemukan segmen definisi commander');

const sliceCode = appCode.slice(startIdx, endIdx);
const findCmdStart = appCode.indexOf('function getCommanderById(');
const findCmdEnd = appCode.indexOf('function updateCommanderPoolFromSetup(');
const findCmdCode = appCode.slice(findCmdStart, findCmdEnd);

vm.runInContext(sliceCode + '\n' + findCmdCode + '\nthis.MCGG_COMMANDERS = MCGG_COMMANDERS; this.getCommanderFormattedName = getCommanderFormattedName; this.renderCommanderCirclesHtml = renderCommanderCirclesHtml; this.getCommanderById = getCommanderById;', sandbox);

const { MCGG_COMMANDERS, getCommanderFormattedName, renderCommanderCirclesHtml, getCommanderById } = sandbox;

// 1. Uji Jumlah Komandan Resmi
assert.strictEqual(MCGG_COMMANDERS.length, 40, `Harus ada 40 komandan resmi, ditemukan ${MCGG_COMMANDERS.length}`);
console.log('  ✅ [PASS] 1. Total 40 Official Little Commanders terdefinisi');

// 2. Uji Keberadaan Berkas Aset Lokal di assets/commanders/
MCGG_COMMANDERS.forEach(cmd => {
  assert(cmd.id, 'Komandan harus memiliki ID');
  assert(cmd.name, 'Komandan harus memiliki Nama');
  assert(cmd.heroImage, `Komandan ${cmd.name} harus memiliki heroImage`);
  assert(cmd.heroImage.startsWith('assets/commanders/'), `heroImage harus mengarah ke assets/commanders/: ${cmd.heroImage}`);
  
  const heroFilePath = path.join(__dirname, '..', cmd.heroImage);
  assert(fs.existsSync(heroFilePath), `Berkas lokal gambar hero ${cmd.heroImage} harus ada di disk`);
  
  if (cmd.alterImage) {
    const alterFilePath = path.join(__dirname, '..', cmd.alterImage);
    assert(fs.existsSync(alterFilePath), `Berkas lokal gambar alter ${cmd.alterImage} harus ada di disk`);
  }
});
console.log('  ✅ [PASS] 2. Seluruh 40 gambar potret komandan lokal (assets/commanders/<id>.png) ada di disk');

// 3. Uji Helper Penamaan
const chouFormatted = getCommanderFormattedName(MCGG_COMMANDERS.find(c => c.id === 'chou'));
const aliceFormatted = getCommanderFormattedName(MCGG_COMMANDERS.find(c => c.id === 'alice'));
const yukiFormatted = getCommanderFormattedName(MCGG_COMMANDERS.find(c => c.id === 'yuki'));

assert.strictEqual(chouFormatted, 'Chou', 'Chou format name harus Chou');
assert.strictEqual(aliceFormatted, 'Alice [Mavis]', 'Alice format name harus Alice [Mavis]');
assert.strictEqual(yukiFormatted, 'Yuki [Luo Yi]', 'Yuki format name harus Yuki [Luo Yi]');
assert.strictEqual(getCommanderFormattedName('mavis'), 'Mavis [Alice]', 'getCommanderFormattedName via string ID harus bekerja');
console.log('  ✅ [PASS] 3. getCommanderFormattedName memformat nama tunggal dan hero [alter] dengan presisi');

// 4. Uji Render Dual Circles & Single Circle
const chouCircleHtml = renderCommanderCirclesHtml(MCGG_COMMANDERS.find(c => c.id === 'chou'), 28);
const aliceCircleHtml = renderCommanderCirclesHtml(MCGG_COMMANDERS.find(c => c.id === 'alice'), 28);
const yukiStringCircleHtml = renderCommanderCirclesHtml('yuki', 24);

assert(chouCircleHtml.includes('assets/commanders/chou.png'), 'Circle Chou harus menggunakan assets/commanders/chou.png');
assert(!chouCircleHtml.includes('alter-circle'), 'Chou tanpa alter tidak boleh merender alter-circle');
assert(aliceCircleHtml.includes('assets/commanders/alice.png'), 'Circle Alice harus menggunakan assets/commanders/alice.png');
assert(aliceCircleHtml.includes('assets/commanders/mavis.png'), 'Circle Alice alter harus menggunakan assets/commanders/mavis.png');
assert(aliceCircleHtml.includes('alter-circle'), 'Circle Alice harus memiliki elemen alter-circle');
assert(yukiStringCircleHtml.includes('assets/commanders/yuki.png'), 'renderCommanderCirclesHtml dengan string id harus bekerja');
console.log('  ✅ [PASS] 4. renderCommanderCirclesHtml merender single circle & dual circle secara konsisten');

// 5. Uji Resolusi ID Tepat Seluruh 40 Komandan & Backward Compatibility Aliases
MCGG_COMMANDERS.forEach(c => {
  const found = getCommanderById(c.id);
  assert(found, `getCommanderById("${c.id}") harus ditemukan`);
  assert.strictEqual(found.id, c.id, `getCommanderById("${c.id}") harus mengembalikan "${c.id}", bukan "${found.id}"`);
});

// Verifikasi alter-pair tidak saling menimpa
assert.strictEqual(getCommanderById('mavis').id, 'mavis', 'mavis harus mengembalikan mavis');
assert.strictEqual(getCommanderById('alice').id, 'alice', 'alice harus mengembalikan alice');
assert.strictEqual(getCommanderById('yuki').id, 'yuki', 'yuki harus mengembalikan yuki');
assert.strictEqual(getCommanderById('luoyi').id, 'luoyi', 'luoyi harus mengembalikan luoyi');
assert.strictEqual(getCommanderById('minotaur').id, 'minotaur', 'minotaur harus mengembalikan minotaur');
assert.strictEqual(getCommanderById('brown').id, 'brown', 'brown harus mengembalikan brown');
assert.strictEqual(getCommanderById('harper').id, 'harper', 'harper harus mengembalikan harper');
assert.strictEqual(getCommanderById('alucard').id, 'alucard', 'alucard harus mengembalikan alucard');
assert.strictEqual(getCommanderById('dubi').id, 'dubi', 'dubi harus mengembalikan dubi');
assert.strictEqual(getCommanderById('kalea').id, 'kalea', 'kalea harus mengembalikan kalea');
assert.strictEqual(getCommanderById('remy').id, 'remy', 'remy harus mengembalikan remy');
assert.strictEqual(getCommanderById('lancelot').id, 'lancelot', 'lancelot harus mengembalikan lancelot');
assert.strictEqual(getCommanderById('ragnar').id, 'ragnar', 'ragnar harus mengembalikan ragnar');
assert.strictEqual(getCommanderById('franco').id, 'franco', 'franco harus mengembalikan franco');
assert.strictEqual(getCommanderById('popol').id, 'popol', 'popol harus mengembalikan popol');
assert.strictEqual(getCommanderById('benny').id, 'benny', 'benny harus mengembalikan benny');
assert.strictEqual(getCommanderById('harley').id, 'harley', 'harley harus mengembalikan harley');
assert.strictEqual(getCommanderById('buss').id, 'buss', 'buss harus mengembalikan buss');
assert.strictEqual(getCommanderById('vexana').id, 'vexana', 'vexana harus mengembalikan vexana');
assert.strictEqual(getCommanderById('connie').id, 'connie', 'connie harus mengembalikan connie');
assert.strictEqual(getCommanderById('eggie').id, 'eggie', 'eggie harus mengembalikan eggie');
assert.strictEqual(getCommanderById('diggie').id, 'diggie', 'diggie harus mengembalikan diggie');

// Legacy aliases
assert.strictEqual(getCommanderById('aamon').id, 'austus');
assert.strictEqual(getCommanderById('johnson').id, 'kaboom');
assert.strictEqual(getCommanderById('yuzhong').id, 'pao');
assert.strictEqual(getCommanderById('lunox').id, 'rya');
assert.strictEqual(getCommanderById('lylia').id, 'tharz');
assert.strictEqual(getCommanderById('bersi').id, 'ruby');
console.log('  ✅ [PASS] 5. getCommanderById mendukung resolusi mandiri 40 komandan, alter-pair presisi, dan legacy aliases');

// 6. Uji Pool Filtering Match 1 (Non-Meta) & Match 2 (All Pool)
const nonMetaCandidates = MCGG_COMMANDERS.filter(c => {
  const t = (c.tier || '').toLowerCase().trim();
  return t !== 'meta' && t !== 'not use' && t !== 'gone';
});
const allPoolCandidates = MCGG_COMMANDERS.filter(c => {
  const t = (c.tier || '').toLowerCase().trim();
  return t !== 'not use' && t !== 'gone';
});

assert(nonMetaCandidates.length >= 8, `Non-meta pool harus minimal 8 (ada: ${nonMetaCandidates.length})`);
assert.strictEqual(allPoolCandidates.length, 40, `All pool candidates harus 40 (ada: ${allPoolCandidates.length})`);
console.log(`  ✅ [PASS] 6. Filter pool undian valid (Non-Meta: ${nonMetaCandidates.length} komandan, All-Pool: ${allPoolCandidates.length} komandan)`);

console.log('\n====================================================');
console.log('🎉 SELURUH PENGUJIAN FASE 0 KOMANDAN MCGG LULUS (100% OK)');
console.log('====================================================');
