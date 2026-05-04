const fs = require('fs');

let c = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');

// Fix open questions keys
c = c.replace(/^[ \t]*id: "ch6[^"]*",\r?\n/gm, '');
c = c.replace(/^[ \t]*question: /gm, '    q: ');
c = c.replace(/^[ \t]*solution: /gm, '    a: ');

// Fix specific literal strings
c = c.split('},\\n  {').join('},\n  {');
c = c.split('"\\n  },').join('",\n  },'); // Fixes ζάχαρη"\n  }, -> ζάχαρη",\n  },

// Fix MCQ options formatting
const mcqMatch = c.match(/export const ch6MCQ: MCQ\[\] = (\[[\s\S]*?\]);/);
if (mcqMatch) {
  c = c.replace(/options:\s*\[\s*"([\s\S]*?)",\s*"([\s\S]*?)",\s*"([\s\S]*?)",\s*"([\s\S]*?)"\s*\],\s*correctOptionIndex:\s*(\d+),/g, (match, o1, o2, o3, o4, correctIdx) => {
    const idx = parseInt(correctIdx);
    return `options: [
      {
        text: "${o1}",
        correct: ${idx === 0}
      },
      {
        text: "${o2}",
        correct: ${idx === 1}
      },
      {
        text: "${o3}",
        correct: ${idx === 2}
      },
      {
        text: "${o4}",
        correct: ${idx === 3}
      }
    ],`;
  });
}

fs.writeFileSync('src/data/aLykeiouQuestions.ts', c);
console.log('Fixed aLykeiouQuestions.ts completely!');
