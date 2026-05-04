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
    title: "Η ΧΗΜΕΙΑ ΣΤΗΝ ΚΑΘΗΜΕΡΙΝΗ ΖΩΗ ΚΑΙ ΣΤΗΝ ΚΟΙΝΩΝΙΑ",
    description: "Η επιστημονική αξία της Χημείας, οι εφαρμογές της στη ζωή μας, η βιώσιμη ανάπτυξη και η ασφάλεια στο εργαστήριο.",
    topics: 0,
    exercises: 32,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – Ο ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ",
    description: "Υποατομικά σωματίδια, ατομικός και μαζικός αριθμός, ισότοπα, ηλεκτρονική δομή, ιόντα και σύγχρονος περιοδικός πίνακας.",
    topics: 0,
    exercises: 87,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "Ο ΧΗΜΙΚΟΣ ΔΕΣΜΟΣ",
    description: "Ιοντικός και ομοιοπολικός δεσμός, σχηματισμός ιόντων, ηλεκτραρνητικότητα, πολικότητα και ιδιότητες ιοντικών και ομοιοπολικών ενώσεων.",
    topics: 0,
    exercises: 86,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "Η ΓΛΩΣΣΑ ΤΗΣ ΑΝΟΡΓΑΝΗΣ ΧΗΜΕΙΑΣ",
    description: "Ονοματολογία ανόργανων ενώσεων, οξέα, βάσεις, άλατα, οξείδια και οι χημικές τους ονομασίες σύμφωνα με τη διεθνή ονοματολογία.",
    topics: 0,
    exercises: 25,
    color: "from-violet-600 to-violet-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "ΕΙΣΑΓΩΓΗ ΣΤΙΣ ΧΗΜΙΚΕΣ ΑΝΤΙΔΡΑΣΕΙΣ",
    description: "Χημικές εξισώσεις, τύποι αντιδράσεων, νόμος διατήρησης μάζας, εξώθερμες και ενδόθερμες αντιδράσεις.",
    topics: 0,
    exercises: 59,
    color: "from-fuchsia-600 to-fuchsia-400"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "ΣΤΟΙΧΕΙΟΜΕΤΡΙΑ",
    description: "Αριθμός Avogadro, mol, γραμμοατομιακή και γραμμομοριακή μάζα, στοιχειομετρικοί υπολογισμοί σε χημικές αντιδράσεις.",
    topics: 0,
    exercises: 100,
    color: "from-rose-600 to-rose-400"
  }
];

