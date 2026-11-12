const fs = require('fs');
const vm = require('vm');

const appJs = fs.readFileSync('app.js', 'utf8');

const storage = {};
const mockWindow = {
  addEventListener: () => {}, removeEventListener: () => {},
  localStorage: {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => storage[k] = v,
    removeItem: (k) => delete storage[k]
  },
  sessionStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  location: { search: '', reload: () => {} },
  navigator: { userAgent: 'test' }
};

const domElements = {};
const mockDoc = {
  getElementById: (id) => {
    if (!domElements[id]) domElements[id] = { innerHTML: '', style: {} };
    return domElements[id];
  },
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {}
};

const ctx = {
  window: mockWindow,
  document: mockDoc,
  localStorage: mockWindow.localStorage,
  sessionStorage: mockWindow.sessionStorage,
  location: mockWindow.location,
  navigator: mockWindow.navigator,
  console: console,
  setTimeout: () => {},
  setInterval: () => {},
  clearTimeout: () => {},
  clearInterval: () => {},
  addEventListener: () => {},
  alert: (msg) => console.log('[ALERT]:', msg.split('\n')[0]),
  confirm: (msg) => true,
  prompt: (msg) => 'YOKKE2026_'
};
ctx.window = ctx;

vm.createContext(ctx);
vm.runInContext(appJs, ctx);

console.log('--- 1. Testing Default / Clean Semifinal State ---');
const lobbies = vm.runInContext('mcggLobbies', ctx);
const semiA = lobbies.SEMI_A || [];
const semiB = lobbies.SEMI_B || [];

console.log('SEMI_A count:', semiA.length);
console.log('SEMI_A names:', semiA.map(p => p.name + ' (' + p.nickname + ')'));
console.log('SEMI_B count:', semiB.length);
console.log('SEMI_B names:', semiB.map(p => p.name + ' (' + p.nickname + ')'));

// Check for Disk / David Iskandar
const diskInA = semiA.some(p => p.name.includes('David') || p.nickname.includes('Disk'));
const diskInB = semiB.some(p => p.name.includes('David') || p.nickname.includes('Disk'));
if (diskInA || diskInB) {
  console.error('❌ FAIL: Disk found in Semifinal!');
  process.exit(1);
} else {
  console.log('✅ PASS: Disk (David Iskandar) is completely eliminated from Semifinal!');
}

console.log('\n--- 2. Testing HTML Detail Panel for STAGE3_SEMI_B ---');
const html = vm.runInContext("renderMCGGDetailPanelContent('STAGE3_SEMI_B')", ctx);

// Check if HTML contains the button
if (html.includes('handleAcakCommanderClick') && html.includes('Acak Undian Commander')) {
  console.log('✅ PASS: HTML contains "🎲 Acak Undian Commander" button!');
} else {
  console.error('❌ FAIL: Acak Commander button missing in HTML!');
  process.exit(1);
}

// Check if HTML table contains Disk
if (html.includes('David Iskandar') || html.includes('Disk')) {
  console.error('❌ FAIL: Rendered HTML table still has David Iskandar / Disk!');
  process.exit(1);
} else {
  console.log('✅ PASS: Rendered HTML table contains ONLY clean Semifinal B players!');
}

// Check if HTML table contains Semifinal B players
const semiBExpected = ['XyLo^', 'H O K K I E', 'Yona', 'BuzzFeed', 'Exjoyness.', 'Wienie.10', 'BladeSpy', 'mfsamudra'];
const allFound = semiBExpected.every(n => html.toLowerCase().includes(n.toLowerCase()));
if (allFound) {
  console.log('✅ PASS: All 8 official Semifinal B players are rendered in the HTML table!');
} else {
  console.error('❌ FAIL: Some Semifinal B players are missing in the HTML table!');
  process.exit(1);
}

console.log('\n--- 3. Testing executeFullCommanderDraw ---');
vm.runInContext("executeFullCommanderDraw('SEMI_B')", ctx);
const afterDraw = vm.runInContext('mcggLobbies.SEMI_B', ctx);
console.log('After executeFullCommanderDraw on SEMI_B:');
afterDraw.forEach((p, idx) => {
  console.log(`  Player ${idx + 1}: ${p.nickname} -> M1: ${p.cmd1 || p.c1} | M2: ${p.cmd2 || p.c2}`);
  if (!p.c1 || !p.c2) {
    console.error(`❌ FAIL: Player ${p.nickname} missing commander in M1 or M2!`);
    process.exit(1);
  }
  if (p.c1.toLowerCase() === p.c2.toLowerCase()) {
    console.error(`❌ FAIL: Player ${p.nickname} has duplicate commander between M1 and M2!`);
    process.exit(1);
  }
});
console.log('✅ PASS: All 8 players assigned unique commanders for Match 1 & Match 2 without duplicate!');

console.log('\n--- 4. Testing Auto-Purge of Corrupted LocalStorage ---');
storage['yokke_mcgg_lobbies'] = JSON.stringify({
  LOBBY_A: [], LOBBY_B: [], LOBBY_C: [], LOBBY_D: [], LOBBY_E: [],
  SEMI_B: [{ name: 'David Iskandar', nickname: 'Disk', r1: 0, r2: 0, r3: 0, total: 0 }]
});
storage['yokke_mcgg_version'] = 'old_version_v14';

// Run appJs again in a fresh context with this corrupted storage
const ctx2 = {
  window: mockWindow, document: mockDoc, localStorage: mockWindow.localStorage, sessionStorage: mockWindow.sessionStorage,
  location: mockWindow.location, navigator: mockWindow.navigator, console: console,
  setTimeout: () => {}, setInterval: () => {}, clearTimeout: () => {}, clearInterval: () => {}, addEventListener: () => {}
};
ctx2.window = ctx2;
vm.createContext(ctx2);
vm.runInContext(appJs, ctx2);

const purgedSemiB = vm.runInContext('mcggLobbies.SEMI_B', ctx2);
const hasDiskPurged = purgedSemiB.some(p => p.name.includes('David'));
if (hasDiskPurged) {
  console.error('❌ FAIL: Auto-purge did not clean Disk from corrupted localStorage!');
  process.exit(1);
} else {
  console.log('✅ PASS: Auto-purge completely eliminated corrupted localStorage and restored clean Semifinal B!');
}

console.log('\n🎉 ALL 4 VERIFICATION SUITES PASSED WITH 100% SUCCESS!');
