const https = require('https');

https.get('https://magicchessgogo.com/assets/index-c6c06d80.js', res => {
  let js = '';
  res.on('data', c => js += c);
  res.on('end', () => {
    // Find strings containing gms or moonton
    const regex = /["']https?:\/\/[^"']*moonton[^"']*["']/g;
    const matches = js.match(regex) || [];
    console.log('Moonton URLs:', [...new Set(matches)]);

    // Find any JSON or endpoints
    const epRegex = /["']\/[a-zA-Z0-9_\-\/]*api[a-zA-Z0-9_\-\/]*["']/g;
    const epMatches = js.match(epRegex) || [];
    console.log('API endpoints in bundle:', [...new Set(epMatches)]);
  });
});
