const fs = require('fs');
const content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');

// split into two blocks
const qBlock = content.split('export const bGymnasiouMCQ')[0];
const mcqBlock = content.split('export const bGymnasiouMCQ')[1];

const getQIndices = (block) => {
  const qs = [];
  let match;
  const regex = /"q": "(.*?)"/g;
  while ((match = regex.exec(block)) !== null) {
    qs.push(match[1]);
  }
  return qs;
};

console.log("=== OPEN QUESTIONS ===");
const openQs = getQIndices(qBlock);
openQs.forEach((q, i) => {
  if (q.startsWith('1.') || q.startsWith('1 ') || q.startsWith('2.') || q.startsWith('3.')) {
    console.log(i, q.substring(0, 30));
  }
});

console.log("=== MCQs ===");
const mcqs = getQIndices(mcqBlock);
mcqs.forEach((q, i) => {
  if (q.startsWith('1.') || q.startsWith('1 ') || q.startsWith('2.') || q.startsWith('3.')) {
    console.log(i, q.substring(0, 30));
  }
});
