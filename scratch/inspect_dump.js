const fs = require('fs');
const dump = JSON.parse(fs.readFileSync('scratch/gsheet_dump.json', 'utf8'));

console.log('Dump has mcggLobbies:', !!dump.mcggLobbies);
console.log('Dump has config.mcggLobbies:', !!(dump.config && dump.config.mcggLobbies));

const lobbies = dump.config?.mcggLobbies || dump.mcggLobbies;
if (lobbies) {
  console.log('Lobbies keys:', Object.keys(lobbies));
  if (lobbies.SEMI_A) {
    console.log('SEMI_A names:', lobbies.SEMI_A.map(p => p.name));
  }
  if (lobbies.SEMI_B) {
    console.log('SEMI_B names:', lobbies.SEMI_B.map(p => p.name));
  }
}
