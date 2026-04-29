const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

let qMatch = content.match(/export const gGymnasiouQuestions: Question\[\] = (\[[\s\S]*?\]);/s);
let mcqMatch = content.match(/export const gGymnasiouMCQ: MCQ\[\] = (\[[\s\S]*?\]);/s);

let qArray = eval(qMatch[1]);
let mcqArray = eval(mcqMatch[1]);

function remap(arr) {
    return arr.map(q => {
        let text = (q.q + " " + (q.a || q.explanation)).toLowerCase();
        let oldChapter = q.chapterId;
        
        if (oldChapter === "chapter-0") {
            q.chapterId = "chapter-1"; // Χημικές αντιδράσεις
        }
        else if (oldChapter === "chapter-1") {
            // Οξέα/Βάσεις -> 5, Ιόντα -> 2
            let isAcid = text.includes("οξέ") || text.includes("βάσ") || text.includes("άλατ") || 
                         text.includes(" ph ") || text.includes("h2so4") || text.includes("δείκτη") || 
                         text.includes("ξίδι") || text.includes("καταβυθίζεται") || text.includes("ίζημα");
            if (isAcid) {
                q.chapterId = "chapter-5";
            } else {
                q.chapterId = "chapter-2";
            }
        }
        else if (oldChapter === "chapter-2") {
            // Περιοδικός πίνακας -> 3
            q.chapterId = "chapter-3";
        }
        else if (oldChapter === "chapter-3") {
            // Οργανική -> 4
            q.chapterId = "chapter-4";
        }
        else if (oldChapter === "chapter-6") {
            q.chapterId = "chapter-6";
        }
        return q;
    });
}

qArray = remap(qArray);
mcqArray = remap(mcqArray);

let updatedContent = content.replace(qMatch[1], JSON.stringify(qArray, null, 2));
updatedContent = updatedContent.replace(mcqMatch[1], JSON.stringify(mcqArray, null, 2));

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', updatedContent, 'utf-8');
console.log("Remapped gGymnasiouQuestions.ts properly.");
