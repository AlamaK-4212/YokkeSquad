const fs = require('fs');
const dump = JSON.parse(fs.readFileSync('scratch/gsheet_dump.json', 'utf8'));
console.log('dump.SEMI_A:');
console.log(dump.SEMI_A.map(p => p.name));
console.log('dump.SEMI_B:');
console.log(dump.SEMI_B.map(p => p.name));
