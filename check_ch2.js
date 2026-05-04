const fs = require('fs');
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');
const startIdx = code.indexOf('export const ch2Questions: Question[] = [');
const endIdx = code.indexOf('export const ch2MCQ', startIdx);
const slice = code.substring(startIdx, endIdx);
const qMatch = slice.match(/q:\s*"(.*?)"/g);
if (qMatch) {
  console.log('First 3:');
  console.log(qMatch.slice(0, 3));
  console.log('Last 3:');
  console.log(qMatch.slice(-3));
} else {
  console.log('No questions found');
}
