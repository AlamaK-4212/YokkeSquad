const fs = require('fs');

// Read app.js
const appJs = fs.readFileSync('app.js', 'utf8');

// Read gsheet_dump.json
const gsheetData = JSON.parse(fs.readFileSync('scratch/gsheet_dump.json', 'utf8'));

const storage = {};
const mockWindow = {
  addEventListener: () => {},
  removeEventListener: () => {},
  localStorage: {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => storage[k] = v,
    removeItem: (k) => delete storage[k]
  },
  sessionStorage: {
    getItem: () => null, setItem: () => {}, removeItem: () => {}
  },
  location: { search: '', reload: () => {} },
  navigator: { userAgent: 'test' }
};

const vm = require('vm');
const ctx = {
  window: mockWindow,
  document: {
    getElementById: () => ({ innerHTML: '' }),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  localStorage: mockWindow.localStorage,
  sessionStorage: mockWindow.sessionStorage,
  location: mockWindow.location,
  navigator: mockWindow.navigator,
  console: console,
  setTimeout: () => {},
  setInterval: () => {},
  clearTimeout: () => {},
  clearInterval: () => {},
  addEventListener: () => {}
};
ctx.window = ctx;

vm.createContext(ctx);
vm.runInContext(appJs, ctx);

console.log('Initially, SEMI_B has:', ctx.mcggLobbies.SEMI_B.map(p => p.name));

console.log('Testing syncMCGGSemiFinal directly:');
ctx.syncMCGGSemiFinal();
console.log('After syncMCGGSemiFinal, SEMI_B has:', ctx.mcggLobbies.SEMI_B.map(p => p.name + ' (' + p.nickname + ')'));
