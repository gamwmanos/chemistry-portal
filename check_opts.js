const fs = require('fs');
const content = fs.readFileSync('d:/BIBLIA/chemistry-portal/src/data/questions.ts', 'utf8');

const start = content.indexOf('export const chapter3MCQ');
const end = content.indexOf('export const chapter3Questions');
const c3mcq = content.substring(start, end);

const qs = c3mcq.match(/"q":\s*"[^"]+"/g);
console.log("Questions:");
console.log(qs.slice(0, 10).join('\n'));

const opts = c3mcq.match(/"text":\s*"[^"]+"/g);
console.log("Options:");
console.log(opts.slice(0, 10).join('\n'));
