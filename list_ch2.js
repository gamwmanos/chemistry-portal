const fs = require('fs');
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');

const startIdxQ = code.indexOf('export const ch2Questions: Question[] = [');
const endIdxQ = code.indexOf('];', startIdxQ);
const sliceQ = code.substring(startIdxQ, endIdxQ + 2);
const qMatchQ = sliceQ.match(/q:\s*\"(.*?)\"/g) || [];

const startIdxMCQ = code.indexOf('export const ch2MCQ: MCQ[] = [');
const endIdxMCQ = code.indexOf('];', startIdxMCQ);
const sliceMCQ = code.substring(startIdxMCQ, endIdxMCQ + 2);
const qMatchMCQ = sliceMCQ.match(/q:\s*\"(.*?)\"/g) || [];

console.log('--- QUESTIONS (' + qMatchQ.length + ') ---');
qMatchQ.forEach((q, i) => console.log(`${i+1}. ${q.substring(0, 80)}...`));

console.log('\\n--- MCQs (' + qMatchMCQ.length + ') ---');
qMatchMCQ.forEach((q, i) => console.log(`${i+1}. ${q.substring(0, 80)}...`));
