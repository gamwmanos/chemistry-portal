const fs = require('fs');
const ch2Code = fs.readFileSync('scratch/add_ch2.js', 'utf8');

// The file has: const ch2Questions = `export const ch2Questions: Question[] = [ ... ];`;
// So everything between `export const ch2Questions: Question[] = [` and the last `];` before `content = content.replace` is the data we need.

const startIdx = ch2Code.indexOf('export const ch2Questions: Question[] = [');
const endIdx = ch2Code.indexOf('];\\`', startIdx);
if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find ch2Questions in add_ch2.js');
    process.exit(1);
}

const extractedData = ch2Code.substring(startIdx, endIdx + 2);

const targetFile = 'src/data/aLykeiouQuestions.ts';
let targetContent = fs.readFileSync(targetFile, 'utf8');

// Replace both empty arrays with the extracted data
// Wait, the extracted data contains BOTH ch2Questions and ch2MCQ because they were both inside the same template literal in add_ch2.js!
// Let's verify that.
if (extractedData.includes('export const ch2MCQ: MCQ[] = [')) {
    // We remove the two empty arrays from targetContent
    targetContent = targetContent.replace(/export const ch2Questions: Question\[\] = \[\];\s*/, '');
    targetContent = targetContent.replace(/export const ch2MCQ: MCQ\[\] = \[\];\s*/, '');
    
    // And insert the extractedData after the КЕΦΑΛΑΙΟ 2 comment
    targetContent = targetContent.replace(/\/\/ ─── ΚΕΦΑΛΑΙΟ 2[^\n]*\n\/\/ Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – Ο ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ\n/, 
      "// ─── ΚΕΦΑΛΑΙΟ 2 ────────────────────────────────────────────────────────────────\n" +
      "// Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – Ο ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ\n\n" + extractedData + "\n\n"
    );
    
    fs.writeFileSync(targetFile, targetContent, 'utf8');
    console.log('Successfully inserted Chapter 2 questions and MCQs into aLykeiouQuestions.ts');
} else {
    console.error('Could not find ch2MCQ inside the extracted data');
}
