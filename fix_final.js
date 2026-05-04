const fs = require('fs');
let c = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');
c = c.replace(/ζάχαρη"\\n\s*\},/g, 'ζάχαρη"\n  },');
fs.writeFileSync('src/data/aLykeiouQuestions.ts', c);
console.log('Fixed final newline error');
