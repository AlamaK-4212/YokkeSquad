const fs = require('fs');
const vm = require('vm');
const content = fs.readFileSync('app.js', 'utf8');

const storageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

const context = {
  window: {},
  document: {
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  localStorage: storageMock,
  sessionStorage: storageMock,
  location: { search: '', reload: () => {} },
  navigator: { userAgent: 'node' },
  console: console,
  setTimeout: () => {},
  setInterval: () => {},
  clearTimeout: () => {},
  clearInterval: () => {}
};
context.window = context;
context.addEventListener = () => {};

vm.createContext(context);
try {
  vm.runInContext(content, context);
} catch (e) {
  console.log('Error evaluating:', e.message, e.stack);
}

console.log('mcggLobbies keys:', Object.keys(context.mcggLobbies || {}));
console.log('isMCGGLobbyPointsFull ROUND_32_A:', context.isMCGGLobbyPointsFull('ROUND_32_A'));
console.log('isMCGGLobbyPointsFull ROUND_32_B:', context.isMCGGLobbyPointsFull('ROUND_32_B'));
console.log('isMCGGLobbyPointsFull ROUND_32_C:', context.isMCGGLobbyPointsFull('ROUND_32_C'));
console.log('isMCGGLobbyPointsFull ROUND_32_D:', context.isMCGGLobbyPointsFull('ROUND_32_D'));

context.syncMCGGSemiFinal();
console.log('After syncMCGGSemiFinal:');
console.log('SEMI_A players:', (context.mcggLobbies.SEMI_A || []).map(p => p.name + ' (' + p.nickname + ')'));
console.log('SEMI_B players:', (context.mcggLobbies.SEMI_B || []).map(p => p.name + ' (' + p.nickname + ')'));
