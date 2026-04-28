const fs = require('fs');
const content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');
const mcqBlock = content.split('export const bGymnasiouMCQ')[1];
const regex = /"q": "(.*?)"/g;
let match;
const mcqs = [];
while ((match = regex.exec(mcqBlock)) !== null) mcqs.push(match[1]);
mcqs.forEach((q, i) => console.log(i, q.substring(0, 30)));
