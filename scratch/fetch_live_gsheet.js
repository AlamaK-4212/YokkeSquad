const https = require('https');
const fs = require('fs');

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUZMfaQAiMFSHiLUTJq35HIY1JmMeyza3s3NZUPzLx0UKDOXaSdSxZiTK9p1yR5l5_VA/exec?action=getData';

function doFetch(url) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      doFetch(res.headers.location);
      return;
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        fs.writeFileSync('scratch/gsheet_dump.json', JSON.stringify(json.config.mcggLobbies, null, 2));
        console.log('Saved scratch/gsheet_dump.json successfully!');
      } catch (e) {
        console.error('Parse error:', e.message);
      }
    });
  }).on('error', err => console.error('Fetch error:', err.message));
}

doFetch(SCRIPT_URL);
