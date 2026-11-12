const fs = require('fs');
const semis = JSON.parse(fs.readFileSync('scratch/clean_semis.json', 'utf8'));

console.log('--- SEMIFINAL A ---');
semis.SEMI_A.forEach((p, i) => {
  console.log(`${i+1}. ${p.name} (@${p.nickname}) [${p.dept}] - M1: ${p.cmd1 || p.c1}, M2: ${p.cmd2 || p.c2}`);
});

console.log('\n--- SEMIFINAL B ---');
semis.SEMI_B.forEach((p, i) => {
  console.log(`${i+1}. ${p.name} (@${p.nickname}) [${p.dept}] - M1: ${p.cmd1 || p.c1}, M2: ${p.cmd2 || p.c2}`);
});