export const bGymnasiouChapters: Chapter[] = [
  {
    id: "chapter-1",
    number: "1",
    title: "Ο ΚΟΣΜΟΣ ΤΗΣ ΧΗΜΕΙΑΣ",
    description: "Τι είναι η χημεία, γιατί τη μελετάμε, εργαστηριακός εξοπλισμός και η σημασία της χημείας στη ζωή.",
    topics: 2,
    exercises: 11,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "ΤΟ ΕΡΓΑΣΤΗΡΙΟ ΧΗΜΕΙΑΣ",
    description: "Εργαστηριακός εξοπλισμός και βασικές τεχνικές.",
    topics: 3,
    exercises: 0,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "ΤΟ ΝΕΡΟ ΩΣ ΔΙΑΛΥΤΗΣ",
    description: "Το νερό στη ζωή μας, ομογενή και ετερογενή μίγματα, διαλύματα και διαχωρισμός μιγμάτων.",
    topics: 5,
    exercises: 56,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "ΑΠΟ ΤΙΣ ΕΝΩΣΕΙΣ ΣΤΑ ΧΗΜΙΚΑ ΣΤΟΙΧΕΙΑ",
    description: "Η γέννηση της Χημείας, οι αρχαίοι Έλληνες φιλόσοφοι και η εξέλιξη της επιστήμης.",
    topics: 2,
    exercises: 58,
    color: "from-pink-600 to-pink-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "ΑΠΟ ΤΑ ΧΗΜΙΚΑ ΣΤΟΙΧΕΙΑ ΣΤΑ ΑΤΟΜΑ",
    description: "Δομικά υλικά, άτομα, μόρια και οι θεωρίες του Δημόκριτου και του Dalton.",
    topics: 2,
    exercises: 6,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Η ΓΛΩΣΣΑ ΤΗΣ ΧΗΜΕΙΑΣ",
    description: "Σύμβολα, χημικοί και μοριακοί τύποι στοιχείων και ενώσεων.",
    topics: 1,
    exercises: 6,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "chapter-7",
    number: "7",
    title: "ΑΠΟ ΤΑ ΑΤΟΜΑ ΣΤΑ ΥΠΟΑΤΟΜΙΚΑ ΣΩΜΑΤΙΔΙΑ",
    description: "Η ιστορική πορεία των αντιλήψεων για τη δομή του ατόμου, πρωτόνια, ηλεκτρόνια, ατομικός/μαζικός αριθμός, ιόντα.",
    topics: 4,
    exercises: 26,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "chapter-8",
    number: "8",
    title: "Η ΧΗΜΙΚΗ ΑΝΤΙΔΡΑΣΗ",
    description: "Χημικές εξισώσεις, αρχή διατήρησης της μάζας, εξώθερμες και ενδόθερμες αντιδράσεις.",
    topics: 3,
    exercises: 10,
    color: "from-purple-600 to-fuchsia-600"
  },
  {
    id: "chapter-9",
    number: "9",
    title: "ΧΗΜΕΙΑ ΚΑΙ ΣΥΓΧΡΟΝΑ ΘΕΜΑΤΑ",
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
    title: "Η ΧΗΜΙΚΗ ΑΝΤΙΔΡΑΣΗ – ΧΗΜΙΚΕΣ ΕΞΙΣΩΣΕΙΣ",
    description: "Αντιδρώντα, προϊόντα, εξώθερμες/ενδόθερμες και νόμος Lavoisier.",
    topics: 3,
    exercises: 64,
    color: "from-slate-600 to-slate-400"
  },
  {
    id: "chapter-2",
    number: "2",
    title: "Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – ΙΟΝΤΙΚΟΣ ΔΕΣΜΟΣ",
    description: "Ατομικό πρότυπο Bohr, ιόντα και ιοντικές ενώσεις.",
    topics: 4,
    exercises: 7,
    color: "from-indigo-600 to-indigo-400"
  },
  {
    id: "chapter-3",
    number: "3",
    title: "ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ",
    description: "Περιοδικός πίνακας, μέταλλα και αμέταλλα.",
    topics: 3,
    exercises: 27,
    color: "from-teal-600 to-teal-400"
  },
  {
    id: "chapter-4",
    number: "4",
    title: "ΕΝΩΣΕΙΣ ΤΟΥ ΑΝΘΡΑΚΑ – ΟΡΓΑΝΙΚΗ ΧΗΜΕΙΑ",
    description: "Οργανική χημεία, υδρογονάνθρακες, καύσιμα και πολυμερή.",
    topics: 4,
    exercises: 45,
    color: "from-green-600 to-green-400"
  },
  {
    id: "chapter-5",
    number: "5",
    title: "ΣΤΟΙΧΕΙΑ ΚΑΙ ΧΗΜΙΚΕΣ ΕΝΩΣΕΙΣ ΜΕ ΙΔΙΑΙΤΕΡΟ ΕΝΔΙΑΦΕΡΟΝ",
    description: "Γνωριμία με τα οξέα, τις βάσεις, τα άλατα και την κλίμακα pH.",
    topics: 7,
    exercises: 36,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: "chapter-6",
    number: "6",
    title: "Η ΧΗΜΕΙΑ ΣΗΜΕΡΑ",
    description: "Μορφές ενέργειας, υλικά και περιβάλλον.",
    topics: 3,
    exercises: 3,
    color: "from-cyan-600 to-cyan-400"
  }
];
