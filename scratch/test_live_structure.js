const https = require('https');

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
      const json = JSON.parse(data);
      console.log('Top level keys:', Object.keys(json));
      console.log('config keys:', json.config ? Object.keys(json.config) : 'no config');
      if (json.config && json.config.mcggLobbies) {
        console.log('json.config.mcggLobbies keys:', Object.keys(json.config.mcggLobbies));
        console.log('json.config.mcggLobbies.SEMI_B players:', json.config.mcggLobbies.SEMI_B.map(p => p.name));
      }
      process.exit(0);
    });
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });
}

doFetch(SCRIPT_URL);
