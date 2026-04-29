const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

let qMatch = content.match(/export const gGymnasiouQuestions: Question\[\] = (\[[\s\S]*?\]);/s);
let mcqMatch = content.match(/export const gGymnasiouMCQ: MCQ\[\] = (\[[\s\S]*?\]);/s);

let qArray = eval(qMatch[1]);
let mcqArray = eval(mcqMatch[1]);

function remapArray(arr) {
    return arr.map(q => {
        let text = (q.q + " " + (q.a || q.explanation)).toLowerCase();
        
        if (q.chapterId === "chapter-0") {
            q.chapterId = "chapter-1"; // Χημικές αντιδράσεις
        }
        else if (q.chapterId === "chapter-1") {
            // Can be Ιοντικές Ενώσεις (chapter 2) or Οξέα-Βάσεις (chapter 5)
            if (text.includes("ιοντικ") || text.includes("ιόντα") || text.includes("νάτριο και το χλώριο") || text.includes("κατιόν") && !text.includes("όξιν")) {
                q.chapterId = "chapter-2";
            }
            if (text.includes("οξέ") || text.includes("βάσ") || text.includes("άλατ") || text.includes("ph") || text.includes("η2so4") || text.includes("δείκτη") || text.includes("ξίδι") || text.includes("καταβυθίζεται") || text.includes("ίζημα")) {
                q.chapterId = "chapter-5"; // Οξέα - Βάσεις
            }
        }
        else if (q.chapterId === "chapter-2") {
            // Can be Περιοδικός Πίνακας (chapter 3) or Οξέα/Βάσεις/Μέταλλα (chapter 5 or 3?)
            // Wait, the "Ταξινόμηση στοιχείων" from chapter 2 is actually chapter 3!
            // Wait, the periodic table questions should go to chapter 3.
            q.chapterId = "chapter-3"; 
        }
        else if (q.chapterId === "chapter-3") {
            // Η Χημεία του Άνθρακα (Organic Chemistry) -> chapter 4
            q.chapterId = "chapter-4";
        }
        else if (q.chapterId === "chapter-6") {
            q.chapterId = "chapter-6"; // Ενέργεια
        }
        return q;
    });
}

qArray = remapArray(qArray);
mcqArray = remapArray(mcqArray);

// Let's do a more explicit mapping just to be safe.
// Let's review the mappings:
// Organic chemistry has terms like "άνθρακα", "καύση", "υδρογονάνθρακες", "πολυμερή". They are now in chapter-4.
// Periodic table has "περιοδικ", "mendeleev", "μέταλλα", "αλκάλια". They are in chapter-3.
// Acids/bases has "οξέ", "βάσ", "ph", "άλατ". They are in chapter-5.
// Ionic bonds has "ιοντικ", "nacl", "ιόντα". They are in chapter-2.
// Reactions has "εξώθερμες", "lavoisier", "αντιδρώντα". They are in chapter-1.

let updatedContent = content.replace(qMatch[1], JSON.stringify(qArray, null, 2));
updatedContent = updatedContent.replace(mcqMatch[1], JSON.stringify(mcqArray, null, 2));

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', updatedContent, 'utf-8');
console.log("Remapped questions to correct chapters");
