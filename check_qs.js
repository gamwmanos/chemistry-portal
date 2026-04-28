const fs = require('fs');
const content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf8');

const qRegex = /\"q\":\s*\"([^\"]*)\"/g;
let match;
let i = 0;
while ((match = qRegex.exec(content)) !== null) {
  console.log(i + ': ' + match[1].substring(0, 60));
  i++;
}
