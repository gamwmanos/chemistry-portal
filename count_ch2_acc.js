const fs = require('fs');
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');
const startIdx = code.indexOf('export const ch2Questions: Question[] = [');
const endIdx = code.indexOf('export const ch2MCQ', startIdx);
const slice = code.substring(startIdx, endIdx);
const q1 = (slice.match(/q:/g)||[]).length;
const q2 = (slice.match(/"q":/g)||[]).length;
console.log('Ch2 Q:', q1 + q2);
