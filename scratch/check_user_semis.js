const fs = require('fs');
const lines = fs.readFileSync('C:/Users/azizn/.gemini/antigravity/brain/2db39921-5359-46b7-9e1a-2e7441882b90/.system_generated/logs/transcript_full.jsonl', 'utf8').trim().split('\n');
const lastUser = lines.filter(l => {
  const p = JSON.parse(l);
  return p.type === 'USER_INPUT';
}).pop();

const parsed = JSON.parse(lastUser);
const content = parsed.content;
const jsonStart = content.indexOf('{');
const jsonEnd = content.lastIndexOf('}') + 1;
const userJson = JSON.parse(content.slice(jsonStart, jsonEnd));

console.log('User SEMI_A:');
console.log((userJson.SEMI_A || []).map(p => p.name));
console.log('User SEMI_B:');
console.log((userJson.SEMI_B || []).map(p => p.name));
