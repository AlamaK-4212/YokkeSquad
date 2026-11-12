const fs = require('fs');
const content = fs.readFileSync('google_apps_script.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('action === "SAVE_CONFIG"') || l.includes("action === 'SAVE_CONFIG'")) {
    console.log((i + 1) + ': ' + l.trim());
  }
});
