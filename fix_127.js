const fs = require('fs');
const file = 'd:/BIBLIA/chemistry-portal/src/data/bGymnasiouQuestions.ts';
let data = fs.readFileSync(file, 'utf8');
data = data.replace('   "17. Να συμπληρώσετε την', '    "q": "17. Να συμπληρώσετε την');
fs.writeFileSync(file, data);
console.log("Done");
