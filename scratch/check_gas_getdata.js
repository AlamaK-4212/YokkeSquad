const fs = require('fs');
const content = fs.readFileSync('google_apps_script.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('mcggLobbies') || l.includes('action === \'getData\'') || l.includes('action == \'getData\'')) {
    console.log(idx+1, l);
  }
});
