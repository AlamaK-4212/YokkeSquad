const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/azizn/.gemini/antigravity/brain/2db39921-5359-46b7-9e1a-2e7441882b90/.system_generated/logs/transcript_full.jsonl', 'utf8');

const idx = transcript.lastIndexOf('Vercel');
console.log(transcript.slice(idx - 200, idx + 400).replace(/\n/g, '\n'));
