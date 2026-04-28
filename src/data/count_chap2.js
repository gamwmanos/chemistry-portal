const fs = require('fs');

const tsContent = fs.readFileSync('d:/BIBLIA/chemistry-portal/src/data/questions.ts', 'utf8');
function countInTs(startToken, endToken) {
    const start = tsContent.indexOf(startToken);
    const end = tsContent.indexOf(endToken, start);
    const chunk = tsContent.substring(start, end);
    return chunk.split('"q":').length - 1;
}

const jsContent = fs.readFileSync('d:/ANTONISCHRONAKIS/questions.js', 'utf8');
function countInJs(startToken, endToken) {
    const start = jsContent.indexOf(startToken);
    const end = jsContent.indexOf(endToken, start);
    const chunk = jsContent.substring(start, end);
    return chunk.split('q:').length - 1; // legacy uses q: without quotes
}

console.log('--- Chapter 2 Counts ---');
console.log('Open Questions (TS):', countInTs('export const chapter2Questions', 'export const chapter2MCQ'));
console.log('Open Questions (JS):', countInJs('const chapter2Questions', 'const chapter2MCQ'));

console.log('MCQ (TS):', countInTs('export const chapter2MCQ', 'export const chapter'));
console.log('MCQ (JS):', countInJs('const chapter2MCQ', 'const chapter'));
