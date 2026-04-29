const fs = require('fs');

const mcqs = [
  {
    chapterId: "chapter-3",
    q: "Η σειρά που περιέχει μόνο οργανικές ενώσεις είναι:",
    options: [
      { text: "i. CH3-CH2-CH3, CH3-CH2-CH2OH, CO, CH3-CH2-CH2-COOH", correct: false },
      { text: "ii. CH3-CH2-CH3, CH3-CH2-CH2NH2, CO, CH3-CH2-CH2-COOH", correct: false },
      { text: "iii. CH3-CH2-CH3, CH3-CH2-CH2OH, CH3-CH2-CH2NH2, CH3-CH2-CH2-COOH", correct: true },
      { text: "iv. CH4, CH3-CH2-CH2OH, K2CO3, CH3-CH2-CH2-COOH", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: iii (ή Γ). Οι επιλογές i και ii απορρίπτονται διότι περιέχουν CO (ανόργανη), ενώ η επιλογή iv απορρίπτεται διότι περιέχει K<sub>2</sub>CO<sub>3</sub> (ανόργανη).</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Για να επιβεβαιώσουμε την ύπαρξη του άνθρακα στην ζάχαρη επιδρούμε με σταγόνες πυκνού διαλύματος θειικού οξέος και παρατηρούμε:",
    options: [
      { text: "i. την ζάχαρη να αναφλέγεται.", correct: false },
      { text: "ii. την ζάχαρη να μετατρέπεται από λευκό στερεό σε μαύρο πορώδη άνθρακα.", correct: true },
      { text: "iii. την ζάχαρη να υγροποιείται.", correct: false },
      { text: "iv. την ζάχαρη να μετατρέπεται από λευκό στερεό σε αέριο διοξείδιο του άνθρακα.", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: ii. Το πυκνό θειικό οξύ δρα ως ισχυρό αφυδατικό μέσο, αφαιρώντας υδρογόνο και οξυγόνο (ως νερό) από τη ζάχαρη και αφήνοντας πίσω τον άνθρακα (μαύρο πορώδες στερεό).</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Το φυσικό αέριο αποτελείται κυρίως από:",
    options: [
      { text: "i. οκτάνιο", correct: false },
      { text: "ii. επτάνιο", correct: false },
      { text: "iii. μεθάνιο", correct: true },
      { text: "iv. CO2", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: iii. Το φυσικό αέριο είναι μείγμα αερίων υδρογονανθράκων, με κύριο συστατικό το μεθάνιο.</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Το φυσικό αέριο είναι:",
    options: [
      { text: "i. ορυκτός φυσικός πόρος", correct: true },
      { text: "ii. συστατικό του πετρελαίου", correct: false },
      { text: "iii. προϊόν της πετροχημικής βιομηχανίας", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: i. Το φυσικό αέριο, όπως και το πετρέλαιο και οι γαιάνθρακες, συγκαταλέγεται στους ορυκτούς φυσικούς πόρους (ορυκτά καύσιμα).</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Το υγραέριο αποτελείται κυρίως από:",
    options: [
      { text: "i. προπάνιο και βουτάνιο", correct: true },
      { text: "ii. μεθάνιο", correct: false },
      { text: "iii. οκτάνιο", correct: false },
      { text: "iv. CO2", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: i. Το υγραέριο (LPG) είναι μείγμα κυρίως προπανίου και βουτανίου, τα οποία υγροποιούνται εύκολα υπό πίεση.</span>"
  }
];

const qs = [
  {
    chapterId: "chapter-3",
    q: "Α. Ποιες ενώσεις μελετά η Οργανική Χημεία;<br>Β. Για ποιο λόγο είναι απαραίτητη η ταξινόμηση των οργανικών ενώσεων;<br>Γ. Πως ταξινομούνται οι οργανικές ενώσεις με κριτήριο την δομή της ανθρακικής αλυσίδας;",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η οργανική Χημεία μελετά τις ενώσεις του άνθρακα, εκτός από το μονοξείδιο του άνθρακα, το διοξείδιο του άνθρακα, τα ανθρακικά άλατα, τα κυανιούχα άλατα και ορισμένες ακόμη ενώσεις.</li><li class='mb-2'>Β. Ο μεγάλος αριθμός των οργανικών ενώσεων και η ανάγκη για ουσιαστική μελέτη των ιδιοτήτων και των μεθόδων παρασκευής τους υποχρέωσε τους χημικούς να τις ταξινομήσουν σε ομάδες.</li><li class='mb-2'>Γ. Οι οργανικές ενώσεις με κριτήριο την δομή της ανθρακικής αλυσίδας ταξινομούνται σε:<br>- <b>Άκυκλους</b>, στους οποίους τα άτομα άνθρακα σχηματίζουν ανοικτές αλυσίδες.<br>- <b>Κυκλικούς</b>, στους οποίους τα άτομα άνθρακα σχηματίζουν κλειστές αλυσίδες, δηλαδή δακτύλιους.</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να συμπληρώσετε τα κενά στο ακόλουθο κείμενο με μια λέξη ή ένα σύμβολο:<br>Υδρογονάνθρακες ονομάζονται οι ........ χημικές ενώσεις οι οποίες αποτελούνται μόνο από ........ και ........ . Με κριτήριο τη μορφή της ανθρακικής αλυσίδας διακρίνονται σε ........ και ........ .",
    a: "<span class='text-purple-300 font-bold'>Υδρογονάνθρακες ονομάζονται οι οργανικές χημικές ενώσεις οι οποίες αποτελούνται μόνο από υδρογόνο και άνθρακα. Με κριτήριο τη μορφή της ανθρακικής αλυσίδας διακρίνονται σε άκυκλους και κυκλικούς.</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να ονομάσετε τους ακόλουθους κορεσμένους υδρογονάνθρακες:<br>Α. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub><br>Β. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub><br>Γ. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub><br>Δ. CH<sub>4</sub><br>Ε. CH<sub>3</sub>-CH<sub>3</sub><br>Ζ. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>",
    a: "<span class='text-purple-300 font-bold'><ul><li>Α. Προπάνιο (3C)</li><li>Β. Εξάνιο (6C)</li><li>Γ. Βουτάνιο (4C)</li><li>Δ. Μεθάνιο (1C)</li><li>Ε. Αιθάνιο (2C)</li><li>Ζ. Επτάνιο (7C)</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να δικαιολογήσετε την απάντησή σας.<br>α. Όλες ανεξαιρέτως οι ενώσεις του άνθρακα είναι οργανικές ενώσεις.<br>β. Οι οργανικές ενώσεις που αποτελούνται από άνθρακα και υδρογόνο ονομάζονται υδατάνθρακες.<br>γ. Η οργανική ένωση με τύπο: CH<sub>3</sub>-CH<sub>2</sub>-O-CH<sub>2</sub>-CH<sub>3</sub> είναι ένας κορεσμένος υδρογονάνθρακας.<br>δ. Η οργανική ένωση με τύπο: CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub> ονομάζεται βουτάνιο.",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Η πρόταση είναι <b>λανθασμένη</b>. Δεν είναι όλες ανεξαιρέτως οι ενώσεις που περιέχουν άνθρακα οργανικές (π.χ. το μονοξείδιο του άνθρακα, το διοξείδιο του άνθρακα, τα ανθρακικά άλατα κ.ά. είναι ανόργανες).</li><li class='mb-2'>β. Η πρόταση είναι <b>λανθασμένη</b>. Οι οργανικές ενώσεις που αποτελούνται <i>μόνο</i> από άνθρακα και υδρογόνο ονομάζονται <b>υδρογονάνθρακες</b>.</li><li class='mb-2'>γ. Η πρόταση είναι <b>λανθασμένη</b>. Η συγκεκριμένη ένωση δεν είναι υδρογονάνθρακας καθώς, εκτός από άνθρακα και υδρογόνο, περιέχει και άτομο οξυγόνου.</li><li class='mb-2'>δ. Η πρόταση είναι <b>σωστή</b>. Το πρώτο συνθετικό (βουτ-) υποδηλώνει τέσσερα άτομα άνθρακα, το δεύτερο (-αν-) δηλώνει μόνο απλούς δεσμούς, και η κατάληξη (-ιο) σημαίνει ότι είναι υδρογονάνθρακας.</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να αντιστοιχίσετε τον τύπο του κορεσμένου υδρογονάνθρακα της στήλης Α στο όνομά του στη στήλη Β.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>μεθάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>προπάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>οκτάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>βουτάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>5.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>επτάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>6.</td><td>CH<sub>4</sub></td><td>πεντάνιο</td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>μεθάνιο</td><td>A1 &rarr; Β4 (βουτάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>προπάνιο</td><td>A2 &rarr; Β5 (επτάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>οκτάνιο</td><td>A3 &rarr; Β2 (προπάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>βουτάνιο</td><td>A4 &rarr; Β3 (οκτάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>5.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>επτάνιο</td><td>A5 &rarr; B6 (πεντάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>6.</td><td>CH<sub>4</sub></td><td>πεντάνιο</td><td>A6 &rarr; B1 (μεθάνιο)</td></tr></tbody></table></span>"
  },
  {
    chapterId: "chapter-3",
    q: "α. Να εξηγήσετε ποια χημική διεργασία ονομάζεται καύση.<br>β. Να αναφέρετε τα προϊόντα της τέλειας καύσης των υδρογονανθράκων και να περιγράψετε πώς θα επιβεβαιώσουμε πειραματικά την παραγωγή τους.<br>γ. Να εξηγήσετε πότε η καύση ενός υδρογονάνθρακα χαρακτηρίζεται ατελής και ποια είναι τα πιθανά προϊόντα της.",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Καύση ονομάζεται η χημική αντίδραση ενός στοιχείου ή μιας χημικής ένωσης με το οξυγόνο, η οποία συνοδεύεται από έκλυση θερμότητας και φωτός.</li><li class='mb-2'>β. Τα προϊόντα της τέλειας καύσης των υδρογονανθράκων είναι το διοξείδιο του άνθρακα (CO<sub>2</sub>) και το νερό (H<sub>2</sub>O). Το CO<sub>2</sub> ανιχνεύεται όταν διοχετευτεί σε διαυγές ασβεστόνερο, το οποίο θολώνει, ή αν τοποθετήσουμε ένα αναμμένο κερί σε κώδωνα με το αέριο, το οποίο θα σβήσει. Οι υδρατμοί (H<sub>2</sub>O) διοχετεύονται πάνω από λευκό άνυδρο θειικό χαλκό, ο οποίος απορροφά το νερό και γίνεται μπλε.</li><li class='mb-2'>γ. Όταν η καύση γίνεται με ανεπαρκή ποσότητα οξυγόνου ονομάζεται ατελής καύση. Παράγονται πάλι υδρατμοί, όμως ο άνθρακας μπορεί να μετασχηματιστεί σε μονοξείδιο του άνθρακα (CO) ή να παραμείνει άκαυστος ως αιθάλη (C - καπνιά).</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "α. Υπάρχει η άποψη: «Το πετρέλαιο είναι πολύ πολύτιμο για να καίγεται». Να αναφέρετε δύο τουλάχιστον λόγους οι οποίοι δικαιολογούν αυτή την άποψη.<br>β. Πώς ονομάζεται το πετρέλαιο στη μορφή που αντλείται από το υπέδαφος; Είναι κατάλληλο για χρήση σε αυτή τη μορφή;<br>γ. Να αναφέρετε τα στάδια της επεξεργασίας του αργού πετρελαίου και να εξηγήσετε πού αποσκοπεί το καθένα.<br>δ. Σε ποια ιδιότητα των συστατικών του στηρίζεται ο διαχωρισμός του πετρελαίου σε κλάσματα;",
    a: "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Το πετρέλαιο είναι μη ανανεώσιμη πηγή ενέργειας και παράλληλα αποτελεί την πρώτη ύλη για την παραγωγή αμέτρητων χρήσιμων προϊόντων, όπως τα απορρυπαντικά, τα φάρμακα, τα πλαστικά, τα λιπάσματα κ.ά. Η σπατάλη του μόνο για καύση στερεί αυτές τις πολύτιμες πρώτες ύλες.</li><li class='mb-2'>β. Ονομάζεται <b>αργό πετρέλαιο</b>. Δεν είναι κατάλληλο για χρήση απευθείας σε αυτή τη μορφή· απαιτείται επεξεργασία σε διυλιστήρια.</li><li class='mb-2'>γ. Το πρώτο στάδιο είναι η <b>αποθείωση</b>, κατά την οποία απομακρύνονται οι θειούχες προσμείξεις ώστε να μην παράγονται ρυπογόνα αέρια του θείου κατά την καύση. Το δεύτερο στάδιο είναι η <b>κλασματική απόσταξη</b>, που αποσκοπεί στον διαχωρισμό του πετρελαίου σε ομάδες υδρογονανθράκων (κλάσματα) με παραπλήσιο μέγεθος αλυσίδας.</li><li class='mb-2'>δ. Ο διαχωρισμός στηρίζεται στη διαφορά του <b>σημείου βρασμού</b> των συστατικών, το οποίο εξαρτάται από το μέγεθος της ανθρακικής αλυσίδας.</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Παρατηρώντας τον πίνακα κλασμάτων του πετρελαίου, να αντιστοιχίσετε τα κλάσματα της στήλης Α με τον αριθμό ατόμων C που περιέχουν οι ενώσεις στη στήλη Β και τη χρήση τους στη στήλη Γ.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α: Κλάσμα πετρελαίου</th><th>Β: Αριθμός ατόμων C</th><th>Γ: Χρήση</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Μαζούτ</td><td>1. 5-12</td><td>1. Καύσιμο για αυτοκίνητα</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Κηροζίνη</td><td>2. &gt;20</td><td>2. Οδοποιία</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Βενζίνη</td><td>3. 10-15</td><td>3. Καύσιμο</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Άσφαλτος</td><td>4. 3-4</td><td>4. Κεριά</td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Παραφίνη</td><td>5.</td><td>5. Καύσιμο αεροπλάνων</td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Υγραέρια</td><td>6.</td><td>6. Καύσιμο οικιακής χρήσης</td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α</th><th>Β</th><th>Γ</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Μαζούτ</td><td>1. 5-12</td><td>1. Καύσιμο αυτοκινήτων</td><td>A1 &rarr; B2 (&gt;20) &rarr; Γ3 (Καύσιμο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Κηροζίνη</td><td>2. &gt;20</td><td>2. Οδοποιία</td><td>A2 &rarr; B3 (10-15) &rarr; Γ5 (Καύσιμο αεροπλάνων)</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Βενζίνη</td><td>3. 10-15</td><td>3. Καύσιμο</td><td>A3 &rarr; B1 (5-12) &rarr; Γ1 (Καύσιμο αυτοκινήτων)</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Άσφαλτος</td><td>4. 3-4</td><td>4. Κεριά</td><td>A4 &rarr; B2 (&gt;20) &rarr; Γ2 (Οδοποιία)</td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Παραφίνη</td><td>5.</td><td>5. Καύσιμο αεροπλάνων</td><td>A5 &rarr; B2 (&gt;20) &rarr; Γ4 (Κεριά)</td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Υγραέρια</td><td>6.</td><td>6. Καύσιμο οικιακής χρήσης</td><td>A6 &rarr; B4 (3-4) &rarr; Γ6 (Καύσιμο οικιακής χρήσης)</td></tr></tbody></table></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:<br>Το αργό πετρέλαιο και το φυσικό αέριο σχηματίστηκαν στο ........ της Γης πριν από ........ χρόνια, όταν φυτικοί και ζωικοί ........ εγκλωβίστηκαν σε ........ στο εσωτερικό της Γης και υπό την επίδραση υψηλών ........ και ........ και τη συμμετοχή βακτηριδίων μετασχηματίστηκαν σε μείγματα ........ . Το φυσικό αέριο αποτελείται κυρίως από ........, ενώ το αργό πετρέλαιο αποτελείται κυρίως από ........ ........ μέσα στους οποίους είναι διαλυμένοι ........ και ........ υδρογονάνθρακες. Είναι ........ φυσικοί πόροι.",
    a: "<span class='text-purple-300 font-bold'>Το αργό πετρέλαιο και το φυσικό αέριο σχηματίστηκαν στο υπέδαφος της Γης πριν από 10-15 εκατομμύρια χρόνια, όταν φυτικοί και ζωικοί μικροοργανισμοί εγκλωβίστηκαν σε λεκάνες στο εσωτερικό της Γης και υπό την επίδραση υψηλών πιέσεων και θερμοκρασιών και τη συμμετοχή βακτηριδίων μετασχηματίστηκαν σε μείγματα υδρογονανθράκων. Το φυσικό αέριο αποτελείται κυρίως από μεθάνιο, ενώ το αργό πετρέλαιο αποτελείται κυρίως από υγρούς υδρογονάνθρακες μέσα στους οποίους είναι διαλυμένοι αέριοι και στερεοί υδρογονάνθρακες. Είναι μη ανανεώσιμοι φυσικοί πόροι.</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να συμπληρώσετε τις ακόλουθες χημικές εξισώσεις, ώστε να είναι ορθές (τέλεια και ατελής καύση μεθανίου):<br>Τέλεια καύση του μεθανίου: CH<sub>4</sub> + ...O<sub>2</sub> &rarr; CO<sub>2</sub> + ...<br>Ατελής καύση του μεθανίου προς CO: CH<sub>4</sub> + ...O<sub>2</sub> &rarr; ... + ...<br>Ατελής καύση του μεθανίου προς C: CH<sub>4</sub> + ...O<sub>2</sub> &rarr; ... + ...",
    a: "<span class='text-purple-300 font-bold'><ul><li>Τέλεια καύση του μεθανίου: CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O</li><li>Ατελής καύση του μεθανίου προς CO: 2CH<sub>4</sub> + 3O<sub>2</sub> &rarr; 2CO + 4H<sub>2</sub>O</li><li>Ατελής καύση του μεθανίου προς C: CH<sub>4</sub> + O<sub>2</sub> &rarr; C + 2H<sub>2</sub>O</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να συμπληρώσετε τις ακόλουθες χημικές εξισώσεις, ώστε να είναι ορθές.<br><br>Τέλεια καύση αιθανίου:<br>Ατελής καύση αιθανίου προς CO:<br>Ατελής καύση αιθανίου προς C:<br><br>Τέλεια καύση προπανίου:<br>Ατελής καύση προπανίου προς CO:<br>Ατελής καύση προπανίου προς C:<br><br>Τέλεια καύση βουτανίου:<br>Ατελής καύση βουτανίου προς CO:<br>Ατελής καύση βουτανίου προς C:<br><br>Τέλεια καύση πεντανίου:<br>Τέλεια καύση εξανίου:<br>Τέλεια καύση επτανίου:<br>Τέλεια καύση οκτανίου:<br>Ατελής καύση οκτανίου προς CO:<br>Ατελής καύση οκτανίου προς C:",
    a: "<span class='text-purple-300 font-bold'><ul><li>Τέλεια καύση αιθανίου: 2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> &rarr; 4CO<sub>2</sub> + 6H<sub>2</sub>O</li><li>Ατελής καύση αιθανίου προς CO: 2C<sub>2</sub>H<sub>6</sub> + 5O<sub>2</sub> &rarr; 4CO + 6H<sub>2</sub>O</li><li>Ατελής καύση αιθανίου προς C: 2C<sub>2</sub>H<sub>6</sub> + 3O<sub>2</sub> &rarr; 4C + 6H<sub>2</sub>O</li><br><li>Τέλεια καύση προπανίου: C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> &rarr; 3CO<sub>2</sub> + 4H<sub>2</sub>O</li><li>Ατελής καύση προπανίου προς CO: 2C<sub>3</sub>H<sub>8</sub> + 7O<sub>2</sub> &rarr; 6CO + 8H<sub>2</sub>O</li><li>Ατελής καύση προπανίου προς C: C<sub>3</sub>H<sub>8</sub> + 2O<sub>2</sub> &rarr; 3C + 4H<sub>2</sub>O</li><br><li>Τέλεια καύση βουτανίου: 2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> &rarr; 8CO<sub>2</sub> + 10H<sub>2</sub>O</li><li>Ατελής καύση βουτανίου προς CO: 2C<sub>4</sub>H<sub>10</sub> + 9O<sub>2</sub> &rarr; 8CO + 10H<sub>2</sub>O</li><li>Ατελής καύση βουτανίου προς C: 2C<sub>4</sub>H<sub>10</sub> + 5O<sub>2</sub> &rarr; 8C + 10H<sub>2</sub>O</li><br><li>Τέλεια καύση πεντανίου: C<sub>5</sub>H<sub>12</sub> + 8O<sub>2</sub> &rarr; 5CO<sub>2</sub> + 6H<sub>2</sub>O</li><li>Τέλεια καύση εξανίου: 2C<sub>6</sub>H<sub>14</sub> + 19O<sub>2</sub> &rarr; 12CO<sub>2</sub> + 14H<sub>2</sub>O</li><li>Τέλεια καύση επτανίου: C<sub>7</sub>H<sub>16</sub> + 11O<sub>2</sub> &rarr; 7CO<sub>2</sub> + 8H<sub>2</sub>O</li><li>Τέλεια καύση οκτανίου: 2C<sub>8</sub>H<sub>18</sub> + 25O<sub>2</sub> &rarr; 16CO<sub>2</sub> + 18H<sub>2</sub>O</li><li>Ατελής καύση οκτανίου προς CO: 2C<sub>8</sub>H<sub>18</sub> + 17O<sub>2</sub> &rarr; 16CO + 18H<sub>2</sub>O</li><li>Ατελής καύση οκτανίου προς C: C<sub>8</sub>H<sub>18</sub> + 9O<sub>2</sub> &rarr; 8C + 18H<sub>2</sub>O</li></ul></span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να συμπληρώσετε το διάγραμμα για το γκαζάκι του εμπορίου:<br>Το γκαζάκι του εμπορίου περιέχει ......... Για την τέλεια καύση του απαιτείται επαρκής ποσότητα οξυγόνου, το οποίο προέρχεται από τον ........ . Κατά την τέλεια καύση παράγονται ........ και ........ . Το ........ ανιχνεύεται με διαβίβαση σε ........ θειικό χαλκό, ο οποίος από λευκός γίνεται ........ . Το ........ θολώνει το ........ .",
    a: "<span class='text-purple-300 font-bold'>Το γκαζάκι του εμπορίου περιέχει βουτάνιο. Για την τέλεια καύση του απαιτείται επαρκής ποσότητα οξυγόνου, το οποίο προέρχεται από τον ατμοσφαιρικό αέρα. Κατά την τέλεια καύση παράγονται H<sub>2</sub>O και CO<sub>2</sub>. Το H<sub>2</sub>O ανιχνεύεται με διαβίβαση σε άνυδρο θειικό χαλκό, ο οποίος από λευκός γίνεται γαλάζιος. Το CO<sub>2</sub> θολώνει το διαυγές ασβεστόνερο.</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:<br>«Το πετρέλαιο είναι πολύ πολύτιμο για να ........ », γιατί αποτελεί την ........ ........ για την παραγωγή πολλών χρήσιμων προϊόντων, όπως τα ........, τα ........, τα ........ κ.ά., στην ........ Βιομηχανία. Πολλά από αυτά τα προϊόντα παράγονται με πολυμερισμό, δηλαδή την χημική ........ κατά την οποία ........ ........ ίδιων ή ........ οργανικών ενώσεων, που ονομάζονται ........, ενώνονται και σχηματίζουν ........, τα ........ . Υπάρχουν ........ και ........ πολυμερή. Ένα είδος φυσικών πολυμερών είναι οι ........, όπως η καζεΐνη που υπάρχει στο ........ και η γλουτένη που υπάρχει στο αλεύρι. Μια μεγάλη ομάδα συνθετικών πολυμερών είναι τα ........, τα οποία εξαιτίας της μεγάλης ........ στη διάβρωση επιβαρύνουν το ........ .",
    a: "<span class='text-purple-300 font-bold'>«Το πετρέλαιο είναι πολύ πολύτιμο για να καίγεται», γιατί αποτελεί την πρώτη ύλη για την παραγωγή πολλών χρήσιμων προϊόντων, όπως τα απορρυπαντικά, τα φάρμακα, τα πλαστικά κ.ά., στην Πετροχημική Βιομηχανία. Πολλά από αυτά τα προϊόντα παράγονται με πολυμερισμό, δηλαδή την χημική αντίδραση κατά την οποία πολλά μόρια ίδιων ή διαφορετικών οργανικών ενώσεων, που ονομάζονται μονομερή, ενώνονται και σχηματίζουν μακρομόρια, τα πολυμερή. Υπάρχουν χημικά και φυσικά πολυμερή. Ένα είδος φυσικών πολυμερών είναι οι πρωτεΐνες, όπως η καζεΐνη που υπάρχει στο γάλα και η γλουτένη που υπάρχει στο αλεύρι. Μια μεγάλη ομάδα συνθετικών πολυμερών είναι τα πλαστικά, τα οποία εξαιτίας της μεγάλης αντοχής στη διάβρωση επιβαρύνουν το περιβάλλον.</span>"
  },
  {
    chapterId: "chapter-3",
    q: "Να αντιστοιχίσετε καθένα από τα υλικά της στήλης Α στον χαρακτηρισμό του στην ομάδα Β.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α</th><th>Β</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Πολυαιθυλένιο</td><td>1. Φυσικό πολυμερές</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Μετάξι</td><td>2. Προϊόν της πετροχημικής βιομηχανίας</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Πρωτεΐνες</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Πολυβινυλοχλωρίδιο (PVC)</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Απορρυπαντικά</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Ελαστικά αυτοκινήτων</td><td></td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α</th><th>Β</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Πολυαιθυλένιο</td><td>1. Φυσικό πολυμερές</td><td>A1 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Μετάξι</td><td>2. Προϊόν της πετροχημικής βιομηχανίας</td><td>A2 &rarr; B1</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Πρωτεΐνες</td><td></td><td>A3 &rarr; B1</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Πολυβινυλοχλωρίδιο (PVC)</td><td></td><td>A4 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Απορρυπαντικά</td><td></td><td>A5 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Ελαστικά αυτοκινήτων</td><td></td><td>A6 &rarr; B2</td></tr></tbody></table></span>"
  }
];

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

let qMatch = content.match(/export const gGymnasiouQuestions: Question\[\] = (\[.*?\n\]);/s);
let mcqMatch = content.match(/export const gGymnasiouMCQ: MCQ\[\] = (\[.*?\n\]);/s);

let qArray = eval(qMatch[1]);
let mcqArray = eval(mcqMatch[1]);

// First, filter out any old chapter-3 questions/MCQs that might exist and match these, just in case!
// Actually, it's safe to just prepend the new ones since the user specifically requested me to "put them correctly" and they correspond to the new organic chemistry content.
// We should check if they already exist to avoid duplicates if I run this multiple times.
const newQTexts = qs.map(q => q.q.slice(0, 50));
qArray = qArray.filter(q => {
    for (let txt of newQTexts) {
        if (q.q.startsWith(txt)) return false;
    }
    return true;
});

const newMCQTexts = mcqs.map(q => q.q.slice(0, 50));
mcqArray = mcqArray.filter(q => {
    for (let txt of newMCQTexts) {
        if (q.q.startsWith(txt)) return false;
    }
    return true;
});

// Append new
qArray = [...qs, ...qArray];
mcqArray = [...mcqs, ...mcqArray];

let updatedContent = content.replace(qMatch[1], JSON.stringify(qArray, null, 2));
updatedContent = updatedContent.replace(mcqMatch[1], JSON.stringify(mcqArray, null, 2));

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', updatedContent, 'utf-8');
console.log("Successfully inserted chapter 4 (chapter-3) organic chemistry exercises.");
