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
    exercises: 64,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Δομή Ατόμου - Περιοδικός Πίνακας",
    description: "Υποατομικά σωματίδια, ισότοπα, πρότυπο Bohr, ηλεκτρονιακή δομή και σύγχρονος περιοδικός πίνακας.",
    topics: 6,
    exercises: 7,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Χημικοί Δεσμοί",
    description: "Ιοντικός δεσμός, ομοιοπολικός δεσμός, διαμοριακές δυνάμεις και γεωμετρία μορίων.",
    topics: 4,
    exercises: 27,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Στοιχειομετρία",
    description: "Μοριακό βάρος, mole, γραμμομοριακός όγκος, καταστατική εξίσωση αερίων και χημικές εξισώσεις.",
    topics: 8,
    exercises: 45,
    color: "from-violet-600 to-violet-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "Χημικές Αντιδράσεις",
    description: "Αντιδράσεις απλής και διπλής αντικατάστασης, εξουδετέρωση και θεωρία ιόντων.",
    topics: 6,
    exercises: 36,
    color: "from-fuchsia-600 to-fuchsia-400"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Διαλύματα",
    description: "Είδη διαλυμάτων, διαλυτότητα, εκφράσεις περιεκτικότητας, αραίωση και ανάμειξη.",
    topics: 5,
    exercises: 3,
    color: "from-rose-600 to-rose-400"
  }
];

export const bGymnasiouChapters: Chapter[] = [
  {
    id: "chapter-1",
    number: "1.1",
    title: "Εισαγωγή στη Χημεία",
    description: "Τι είναι η χημεία, γιατί τη μελετάμε και η σημασία της στην καθημερινή ζωή.",
    topics: 2,
    exercises: 64,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: "chapter-2",
    number: "1.2",
    title: "Η Χημεία στο Εργαστήριο",
    description: "Βασικός εργαστηριακός εξοπλισμός και κανόνες ασφαλείας.",
    topics: 1,
    exercises: 7,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "chapter-3",
    number: "1.3",
    title: "Τα σωματίδια της ύλης",
    description: "Οι απόψεις των αρχαίων Ελλήνων και η ατομική θεωρία.",
    topics: 2,
    exercises: 27,
    color: "from-sky-600 to-sky-400"
  },
  {
    id: "chapter-4",
    number: "1.4",
    title: "Η δομή του ατόμου",
    description: "Πρωτόνια, νετρόνια, ηλεκτρόνια και η δομή του ατόμου.",
    topics: 2,
    exercises: 45,
    color: "from-teal-600 to-teal-400"
  },
  {
    id: "chapter-5",
    number: "2.1",
    title: "Το νερό στη ζωή μας",
    description: "Η κατανομή του νερού, πόσιμο νερό και οι ιδιότητές του.",
    topics: 2,
    exercises: 36,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-6",
    number: "2.2",
    title: "Μίγματα",
    description: "Ομογενή και ετερογενή μίγματα.",
    topics: 2,
    exercises: 3,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "chapter-7",
    number: "2.3",
    title: "Διαλύματα",
    description: "Περιεκτικότητες διαλυμάτων, %w/w, %w/v, %v/v.",
    topics: 3,
    exercises: 12,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-8",
    number: "2.4",
    title: "Διαχωρισμός μιγμάτων",
    description: "Μέθοδοι διαχωρισμού (διήθηση, απόσταξη, χρωματογραφία κ.ά.).",
    topics: 2,
    exercises: 8,
    color: "from-violet-600 to-violet-400"
  },
  {
    id: "chapter-9",
    number: "3.1",
    title: "Χημικά Στοιχεία & Χημικοί Τύποι",
    description: "Καθαρές ουσίες, στοιχεία, ενώσεις και μοριακοί τύποι.",
    topics: 3,
    exercises: 16,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-10",
    number: "4.1",
    title: "Χημικές Αντιδράσεις",
    description: "Χημικές εξισώσεις, αρχή διατήρησης της μάζας, εξώθερμες/ενδόθερμες αντιδράσεις και περιβάλλον.",
    topics: 5,
    exercises: 24,
    color: "from-pink-600 to-pink-400"
  }
];

export const gGymnasiouChapters: Chapter[] = [
  {
    id: "chapter-1",
    number: "1",
    title: "Χημικές Αντιδράσεις",
    description: "Αντιδρώντα, προϊόντα, εξώθερμες/ενδόθερμες και νόμος Lavoisier.",
    topics: 3,
    exercises: 64,
    color: "from-slate-600 to-slate-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Δομή Ατόμου & Ιόντα",
    description: "Ατομικό πρότυπο Bohr, ιόντα και ιοντικές ενώσεις.",
    topics: 2,
    exercises: 7,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Ταξινόμηση Στοιχείων",
    description: "Περιοδικός πίνακας, μέταλλα και αμέταλλα.",
    topics: 4,
    exercises: 27,
    color: "from-teal-600 to-teal-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Η Χημεία του Άνθρακα",
    description: "Οργανική χημεία, υδρογονάνθρακες, καύσιμα και πολυμερή.",
    topics: 5,
    exercises: 45,
    color: "from-green-600 to-green-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "Οξέα - Βάσεις - Άλατα",
    description: "Γνωριμία με τα οξέα, τις βάσεις, τα άλατα και την κλίμακα pH.",
    topics: 5,
    exercises: 36,
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
];
