const fs = require('fs');
let c = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');
c = c.replace(/\},\\n\s*\{/g, '},\n  {');
fs.writeFileSync('src/data/aLykeiouQuestions.ts', c);
console.log('Fixed newlines');
