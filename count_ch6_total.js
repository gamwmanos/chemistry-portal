const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/data/aLykeiouQuestions.ts');
let content = fs.readFileSync(targetFile, 'utf8');

const matchQuestions = content.match(/export const ch6Questions: Question\[\] = \[([\s\S]*?)\];/);
const matchMCQ = content.match(/export const ch6MCQ: MCQ\[\] = \[([\s\S]*?)\];/);

let qCount = 0;
let mcqCount = 0;

if (matchQuestions) {
  const matches = matchQuestions[1].match(/id:/g);
  qCount = matches ? matches.length : 0;
}

if (matchMCQ) {
  const matches = matchMCQ[1].match(/question:/g);
  mcqCount = matches ? matches.length : 0;
}

console.log(`Total ch6Questions: ${qCount}`);
console.log(`Total ch6MCQ: ${mcqCount}`);
