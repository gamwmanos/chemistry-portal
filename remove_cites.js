const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'src/data/bGymnasiouQuestions.ts'),
  path.join(__dirname, 'src/data/aLykeiouQuestions.ts'),
  path.join(__dirname, 'src/data/bLykeiouQuestions.ts'),
  path.join(__dirname, 'src/data/gLykeiouQuestions.ts'),
];

// Matches [cite: 123], [cite: 123-456], [cite: 123, 456], etc.
const citePattern = /\s*\[cite:[^\]]*\]/g;

let totalRemoved = 0;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`Παράλειψη (δεν υπάρχει): ${path.basename(file)}`);
    continue;
  }

  const original = fs.readFileSync(file, 'utf8');
  const matches = original.match(citePattern);
  const count = matches ? matches.length : 0;

  if (count === 0) {
    console.log(`✓ Καθαρό: ${path.basename(file)}`);
    continue;
  }

  const cleaned = original.replace(citePattern, '');
  fs.writeFileSync(file, cleaned, 'utf8');
  totalRemoved += count;
  console.log(`✓ ${path.basename(file)}: αφαιρέθηκαν ${count} [cite] αναφορές`);
}

console.log(`\nΣύνολο: ${totalRemoved} [cite] αναφορές αφαιρέθηκαν.`);
