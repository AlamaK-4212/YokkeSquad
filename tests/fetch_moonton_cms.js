const https = require('https');

// Test Moonton GMS CMS API endpoints
const endpoints = [
  'https://api.gms.moontontech.com/api/gms/source/magicchessgogo/en',
  'https://api.gms.moontontech.com/api/content/inner/query/magicchessgogo',
  'https://api.gms.moontontech.com/api/content/inner/query/mcgg',
  'https://api.gms.moontontech.com/api/act/basev4',
  'https://magicchessgogo.com/api/content'
];

endpoints.forEach(ep => {
  https.get(ep, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://magicchessgogo.com/' } }, res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      console.log(ep, 'Status:', res.statusCode, 'Length:', data.length);
      if (data.length > 0 && data.length < 500) {
        console.log('Sample:', data);
      }
    });
  }).on('error', e => console.log(ep, 'Error:', e.message));
});

