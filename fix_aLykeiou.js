const fs = require('fs');

let c = fs.readFileSync('src/data/aLykeiouQuestions.ts', 'utf8');

// Fix open questions keys
c = c.replace(/^[ \t]*id: "ch6[^"]*",\r?\n/gm, '');
c = c.replace(/^[ \t]*question: /gm, '    q: ');
c = c.replace(/^[ \t]*solution: /gm, '    a: ');

// Fix MCQ options formatting
// The MCQ options are currently array of strings, followed by correctOptionIndex
// We need to parse ch6MCQ and re-serialize it.
// It's easier to just use regex to find options: [ ... ], correctOptionIndex: X
// But regex for an array can be tricky. Let's extract the ch6MCQ array string, evaluate it, and format it.

const mcqMatch = c.match(/export const ch6MCQ: MCQ\[\] = (\[[\s\S]*?\]);/);
if (mcqMatch) {
  let mcqString = mcqMatch[1];
  // to eval safely, we need to handle \n which might be in strings. Wait, eval() parses strings normally.
  // The only problem is backslashes like \\( which eval will turn into \(
  // So we can use a custom parser or just regex the options array.
  
  // Let's regex it:
  // We need to find: 
  // options: [
  //   "text1",
  //   "text2",
  //   "text3",
  //   "text4"
  // ],
  // correctOptionIndex: X,
  
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
console.log('Fixed aLykeiouQuestions.ts');
