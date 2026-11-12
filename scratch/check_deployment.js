const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/azizn/.gemini/antigravity/brain/2db39921-5359-46b7-9e1a-2e7441882b90/.system_generated/logs/transcript_full.jsonl', 'utf8');

const regex = /github\.io|localhost|git push/gi;
let m;
let count = 0;
while ((m = regex.exec(transcript)) !== null && count < 10) {
  const start = Math.max(0, m.index - 50);
  const end = Math.min(transcript.length, m.index + 100);
  console.log(transcript.slice(start, end).replace(/\n/g, ' '));
  count++;
}
