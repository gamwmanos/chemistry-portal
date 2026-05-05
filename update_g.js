const fs = require('fs');
const newQuestions = JSON.parse(fs.readFileSync('d:/BIBLIA/chemistry-portal/src/data/g_chap1_batch1.json', 'utf8'));

const tsContent = `import type { Question, MCQ } from './questions';

export const gGymnasiouQuestions: Question[] = ${JSON.stringify(newQuestions, null, 2)};
`;

fs.writeFileSync('d:/BIBLIA/chemistry-portal/src/data/gGymnasiouQuestions.ts', tsContent);
console.log('Replaced gGymnasiouQuestions.ts');
