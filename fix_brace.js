const fs = require('fs');
let c = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf8');
c = c.replace('pH.</span>",\r\n  {', 'pH.</span>"\r\n  },\r\n  {');
c = c.replace('pH.</span>",\n  {', 'pH.</span>"\n  },\n  {');
fs.writeFileSync('src/data/gGymnasiouQuestions.ts', c);
