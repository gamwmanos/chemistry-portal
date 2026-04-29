const fs = require('fs');

let curriculum = fs.readFileSync('src/data/curriculum.ts', 'utf-8');
let questionsFile = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

let qMatch = questionsFile.match(/export const gGymnasiouQuestions: Question\[\] = (\[[\s\S]*?\]);/s);
let mcqMatch = questionsFile.match(/export const gGymnasiouMCQ: MCQ\[\] = (\[[\s\S]*?\]);/s);

let qArray = eval(qMatch[1]);
let mcqArray = eval(mcqMatch[1]);

let allQs = [...qArray, ...mcqArray];

let counts = {
    'chapter-1': 0,
    'chapter-2': 0,
    'chapter-3': 0,
    'chapter-4': 0,
    'chapter-5': 0,
    'chapter-6': 0
};

allQs.forEach(q => counts[q.chapterId]++);

// Regex to replace exercises count in curriculum.ts
let gGymMatch = curriculum.match(/export const gGymnasiouChapters: Chapter\[\] = (\[[\s\S]*?\]);/s);
let gGymArray = eval(gGymMatch[1]);

gGymArray.forEach(chap => {
    chap.exercises = counts[chap.id] || 0;
});

let newCurriculum = curriculum.replace(gGymMatch[1], JSON.stringify(gGymArray, null, 2));
// But JSON.stringify ruins the unquoted keys. Let's do it manually.
for (let id in counts) {
    let regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?exercises:\\s*)\\d+`, "g");
    curriculum = curriculum.replace(regex, `$1${counts[id]}`);
}

fs.writeFileSync('src/data/curriculum.ts', curriculum, 'utf-8');
console.log("Updated counts:", counts);
