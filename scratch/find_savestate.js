const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('function saveState') || l.includes('saveState =')) {
    console.log(idx+1, l);
  }
});
