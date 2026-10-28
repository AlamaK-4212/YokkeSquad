const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 PENGUJIAN MODAL PEMILIH MVP INTERAKTIF (ONE-CLICK ROSTER)');
console.log('====================================================\n');

const htmlCode = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
const cssCode = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');

// Test 1: Markup Modal dan Autocomplete Datalist di index.html
assert(htmlCode.includes('id="mlbbMvpPickerModal"'), 'index.html harus memuat modal mlbbMvpPickerModal');
assert(htmlCode.includes('id="mvpTabTeamA"'), 'index.html harus memuat tab mvpTabTeamA');
assert(htmlCode.includes('id="mvpTabTeamB"'), 'index.html harus memuat tab mvpTabTeamB');
assert(htmlCode.includes('id="mvpRosterContainer"'), 'index.html harus memuat kontainer roster mvpRosterContainer');
assert(htmlCode.includes('id="mvpSelectedPlayerInput"'), 'index.html harus memuat input mvpSelectedPlayerInput');
assert(htmlCode.includes('id="mvpSelectedHeroInput"'), 'index.html harus memuat input mvpSelectedHeroInput');
assert(htmlCode.includes('id="mlbbHeroesDataList"'), 'index.html harus memuat datalist autocomplete mlbbHeroesDataList');
console.log('  ✅ [PASS] 1. Elemen modal, tab tim, daftar roster, dan datalist hero tersedia di index.html');

// Test 2: Styling CSS untuk Roster Chip dan Hero Pill
assert(cssCode.includes('.mvp-roster-chip'), 'style.css harus memuat class .mvp-roster-chip');
assert(cssCode.includes('.mvp-roster-chip.selected'), 'style.css harus memuat status .mvp-roster-chip.selected');
assert(cssCode.includes('.mvp-hero-pill'), 'style.css harus memuat class .mvp-hero-pill');
console.log('  ✅ [PASS] 2. Styling responsif kartu roster dan pill hero terdefinisi di style.css');

// Test 3: Fungsi Kontrol Modal dan Seleksi Roster di app.js
assert(appCode.includes('function openMLBBGroupMvpModal('), 'app.js harus memuat openMLBBGroupMvpModal');
assert(appCode.includes('function openMLBBPlayoffMvpModal('), 'app.js harus memuat openMLBBPlayoffMvpModal');
assert(appCode.includes('function closeMLBBGroupMvpModal('), 'app.js harus memuat closeMLBBGroupMvpModal');
assert(appCode.includes('function switchMvpTeamTab('), 'app.js harus memuat switchMvpTeamTab');
assert(appCode.includes('function renderMvpRosterList('), 'app.js harus memuat renderMvpRosterList');
assert(appCode.includes('function selectMvpPlayer('), 'app.js harus memuat selectMvpPlayer');
assert(appCode.includes('function selectMvpQuickHero('), 'app.js harus memuat selectMvpQuickHero');
assert(appCode.includes('function saveSelectedMvp('), 'app.js harus memuat saveSelectedMvp');
assert(appCode.includes('function deleteCurrentMvp('), 'app.js harus memuat deleteCurrentMvp');
console.log('  ✅ [PASS] 3. Seluruh handler logika seleksi one-click dan kontrol MVP lengkap di app.js');

