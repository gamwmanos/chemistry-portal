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
