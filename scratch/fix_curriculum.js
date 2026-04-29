const fs = require('fs');
let content = fs.readFileSync('src/data/curriculum.ts', 'utf-8');

const newChapters = `export const gGymnasiouChapters: Chapter[] = [
  {
    id: "chapter-1",
    number: "1",
    title: "Χημικές Αντιδράσεις",
    description: "Αντιδρώντα, προϊόντα, εξώθερμες/ενδόθερμες και νόμος Lavoisier.",
    topics: 3,
    exercises: 25,
    color: "from-slate-600 to-slate-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Δομή Ατόμου & Ιόντα",
    description: "Ατομικό πρότυπο Bohr, ιόντα και ιοντικές ενώσεις.",
    topics: 2,
    exercises: 12,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Ταξινόμηση Στοιχείων",
    description: "Περιοδικός πίνακας, μέταλλα και αμέταλλα.",
    topics: 4,
    exercises: 21,
    color: "from-teal-600 to-teal-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Η Χημεία του Άνθρακα",
    description: "Οργανική χημεία, υδρογονάνθρακες, καύσιμα και πολυμερή.",
    topics: 5,
    exercises: 34,
    color: "from-green-600 to-green-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "Οξέα - Βάσεις - Άλατα",
    description: "Γνωριμία με τα οξέα, τις βάσεις, τα άλατα και την κλίμακα pH.",
    topics: 5,
    exercises: 32,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Ενέργεια και Ζωή",
    description: "Μορφές ενέργειας, υλικά και περιβάλλον.",
    topics: 2,
    exercises: 3,
    color: "from-cyan-600 to-cyan-400"
  }
];`;

content = content.replace(/export const gGymnasiouChapters: Chapter\[\] = \[\s*\{[\s\S]*?\];/g, newChapters);
fs.writeFileSync('src/data/curriculum.ts', content, 'utf-8');
console.log("Replaced curriculum.ts");
