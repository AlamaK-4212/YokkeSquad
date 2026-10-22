const https = require('https');
const sheetId = '17G8UlOAKAtjpW6mxOpSdnPiiy3haI-EJwtDClMLZY0U';
const url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?tqx=out:csv&sheet=' + encodeURIComponent('MCGG Match Set Up');

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n').map(l => l.trim()).filter(Boolean);
    console.log('Total rows:', lines.length);
    lines.forEach((line, idx) => {
      const parts = [];
      let inQuotes = false;
      let cur = '';
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
          inQuotes = !inQuotes;
        } else if (c === ',' && !inQuotes) {
          parts.push(cur.trim().replace(/^"|"$/g, ''));
          cur = '';
        } else {
          cur += c;
        }
      }
      parts.push(cur.trim().replace(/^"|"$/g, ''));
      
      const nonEmpties = parts.map((p, colIdx) => ({ col: colIdx, val: p })).filter(x => x.val && x.val !== '""');
      console.log(`Row ${idx}:`, JSON.stringify(nonEmpties));
    });
  });
});

