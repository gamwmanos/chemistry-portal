const fs = require('fs');
const file = 'src/data/bGymnasiouQuestions.ts';
let content = fs.readFileSync(file, 'utf8');

const newAnswer = `"<div class='overflow-x-auto my-4'><table class='border-collapse text-sm'><thead><tr><th class='py-2 px-3 text-left text-white/60 font-normal'>#</th><th class='py-2 px-3 text-left text-white/60 font-normal'>Απάντηση</th></tr></thead><tbody><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>1.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Π</span><span class='text-emerald-300'>ΥΡΗΝΑΣ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>2.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Π</span><span class='text-emerald-300'>ΡΩΤΟΝΙΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>3.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ο</span><span class='text-emerald-300'>ΚΤΩ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>4.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Α</span><span class='text-emerald-300'>ΤΟΜΙΚΟΣ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>5.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Τ</span><span class='text-emerald-300'>ΡΙΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>6.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ο</span><span class='text-emerald-300'>ΥΔΕΤΕΡΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>7.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Μ</span><span class='text-emerald-300'>ΑΖΙΚΟΣ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>8.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ι</span><span class='text-emerald-300'>ΟΝ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>9.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Κ</span><span class='text-emerald-300'>ΑΤΙΟΝ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>10.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Α</span><span class='text-emerald-300'>ΝΙΟΝ</span></td></tr></tbody></table></div><p class='mt-3 text-yellow-300 font-bold text-base'>Αρχικά: <span class='tracking-widest text-yellow-400 text-lg'>Π-Π-Ο-Α-Τ-Ο-Μ-Ι-Κ-Α</span></p>"`;

// Find the chapter-7 question 18 acrostic answer
// It starts with <span class='text-purple-300 font-bold'>\n<div class=\"overflow-x-auto
const oldPattern = /<span class='text-purple-300 font-bold'>\\n<div class=\\"overflow-x-auto my-4\\"><table class='w-full text-left border-collapse bg-white\/5 rounded-xl overflow-hidden'>\\n  <tbody class=\\"divide-y divide-white\/10\\">\\n    <tr class='hover:bg-white\/5 transition-colors'><td class='py-3 px-4 font-semibold'>1\.<\/td><td class='py-3 px-4'>YRΗΝΑΣ<\/td><\/tr>[\s\S]*?ANION<\/td><\/tr>\\n  <\/tbody>\\n<\/table><\/div>\\n<\/span>/;

// Instead, let's be more precise - find the specific pattern in the file
const idx = content.indexOf("YRΗΝΑΣ");
if (idx === -1) {
  console.log("Pattern 'YRΗΝΑΣ' not found, trying 'YRΗΝΑΣ' with different encoding...");
  // Try to find it differently
  const idx2 = content.indexOf("chapter-7");
  console.log("chapter-7 found at index:", idx2);
  
  // Find the acrostic answer for chapter 7 (question 18)
  const q18start = content.indexOf('"18. Να συμπληρώσετε την ακροστιχίδα (Λύση)');
  console.log("Question 18 found at:", q18start);
  if (q18start > -1) {
    // Find the "a": after this question
    const answerStart = content.indexOf('"a":', q18start);
    console.log("Answer starts at:", answerStart);
    // Find the closing of this answer (next },)
    const answerEnd = content.indexOf('\n  },\r', answerStart);
    console.log("Answer ends at:", answerEnd);
    
    if (answerStart > -1 && answerEnd > -1) {
      const oldAnswer = content.substring(answerStart, answerEnd + 4);
      console.log("Old answer snippet (first 100):", oldAnswer.substring(0, 100));
      
      const newContent = content.substring(0, answerStart) + 
        `"a": ${newAnswer}` + 
        content.substring(answerEnd);
      
      fs.writeFileSync(file, newContent, 'utf8');
      console.log("✓ Ακροστιχίδα Κεφ. 7 ενημερώθηκε!");
    } else {
      console.log("Could not find answer boundaries");
    }
  }
} else {
  console.log("Found 'YRΗΝΑΣ' at index:", idx);
}
