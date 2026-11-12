const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/gsheet_dump.json', 'utf8'));

['ROUND_32_A', 'ROUND_32_B', 'ROUND_32_C', 'ROUND_32_D'].forEach(k => {
  const list = data[k] || [];
  console.log(k, 'length:', list.length);
  list.forEach((p, idx) => {
    const r1 = parseInt(p.r1) || 0;
    const r2 = parseInt(p.r2) || 0;
    const r3 = parseInt(p.r3) || 0;
    if (r1 === 0 || r2 === 0 || r3 === 0) {
      console.log('  Player not full in', k, idx, p.name, p.nickname, { r1: p.r1, r2: p.r2, r3: p.r3 });
    }
  });
});
