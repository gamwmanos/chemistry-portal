const fs = require('fs');
const content = fs.readFileSync('d:/BIBLIA/chemistry-portal/src/data/questions.ts', 'utf8');
const lines = content.split('\n');
const qLines = lines.filter(l => l.includes('"q":') && l.includes('<') && l.includes('>'));
console.log("HTML in questions:");
qLines.forEach(l => console.log(l.trim()));
