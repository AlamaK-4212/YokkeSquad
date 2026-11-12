const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// Search for any occurrence where SEMI_A is assigned or populated
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('mcggLobbies.SEMI_A') || l.includes('mcggLobbies[\'SEMI_A\']') || l.includes('mcggLobbies[\"SEMI_A\"]')) {
    console.log(idx+1, l);
  }
});
