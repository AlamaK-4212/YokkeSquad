const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(12030, 12095).join('\n'));
