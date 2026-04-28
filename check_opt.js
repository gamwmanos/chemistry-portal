const fs = require('fs');
const content = fs.readFileSync('d:/BIBLIA/chemistry-portal/src/data/questions.ts', 'utf8');
const lines = content.split('\n');
const optLines = lines.filter(l => l.includes('"text":') && l.includes('<') && l.includes('>'));
console.log("HTML in options:");
optLines.forEach(l => console.log(l.trim()));
