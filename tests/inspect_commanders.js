const https = require('https');
const sheetId = '17G8UlOAKAtjpW6mxOpSdnPiiy3haI-EJwtDClMLZY0U';
const url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?tqx=out:csv&sheet=' + encodeURIComponent('MCGG Match Set Up');

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n').map(l => l.trim()).filter(Boolean);
    const rows = lines.slice(1).map(line => {
      // parse csv line safely
      const parts = [];
      let inQuotes = false;
      let cur = '';
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
          inQuotes = !inQuotes;
        } else if (c === ',' && !inQuotes) {
          parts.push(cur.trim());
          cur = '';
        } else {
          cur += c;
        }
      }
      parts.push(cur.trim());
      return { hero: parts[0] || '', alterName: parts[1] || '', tier: parts[2] || '' };
    });

    console.log('Total rows in MCGG Match Set Up:', rows.length);
    const tierCounts = {};
    rows.forEach(r => {
      const t = r.tier || '(No Tier)';
      tierCounts[t] = (tierCounts[t] || 0) + 1;
    });
    console.log('Tier counts:', tierCounts);

    console.log('\n--- TIER HIGH ---');
    rows.filter(r => r.tier.toLowerCase() === 'high').forEach(r => {
      console.log(`Hero: "${r.hero}", Alter: "${r.alterName}", Tier: "${r.tier}"`);
    });

    console.log('\n--- TIER MID ---');
    rows.filter(r => r.tier.toLowerCase() === 'mid').forEach(r => {
      console.log(`Hero: "${r.hero}", Alter: "${r.alterName}", Tier: "${r.tier}"`);
    });

    console.log('\n--- TIER META ---');
    rows.filter(r => r.tier.toLowerCase() === 'meta').forEach(r => {
      console.log(`Hero: "${r.hero}", Alter: "${r.alterName}", Tier: "${r.tier}"`);
    });

    console.log('\n--- OTHER / EMPTY / GONE ---');
    rows.filter(r => !['high', 'mid', 'meta'].includes(r.tier.toLowerCase())).forEach(r => {
      console.log(`Hero: "${r.hero}", Alter: "${r.alterName}", Tier: "${r.tier}"`);
    });
  });
});
