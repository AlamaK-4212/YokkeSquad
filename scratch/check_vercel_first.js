const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/azizn/.gemini/antigravity/brain/2db39921-5359-46b7-9e1a-2e7441882b90/.system_generated/logs/transcript_full.jsonl', 'utf8');

const matches = [];
let pos = 0;
while ((pos = transcript.indexOf('Vercel', pos)) !== -1) {
  matches.push(pos);
  pos += 6;
}
console.log('Matches:', matches.length);
if (matches.length > 0) {
  const p = matches[0];
  console.log(transcript.slice(p - 100, p + 300));
}
