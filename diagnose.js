const fs = require('fs');
const content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');

// Find the question about 64g θείου
const idx = content.indexOf('θείου');
if (idx > -1) {
  console.log('Found θείου at:', idx);
  // Print the question context
  const start = content.lastIndexOf('"q":', idx);
  console.log(content.substring(start, start + 300));
}

// Also search in MCQ section
const idx2 = content.indexOf('64 g');
if (idx2 > -1) {
  console.log('\nFound "64 g" at:', idx2);
  const start2 = content.lastIndexOf('"q":', idx2);
  console.log(content.substring(start2, start2 + 300));
}

// Search in MCQ options for CO2, SO2 without sub tags
console.log('\n\n=== MCQ options lines ===');
const lines = content.split('\n');
// Find the MCQ section
let inMCQ = false;
lines.forEach((l, i) => {
  if (l.includes('bGymnasiouMCQ')) inMCQ = true;
  if (inMCQ && l.includes('"q"')) {
    if (l.includes('SO') || l.includes('CO') || l.includes('CH')) {
      console.log(`L${i+1}: ${l.substring(0, 200)}`);
    }
  }
});
