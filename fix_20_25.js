const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf8');

// 1. Remove Question 20 from gGymnasiouQuestions
const q20Block = `  {
    "chapterId": "chapter-5",
    "q": "<b>20. Να επιλέξετε από τα παρακάτω διαλύματα αυτό που πρέπει να προστεθεί σε διάλυμα που έχει pH = 1 σε ικανοποιητική ποσότητα για να προκύψει διάλυμα με pH = 11.</b><br>α. διάλυμα HCl με pH = 4<br>β. καθαρό νερό<br>γ. διάλυμα NaOH με pH = 13<br>δ. διάλυμα NaOH με pH = 10",
    "a": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: <b>γ</b></span>"
  },
`;

if (content.includes(q20Block)) {
  content = content.replace(q20Block, "");
  console.log("Removed Q20 from gGymnasiouQuestions.");
} else {
  console.log("Q20 block not found exactly as specified.");
}

// 2. Add Question 20 to gGymnasiouMCQ (append to the end of the array)
// The array ends with:
//   }
// ];
// So we can replace that with our new object + the closing brackets.

const mcqQ20 = `  {
    "chapterId": "chapter-5",
    "q": "<b>20. Να επιλέξετε από τα παρακάτω διαλύματα αυτό που πρέπει να προστεθεί σε διάλυμα που έχει pH = 1 σε ικανοποιητική ποσότητα για να προκύψει διάλυμα με pH = 11.</b>",
    "options": [
      { "text": "α. διάλυμα HCl με pH = 4", "correct": false },
      { "text": "β. καθαρό νερό", "correct": false },
      { "text": "γ. διάλυμα NaOH με pH = 13", "correct": true },
      { "text": "δ. διάλυμα NaOH με pH = 10", "correct": false }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: <b>γ. διάλυμα NaOH με pH = 13</b><br>Για να μεταβληθεί το pH από 1 (έντονα όξινο) σε 11 (έντονα βασικό) απαιτείται ικανοποιητική ποσότητα μιας ισχυρής βάσης.</span>"
  }
];`;

content = content.replace(/\s*\}\s*\];\s*$/, ',\n' + mcqQ20 + '\n');
console.log("Added Q20 to gGymnasiouMCQ.");

// 3. Replace the image in Question 25 with the HTML table
const imgTag = `<img src='/images/periodic_table_metals.png' alt='Περιοδικός Πίνακας' class='w-full max-w-2xl h-auto my-2'>`;
const htmlTable = `<table class='w-full text-center border-collapse text-xs font-bold border-hidden my-2'><tbody><tr><td class='border border-black bg-red-500'>H</td><td colspan='16' class='border-none'></td><td class='border border-black bg-purple-400'>He</td></tr><tr><td class='border border-black bg-[#a5f3fc]'>Li</td><td class='border border-black bg-white'></td><td colspan='10' class='border-none'></td><td class='border border-black bg-white'></td><td class='border border-black bg-[#f0abfc]'></td><td class='border border-black bg-[#bbf7d0]'></td><td class='border border-black bg-[#bbf7d0]'></td><td class='border border-black bg-[#bbf7d0]'>F</td><td class='border border-black bg-purple-400'>Ne</td></tr><tr><td class='border border-black bg-[#a5f3fc]'>Na</td><td class='border border-black bg-[#a5f3fc]'>Mg</td><td colspan='10' class='border-none'></td><td class='border border-black bg-[#a5f3fc]'>Al</td><td class='border border-black bg-[#f0abfc]'></td><td class='border border-black bg-[#bbf7d0]'></td><td class='border border-black bg-[#bbf7d0]'></td><td class='border border-black bg-[#bbf7d0]'>Cl</td><td class='border border-black bg-purple-400'>Ar</td></tr><tr><td class='border border-black bg-[#a5f3fc]'>K</td><td class='border border-black bg-[#a5f3fc]'>Ca</td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'>Fe</td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'>Cu</td><td class='border border-black bg-[#a5f3fc]'>Zn</td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#f0abfc]'></td><td class='border border-black bg-[#bbf7d0]'>Br</td><td class='border border-black bg-purple-400'>Kr</td></tr><tr><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'>Ba</td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#a5f3fc]'></td><td class='border border-black bg-[#f0abfc]'></td><td class='border border-black bg-[#bbf7d0]'>I</td><td class='border border-black bg-purple-400'>Xe</td></tr></tbody></table>`;

if (content.includes(imgTag)) {
  content = content.replace(imgTag, htmlTable);
  console.log("Replaced image with HTML table in Q25.");
} else {
  console.log("Image tag not found exactly as specified.");
}

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', content, 'utf8');
console.log("All changes saved successfully.");
