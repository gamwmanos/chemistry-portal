const fs = require('fs');
let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf8');

const targetStr = `  {
    "chapterId": "chapter-3",
    "q": "<b>12. Το σχήμα το οποίο ακολουθεί απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα:</b><br><div class='flex mt-4 mb-4 text-sm'><div class='flex flex-col'><div class='flex'><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>A</div><div class='w-8 h-8'></div></div><div class='flex'><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>B</div><div class='w-8 h-8 border border-black bg-blue-200'></div></div><div class='flex'><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>Γ</div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>Δ</div></div></div><div class='w-8'></div><div class='flex flex-col mt-8'><div class='flex'><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-yellow-200'>E</div><div class='w-8 h-8 border border-black bg-green-200'></div></div><div class='flex'><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-yellow-200'>Z</div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-green-200'>K</div></div></div></div>Να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες και να δικαιολογήσετε την απάντησή σας.<br>Α. Το στοιχείο Β έχει παρόμοιες ιδιότητες με το στοιχείο Γ και το στοιχείο Ε με το στοιχείο Ζ.<br>Β. Το στοιχείο Α είναι στερεό, όπως τα στοιχεία Β, Γ και Δ.<br>Γ. Τα στοιχεία Α, Β, Γ και Δ είναι μέταλλα.<br>Δ. Το στοιχείο Δ είναι αλκάλιο.<br>Ε. Το στοιχείο Κ είναι αδρανές και δεν αντιδρά με άλλα στοιχεία.",
    "a": "<span class='text-purple-300 font-bold'>ΑΠΑΝΤΗΣΕΙΣ<br>Α. Η πρόταση είναι σωστή.<br>Τα στοιχεία Β και Γ όπως και τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα επομένως έχουν παρόμοιες ιδιότητες.<br>Β. Η πρόταση είναι λανθασμένη.<br>Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο. Επομένως τα στοιχεία Β, Γ και Δ είναι στερεά αλλά το Α είναι αέριο.<br>Γ. Η πρόταση είναι λανθασμένη.<br>Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο<br>Δ. Η πρόταση είναι λανθασμένη.<br>Το στοιχείο Δ ανήκει στην 2<sup>η</sup> ομάδα του Περιοδικού Πίνακα επομένως είναι αλκαλική γαία και όχι αλκάλιο.<br>Ε. Η πρόταση είναι σωστή.<br>Το στοιχείο Κ ανήκει στην 18<sup>η</sup> ομάδα του Περιοδικού Πίνακα, επομένως είναι ευγενές αέριο.</span>"\n  },\n`;

if (!content.includes(targetStr)) {
  console.log("Could not find the question to remove!");
  process.exit(1);
}

content = content.replace(targetStr, "");

const baseHtml = `<b>Το σχήμα το οποίο ακολουθεί απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα:</b><br><div class='flex mt-4 mb-4 text-sm'><div class='flex flex-col'><div class='flex'><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>A</div><div class='w-8 h-8'></div></div><div class='flex'><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>B</div><div class='w-8 h-8 border border-black bg-blue-200'></div></div><div class='flex'><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>Γ</div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-blue-200'>Δ</div></div></div><div class='w-8'></div><div class='flex flex-col mt-8'><div class='flex'><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-yellow-200'>E</div><div class='w-8 h-8 border border-black bg-green-200'></div></div><div class='flex'><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black bg-yellow-200'></div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-yellow-200'>Z</div><div class='w-8 h-8 border border-black flex items-center justify-center font-bold bg-green-200'>K</div></div></div></div>`;

const newMCQs = `,
  {
    "chapterId": "chapter-3",
    "q": "${baseHtml}Η πρόταση: «Α. Το στοιχείο Β έχει παρόμοιες ιδιότητες με το στοιχείο Γ και το στοιχείο Ε με το στοιχείο Ζ.» είναι:",
    "options": [
      { "text": "Σωστή", "correct": true },
      { "text": "Λανθασμένη", "correct": false }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η πρόταση είναι σωστή. Τα στοιχεία Β και Γ όπως και τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα επομένως έχουν παρόμοιες ιδιότητες.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "${baseHtml}Η πρόταση: «Β. Το στοιχείο Α είναι στερεό, όπως τα στοιχεία Β, Γ και Δ.» είναι:",
    "options": [
      { "text": "Σωστή", "correct": false },
      { "text": "Λανθασμένη", "correct": true }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο. Επομένως τα στοιχεία Β, Γ και Δ είναι στερεά αλλά το Α είναι αέριο.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "${baseHtml}Η πρόταση: «Γ. Τα στοιχεία Α, Β, Γ και Δ είναι μέταλλα.» είναι:",
    "options": [
      { "text": "Σωστή", "correct": false },
      { "text": "Λανθασμένη", "correct": true }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "${baseHtml}Η πρόταση: «Δ. Το στοιχείο Δ είναι αλκάλιο.» είναι:",
    "options": [
      { "text": "Σωστή", "correct": false },
      { "text": "Λανθασμένη", "correct": true }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η πρόταση είναι λανθασμένη. Το στοιχείο Δ ανήκει στην 2<sup>η</sup> ομάδα του Περιοδικού Πίνακα επομένως είναι αλκαλική γαία και όχι αλκάλιο.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "${baseHtml}Η πρόταση: «Ε. Το στοιχείο Κ είναι αδρανές και δεν αντιδρά με άλλα στοιχεία.» είναι:",
    "options": [
      { "text": "Σωστή", "correct": true },
      { "text": "Λανθασμένη", "correct": false }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η πρόταση είναι σωστή. Το στοιχείο Κ ανήκει στην 18<sup>η</sup> ομάδα του Περιοδικού Πίνακα, επομένως είναι ευγενές αέριο.</span>"
  }`;

content = content.replace(/\n];\s*$/, newMCQs + "\n];\n");

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', content, 'utf8');
console.log("Replaced successfully!");
