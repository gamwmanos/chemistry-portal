const fs = require('fs');
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');

const startIdxQ = code.indexOf('export const ch2Questions: Question[] = [');
const endIdxQ = code.indexOf('export const ch2MCQ', startIdxQ);
const sliceQ = code.substring(startIdxQ, endIdxQ);
const q1 = (sliceQ.match(/q:/g)||[]).length;
const q2 = (sliceQ.match(/"q":/g)||[]).length;

const startIdxMCQ = code.indexOf('export const ch2MCQ: MCQ[] = [');
const endIdxMCQ = code.indexOf('];', startIdxMCQ);
const sliceMCQ = code.substring(startIdxMCQ, endIdxMCQ);
const m1 = (sliceMCQ.match(/q:/g)||[]).length;
const m2 = (sliceMCQ.match(/"q":/g)||[]).length;

console.log(`Ch2 Q: ${q1 + q2}`);
console.log(`Ch2 MCQ: ${m1 + m2}`);
console.log(`Total: ${q1 + q2 + m1 + m2}`);
