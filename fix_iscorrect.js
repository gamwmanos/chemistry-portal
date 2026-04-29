const fs = require('fs');
let content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');
content = content.replace(/"isCorrect"/g, '"correct"');
fs.writeFileSync('src/data/bGymnasiouQuestions.ts', content);
console.log('Done');
