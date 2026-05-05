const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/data/gGymnasiouQuestions.ts');
const draftPath = path.join(__dirname, 'src/data/gGymnasiou_Chap3_draft.ts');

let targetContent = fs.readFileSync(targetPath, 'utf8');
const draftContent = fs.readFileSync(draftPath, 'utf8');

const questionsMatch = draftContent.match(/export const chapter3Questions: Question\[\] = \[([\s\S]*?)\];\n\nexport const chapter3MCQ/);
const draftQuestions = questionsMatch[1].trim();

const mcqMatch = draftContent.match(/export const chapter3MCQ: MCQ\[\] = \[([\s\S]*?)\];/);
const draftMCQ = mcqMatch[1].trim();

targetContent = targetContent.replace(
  /\s*\}\n\];\n\nexport const gGymnasiouMCQ: MCQ\[\] = \[/,
  `\n  },\n  ${draftQuestions}\n];\n\nexport const gGymnasiouMCQ: MCQ[] = [`
);

targetContent = targetContent.replace(
  /\s*\}\n\];[\s]*$/,
  `\n  },\n  ${draftMCQ}\n];\n`
);

fs.writeFileSync(targetPath, targetContent, 'utf8');
console.log("Merged correctly");
