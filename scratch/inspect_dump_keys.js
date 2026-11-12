const fs = require('fs');
const dump = JSON.parse(fs.readFileSync('scratch/gsheet_dump.json', 'utf8'));
console.log('Dump top keys:', Object.keys(dump));
if (dump.config) {
  console.log('Dump.config keys:', Object.keys(dump.config));
}
