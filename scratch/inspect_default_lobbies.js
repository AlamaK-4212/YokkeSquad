const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');

let inDef = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const DEFAULT_MCGG_LOBBIES = {')) {
    inDef = true;
    console.log('Start line:', i + 1);
  }
  if (inDef && /^  "[A-Z0-9_]+": \[/.test(lines[i])) {
    console.log('Lobby key:', lines[i].trim(), 'at line', i + 1);
  }
  if (inDef && lines[i].startsWith('};')) {
    console.log('End line:', i + 1);
    inDef = false;
    break;
  }
}
