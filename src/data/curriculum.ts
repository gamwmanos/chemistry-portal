export interface Chapter {
  id: string;
  number: string;
  title: string;
  description: string;
  topics: number;
  exercises: number;
  color: string;
}

export const aLykeiouChapters: Chapter[] = [
  {
    id: "chapter-1",
    number: "1",
    title: "Βασικές Έννοιες",
    description: "Η επιστημονική αξία της Χημείας, ύλη, μίγματα, χημικές αντιδράσεις και επιστημονική μέθοδος.",
    topics: 5,
    exercises: 40,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Δομή Ατόμου - Περιοδικός Πίνακας",
    description: "Υποατομικά σωματίδια, ισότοπα, πρότυπο Bohr, ηλεκτρονιακή δομή και σύγχρονος περιοδικός πίνακας.",
    topics: 6,
    exercises: 35,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Χημικοί Δεσμοί",
    description: "Ιοντικός δεσμός, ομοιοπολικός δεσμός, διαμοριακές δυνάμεις και γεωμετρία μορίων.",
    topics: 4,
    exercises: 25,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Στοιχειομετρία",
    description: "Μοριακό βάρος, mole, γραμμομοριακός όγκος, καταστατική εξίσωση αερίων και χημικές εξισώσεις.",
    topics: 8,
    exercises: 60,
    color: "from-violet-600 to-violet-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "Χημικές Αντιδράσεις",
    description: "Αντιδράσεις απλής και διπλής αντικατάστασης, εξουδετέρωση και θεωρία ιόντων.",
    topics: 6,
    exercises: 45,
    color: "from-fuchsia-600 to-fuchsia-400"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Διαλύματα",
    description: "Είδη διαλυμάτων, διαλυτότητα, εκφράσεις περιεκτικότητας, αραίωση και ανάμειξη.",
    topics: 5,
    exercises: 50,
    color: "from-rose-600 to-rose-400"
  }
];

export const bGymnasiouChapters: Chapter[] = [
  {
    id: "chapter-1",
    number: "1",
    title: "Εισαγωγή στη Χημεία",
    description: "Τι είναι η χημεία, γιατί τη μελετάμε και η σημασία της στην καθημερινή ζωή.",
    topics: 3,
    exercises: 11,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Καταστάσεις Ύλης & Μείγματα",
    description: "Φυσικές καταστάσεις της ύλης, διαχωρισμός μειγμάτων, διαλύματα και περιεκτικότητα.",
    topics: 6,
    exercises: 55,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Άτομα και Μόρια",
    description: "Η δομή της ύλης, άτομα, μόρια και οι ιδιότητές τους στον μικρόκοσμο.",
    topics: 4,
    exercises: 19,
    color: "from-sky-600 to-sky-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Στοιχεία και Ενώσεις",
    description: "Χημικά στοιχεία, χημικές ενώσεις, συμβολισμοί και ταξινόμηση της ύλης.",
    topics: 5,
    exercises: 25,
    color: "from-teal-600 to-teal-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "Ατομικό Πρότυπο & Δομή",
    description: "Πρωτόνια, νετρόνια, ηλεκτρόνια και η δομή του ατόμου.",
    topics: 4,
    exercises: 26,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Χημικές Αντιδράσεις",
    description: "Χημικές εξισώσεις, αρχή διατήρησης της μάζας, εξώθερμες/ενδόθερμες αντιδράσεις και περιβάλλον.",
    topics: 5,
    exercises: 24,
    color: "from-cyan-500 to-blue-500"
  }
];

export const gGymnasiouChapters: Chapter[] = [
  {
    id: "chapter-0",
    number: "0",
    title: "Επαναληπτικό Κεφάλαιο",
    description: "Δομή ατόμου και Χημικές Αντιδράσεις.",
    topics: 3,
    exercises: 23,
    color: "from-slate-600 to-slate-400"
  },
  {
    id: "chapter-1",
    number: "1",
    title: "Οξέα - Βάσεις - Άλατα",
    description: "Γνωριμία με τα οξέα, τις βάσεις, τα άλατα και τις ιδιότητές τους.",
    topics: 4,
    exercises: 32,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Ταξινόμηση Στοιχείων",
    description: "Περιοδικός πίνακας, μέταλλα και αμέταλλα.",
    topics: 4,
    exercises: 21,
    color: "from-teal-600 to-teal-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Η Χημεία του Άνθρακα",
    description: "Οργανική χημεία, υδρογονάνθρακες, καύσιμα και πολυμερή.",
    topics: 5,
    exercises: 34,
    color: "from-green-600 to-green-400"
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
];
