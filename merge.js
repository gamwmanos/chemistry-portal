const fs = require('fs');
const draftContent = fs.readFileSync('src/data/gGymnasiou_Chap5_draft.ts', 'utf-8');
const questionsContent = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

const draftStart = draftContent.indexOf('[');
const draftEnd = draftContent.lastIndexOf(']');
const draftItems = draftContent.slice(draftStart + 1, draftEnd).trim();

const questionsEnd = questionsContent.lastIndexOf(']');
const updatedQuestions = questionsContent.slice(0, questionsEnd) + ',\n  ' + draftItems + '\n];\n';

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', updatedQuestions, 'utf-8');
console.log('Merged chapter 5 into questions');
