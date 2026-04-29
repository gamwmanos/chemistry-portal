const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

// The new formatted items:
const newMCQs = [
  {
    chapterId: "chapter-2",
    q: "Από τις ακόλουθες προτάσεις δεν είναι σωστή για τον Π.Π. του Mendeleev.",
    options: [
      { text: "Α. Τα στοιχεία ταξινομήθηκαν από αυτό με τα ελαφρύτερα προς αυτό με τα βαρύτερα άτομα.", correct: false },
      { text: "Β. Ο Mendeleev προέβλεψε την ύπαρξη στοιχείων που δεν είχαν ανακαλυφθεί.", correct: false },
      { text: "Γ. Τα στοιχεία ταξινομήθηκαν κατά αύξοντα ατομικό αριθμό.", correct: true },
      { text: "Δ. Στον Π.Π. του υπήρχαν κενές θέσεις.", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Η πρόταση Γ είναι λανθασμένη, διότι ο Mendeleev ταξινόμησε τα στοιχεία με βάση το ατομικό τους βάρος (μάζα), όχι τον ατομικό αριθμό. Ο σύγχρονος Περιοδικός Πίνακας ταξινομεί τα στοιχεία κατά αύξοντα ατομικό αριθμό.</span>"
  },
  {
    chapterId: "chapter-2",
    q: "Στον Π.Π. του Mendeleev:",
    options: [
      { text: "Α. Οι οριζόντιες γραμμές ονομάστηκαν ομάδες.", correct: false },
      { text: "Β. Οι κατακόρυφες στήλες ονομάστηκαν περίοδοι και σε αυτές τοποθετήθηκαν στοιχεία με παρόμοιες ιδιότητες.", correct: false },
      { text: "Γ. Οι οριζόντιες γραμμές ονομάστηκαν περίοδοι και σε αυτές τοποθετήθηκαν στοιχεία με παρόμοιες ιδιότητες.", correct: false },
      { text: "Δ. Οι κατακόρυφες στήλες ονομάστηκαν ομάδες και σε αυτές τοποθετήθηκαν στοιχεία με παρόμοιες ιδιότητες.", correct: true }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Ο Mendeleev ονόμασε τις κατακόρυφες στήλες ομάδες, στις οποίες τοποθετούσε στοιχεία που παρουσίαζαν παρόμοιες χημικές ιδιότητες.</span>"
  },
  {
    chapterId: "chapter-2",
    q: "Στον σύγχρονο Π.Π. τα στοιχεία κατατάσσονται κατά:",
    options: [
      { text: "i. αύξουσα μάζα των ατόμων τους", correct: false },
      { text: "ii. αύξοντα ατομικό αριθμό", correct: true },
      { text: "iii. αύξουσα μάζα των μορίων τους", correct: false },
      { text: "iv. κατά αύξουσα πυκνότητα", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Η θεμελιώδης αρχή του σύγχρονου Περιοδικού Πίνακα είναι η κατάταξη των στοιχείων με βάση τον ατομικό τους αριθμό (αριθμός πρωτονίων).</span>"
  },
  {
    chapterId: "chapter-2",
    q: "Στην 6η και στην 7η περίοδο ο Π.Π. έχει 32 στοιχεία και γι' αυτό έχει:",
    options: [
      { text: "i. 32 ομάδες", correct: false },
      { text: "ii. 6 ομάδες", correct: false },
      { text: "iii. 7 ομάδες", correct: false },
      { text: "iv. 18 ομάδες και 2 παραρτήματα με 14 στοιχεία στο καθένα", correct: true }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Οι 18 ομάδες βρίσκονται στον κύριο κορμό του πίνακα και κάτω από αυτόν (στα παραρτήματα) τοποθετούνται οι λανθανίδες (14 στοιχεία της 6ης περιόδου) και οι ακτινίδες (14 στοιχεία της 7ης περιόδου).</span>"
  }
];

const newQs = [
  {
    chapterId: "chapter-2",
    q: "Απαντήστε στα παρακάτω ερωτήματα:<br>Α. Με ποιο κριτήριο ταξινόμησε ο Newlands τα στοιχεία στον Περιοδικό του Πίνακα και γιατί χρησιμοποίησε τη λέξη «οκτάβες» για την ταξινόμηση των χημικών στοιχείων;<br>Β. Ποιο ήταν το βασικό πρόβλημα του Περιοδικού Πίνακα που πρότεινε ο Newlands και δεν έπεισε την επιστημονική κοινότητα της εποχής του;<br>Γ. Με ποιο κριτήριο ταξινόμησε ο Mendeleev τα στοιχεία στον Περιοδικό του Πίνακα και γιατί ήταν πιο επιτυχημένος από αυτόν του Newlands;",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Ο J. Newlands κατέταξε τα χημικά στοιχεία από το στοιχείο με τα ελαφρύτερα άτομα προς το στοιχείο με τα βαρύτερα άτομα, δηλαδή κατά αυξανόμενο Ατομικό Βάρος. Παρατήρησε ότι οι ιδιότητες του όγδοου στοιχείου έμοιαζαν με τις ιδιότητες του πρώτου, του ένατου με του δεύτερου κτλ. και διατύπωσε τον «κανόνα των οκτάβων», υποστηρίζοντας ότι μετά από μια σειρά επτά «ανόμοιων» στοιχείων ακολουθούν άλλα επτά που «επαναλαμβάνουν» τις ιδιότητες των προηγουμένων.</li><li class='mb-2'>Β. Η κατάταξη του Newlands παρουσίαζε προφανή άτοπα, όπως για παράδειγμα ότι ο σίδηρος «έπρεπε» να έχει παρόμοιες ιδιότητες με το οξυγόνο και ο φωσφόρος με το μαγγάνιο και για αυτό η Χημική Εταιρεία του Λονδίνου αρνήθηκε να την δημοσιεύσει.</li><li class='mb-2'>Γ. Ο D. Mendeleev στον πίνακά του παρουσίασε 60 χημικά στοιχεία τα οποία κατατάχτηκαν από το στοιχείο με τα ελαφρύτερα άτομα προς αυτό με τα βαρύτερα. Είχε αφήσει στον πίνακά του κενές θέσεις για στοιχεία που δεν είχαν ακόμη ανακαλυφθεί. Για πολλά από αυτά περιέγραψε ικανοποιητικά και τις ιδιότητες των στοιχείων που «έλειπαν».</li></ul></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Ποιες από τις ακόλουθες προτάσεις που αφορούν τον Π.Π. είναι σωστές και ποιες λανθασμένες; Να δικαιολογήσετε την απάντησή σας.<br>Α. Η ταξινόμηση των στοιχείων στον Π.Π. του Mendeleev έγινε με κριτήριο την μάζα των ατόμων τους.<br>Β. Στον Π.Π. του Mendeleev τα στοιχεία τοποθετούνται έτσι ώστε στην ίδια περίοδο να βρίσκονται στοιχεία με παρόμοιες ιδιότητες.<br>Γ. Ο Π.Π. του Newlands απορρίφθηκε, γιατί προέβλεπε να έχουν όμοιες ιδιότητες εντελώς διαφορετικά στοιχεία.",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι σωστή. Ο D. Mendeleev στον πίνακά του παρουσίασε 60 χημικά στοιχεία τα οποία κατατάχτηκαν από το στοιχείο με τα ελαφρύτερα άτομα προς αυτό με τα βαρύτερα.</li><li class='mb-2'>Β. Η πρόταση είναι λανθασμένη. Στον Π.Π. του Mendeleev τα στοιχεία τοποθετούνται έτσι ώστε στην ίδια ομάδα να βρίσκονται στοιχεία με παρόμοιες ιδιότητες.</li><li class='mb-2'>Γ. Η πρόταση είναι σωστή. Η κατάταξη του Newlands παρουσίαζε προφανή άτοπα, όπως για παράδειγμα ότι ο σίδηρος «έπρεπε» να έχει παρόμοιες ιδιότητες με το οξυγόνο και ο φωσφόρος με το μαγγάνιο και για αυτό δεν έπεισε την επιστημονική κοινότητα της εποχής του.</li></ul></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, ώστε να είναι σωστό:<br>Α. Ο σύγχρονος Περιοδικός Πίνακας κατατάσσει τα ....... κατά ....... ....... . Περιλαμβάνει ....... οριζόντιες γραμμές, οι οποίες ονομάζονται ......., και ....... κατακόρυφες στήλες, οι οποίες ονομάζονται ....... . Εκτός του Περιοδικού Πίνακα σε παράρτημα βρίσκονται ....... γραμμές που η καθεμία περιέχει ....... στοιχεία.<br>Β. Τα στοιχεία που βρίσκονται στην ίδια ....... έχουν παρόμοιες ιδιότητες.<br>Γ. Τα στοιχεία της 1ης ομάδας, εκτός από το ......., ονομάζονται ......., τα στοιχεία της 2ης ομάδας ονομάζονται ....... ......., τα στοιχεία της 17ης ομάδας ονομάζονται ....... και τα στοιχεία της 18ης ομάδας ονομάζονται ευγενή αέρια.",
    a: "<span class='text-purple-300 font-bold'>Α. Ο σύγχρονος Περιοδικός Πίνακας κατατάσσει τα στοιχεία κατά αύξοντα ατομικό αριθμό. Περιλαμβάνει 7 οριζόντιες γραμμές, οι οποίες ονομάζονται περίοδοι, και 18 κατακόρυφες στήλες, οι οποίες ονομάζονται ομάδες. Εκτός του Περιοδικού Πίνακα σε παράρτημα βρίσκονται 2 γραμμές που η καθεμία περιέχει 14 στοιχεία.<br>Β. Τα στοιχεία που βρίσκονται στην ίδια ομάδα έχουν παρόμοιες ιδιότητες.<br>Γ. Τα στοιχεία της 1ης ομάδας, εκτός από το υδρογόνο, ονομάζονται αλκάλια, τα στοιχεία της 2ης ομάδας ονομάζονται αλκαλικές γαίες, τα στοιχεία της 17ης ομάδας ονομάζονται αλογόνα και τα στοιχεία της 18ης ομάδας ονομάζονται ευγενή αέρια.</span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να αντιστοιχίσετε τον αριθμό καθεμίας από τις ομάδες του Π.Π. της στήλης Α στο όνομά της στη στήλη Β.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>1</td><td>Αλογόνα</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>18</td><td>Αλκαλικές γαίες</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>2</td><td>Ευγενή αέρια</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>17</td><td>αλκάλια</td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>1</td><td>Αλογόνα</td><td>A1 &rarr; B4</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>18</td><td>Αλκαλικές γαίες</td><td>A2 &rarr; B3</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>2</td><td>Ευγενή αέρια</td><td>A3 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>17</td><td>αλκάλια</td><td>A4 &rarr; B1</td></tr></tbody></table></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να δικαιολογήσετε την απάντησή σας.<br>Α. Τα στοιχεία <sub>11</sub>Na και <sub>19</sub>K έχουν παρόμοιες ιδιότητες, επομένως είναι στην ίδια περίοδο του Π.Π.<br>Β. Τα στοιχεία <sub>35</sub>Br και <sub>53</sub>I είναι αλογόνα, επομένως βρίσκονται στην 17η ομάδα του Π.Π.<br>Γ. Τα στοιχεία <sub>56</sub>Ba και <sub>38</sub>Sr βρίσκονται στην 2η ομάδα του Π.Π., επομένως είναι αλκαλικές γαίες.<br>Δ. Το <sub>2</sub>He και το <sub>10</sub>Ne βρίσκονται στην ίδια ομάδα του Π.Π.",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι λανθασμένη. Τα στοιχεία που ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα έχουν παρόμοιες ιδιότητες (όχι στην ίδια περίοδο).</li><li class='mb-2'>Β. Η πρόταση είναι σωστή. Τα στοιχεία που ανήκουν στην 17η ομάδα του Περιοδικού Πίνακα ονομάζονται αλογόνα.</li><li class='mb-2'>Γ. Η πρόταση είναι σωστή. Τα στοιχεία που ανήκουν στη 2η ομάδα του Περιοδικού Πίνακα ονομάζονται αλκαλικές γαίες.</li><li class='mb-2'>Δ. Η πρόταση είναι σωστή. Το <sub>2</sub>He και το <sub>10</sub>Ne είναι ευγενή αέρια και βρίσκονται στη 18η ομάδα του Π.Π.</li></ul></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να συμβουλευτείτε τον Π.Π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως αλκάλια (A), αλκαλικές γαίες (ΑΓ), αλογόνα (ΑΛ) και ευγενή ή αδρανή αέρια (ΕΑ).<br><br><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Kr</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ca</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>K</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Br</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>I</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Li</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ba</td><td class='py-2'></td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Kr</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>Ca</td><td class='py-2 border-r border-white/20'>ΑΓ</td><td class='py-2 border-r border-white/20'>K</td><td class='py-2 border-r border-white/20'>Α</td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'>ΑΛ</td><td class='py-2 border-r border-white/20'>Br</td><td class='py-2 border-r border-white/20'>ΑΛ</td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'>Α</td><td class='py-2 border-r border-white/20'>I</td><td class='py-2 border-r border-white/20'>ΑΛ</td><td class='py-2 border-r border-white/20'>Li</td><td class='py-2 border-r border-white/20'>Α</td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>Ba</td><td class='py-2'>ΑΓ</td></tr></tbody></table></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις ή αριθμούς:<br>Όλα τα στοιχεία που βρίσκονται στην 1η ομάδα του Π.Π. έχουν ....... e στην εξωτερική στιβάδα τους, όλα τα στοιχεία που βρίσκονται στην 2η ομάδα έχουν ....... e στην εξωτερική στιβάδα τους και όλα τα στοιχεία που βρίσκονται στην 17η ομάδα έχουν ....... e στην εξωτερική στιβάδα τους. Τα στοιχεία που έχουν τον ....... αριθμό e στην ....... στιβάδα των ατόμων τους, έχουν παρόμοιες ιδιότητες. Επειδή όλα τα στοιχεία που βρίσκονται στην ίδια ....... του Περιοδικού Πίνακα, έχουν τον ίδιο αριθμό ηλεκτρονίων στην εξωτερική τους στιβάδα, έχουν ....... ιδιότητες.",
    a: "<span class='text-purple-300 font-bold'>Όλα τα στοιχεία που βρίσκονται στην 1η ομάδα του Π.Π. έχουν 1 e στην εξωτερική στιβάδα τους, όλα τα στοιχεία που βρίσκονται στην 2η ομάδα έχουν 2 e στην εξωτερική στιβάδα τους και όλα τα στοιχεία που βρίσκονται στην 17η ομάδα έχουν 7 e στην εξωτερική στιβάδα τους. Τα στοιχεία που έχουν τον ίδιο αριθμό e στην εξωτερική στιβάδα των ατόμων τους, έχουν παρόμοιες ιδιότητες. Επειδή όλα τα στοιχεία που βρίσκονται στην ίδια ομάδα του Περιοδικού Πίνακα, έχουν τον ίδιο αριθμό ηλεκτρονίων στην εξωτερική τους στιβάδα, έχουν παρόμοιες ιδιότητες.</span>"
  },
  {
    chapterId: "chapter-2",
    q: "Αφού συμβουλευτείτε τον Περιοδικό Πίνακα, να απαντήσετε στα ακόλουθα ερωτήματα:<br>α. Να συμπληρώσετε το σύμβολο του στοιχείου: 1. αργό, 2. χλώριο, 3. νάτριο, 4. άνθρακας, 5. αργίλιο, 6. θείο, 7. ασβέστιο, 8. οξυγόνο, 9. σίδηρος, 10. άζωτο.<br>β. Ποιο στοιχείο είναι ευγενές αέριο;<br>γ. Ποια είναι τα τέσσερα στοιχεία τα οποία είναι μέταλλα;<br>δ. Ποιο στοιχείο είναι αλκάλιο;<br>ε. Ποια δύο αμέταλλα στοιχεία περιέχονται στον αέρα που αναπνέουμε;<br>στ. Ποιο στοιχείο είναι αλογόνο;<br>ζ. Να σημειώσετε την ομάδα του Π.Π. στην οποία βρίσκεται το αργό, το χλώριο, και το νάτριο.",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. 1. αργό – Ar, 2. χλώριο – Cl, 3. νάτριο – Na, 4. άνθρακας – C, 5. αργίλιο – Al, 6. θείο – S, 7. ασβέστιο – Ca, 8. οξυγόνο – O, 9. σίδηρος – Fe, 10. άζωτο – N</li><li class='mb-2'>β. Το στοιχείο που είναι ευγενές αέριο είναι το αργό – Ar.</li><li class='mb-2'>γ. Τα τέσσερα στοιχεία τα οποία είναι μέταλλα είναι τα: νάτριο (Na), αργίλιο (Al), ασβέστιο (Ca) και σίδηρος (Fe).</li><li class='mb-2'>δ. Το στοιχείο που είναι αλκάλιο είναι το νάτριο (Na).</li><li class='mb-2'>ε. Τα δύο αμέταλλα στοιχεία που περιέχονται στον αέρα που αναπνέουμε είναι το άζωτο (N) και το οξυγόνο (O).</li><li class='mb-2'>στ. Το στοιχείο που είναι αλογόνο είναι το χλώριο (Cl).</li><li class='mb-2'>ζ. αργό: 18η ομάδα, χλώριο: 17η ομάδα, νάτριο: 1η ομάδα.</li></ul></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να αντιστοιχίσετε καθένα από τα χημικά στοιχεία της στήλης Α στην ομάδα του Π.Π. στην οποία βρίσκονται στην ομάδα Β, και στο χαρακτηρισμό τους στη στήλη Γ.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Γ</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1</td><td><sub>1</sub>H</td><td>1η ομάδα</td><td>Ευγενή αέρια</td></tr><tr class='border-b border-white/20'><td class='py-2'>2</td><td><sub>10</sub>Ne</td><td>2η ομάδα</td><td>Αλογόνα</td></tr><tr class='border-b border-white/20'><td class='py-2'>3</td><td><sub>17</sub>Cl</td><td>17η ομάδα</td><td>Αλκάλια</td></tr><tr class='border-b border-white/20'><td class='py-2'>4</td><td><sub>12</sub>Mg</td><td>18η ομάδα</td><td>Αλκαλικές γαίες</td></tr><tr class='border-b border-white/20'><td class='py-2'>5</td><td><sub>11</sub>Na</td><td>16η ομάδα</td><td></td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Γ</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1</td><td><sub>1</sub>H</td><td>1η ομάδα</td><td>Ευγενή αέρια</td><td>A1 &rarr; B1 &rarr; Γ3 (σημείωση: το H εξαιρείται από τα αλκάλια)</td></tr><tr class='border-b border-white/20'><td class='py-2'>2</td><td><sub>10</sub>Ne</td><td>2η ομάδα</td><td>Αλογόνα</td><td>A2 &rarr; B4 &rarr; Γ1</td></tr><tr class='border-b border-white/20'><td class='py-2'>3</td><td><sub>17</sub>Cl</td><td>17η ομάδα</td><td>Αλκάλια</td><td>A3 &rarr; B3 &rarr; Γ2</td></tr><tr class='border-b border-white/20'><td class='py-2'>4</td><td><sub>12</sub>Mg</td><td>18η ομάδα</td><td>Αλκαλικές γαίες</td><td>A4 &rarr; B2 &rarr; Γ4</td></tr><tr class='border-b border-white/20'><td class='py-2'>5</td><td><sub>11</sub>Na</td><td>16η ομάδα</td><td></td><td>A5 &rarr; B1 &rarr; Γ3</td></tr></tbody></table></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Δίνεται ένα σχήμα το οποίο απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα με γράμματα A, B, Γ, Δ (στις αριστερές ομάδες 1 και 2) και E, Z, K (στις δεξιές ομάδες 17 και 18). Να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες και να δικαιολογήσετε την απάντησή σας.<br>Α. Το στοιχείο Β έχει παρόμοιες ιδιότητες με το στοιχείο Γ και το στοιχείο Ε με το στοιχείο Ζ.<br>Β. Το στοιχείο Α είναι στερεό, όπως τα στοιχεία Β, Γ και Δ.<br>Γ. Τα στοιχεία Α, Β, Γ και Δ είναι μέταλλα.<br>Δ. Το στοιχείο Δ είναι αλκάλιο.<br>Ε. Το στοιχείο Κ είναι αδρανές και δεν αντιδρά με άλλα στοιχεία.",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι σωστή. Τα στοιχεία Β και Γ, όπως και τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα, επομένως έχουν παρόμοιες ιδιότητες.</li><li class='mb-2'>Β. Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (το Υδρογόνο - Η) είναι αμέταλλο. Επομένως τα στοιχεία Β, Γ και Δ είναι στερεά αλλά το Α είναι αέριο.</li><li class='mb-2'>Γ. Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο.</li><li class='mb-2'>Δ. Η πρόταση είναι λανθασμένη. Το στοιχείο Δ ανήκει στην 2η ομάδα του Περιοδικού Πίνακα επομένως είναι αλκαλική γαία και όχι αλκάλιο.</li><li class='mb-2'>Ε. Η πρόταση είναι σωστή. Το στοιχείο Κ ανήκει στην 18η ομάδα του Περιοδικού Πίνακα, επομένως είναι ευγενές (αδρανές) αέριο.</li></ul></span>"
  },
  {
    chapterId: "chapter-2",
    q: "Να συμβουλευτείτε τον Π.Π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως μέταλλα (Μ), αμέταλλα (Α) και ευγενή ή αδρανή αέρια (ΕΑ).<br><br><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Ne</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Cr</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Fe</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>N</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>O</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>S</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>C</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>P</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Mg</td><td class='py-2'></td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Ne</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>Cr</td><td class='py-2 border-r border-white/20'>Μ</td><td class='py-2 border-r border-white/20'>Fe</td><td class='py-2 border-r border-white/20'>Μ</td><td class='py-2 border-r border-white/20'>N</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'>Μ</td><td class='py-2 border-r border-white/20'>O</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>S</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>C</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>P</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Mg</td><td class='py-2'>Μ</td></tr></tbody></table></span>"
  }
];

function getChapterIdFromText(text) {
    text = text.toLowerCase();
    
    // Check old chapter-2 text that should be skipped!
    // We will handle skipping separately.
    
    if (text.includes("χημική αντίδραση ονομάζεται κάθε") || 
        text.includes("το υδρογόνο αντιδρά με το βρόμιο") ||
        text.includes("οι χημικές εξισώσεις που ακολουθούν έχουν ένα λάθος") ||
        text.includes("να συμπληρώσετε τους συντελεστές στις ακόλουθες εξισώσεις") ||
        text.includes("να συμπληρώσετε τους δείκτες στους χημικούς") ||
        text.includes("η καύση της αιθανόλης (c<sub>2</sub>h<sub>6</sub>o)") ||
        text.includes("που αφορά την καύση της μεθανόλης") ||
        text.includes("οι ιοντικές ενώσεις αποτελούνται από") ||
        text.includes("για να αποκτήσει σταθερή δομή μετατρέπεται") ||
        text.includes("τα ιόντα νατρίου και καλίου") ||
        text.includes("τα κατιόντα ασβεστίου δεν είναι απαραίτητα") ||
        text.includes("το μαγνήσιο έχει κεντρικό ρόλο στην υγεία") ||
        text.includes("ο σίδηρος είναι απαραίτητος για την μεταφορά") ||
        text.includes("το άτομο αποτελείται από ......., τα οποία είναι θετικά") ||
        text.includes("να συμπληρώσετε τα κενά στον ακόλουθο πίνακα") && text.includes("si") && text.includes("ne") ||
        text.includes("το στοιχείο mg σχηματίζει ιόντα με") ||
        text.includes("ο χημικός δεσμός που δημιουργείται ανάμεσα σε") ||
        text.includes("να βρείτε την κατανομή σε στιβάδες των ηλεκτρονίων του") ||
        text.includes("μία σκοτεινόχρωμη φιάλη στο εργαστήριο δεν έχει") ||
        text.includes("ο ίον και η όλη διαφωνούν") ||
        text.includes("στο 1ο και 2ο μέλος μίας χημικής εξίσωσης") ||
        text.includes("2hi + cl") || text.includes("kclo") || text.includes("θείου") ||
        text.includes("από τη χημική αντίδραση του υδρογόνου με το άζωτο") ||
        text.includes("nh4)2co3") || text.includes("ν2") || text.includes("lavoisier") ||
        text.includes("στοιχείο χ (ζ=") || text.includes("c2h6o")) {
        return "chapter-0";
    }
    
    // Chapter 2 (Periodic Table)
    if (text.includes("newlands") || text.includes("mendeleev") || text.includes("π.π.") || 
        text.includes("περιοδικό") || text.includes("αλκάλια") || text.includes("αλογόνα") ||
        text.includes("ευγενή αέρια") || text.includes("κατανομή e σε στιβάδες") || 
        text.includes("μέταλλα (μ), αμέταλλα (α)") || text.includes("ταξινομήθηκε") ||
        text.includes("την 6η και στην 7η περίοδο") || text.includes("11na και 19k") ||
        text.includes("ομάδα")) {
        return "chapter-2";
    }

    // Chapter 3 (Organic Chemistry)
    if (text.includes("οργανική") || text.includes("υδρογονάνθρακες") || text.includes("φυσικό αέριο") || 
        text.includes("πετρέλαιο") || text.includes("πολυμερή") || text.includes("αιθανόλη") || 
        text.includes("πρωτεΐνες") || text.includes("υδατάνθρακες") || text.includes("λίπη") ||
        text.includes("αλκοολική ζύμωση") || text.includes("πατατάκια") || text.includes("θερμίδες") ||
        text.includes("πλαστικά") || text.includes("μεθάνιο") || text.includes("προπάνιο") ||
        text.includes("βουτάνιο") || text.includes("οκτάνιο") || text.includes("κλασματική απόσταξη") ||
        text.includes("ch3-ch2-ch3") || text.includes("ορυκτός") || text.includes("υγραέριο") ||
        text.includes("απορρυπαντικά") || text.includes("pvc") || text.includes("καουτσούκ") ||
        text.includes("νάιλον") || text.includes("ζάχαρη") || text.includes("χρώματα") ||
        text.includes("γάλα μαγνησίας") === false && text.includes("λίπος") || text.includes("αιθυλική")) {
        return "chapter-3";
    }

    // Chapter 1 (Acids, Bases, Salts)
    if (text.includes("οξέων") || text.includes("βάσεων") || text.includes("οξύ ") || text.includes("βάση") ||
        text.includes("ph") || text.includes("δείκτες") || text.includes("υδροχλώριο") || 
        text.includes("θειικό") || text.includes("όξινος") || text.includes("βασικός") ||
        text.includes("νάτριο") && text.includes("naoh") || text.includes("άλατα") || text.includes("όξινη βροχή") ||
        text.includes("αφροδίτη της μήλου") || text.includes("μπαταρίες") || text.includes("ούρα") ||
        text.includes("αίμα") || text.includes("γάλα μαγνησίας") || text.includes("αμμωνία") ||
        text.includes("ξίδι") || text.includes("μύρτιλλο") || text.includes("azax")) {
        return "chapter-1";
    }
    
    // Chapter 6 (Energy)
    if (text.includes("ενέργεια") && text.includes("καύσιμα") || text.includes("εξώθερμη")) {
        return "chapter-6";
    }

    return "chapter-0"; // fallback
}

// Extract the two arrays via regex, evaluate them, modify them, stringify them, and put them back.
let qMatch = content.match(/export const gGymnasiouQuestions: Question\[\] = (\[.*?\n\]);/s);
let mcqMatch = content.match(/export const gGymnasiouMCQ: MCQ\[\] = (\[.*?\n\]);/s);

if (!qMatch || !mcqMatch) {
    console.error("Could not find arrays!");
    process.exit(1);
}

let qArray = eval(qMatch[1]);
let mcqArray = eval(mcqMatch[1]);

function isOldChapter2Q(qObj) {
    let qStr = qObj.q.toLowerCase();
    // Identifiers for old chapter 2 questions:
    if (qStr.includes("1. α. με ποιο κριτήριο ταξινόμησε ο newlands")) return true;
    if (qStr.includes("2. ποιες από τις ακόλουθες προτάσεις που αφορούν τον π.π.")) return true;
    if (qStr.includes("3. να συμπληρώσετε το ακόλουθο κείμενο") && qStr.includes("περιοδικός")) return true;
    if (qStr.includes("4. να αντιστοιχίσετε τον αριθμό καθεμίας από τις ομάδες")) return true;
    if (qStr.includes("5. να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές") && qStr.includes("11na")) return true;
    if (qStr.includes("6. να συμβουλευτείτε τον π.π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως αλκάλια")) return true;
    if (qStr.includes("7. να συμπληρώσετε το ακόλουθο κείμενο") && qStr.includes("1η ομάδα")) return true;
    if (qStr.includes("8. αφού συμβουλευτείτε τον περιοδικό πίνακα, να απαντήσετε") && qStr.includes("αργό")) return true;
    if (qStr.includes("9. να αντιστοιχίσετε καθένα από τα χημικά στοιχεία της στήλης α") && qStr.includes("1h")) return true;
    if (qStr.includes("10. δίνεται ένα σχήμα το οποίο απεικονίζει τις τέσσερις πρώτες περιόδους")) return true;
    if (qStr.includes("11. να αντιστοιχίσετε καθένα από τα χημικά στοιχεία της στήλης α") && qStr.includes("ne")) return true;
    if (qStr.includes("12. να συμβουλευτείτε τον π.π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως μέταλλα")) return true;
    return false;
}

function isOldChapter2MCQ(qObj) {
    let qStr = qObj.q.toLowerCase();
    if (qStr.includes("2.1. από τις ακόλουθες προτάσεις δεν είναι σωστή για τον π.π.")) return true;
    if (qStr.includes("2.2. στον π.π. του mendeleev")) return true;
    if (qStr.includes("6. α. στον σύγχρονο π.π. τα στοιχεία κατατάσσονται κατά")) return true;
    if (qStr.includes("6. β. στην 6η και στην 7η περίοδο ο π.π. έχει 32 στοιχεία")) return true;
    return false;
}

// Filter out old questions
let finalQs = [];
let finalMCQs = [];

for (let q of qArray) {
    if (!isOldChapter2Q(q)) {
        if (!q.chapterId) q.chapterId = getChapterIdFromText(q.q);
        finalQs.push(q);
    }
}

for (let q of mcqArray) {
    if (!isOldChapter2MCQ(q)) {
        if (!q.chapterId) q.chapterId = getChapterIdFromText(q.q);
        finalMCQs.push(q);
    }
}

// Prepend the new ones!
finalQs = [...newQs, ...finalQs];
finalMCQs = [...newMCQs, ...finalMCQs];

// Replace in content
let updatedContent = content.replace(qMatch[1], JSON.stringify(finalQs, null, 2));
updatedContent = updatedContent.replace(mcqMatch[1], JSON.stringify(finalMCQs, null, 2));

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', updatedContent, 'utf-8');
console.log("Successfully rebuilt arrays using eval and serialization.");
