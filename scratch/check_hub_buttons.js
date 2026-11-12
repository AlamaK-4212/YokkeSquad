const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
console.log('--- Lines 15430-15460 ---');
console.log(lines.slice(15430, 15460).join('\n'));
console.log('--- Lines 15660-15690 ---');
console.log(lines.slice(15660, 15690).join('\n'));
