const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('handleAcakCommanderClick')) {
    console.log(idx+1, l);
  }
});
