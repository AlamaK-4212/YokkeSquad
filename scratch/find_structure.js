const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');

for (let i = 1300; i < 3000; i++) {
  if (/^\s*"[A-Za-z0-9_]+":/.test(lines[i])) {
    console.log((i + 1) + ': ' + lines[i].trim());
  }
}
