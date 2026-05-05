const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf8');

// The chapter-5 MCQs were added with wrong format:
// options: string[], correct: number  
// Needs to be: options: {text: string, correct: boolean}[]
// We need to convert them.

// Strategy: use regex to find each MCQ block that has chapter-5 and wrong format
// and rewrite the options section.

// Find MCQ entries that use the old format (string array + "correct": N)
// Pattern: "options": [\n      "...",\n      ...\n    ],\n    "correct": N,

const oldFormat = /("options":\s*\[)([\s\S]*?)(\],\s*\n\s*"correct":\s*)(\d+)(,)/g;

let match;
while ((match = oldFormat.exec(content)) !== null) {
  const optionsBlock = match[2]; // the lines between [ and ]
  const correctIndex = parseInt(match[4]);
  
  // Parse the string array items
  const items = optionsBlock.match(/"([^"]+)"/g);
  if (!items) continue;
  
  // Build new MCQOption[] format
  const newOptions = items.map((item, idx) => {
    const text = item.slice(1, -1); // remove surrounding quotes
    const correct = idx === correctIndex;
    return `      { "text": "${text}", "correct": ${correct} }`;
  }).join(',\n');
  
  const newBlock = `"options": [\n${newOptions}\n    ]`;
  
  content = content.replace(
    match[0],
    `${newBlock}${match[5]}`
  );
  
  // Reset regex since we modified the string
  oldFormat.lastIndex = 0;
}

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', content, 'utf8');
console.log('Done! MCQ options converted to correct format.');