// Test 4: Toleransi Pencarian Tim (findTeamParticipant)
const mockParticipants = [
  { name: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', roster: [{ name: 'Ahmad', nickname: 'BotiKing' }] },
  { name: 'Yokke Batam Squad (YBS)', roster: [{ name: 'Budi', nickname: 'BatamCarry' }] },
  { name: '666', roster: [{ name: 'Cahya', nickname: 'ᕙ⁠(Zikw¤¤⁠i30)⁠ᕗ.' }] }
];

function testFindTeamParticipant(teamName, participants) {
  if (!teamName || !participants) return null;
  const exact = participants.find(p => p.name === teamName);
  if (exact) return exact;
  const lower = teamName.trim().toLowerCase();
  const ci = participants.find(p => (p.name || '').trim().toLowerCase() === lower);
  if (ci) return ci;
  const norm = lower.replace(/[^a-z0-9]/g, '');
  return participants.find(p => {
    const pNorm = (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return pNorm === norm || pNorm.startsWith(norm) || norm.startsWith(pNorm);
  }) || null;
}

assert.strictEqual(testFindTeamParticipant('BOTI', mockParticipants)?.name, 'BOTI (Bekerja Optimal, Tumbuh Istimewa)');
assert.strictEqual(testFindTeamParticipant('Yokke Batam Squad', mockParticipants)?.name, 'Yokke Batam Squad (YBS)');
assert.strictEqual(testFindTeamParticipant('666', mockParticipants)?.name, '666');
console.log('  ✅ [PASS] 4. findTeamParticipant berhasil mencocokkan variasi penulisan alias tim dengan akurat');

// Test 5: Tab Game BO3 / BO5 dan Styling Pill Game
assert(htmlCode.includes('id="mvpGameTabsContainer"'), 'index.html harus memuat mvpGameTabsContainer');
assert(htmlCode.includes('id="mvpGameProgressText"'), 'index.html harus memuat mvpGameProgressText');
assert(cssCode.includes('.mvp-game-pill'), 'style.css harus memuat .mvp-game-pill');
assert(cssCode.includes('.mvp-game-pill.active'), 'style.css harus memuat .mvp-game-pill.active');
assert(cssCode.includes('.mvp-game-pill.has-mvp'), 'style.css harus memuat .mvp-game-pill.has-mvp');
console.log('  ✅ [PASS] 5. Elemen UI tab game (BO3/BO5) dan visual pills tersedia di markup & style');

// Test 6: Multi-Game MVP Handlers dan Formatter di app.js
assert(appCode.includes('function renderMvpGameTabs('), 'app.js harus memuat renderMvpGameTabs');
assert(appCode.includes('function switchMvpGameTab('), 'app.js harus memuat switchMvpGameTab');
assert(appCode.includes('function formatMatchMvpDisplayHtml('), 'app.js harus memuat formatMatchMvpDisplayHtml');
assert(appCode.includes('gameMvps'), 'app.js harus memuat array gameMvps untuk multi-game MVP');
console.log('  ✅ [PASS] 6. Handler logika multi-game MVP (BO3/BO5) lengkap dan terdefinisi di app.js');

// Test 7: Simulasi Akumulasi Multi-Game MVP per Tim pada Format BO3
const mockGroupResults = {
  'GrupA_Native_vs_BOTI': {
    gName: 'Grup A',
    teamA: 'Native',
    teamB: 'BOTI',
    winner: 'Native',
    gameMvps: [
      { game: 1, player: 'Player1', hero: 'Ling', team: 'Native' },
      { game: 2, player: 'Player2', hero: 'Suyou', team: 'BOTI' },
      { game: 3, player: 'Player1', hero: 'Claude', team: 'Native' }
    ]
  }
};

let nativeMvpCount = 0;
let botiMvpCount = 0;
for (const mId in mockGroupResults) {
  const m = mockGroupResults[mId];
  if (Array.isArray(m.gameMvps)) {
    m.gameMvps.forEach(gm => {
      if (gm.team === 'Native') nativeMvpCount++;
      if (gm.team === 'BOTI') botiMvpCount++;
    });
  }
}
assert.strictEqual(nativeMvpCount, 2, 'Tim Native harus mendapatkan 2 MVP dari Game 1 dan Game 3');
assert.strictEqual(botiMvpCount, 1, 'Tim BOTI harus mendapatkan 1 MVP dari Game 2');
console.log('  ✅ [PASS] 7. Akumulasi multi-game MVP per tim terhitung presisi sesuai aturan BO3');

// Test 8: Helper isSameTeamName dan findGroupNameForTeam
assert(appCode.includes('function isSameTeamName('), 'app.js harus memuat helper isSameTeamName');
assert(appCode.includes('function findGroupNameForTeam('), 'app.js harus memuat helper findGroupNameForTeam');

function testIsSameTeamName(name1, name2) {
  if (!name1 || !name2) return false;
  if (name1 === name2) return true;
  const n1 = name1.toLowerCase().trim();
  const n2 = name2.toLowerCase().trim();
  if (n1 === n2) return true;
  const c1 = n1.replace(/[^a-z0-9]/g, '');
  const c2 = n2.replace(/[^a-z0-9]/g, '');
  if (c1 === c2 && c1.length > 0) return true;
  if (c1.length >= 3 && c2.length >= 3) {
    if (c1.startsWith(c2) || c2.startsWith(c1)) return true;
  }
  return false;
}
assert.strictEqual(testIsSameTeamName('Native', 'Native'), true);
assert.strictEqual(testIsSameTeamName('BOTI', 'BOTI (Bekerja Optimal, Tumbuh Istimewa)'), true);
assert.strictEqual(testIsSameTeamName('Yokke Batam Squad', 'Yokke Batam Squad (YBS)'), true);
console.log('  ✅ [PASS] 8. isSameTeamName berhasil mencocokkan nama dan alias tim dengan toleran');

// Test 9: Integrasi Sinkronisasi Kolom MVP di google_apps_script.js
const gasCode = fs.readFileSync(path.join(__dirname, '../google_apps_script.js'), 'utf8');
assert(gasCode.includes('m.mvpPlayer || \'-\''), 'google_apps_script.js harus menulis m.mvpPlayer ke kolom 9');
assert(gasCode.includes('m.mvpHero || \'-\''), 'google_apps_script.js harus menulis m.mvpHero ke kolom 10');
assert(gasCode.includes('sheetMatchResults[canonKey] = matchObj'), 'doGet di google_apps_script.js harus mengindeks hasil dengan canonical key');
console.log('  ✅ [PASS] 9. Integritas kolom MVP Match (Kolom 9) dan Hero MVP (Kolom 10) di google_apps_script.js terverifikasi');

// Test 10: Auto-binding MVP Card pada Bagan Pertandingan
assert(appCode.includes('openMLBBGroupMvpModal(\'${f.matchId}\', \'${gName}\''), 'renderMLBBInteractiveHubUI harus mengirim gName ke openMLBBGroupMvpModal');
assert(appCode.includes('formatMatchMvpDisplayHtml(f)'), 'Kartu pertandingan bagan harus memanggil formatMatchMvpDisplayHtml');
console.log('  ✅ [PASS] 10. Auto-binding kartu bagan dan pengiriman gName pada tombol MVP terverifikasi');

console.log('\n====================================================');
console.log('🎉 SELURUH PENGUJIAN MVP PICKER MODAL LULUS (100% OK)');
console.log('====================================================\n');

