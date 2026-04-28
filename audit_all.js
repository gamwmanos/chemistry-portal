const fs = require('fs');

const tsPath = 'd:/BIBLIA/chemistry-portal/src/data/questions.ts';
const jsPath = 'd:/ANTONISCHRONAKIS/questions.js';

const tsContent = fs.readFileSync(tsPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');

function countQuestions(content, startToken, endToken) {
    const startIndex = content.indexOf(startToken);
    if (startIndex === -1) return 0;
    
    let endIndex = endToken ? content.indexOf(endToken, startIndex) : -1;
    if (endIndex === -1) endIndex = content.length;
    
    const chunk = content.substring(startIndex, endIndex);
    // Use a regex that catches "q": or q: (with or without quotes)
    const matches = chunk.match(/"q":|q:/g);
    return matches ? matches.length : 0;
}

console.log('--- Migration Audit (Questions Count) ---');
console.log('Chap | TS (Open/MCQ) | JS (Open/MCQ) | Status');
console.log('-----|---------------|---------------|-------');

for (let i = 1; i <= 6; i++) {
    const tsQ = countQuestions(tsContent, `export const chapter${i}Questions`, `export const chapter${i}MCQ`);
    const tsMCQ = countQuestions(tsContent, `export const chapter${i}MCQ`, i < 6 ? `export const chapter${i+1}Questions` : null);
    
    const jsQ = countQuestions(jsContent, `const chapter${i}Questions`, `const chapter${i}MCQ`);
    const jsMCQ = countQuestions(jsContent, `const chapter${i}MCQ`, i < 6 ? `const chapter${i+1}Questions` : null);
    
    const match = (tsQ === jsQ && tsMCQ === jsMCQ) ? 'OK' : 'MISMATCH';
    
    const tsStr = `${tsQ}/${tsMCQ}`.padEnd(10);
    const jsStr = `${jsQ}/${jsMCQ}`.padEnd(10);
    
    console.log(`${i.toString().padEnd(4)} | ${tsStr}    | ${jsStr}    | ${match}`);
}
