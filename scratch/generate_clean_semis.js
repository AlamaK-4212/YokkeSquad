const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// Get DEFAULT_MCGG_LOBBIES
const startIndex = content.indexOf('const DEFAULT_MCGG_LOBBIES = {');
const endIndex = content.indexOf('\nconst MCGG_DATA_VERSION', startIndex);
const block = content.slice(startIndex, endIndex);

const fn = new Function(block + '\nreturn DEFAULT_MCGG_LOBBIES;');
const defLobbies = fn();

console.log('SEMI_A length:', defLobbies.SEMI_A.length);
console.log('SEMI_B length:', defLobbies.SEMI_B.length);

const cleanSemiData = {
  SEMI_A: defLobbies.SEMI_A,
  SEMI_B: defLobbies.SEMI_B
};

fs.writeFileSync('scratch/clean_semis.json', JSON.stringify(cleanSemiData, null, 2));
console.log('Saved scratch/clean_semis.json');
