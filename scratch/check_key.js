const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
for (let i = 1850; i >= 1300; i--) {
  if (lines[i].includes('": [')) {
    console.log('Key at line', i+1, lines[i]);
    break;
  }
}
