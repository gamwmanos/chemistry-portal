const fs = require('fs');

const formattedMCQs = [
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

const formattedQuestions = [
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

// Read the current file
let data = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

// The file exports gGymnasiouQuestions and gGymnasiouMCQ
// Since we have the new formatted versions, we need to carefully replace the OLD chapter-2 objects with the NEW ones.
// I will write a script to evaluate the file, modify the array, and stringify it back.
// But typescript has `export const` so require() won't work natively without babel/ts-node.
// Instead, I can just do text replacement or use a simple AST/regex.
// Let's use regex to remove all blocks with chapterId: "chapter-2" and then append the new ones.

let updatedData = data.replace(/{\s*chapterId:\s*"chapter-2",\s*q:.*?(?:a:|options:).*?},?/gs, "");

// Clean up any double commas or stray commas at the end of the array.
updatedData = updatedData.replace(/,\s*,/g, ",");
updatedData = updatedData.replace(/,\s*]/g, "\n]");

// Now find where to insert the new MCQs.
// gGymnasiouMCQ is at the bottom of the file (or middle).
// We can append to the arrays directly.

let mcqMatch = updatedData.match(/export\s+const\s+gGymnasiouMCQ\s*:\s*MCQ\[\]\s*=\s*\[/);
if (mcqMatch) {
  let insertIndex = mcqMatch.index + mcqMatch[0].length;
  
  let stringifiedMCQs = formattedMCQs.map(q => JSON.stringify(q, null, 2)).join(",\n") + ",\n";
  
  // Actually JSON.stringify doesn't work well if we want single quotes or if it encodes unicode as is.
  // It's better to just build the string.
  updatedData = updatedData.substring(0, insertIndex) + "\n" + stringifiedMCQs + updatedData.substring(insertIndex);
}

let qMatch = updatedData.match(/export\s+const\s+gGymnasiouQuestions\s*:\s*Question\[\]\s*=\s*\[/);
if (qMatch) {
  let insertIndex = qMatch.index + qMatch[0].length;
  
  let stringifiedQs = formattedQuestions.map(q => JSON.stringify(q, null, 2)).join(",\n") + ",\n";
  
  updatedData = updatedData.substring(0, insertIndex) + "\n" + stringifiedQs + updatedData.substring(insertIndex);
}

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', updatedData, 'utf-8');
console.log("Replaced chapter-2 questions with the nicely formatted ones.");
