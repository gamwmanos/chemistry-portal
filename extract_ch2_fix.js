const fs = require('fs');
const ch2Code = fs.readFileSync('scratch/add_ch2.js', 'utf8');

const startIdx = ch2Code.indexOf('export const ch2Questions: Question[] = [');
const endIdx = ch2Code.indexOf('];\\`', startIdx);
const extractedData = ch2Code.substring(startIdx, endIdx + 2);

const targetFile = 'src/data/aLykeiouQuestions.ts';
let targetContent = fs.readFileSync(targetFile, 'utf8');

// Insert extractedData after the comment
const searchStr = "// Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – Ο ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ";
const insertIdx = targetContent.indexOf(searchStr);

if (insertIdx !== -1) {
    // we want to insert after this line, so find the next newline
    const nextNewline = targetContent.indexOf('\n', insertIdx);
    targetContent = targetContent.substring(0, nextNewline + 1) + "\n" + extractedData + "\n" + targetContent.substring(nextNewline + 1);
    fs.writeFileSync(targetFile, targetContent, 'utf8');
    console.log('Successfully inserted Chapter 2 questions and MCQs into aLykeiouQuestions.ts');
} else {
    console.error('Could not find the insertion point!');
}
