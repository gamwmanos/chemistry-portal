const fs = require('fs'); 
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf-8'); 
function c(n) { 
  const idx = code.indexOf('export const ' + n); 
  if(idx===-1) return 0; 
  let endIdx = code.indexOf('export const', idx + 10); 
  if(endIdx === -1) endIdx = code.length; 
  const slice = code.substring(idx, endIdx); 
  return (slice.match(/\"q\":/g) || slice.match(/q:/g) || []).length; 
} 
console.log('3 Q:', c('ch3Questions'), 'MCQ:', c('ch3MCQ')); 
console.log('4 Q:', c('ch4Questions'), 'MCQ:', c('ch4MCQ')); 
console.log('5 Q:', c('ch5Questions'), 'MCQ:', c('ch5MCQ'));
