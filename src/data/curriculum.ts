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
    exercises: 21,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Δομή Ατόμου - Περιοδικός Πίνακας",
    description: "Υποατομικά σωματίδια, ισότοπα, πρότυπο Bohr, ηλεκτρονιακή δομή και σύγχρονος περιοδικός πίνακας.",
    topics: 6,
    exercises: 50,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Χημικοί Δεσμοί",
    description: "Ιοντικός δεσμός, ομοιοπολικός δεσμός, διαμοριακές δυνάμεις και γεωμετρία μορίων.",
    topics: 4,
    exercises: 2,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Στοιχειομετρία",
    description: "Μοριακό βάρος, mole, γραμμομοριακός όγκος, καταστατική εξίσωση αερίων και χημικές εξισώσεις.",
    topics: 8,
    exercises: 22,
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
    number: "1",
    title: "Εισαγωγή στη Χημεία",
    description: "Τι είναι η χημεία, γιατί τη μελετάμε, εργαστηριακός εξοπλισμός και η σημασία της χημείας στη ζωή.",
    topics: 7,
    exercises: 11,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Η Χημεία στο Εργαστήριο",
    description: "Εργαστηριακός εξοπλισμός και βασικές τεχνικές.",
    topics: 2,
    exercises: 0,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Το νερό, Μίγματα και Διαλύματα",
    description: "Το νερό στη ζωή μας, ομογενή και ετερογενή μίγματα, διαλύματα και διαχωρισμός μιγμάτων.",
    topics: 3,
    exercises: 56,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Από τη μυθολογία στη Χημεία",
    description: "Η γέννηση της Χημείας, οι αρχαίοι Έλληνες φιλόσοφοι και η εξέλιξη της επιστήμης.",
    topics: 5,
    exercises: 43,
    color: "from-pink-600 to-pink-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "Από την ατομική θεωρία του Δημόκριτου στα μόρια",
    description: "Δομικά υλικά, άτομα, μόρια και οι θεωρίες του Δημόκριτου και του Dalton.",
    topics: 5,
    exercises: 6,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Η Γλώσσα της Χημείας",
    description: "Σύμβολα, χημικοί και μοριακοί τύποι στοιχείων και ενώσεων.",
    topics: 6,
    exercises: 6,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "chapter-7",
    number: "7",
    title: "Η Δομή του Ατόμου - Ιόντα",
    description: "Η ιστορική πορεία των αντιλήψεων για τη δομή του ατόμου, πρωτόνια, ηλεκτρόνια, ατομικός/μαζικός αριθμός, ιόντα.",
    topics: 4,
    exercises: 26,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "chapter-8",
    number: "8",
    title: "Χημικές Αντιδράσεις",
    description: "Χημικές εξισώσεις, αρχή διατήρησης της μάζας, εξώθερμες και ενδόθερμες αντιδράσεις.",
    topics: 3,
    exercises: 10,
    color: "from-purple-600 to-fuchsia-600"
  },
  {
    id: "chapter-9",
    number: "9",
    title: "Χημεία και Περιβάλλον",
    description: "Χημική σύνθεση, χημική ανάλυση και η συμβολή τους στην αντιμετώπιση σύγχρονων περιβαλλοντικών θεμάτων.",
    topics: 3,
    exercises: 4,
    color: "from-green-600 to-emerald-600"
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
