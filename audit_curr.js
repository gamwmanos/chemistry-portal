const fs = require('fs');

const tsPath = 'd:/BIBLIA/chemistry-portal/src/data/questions.ts';
const currPath = 'd:/BIBLIA/chemistry-portal/src/data/curriculum.ts';

const tsContent = fs.readFileSync(tsPath, 'utf8');
const currContent = fs.readFileSync(currPath, 'utf8');

// Simple regex to extract curriculum data
const chapterMatches = currContent.match(/\{[\s\S]+?number:\s*"(\d+)"[\s\S]+?exercises:\s*(\d+)[\s\S]+?\}/g);
const curriculumCounts = {};
chapterMatches.forEach(m => {
    const num = m.match(/number:\s*"(\d+)"/)[1];
    const exercises = parseInt(m.match(/exercises:\s*(\d+)/)[1]);
    curriculumCounts[num] = exercises;
});

function countQuestions(content, startToken, endToken) {
    const startIndex = content.indexOf(startToken);
    if (startIndex === -1) return 0;
    
    let endIndex = endToken ? content.indexOf(endToken, startIndex) : -1;
    if (endIndex === -1) endIndex = content.length;
    
    const chunk = content.substring(startIndex, endIndex);
    const matches = chunk.match(/"q":/g);
    return matches ? matches.length : 0;
}

console.log('--- Implementation Audit ---');
console.log('Chap | Open Q | MCQ Q | Total | Curr Target | Status');
console.log('-----|--------|-------|-------|-------------|-------');

for (let i = 1; i <= 6; i++) {
    const tsQ = countQuestions(tsContent, `export const chapter${i}Questions`, `export const chapter${i}MCQ`);
    const tsMCQ = countQuestions(tsContent, `export const chapter${i}MCQ`, i < 6 ? `export const chapter${i+1}Questions` : null);
    
    const total = tsQ + tsMCQ;
    const target = curriculumCounts[i] || 0;
    const match = total >= target ? 'OK' : 'UNDER';
    
    console.log(`${i.toString().padEnd(4)} | ${tsQ.toString().padEnd(6)} | ${tsMCQ.toString().padEnd(5)} | ${total.toString().padEnd(5)} | ${target.toString().padEnd(11)} | ${match}`);
}
