const fs = require('fs');
// Let's load the data from gsheet_dump.json or evaluate DEFAULT_MCGG_LOBBIES
const content = fs.readFileSync('app.js', 'utf8');

// Find DEFAULT_MCGG_LOBBIES
const startIndex = content.indexOf('const DEFAULT_MCGG_LOBBIES = {');
const endIndex = content.indexOf('\nconst MCGG_DATA_VERSION', startIndex);
const block = content.slice(startIndex, endIndex);

const fn = new Function(block + '\nreturn DEFAULT_MCGG_LOBBIES;');
const defLobbies = fn();

['ROUND_32_A', 'ROUND_32_B', 'ROUND_32_C', 'ROUND_32_D'].forEach(k => {
  console.log('=== ' + k + ' ===');
  defLobbies[k].forEach((p, i) => {
    console.log(`${i+1}. ${p.name} (${p.nickname}) - r1:${p.r1}, r2:${p.r2}, r3:${p.r3}, tot:${p.total}`);
  });
});
