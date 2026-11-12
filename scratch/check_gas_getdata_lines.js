const fs = require('fs');
const content = fs.readFileSync('google_apps_script.js', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(980, 1030).join('\n'));
