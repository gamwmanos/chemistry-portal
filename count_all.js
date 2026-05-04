const fs = require('fs');
const code = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf-8');
function c(n) {
  const idx = code.indexOf('export const ' + n);
  if (idx === -1) return 0;
  let endIdx = code.indexOf('export const', idx + 10);
  if (endIdx === -1) endIdx = code.length;
  const slice = code.substring(idx, endIdx);
  return (slice.match(/q:/g) || slice.match(/\"q\":/g) || []).length;
}
[1, 2, 3, 4, 5, 6].forEach(i => console.log('Ch' + i, 'Q:', c('ch' + i + 'Questions'), 'MCQ:', c('ch' + i + 'MCQ')));
