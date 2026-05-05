const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/data/gGymnasiouQuestions.ts');
const draftPath = path.join(__dirname, 'src/data/gGymnasiou_Chap3_draft.ts');

const targetContent = fs.readFileSync(targetPath, 'utf8');
const draftContent = fs.readFileSync(draftPath, 'utf8');

// Extract questions from draft
const questionsMatch = draftContent.match(/export const chapter3Questions: Question\[\] = \[([\s\S]*?)\];\n\nexport const chapter3MCQ/);
const draftQuestions = questionsMatch[1].trim();

// Extract MCQ from draft
const mcqMatch = draftContent.match(/export const chapter3MCQ: MCQ\[\] = \[([\s\S]*?)\];/);
const draftMCQ = mcqMatch[1].trim();

// Insert into target
let newTargetContent = targetContent.replace(
  /  \}\n\];\n\nexport const gGymnasiouMCQ: MCQ\[\] = \[/,
  `  },\n${draftQuestions}\n];\n\nexport const gGymnasiouMCQ: MCQ[] = [`
);

newTargetContent = newTargetContent.replace(
  /  \}\n\];/,
  `  },\n${draftMCQ}\n];`
);

fs.writeFileSync(targetPath, newTargetContent, 'utf8');
console.log("Merged successfully");
