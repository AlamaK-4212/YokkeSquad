const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// We simulate running app.js
const vm = require('vm');

const domHtml = `
<div id="mcggInteractiveHub"></div>
<div id="mcggTable"></div>
<div id="mcggLobbySelect"></div>
<div id="countMLBB"></div>
<div id="countMCGG"></div>
`;

const sandbox = {
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  document: {
    getElementById: (id) => ({
      innerHTML: '',
      style: {},
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {}
    }),
    querySelectorAll: () => [],
    querySelector: () => null,
    addEventListener: () => {}
  },
  window: {
    addEventListener: () => {}
  },
  addEventListener: () => {},
  localStorage: {
    _data: {
      'yokke_mcgg_lobbies': JSON.stringify({
        SEMI_A: [{ name: "Raihan Purnama" }, { name: "Bagus Setiawan" }],
        SEMI_B: [{ name: "David Iskandar" }, { name: "KoncoKentel" }]
      }),
      'yokke_mcgg_version': 'v18_old'
    },
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  },
  sessionStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  },
  location: { reload: () => {} },
  alert: () => {},
  confirm: () => true,
  prompt: () => 'YOKKE2026_'
};

sandbox.window = sandbox;
vm.createContext(sandbox);

try {
  vm.runInContext(content, sandbox);
  console.log('app.js executed in sandbox successfully!');
  
  // Now let's call renderMCGGDetailPanelContent('STAGE3_SEMI_B')
  const html = sandbox.renderMCGGDetailPanelContent('STAGE3_SEMI_B');
  console.log('Does rendered HTML contain David Iskandar?', html.includes('David Iskandar'));
  console.log('Does rendered HTML contain Joko waluyono?', html.includes('Joko waluyono'));
  console.log('Does rendered HTML contain Disk?', html.includes('Disk'));
  console.log('Does rendered HTML contain Reset Cache button?', html.includes('Reset Cache'));
} catch (e) {
  console.error('Execution error:', e);
}
