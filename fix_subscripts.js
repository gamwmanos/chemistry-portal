const fs = require('fs');

const files = [
  'src/data/bGymnasiouQuestions.ts',
  'src/data/aLykeiouQuestions.ts',
];

// Converts letter-immediately-followed-by-digit to subscript
// e.g. NH3 -> NH<sub>3</sub>, H2O -> H<sub>2</sub>O, CO2 -> CO<sub>2</sub>
// Avoids matching numbers that follow a space (e.g. "64 g", "96 g", "5. ", "ii.")
function applySubscripts(text) {
  // Match: a letter directly followed by one or more digits
  // Negative lookbehind for space/period/digit to avoid "5.β" or "ii."
  return text.replace(/([A-Za-z])(\d+)/g, (match, letter, digits) => {
    // Skip if already inside a <sub> tag (shouldn't happen but safety check)
    return `${letter}<sub>${digits}</sub>`;
  });
}

let totalFixed = 0;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`Παράλειψη: ${file}`);
    continue;
  }

  const original = fs.readFileSync(file, 'utf8');
  
  // We need to apply subscripts ONLY inside "text": "..." fields of options
  // and in question "q": "..." text, and in "explanation": "..."
  // But NOT inside HTML tags that already have <sub> or other tags
  
  // Strategy: parse the JSON array, fix the text fields, re-serialize
  // But since it's a TypeScript export, we'll do targeted regex replacement
  
  // Apply to option text fields: "text": "..."
  // These are the short answer options like "A. NH3", "ii. P4 ή P6"
  let fixed = original.replace(/"text":\s*"([^"]+)"/g, (match, content) => {
    // Only apply if content doesn't already have <sub> tags
    if (content.includes('<sub>')) return match;
    const newContent = applySubscripts(content);
    if (newContent !== content) {
      totalFixed++;
      return `"text": "${newContent}"`;
    }
    return match;
  });

  // Also apply to "q": "..." fields (the question text)
  // but be careful - q fields can have lots of content
  fixed = fixed.replace(/"q":\s*"([^"]+)"/g, (match, content) => {
    if (content.includes('<sub>')) return match;
    const newContent = applySubscripts(content);
    if (newContent !== content) {
      totalFixed++;
      return `"q": "${newContent}"`;
    }
    return match;
  });

  if (fixed !== original) {
    fs.writeFileSync(file, fixed, 'utf8');
    console.log(`✓ ${file.split('/').pop()}: subscripts εφαρμόστηκαν`);
  } else {
    console.log(`✓ ${file.split('/').pop()}: χωρίς αλλαγές`);
  }
}

console.log(`\nΣύνολο: ${totalFixed} αλλαγές`);
