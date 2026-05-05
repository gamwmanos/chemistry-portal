const fs = require('fs');
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf-8');

function c(name) {
  const match = code.match(new RegExp(`export const ${name}: (?:Question|MCQ)\\[\\] = \\[([\\s\\S]*?)\\];`));
  if (!match) return 0;
  // count { ... } objects
  return (match[1].match(/\\{(?:[^{}]|\\{[^{}]*\\})*\\}/g) || []).length;
}

const ch1q = c('ch1Questions');
const ch1mcq = c('ch1MCQ');
const ch2q = c('ch2Questions');
const ch2mcq = c('ch2MCQ');

console.log('Chapter 1:', ch1q + ch1mcq, '(Questions:', ch1q, ', MCQs:', ch1mcq, ')');
console.log('Chapter 2:', ch2q + ch2mcq, '(Questions:', ch2q, ', MCQs:', ch2mcq, ')');
