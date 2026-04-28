const fs = require('fs');
const content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');

const questions = [];
let qMatch;
const regex = /"q": "(.*?)"/g;
while ((qMatch = regex.exec(content)) !== null) {
  questions.push(qMatch[1]);
}

questions.forEach((q, i) => {
  if (q.startsWith('1.') || q.startsWith('1 ')) {
    console.log(i, q.substring(0, 50));
  }
});
