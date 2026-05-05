import type { Question, MCQ } from './questions';

export const gGymnasiouQuestions: Question[] = [
  {
    "chapterId": "chapter-4",
    "q": "Α. Ποιες ενώσεις μελετά η Οργανική Χημεία;<br>Β. Για ποιο λόγο είναι απαραίτητη η ταξινόμηση των οργανικών ενώσεων;<br>Γ. Πως ταξινομούνται οι οργανικές ενώσεις με κριτήριο την δομή της ανθρακικής αλυσίδας;",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η οργανική Χημεία μελετά τις ενώσεις του άνθρακα, εκτός από το μονοξείδιο του άνθρακα, το διοξείδιο του άνθρακα, τα ανθρακικά άλατα, τα κυανιούχα άλατα και ορισμένες ακόμη ενώσεις.</li><li class='mb-2'>Β. Ο μεγάλος αριθμός των οργανικών ενώσεων και η ανάγκη για ουσιαστική μελέτη των ιδιοτήτων και των μεθόδων παρασκευής τους υποχρέωσε τους χημικούς να τις ταξινομήσουν σε ομάδες.</li><li class='mb-2'>Γ. Οι οργανικές ενώσεις με κριτήριο την δομή της ανθρακικής αλυσίδας ταξινομούνται σε:<br>- <b>Άκυκλους</b>, στους οποίους τα άτομα άνθρακα σχηματίζουν ανοικτές αλυσίδες.<br>- <b>Κυκλικούς</b>, στους οποίους τα άτομα άνθρακα σχηματίζουν κλειστές αλυσίδες, δηλαδή δακτύλιους.</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε τα κενά στο ακόλουθο κείμενο με μια λέξη ή ένα σύμβολο:<br>Υδρογονάνθρακες ονομάζονται οι ........ χημικές ενώσεις οι οποίες αποτελούνται μόνο από ........ και ........ . Με κριτήριο τη μορφή της ανθρακικής αλυσίδας διακρίνονται σε ........ και ........ .",
    "a": "<span class='text-purple-300 font-bold'>Υδρογονάνθρακες ονομάζονται οι οργανικές χημικές ενώσεις οι οποίες αποτελούνται μόνο από υδρογόνο και άνθρακα. Με κριτήριο τη μορφή της ανθρακικής αλυσίδας διακρίνονται σε άκυκλους και κυκλικούς.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να ονομάσετε τους ακόλουθους κορεσμένους υδρογονάνθρακες:<br>Α. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub><br>Β. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub><br>Γ. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub><br>Δ. CH<sub>4</sub><br>Ε. CH<sub>3</sub>-CH<sub>3</sub><br>Ζ. CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>",
    "a": "<span class='text-purple-300 font-bold'><ul><li>Α. Προπάνιο (3C)</li><li>Β. Εξάνιο (6C)</li><li>Γ. Βουτάνιο (4C)</li><li>Δ. Μεθάνιο (1C)</li><li>Ε. Αιθάνιο (2C)</li><li>Ζ. Επτάνιο (7C)</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να αντιστοιχίσετε τον τύπο του κορεσμένου υδρογονάνθρακα της στήλης Α στο όνομά του στη στήλη Β.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>μεθάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>προπάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>οκτάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>βουτάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>5.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>επτάνιο</td></tr><tr class='border-b border-white/20'><td class='py-2'>6.</td><td>CH<sub>4</sub></td><td>πεντάνιο</td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>μεθάνιο</td><td>A1 &rarr; Β4 (βουτάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>προπάνιο</td><td>A2 &rarr; Β5 (επτάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>οκτάνιο</td><td>A3 &rarr; Β2 (προπάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>βουτάνιο</td><td>A4 &rarr; Β3 (οκτάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>5.</td><td>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></td><td>επτάνιο</td><td>A5 &rarr; B6 (πεντάνιο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>6.</td><td>CH<sub>4</sub></td><td>πεντάνιο</td><td>A6 &rarr; B1 (μεθάνιο)</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "α. Να εξηγήσετε ποια χημική διεργασία ονομάζεται καύση.<br>β. Να αναφέρετε τα προϊόντα της τέλειας καύσης των υδρογονανθράκων και να περιγράψετε πώς θα επιβεβαιώσουμε πειραματικά την παραγωγή τους.<br>γ. Να εξηγήσετε πότε η καύση ενός υδρογονάνθρακα χαρακτηρίζεται ατελής και ποια είναι τα πιθανά προϊόντα της.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Καύση ονομάζεται η χημική αντίδραση ενός στοιχείου ή μιας χημικής ένωσης με το οξυγόνο, η οποία συνοδεύεται από έκλυση θερμότητας και φωτός.</li><li class='mb-2'>β. Τα προϊόντα της τέλειας καύσης των υδρογονανθράκων είναι το διοξείδιο του άνθρακα (CO<sub>2</sub>) και το νερό (H<sub>2</sub>O). Το CO<sub>2</sub> ανιχνεύεται όταν διοχετευτεί σε διαυγές ασβεστόνερο, το οποίο θολώνει, ή αν τοποθετήσουμε ένα αναμμένο κερί σε κώδωνα με το αέριο, το οποίο θα σβήσει. Οι υδρατμοί (H<sub>2</sub>O) διοχετεύονται πάνω από λευκό άνυδρο θειικό χαλκό, ο οποίος απορροφά το νερό και γίνεται μπλε.</li><li class='mb-2'>γ. Όταν η καύση γίνεται με ανεπαρκή ποσότητα οξυγόνου ονομάζεται ατελής καύση. Παράγονται πάλι υδρατμοί, όμως ο άνθρακας μπορεί να μετασχηματιστεί σε μονοξείδιο του άνθρακα (CO) ή να παραμείνει άκαυστος ως αιθάλη (C - καπνιά).</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "α. Υπάρχει η άποψη: «Το πετρέλαιο είναι πολύ πολύτιμο για να καίγεται». Να αναφέρετε δύο τουλάχιστον λόγους οι οποίοι δικαιολογούν αυτή την άποψη.<br>β. Πώς ονομάζεται το πετρέλαιο στη μορφή που αντλείται από το υπέδαφος; Είναι κατάλληλο για χρήση σε αυτή τη μορφή;<br>γ. Να αναφέρετε τα στάδια της επεξεργασίας του αργού πετρελαίου και να εξηγήσετε πού αποσκοπεί το καθένα.<br>δ. Σε ποια ιδιότητα των συστατικών του στηρίζεται ο διαχωρισμός του πετρελαίου σε κλάσματα;",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Το πετρέλαιο είναι μη ανανεώσιμη πηγή ενέργειας και παράλληλα αποτελεί την πρώτη ύλη για την παραγωγή αμέτρητων χρήσιμων προϊόντων, όπως τα απορρυπαντικά, τα φάρμακα, τα πλαστικά, τα λιπάσματα κ.ά. Η σπατάλη του μόνο για καύση στερεί αυτές τις πολύτιμες πρώτες ύλες.</li><li class='mb-2'>β. Ονομάζεται <b>αργό πετρέλαιο</b>. Δεν είναι κατάλληλο για χρήση απευθείας σε αυτή τη μορφή· απαιτείται επεξεργασία σε διυλιστήρια.</li><li class='mb-2'>γ. Το πρώτο στάδιο είναι η <b>αποθείωση</b>, κατά την οποία απομακρύνονται οι θειούχες προσμείξεις ώστε να μην παράγονται ρυπογόνα αέρια του θείου κατά την καύση. Το δεύτερο στάδιο είναι η <b>κλασματική απόσταξη</b>, που αποσκοπεί στον διαχωρισμό του πετρελαίου σε ομάδες υδρογονανθράκων (κλάσματα) με παραπλήσιο μέγεθος αλυσίδας.</li><li class='mb-2'>δ. Ο διαχωρισμός στηρίζεται στη διαφορά του <b>σημείου βρασμού</b> των συστατικών, το οποίο εξαρτάται από το μέγεθος της ανθρακικής αλυσίδας.</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Παρατηρώντας τον πίνακα κλασμάτων του πετρελαίου, να αντιστοιχίσετε τα κλάσματα της στήλης Α με τον αριθμό ατόμων C που περιέχουν οι ενώσεις στη στήλη Β και τη χρήση τους στη στήλη Γ.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α: Κλάσμα πετρελαίου</th><th>Β: Αριθμός ατόμων C</th><th>Γ: Χρήση</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Μαζούτ</td><td>1. 5-12</td><td>1. Καύσιμο για αυτοκίνητα</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Κηροζίνη</td><td>2. &gt;20</td><td>2. Οδοποιία</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Βενζίνη</td><td>3. 10-15</td><td>3. Καύσιμο</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Άσφαλτος</td><td>4. 3-4</td><td>4. Κεριά</td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Παραφίνη</td><td>5.</td><td>5. Καύσιμο αεροπλάνων</td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Υγραέρια</td><td>6.</td><td>6. Καύσιμο οικιακής χρήσης</td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α</th><th>Β</th><th>Γ</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Μαζούτ</td><td>1. 5-12</td><td>1. Καύσιμο αυτοκινήτων</td><td>A1 &rarr; B2 (&gt;20) &rarr; Γ3 (Καύσιμο)</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Κηροζίνη</td><td>2. &gt;20</td><td>2. Οδοποιία</td><td>A2 &rarr; B3 (10-15) &rarr; Γ5 (Καύσιμο αεροπλάνων)</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Βενζίνη</td><td>3. 10-15</td><td>3. Καύσιμο</td><td>A3 &rarr; B1 (5-12) &rarr; Γ1 (Καύσιμο αυτοκινήτων)</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Άσφαλτος</td><td>4. 3-4</td><td>4. Κεριά</td><td>A4 &rarr; B2 (&gt;20) &rarr; Γ2 (Οδοποιία)</td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Παραφίνη</td><td>5.</td><td>5. Καύσιμο αεροπλάνων</td><td>A5 &rarr; B2 (&gt;20) &rarr; Γ4 (Κεριά)</td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Υγραέρια</td><td>6.</td><td>6. Καύσιμο οικιακής χρήσης</td><td>A6 &rarr; B4 (3-4) &rarr; Γ6 (Καύσιμο οικιακής χρήσης)</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε τις ακόλουθες χημικές εξισώσεις, ώστε να είναι ορθές (τέλεια και ατελής καύση μεθανίου):<br>Τέλεια καύση του μεθανίου: CH<sub>4</sub> + ...O<sub>2</sub> &rarr; CO<sub>2</sub> + ...<br>Ατελής καύση του μεθανίου προς CO: CH<sub>4</sub> + ...O<sub>2</sub> &rarr; ... + ...<br>Ατελής καύση του μεθανίου προς C: CH<sub>4</sub> + ...O<sub>2</sub> &rarr; ... + ...",
    "a": "<span class='text-purple-300 font-bold'><ul><li>Τέλεια καύση του μεθανίου: CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O</li><li>Ατελής καύση του μεθανίου προς CO: 2CH<sub>4</sub> + 3O<sub>2</sub> &rarr; 2CO + 4H<sub>2</sub>O</li><li>Ατελής καύση του μεθανίου προς C: CH<sub>4</sub> + O<sub>2</sub> &rarr; C + 2H<sub>2</sub>O</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε τις ακόλουθες χημικές εξισώσεις, ώστε να είναι ορθές.<br><br>Τέλεια καύση αιθανίου:<br>Ατελής καύση αιθανίου προς CO:<br>Ατελής καύση αιθανίου προς C:<br><br>Τέλεια καύση προπανίου:<br>Ατελής καύση προπανίου προς CO:<br>Ατελής καύση προπανίου προς C:<br><br>Τέλεια καύση βουτανίου:<br>Ατελής καύση βουτανίου προς CO:<br>Ατελής καύση βουτανίου προς C:<br><br>Τέλεια καύση πεντανίου:<br>Τέλεια καύση εξανίου:<br>Τέλεια καύση επτανίου:<br>Τέλεια καύση οκτανίου:<br>Ατελής καύση οκτανίου προς CO:<br>Ατελής καύση οκτανίου προς C:",
    "a": "<span class='text-purple-300 font-bold'><ul><li>Τέλεια καύση αιθανίου: 2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> &rarr; 4CO<sub>2</sub> + 6H<sub>2</sub>O</li><li>Ατελής καύση αιθανίου προς CO: 2C<sub>2</sub>H<sub>6</sub> + 5O<sub>2</sub> &rarr; 4CO + 6H<sub>2</sub>O</li><li>Ατελής καύση αιθανίου προς C: 2C<sub>2</sub>H<sub>6</sub> + 3O<sub>2</sub> &rarr; 4C + 6H<sub>2</sub>O</li><br><li>Τέλεια καύση προπανίου: C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> &rarr; 3CO<sub>2</sub> + 4H<sub>2</sub>O</li><li>Ατελής καύση προπανίου προς CO: 2C<sub>3</sub>H<sub>8</sub> + 7O<sub>2</sub> &rarr; 6CO + 8H<sub>2</sub>O</li><li>Ατελής καύση προπανίου προς C: C<sub>3</sub>H<sub>8</sub> + 2O<sub>2</sub> &rarr; 3C + 4H<sub>2</sub>O</li><br><li>Τέλεια καύση βουτανίου: 2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> &rarr; 8CO<sub>2</sub> + 10H<sub>2</sub>O</li><li>Ατελής καύση βουτανίου προς CO: 2C<sub>4</sub>H<sub>10</sub> + 9O<sub>2</sub> &rarr; 8CO + 10H<sub>2</sub>O</li><li>Ατελής καύση βουτανίου προς C: 2C<sub>4</sub>H<sub>10</sub> + 5O<sub>2</sub> &rarr; 8C + 10H<sub>2</sub>O</li><br><li>Τέλεια καύση πεντανίου: C<sub>5</sub>H<sub>12</sub> + 8O<sub>2</sub> &rarr; 5CO<sub>2</sub> + 6H<sub>2</sub>O</li><li>Τέλεια καύση εξανίου: 2C<sub>6</sub>H<sub>14</sub> + 19O<sub>2</sub> &rarr; 12CO<sub>2</sub> + 14H<sub>2</sub>O</li><li>Τέλεια καύση επτανίου: C<sub>7</sub>H<sub>16</sub> + 11O<sub>2</sub> &rarr; 7CO<sub>2</sub> + 8H<sub>2</sub>O</li><li>Τέλεια καύση οκτανίου: 2C<sub>8</sub>H<sub>18</sub> + 25O<sub>2</sub> &rarr; 16CO<sub>2</sub> + 18H<sub>2</sub>O</li><li>Ατελής καύση οκτανίου προς CO: 2C<sub>8</sub>H<sub>18</sub> + 17O<sub>2</sub> &rarr; 16CO + 18H<sub>2</sub>O</li><li>Ατελής καύση οκτανίου προς C: C<sub>8</sub>H<sub>18</sub> + 9O<sub>2</sub> &rarr; 8C + 18H<sub>2</sub>O</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε το διάγραμμα για το γκαζάκι του εμπορίου:<br>Το γκαζάκι του εμπορίου περιέχει ......... Για την τέλεια καύση του απαιτείται επαρκής ποσότητα οξυγόνου, το οποίο προέρχεται από τον ........ . Κατά την τέλεια καύση παράγονται ........ και ........ . Το ........ ανιχνεύεται με διαβίβαση σε ........ θειικό χαλκό, ο οποίος από λευκός γίνεται ........ . Το ........ θολώνει το ........ .",
    "a": "<span class='text-purple-300 font-bold'>Το γκαζάκι του εμπορίου περιέχει βουτάνιο. Για την τέλεια καύση του απαιτείται επαρκής ποσότητα οξυγόνου, το οποίο προέρχεται από τον ατμοσφαιρικό αέρα. Κατά την τέλεια καύση παράγονται H<sub>2</sub>O και CO<sub>2</sub>. Το H<sub>2</sub>O ανιχνεύεται με διαβίβαση σε άνυδρο θειικό χαλκό, ο οποίος από λευκός γίνεται γαλάζιος. Το CO<sub>2</sub> θολώνει το διαυγές ασβεστόνερο.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να αντιστοιχίσετε καθένα από τα υλικά της στήλης Α στον χαρακτηρισμό του στην ομάδα Β.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α</th><th>Β</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Πολυαιθυλένιο</td><td>1. Φυσικό πολυμερές</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Μετάξι</td><td>2. Προϊόν της πετροχημικής βιομηχανίας</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Πρωτεΐνες</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Πολυβινυλοχλωρίδιο (PVC)</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Απορρυπαντικά</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Ελαστικά αυτοκινήτων</td><td></td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Α</th><th>Β</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Πολυαιθυλένιο</td><td>1. Φυσικό πολυμερές</td><td>A1 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Μετάξι</td><td>2. Προϊόν της πετροχημικής βιομηχανίας</td><td>A2 &rarr; B1</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Πρωτεΐνες</td><td></td><td>A3 &rarr; B1</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Πολυβινυλοχλωρίδιο (PVC)</td><td></td><td>A4 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>5. Απορρυπαντικά</td><td></td><td>A5 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>6. Ελαστικά αυτοκινήτων</td><td></td><td>A6 &rarr; B2</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Απαντήστε στα παρακάτω ερωτήματα:<br>Α. Με ποιο κριτήριο ταξινόμησε ο Newlands τα στοιχεία στον Περιοδικό του Πίνακα και γιατί χρησιμοποίησε τη λέξη «οκτάβες» για την ταξινόμηση των χημικών στοιχείων;<br>Β. Ποιο ήταν το βασικό πρόβλημα του Περιοδικού Πίνακα που πρότεινε ο Newlands και δεν έπεισε την επιστημονική κοινότητα της εποχής του;<br>Γ. Με ποιο κριτήριο ταξινόμησε ο Mendeleev τα στοιχεία στον Περιοδικό του Πίνακα και γιατί ήταν πιο επιτυχημένος από αυτόν του Newlands;",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Ο J. Newlands κατέταξε τα χημικά στοιχεία από το στοιχείο με τα ελαφρύτερα άτομα προς το στοιχείο με τα βαρύτερα άτομα, δηλαδή κατά αυξανόμενο Ατομικό Βάρος. Παρατήρησε ότι οι ιδιότητες του όγδοου στοιχείου έμοιαζαν με τις ιδιότητες του πρώτου, του ένατου με του δεύτερου κτλ. και διατύπωσε τον «κανόνα των οκτάβων», υποστηρίζοντας ότι μετά από μια σειρά επτά «ανόμοιων» στοιχείων ακολουθούν άλλα επτά που «επαναλαμβάνουν» τις ιδιότητες των προηγουμένων.</li><li class='mb-2'>Β. Η κατάταξη του Newlands παρουσίαζε προφανή άτοπα, όπως για παράδειγμα ότι ο σίδηρος «έπρεπε» να έχει παρόμοιες ιδιότητες με το οξυγόνο και ο φωσφόρος με το μαγγάνιο και για αυτό η Χημική Εταιρεία του Λονδίνου αρνήθηκε να την δημοσιεύσει.</li><li class='mb-2'>Γ. Ο D. Mendeleev στον πίνακά του παρουσίασε 60 χημικά στοιχεία τα οποία κατατάχτηκαν από το στοιχείο με τα ελαφρύτερα άτομα προς αυτό με τα βαρύτερα. Είχε αφήσει στον πίνακά του κενές θέσεις για στοιχεία που δεν είχαν ακόμη ανακαλυφθεί. Για πολλά από αυτά περιέγραψε ικανοποιητικά και τις ιδιότητες των στοιχείων που «έλειπαν».</li></ul></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Ποιες από τις ακόλουθες προτάσεις που αφορούν τον Π.Π. είναι σωστές και ποιες λανθασμένες; Να δικαιολογήσετε την απάντησή σας.<br>Α. Η ταξινόμηση των στοιχείων στον Π.Π. του Mendeleev έγινε με κριτήριο την μάζα των ατόμων τους.<br>Β. Στον Π.Π. του Mendeleev τα στοιχεία τοποθετούνται έτσι ώστε στην ίδια περίοδο να βρίσκονται στοιχεία με παρόμοιες ιδιότητες.<br>Γ. Ο Π.Π. του Newlands απορρίφθηκε, γιατί προέβλεπε να έχουν όμοιες ιδιότητες εντελώς διαφορετικά στοιχεία.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι σωστή. Ο D. Mendeleev στον πίνακά του παρουσίασε 60 χημικά στοιχεία τα οποία κατατάχτηκαν από το στοιχείο με τα ελαφρύτερα άτομα προς αυτό με τα βαρύτερα.</li><li class='mb-2'>Β. Η πρόταση είναι λανθασμένη. Στον Π.Π. του Mendeleev τα στοιχεία τοποθετούνται έτσι ώστε στην ίδια ομάδα να βρίσκονται στοιχεία με παρόμοιες ιδιότητες.</li><li class='mb-2'>Γ. Η πρόταση είναι σωστή. Η κατάταξη του Newlands παρουσίαζε προφανή άτοπα, όπως για παράδειγμα ότι ο σίδηρος «έπρεπε» να έχει παρόμοιες ιδιότητες με το οξυγόνο και ο φωσφόρος με το μαγγάνιο και για αυτό δεν έπεισε την επιστημονική κοινότητα της εποχής του.</li></ul></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Να αντιστοιχίσετε τον αριθμό καθεμίας από τις ομάδες του Π.Π. της στήλης Α στο όνομά της στη στήλη Β.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>1</td><td>Αλογόνα</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>18</td><td>Αλκαλικές γαίες</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>2</td><td>Ευγενή αέρια</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>17</td><td>αλκάλια</td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1.</td><td>1</td><td>Αλογόνα</td><td>A1 &rarr; B4</td></tr><tr class='border-b border-white/20'><td class='py-2'>2.</td><td>18</td><td>Αλκαλικές γαίες</td><td>A2 &rarr; B3</td></tr><tr class='border-b border-white/20'><td class='py-2'>3.</td><td>2</td><td>Ευγενή αέρια</td><td>A3 &rarr; B2</td></tr><tr class='border-b border-white/20'><td class='py-2'>4.</td><td>17</td><td>αλκάλια</td><td>A4 &rarr; B1</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Να συμβουλευτείτε τον Π.Π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως αλκάλια (A), αλκαλικές γαίες (ΑΓ), αλογόνα (ΑΛ) και ευγενή ή αδρανή αέρια (ΕΑ).<br><br><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Kr</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ca</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>K</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Br</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>I</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Li</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ba</td><td class='py-2'></td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Kr</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>Ca</td><td class='py-2 border-r border-white/20'>ΑΓ</td><td class='py-2 border-r border-white/20'>K</td><td class='py-2 border-r border-white/20'>Α</td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'>ΑΛ</td><td class='py-2 border-r border-white/20'>Br</td><td class='py-2 border-r border-white/20'>ΑΛ</td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'>Α</td><td class='py-2 border-r border-white/20'>I</td><td class='py-2 border-r border-white/20'>ΑΛ</td><td class='py-2 border-r border-white/20'>Li</td><td class='py-2 border-r border-white/20'>Α</td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>Ba</td><td class='py-2'>ΑΓ</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Αφού συμβουλευτείτε τον Περιοδικό Πίνακα, να απαντήσετε στα ακόλουθα ερωτήματα:<br>α. Να συμπληρώσετε το σύμβολο του στοιχείου: 1. αργό, 2. χλώριο, 3. νάτριο, 4. άνθρακας, 5. αργίλιο, 6. θείο, 7. ασβέστιο, 8. οξυγόνο, 9. σίδηρος, 10. άζωτο.<br>β. Ποιο στοιχείο είναι ευγενές αέριο;<br>γ. Ποια είναι τα τέσσερα στοιχεία τα οποία είναι μέταλλα;<br>δ. Ποιο στοιχείο είναι αλκάλιο;<br>ε. Ποια δύο αμέταλλα στοιχεία περιέχονται στον αέρα που αναπνέουμε;<br>στ. Ποιο στοιχείο είναι αλογόνο;<br>ζ. Να σημειώσετε την ομάδα του Π.Π. στην οποία βρίσκεται το αργό, το χλώριο, και το νάτριο.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. 1. αργό – Ar, 2. χλώριο – Cl, 3. νάτριο – Na, 4. άνθρακας – C, 5. αργίλιο – Al, 6. θείο – S, 7. ασβέστιο – Ca, 8. οξυγόνο – O, 9. σίδηρος – Fe, 10. άζωτο – N</li><li class='mb-2'>β. Το στοιχείο που είναι ευγενές αέριο είναι το αργό – Ar.</li><li class='mb-2'>γ. Τα τέσσερα στοιχεία τα οποία είναι μέταλλα είναι τα: νάτριο (Na), αργίλιο (Al), ασβέστιο (Ca) και σίδηρος (Fe).</li><li class='mb-2'>δ. Το στοιχείο που είναι αλκάλιο είναι το νάτριο (Na).</li><li class='mb-2'>ε. Τα δύο αμέταλλα στοιχεία που περιέχονται στον αέρα που αναπνέουμε είναι το άζωτο (N) και το οξυγόνο (O).</li><li class='mb-2'>στ. Το στοιχείο που είναι αλογόνο είναι το χλώριο (Cl).</li><li class='mb-2'>ζ. αργό: 18η ομάδα, χλώριο: 17η ομάδα, νάτριο: 1η ομάδα.</li></ul></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Να αντιστοιχίσετε καθένα από τα χημικά στοιχεία της στήλης Α στην ομάδα του Π.Π. στην οποία βρίσκονται στην ομάδα Β, και στο χαρακτηρισμό τους στη στήλη Γ.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Γ</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1</td><td><sub>1</sub>H</td><td>1η ομάδα</td><td>Ευγενή αέρια</td></tr><tr class='border-b border-white/20'><td class='py-2'>2</td><td><sub>10</sub>Ne</td><td>2η ομάδα</td><td>Αλογόνα</td></tr><tr class='border-b border-white/20'><td class='py-2'>3</td><td><sub>17</sub>Cl</td><td>17η ομάδα</td><td>Αλκάλια</td></tr><tr class='border-b border-white/20'><td class='py-2'>4</td><td><sub>12</sub>Mg</td><td>18η ομάδα</td><td>Αλκαλικές γαίες</td></tr><tr class='border-b border-white/20'><td class='py-2'>5</td><td><sub>11</sub>Na</td><td>16η ομάδα</td><td></td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th></th><th>Α</th><th>Β</th><th>Γ</th><th>Απαντήσεις</th></tr></thead><tbody><tr class='border-b border-white/20'><td class='py-2'>1</td><td><sub>1</sub>H</td><td>1η ομάδα</td><td>Ευγενή αέρια</td><td>A1 &rarr; B1 &rarr; Γ3 (σημείωση: το H εξαιρείται από τα αλκάλια)</td></tr><tr class='border-b border-white/20'><td class='py-2'>2</td><td><sub>10</sub>Ne</td><td>2η ομάδα</td><td>Αλογόνα</td><td>A2 &rarr; B4 &rarr; Γ1</td></tr><tr class='border-b border-white/20'><td class='py-2'>3</td><td><sub>17</sub>Cl</td><td>17η ομάδα</td><td>Αλκάλια</td><td>A3 &rarr; B3 &rarr; Γ2</td></tr><tr class='border-b border-white/20'><td class='py-2'>4</td><td><sub>12</sub>Mg</td><td>18η ομάδα</td><td>Αλκαλικές γαίες</td><td>A4 &rarr; B2 &rarr; Γ4</td></tr><tr class='border-b border-white/20'><td class='py-2'>5</td><td><sub>11</sub>Na</td><td>16η ομάδα</td><td></td><td>A5 &rarr; B1 &rarr; Γ3</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Δίνεται ένα σχήμα το οποίο απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα με γράμματα A, B, Γ, Δ (στις αριστερές ομάδες 1 και 2) και E, Z, K (στις δεξιές ομάδες 17 και 18). Να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες και να δικαιολογήσετε την απάντησή σας.<br>Α. Το στοιχείο Β έχει παρόμοιες ιδιότητες με το στοιχείο Γ και το στοιχείο Ε με το στοιχείο Ζ.<br>Β. Το στοιχείο Α είναι στερεό, όπως τα στοιχεία Β, Γ και Δ.<br>Γ. Τα στοιχεία Α, Β, Γ και Δ είναι μέταλλα.<br>Δ. Το στοιχείο Δ είναι αλκάλιο.<br>Ε. Το στοιχείο Κ είναι αδρανές και δεν αντιδρά με άλλα στοιχεία.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι σωστή. Τα στοιχεία Β και Γ, όπως και τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα, επομένως έχουν παρόμοιες ιδιότητες.</li><li class='mb-2'>Β. Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (το Υδρογόνο - Η) είναι αμέταλλο. Επομένως τα στοιχεία Β, Γ και Δ είναι στερεά αλλά το Α είναι αέριο.</li><li class='mb-2'>Γ. Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο.</li><li class='mb-2'>Δ. Η πρόταση είναι λανθασμένη. Το στοιχείο Δ ανήκει στην 2η ομάδα του Περιοδικού Πίνακα επομένως είναι αλκαλική γαία και όχι αλκάλιο.</li><li class='mb-2'>Ε. Η πρόταση είναι σωστή. Το στοιχείο Κ ανήκει στην 18η ομάδα του Περιοδικού Πίνακα, επομένως είναι ευγενές (αδρανές) αέριο.</li></ul></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Να συμβουλευτείτε τον Π.Π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως μέταλλα (Μ), αμέταλλα (Α) και ευγενή ή αδρανή αέρια (ΕΑ).<br><br><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Ne</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Cr</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Fe</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>N</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>O</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>S</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>C</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>P</td><td class='py-2 border-r border-white/20'></td><td class='py-2 border-r border-white/20'>Mg</td><td class='py-2'></td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2 border-r border-white/20'>Ne</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>Cr</td><td class='py-2 border-r border-white/20'>Μ</td><td class='py-2 border-r border-white/20'>Fe</td><td class='py-2 border-r border-white/20'>Μ</td><td class='py-2 border-r border-white/20'>N</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Na</td><td class='py-2 border-r border-white/20'>Μ</td><td class='py-2 border-r border-white/20'>O</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Cl</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>S</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Ar</td><td class='py-2 border-r border-white/20'>ΕΑ</td><td class='py-2 border-r border-white/20'>C</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>P</td><td class='py-2 border-r border-white/20'>A</td><td class='py-2 border-r border-white/20'>Mg</td><td class='py-2'>Μ</td></tr></tbody></table></span>"
  },
  {
    "q": "1. Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:",
    "a": "<span class='text-emerald-400 font-bold'>Α. Χημική αντίδραση ονομάζεται κάθε μεταβολή κατά την οποία από τις αρχικές ουσίες, οι οποίες ονομάζονται αντιδρώντα σχηματίζονται νέες ουσίες με διαφορετικές ιδιότητες, οι οποίες ονομάζονται προϊόντα.<br>Για παράδειγμα στην αντίδραση: αιθανόλη + οξυγόνο -> διοξείδιο του άνθρακα + νερό, αντιδρώντα είναι η αιθανόλη και το οξυγόνο και προϊόντα είναι: το διοξείδιο του άνθρακα και το νερό.<br>Οι χημικές αντιδράσεις συνήθως συνοδεύονται και από ενεργειακές μεταβολές, όπως έκλυση ή απορρόφηση θερμότητας και παραγωγή φωτός.<br>Οι αντιδράσεις στις οποίες εκλύεται θερμότητα ονομάζονται εξώθερμες και αυτές στις οποίες απορροφάται ονομάζονται ενδόθερμες.<br>Σύμφωνα με το νόμο της διατήρησης της μάζας: Σε κάθε χημική αντίδραση η συνολική μάζα των αντιδρώντων σωμάτων είναι ίση με τη συνολική μάζα των προϊόντων της αντίδρασης.<br>Β. Το υδρογόνο αντιδρά με το βρόμιο και παράγει υδροβρόμιο, σύμφωνα με την χημική εξίσωση: H2(g) + Br2(l) -> 2HBr(g).<br>Γ. Τα διπλανά προσομοιώματα αναπαριστούν την αντίδραση του αζώτου με το υδρογόνο που παράγει αμμωνία, σύμφωνα με την χημική εξίσωση: N2(g) + 3H2(g) -> 2NH3(g).<br>Δ. Η χημική εξίσωση που αναπαρίσταται από το διπλανό προσομοίωμα είναι η αντίδραση του θείου με το οξυγόνο που παράγει διοξείδιο του θείου, σύμφωνα με την χημική εξίσωση: S(s) + O2(g) -> SO2(g).</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "2. Στην διπλανή εικόνα δίνονται τα προσομοιώματα ορισμένων στοιχείων. Με βάση αυτά να αναπαραστήσετε τις ακόλουθες χημικές εξισώσεις...",
    "a": "<span class='text-emerald-400 font-bold'>α. Με χημική εξίσωση: 2HCl(g) -> H2(g) + Cl2(g)<br>β. Με χημική εξίσωση: 2C(s) + O2(g) -> 2CO(g). Με λέξεις: Ένα άτομο άνθρακα αντιδρά με ένα μόριο οξυγόνου και παράγονται δύο μόρια μονοξειδίου του άνθρακα.<br>β. (Συνέχεια) Ένα άτομο άνθρακα αντιδρά με δύο μόρια υδρογόνου και παράγει ένα μόριο μεθανίου. Με χημική εξίσωση: C(s) + 2H2(g) -> CH4(g).<br>γ. Με χημική εξίσωση: N2(g) + 2O2(g) -> 2NO2(g). Με λέξεις: Ένα μόριο αζώτου αντιδρά με δύο μόρια οξυγόνου και παράγονται δύο μόρια διοξειδίου του αζώτου.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "3. Οι χημικές εξισώσεις που ακολουθούν έχουν ένα λάθος ή μία παράλειψη. Να το εντοπίσετε, να γράψετε γιατί πιστεύετε ότι είναι λάθος και να γράψετε τη χημική εξίσωση συμπληρωμένη σωστά.",
    "a": "<span class='text-emerald-400 font-bold'>α. N2(g) + 2O2(g) -> 2NO2(g)<br>β. 2C(g) + 2H2(g) -> C2H4(g)<br>γ. 2H2(g) + O2(g) -> 2H2O(l)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "4. Η αιθανόλη ή οινόπνευμα (C2H6O) καίγεται με χαρακτηριστική λάμψη... Η καύση της αιθανόλης δίνεται στην ακόλουθη χημική εξίσωση: C2H6O(g) + 3O2(g) -> 2CO2(g) + 3H2O(g).",
    "a": "<span class='text-emerald-400 font-bold'>α. Αντιδρώντα: C2H6O και O2. Προϊόντα: CO2 και H2O.<br>β. Ένα μόριο C2H6O αντιδρά με τρία μόρια O2 και παράγονται 2 μόρια CO2 και τρία μόρια H2O.<br>γ. Πριν από τους χημικούς τύπους των αντιδρώντων και των προϊόντων τοποθετούνται αριθμοί, οι οποίοι ονομάζονται συντελεστές της χημικής εξίσωσης. Οι συντελεστές υποδεικνύουν την αναλογία των μορίων και κατ' επέκταση και των ατόμων με την οποία αντιδρούν τα αντιδρώντα και παράγονται τα προϊόντα της αντίδρασης.<br>δ. Ο δείκτης 2 δείχνει ότι το μόριο του χημικού στοιχείου (οξυγόνο) αποτελείται από δύο άτομα. Δηλαδή μας δείχνει την ατομικότητα του χημικού στοιχείου.<br>ε. Για την πιο ακριβή περιγραφή της χημικής αντίδρασης θα πρέπει να δηλώνεται και η φυσική κατάσταση των αντιδρώντων και των προϊόντων της αντίδρασης με ένα σύμβολο που αναγράφεται μέσα σε παρένθεση, μετά τον χημικό τύπο της ουσίας.<br>στ. Όταν αντιδρούν 92 g C2H6O με 192 g O2 παράγονται 176 g CO2 και 108 g H2O, γιατί σε μία χημική αντίδραση το άθροισμα των μαζών των αντιδρώντων είναι ίσο με το άθροισμα των μαζών των προϊόντων.<br>ζ. Η καύση της αιθανόλης, όπως όλες οι καύσεις ελευθερώνει θερμότητα, δηλαδή είναι εξώθερμη.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "5. Να συμπληρώσετε τους συντελεστές στις ακόλουθες εξισώσεις, έτσι ώστε όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.",
    "a": "<span class='text-emerald-400 font-bold'>α. N2(g) + 3H2(g) -> 2NH3(g)<br>β. 2N2(g) + 5O2(g) -> 2N2O5(g)<br>γ. 4Fe(s) + 3O2(g) -> 2Fe2O3(s)<br>δ. 2S(s) + 3O2(g) -> 2SO3(g)<br>ε. 2C5H10O(g) + 15O2(g) -> 10CO2(g) + 10H2O(g)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "6. Να συμπληρώσετε τους δείκτες στους χημικούς τύπους στις ακόλουθες εξισώσεις, έτσι ώστε όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.",
    "a": "<span class='text-emerald-400 font-bold'>α. 2N2(s) + 5O2(g) -> 2N2O5(g)<br>β. 4Cr(s) + 3O2(g) -> 2Cr2O3(s)<br>γ. C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g)<br>δ. 2CO(g) + O2(g) -> 2CO2(g)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "6. (Ενότητα 1 - Συνέχεια) Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις ή αριθμούς: α. Η μεθανόλη...",
    "a": "<span class='text-emerald-400 font-bold'>α. Η μεθανόλη χρησιμοποιείται ως εναλλακτικό καύσιμο και παλιά παραγόταν από την ξηρή απόσταξη των ξύλων και γι' αυτό ονομαζόταν και ξυλόπνευμα. Σήμερα προτείνονται εναλλακτικές μέθοδοι παρασκευής, οι οποίες δεσμεύουν το CO2 της ατμόσφαιρας και συμβάλλουν στην μείωση του, με στόχο την αντιμετώπιση της κλιματικής αλλαγής. Η μεθανόλη καίγεται με το οξυγόνο του αέρα και παράγεται διοξείδιο του άνθρακα και νερό... Η χημική εξίσωση που περιγράφει την αντίδραση είναι: 2CH3OH + 3O2 -> 2CO2 + 4H2O δηλαδή δύο μόρια μεθανόλης αντιδρούν με τρία μόρια οξυγόνου και παράγουν δύο μόρια διοξείδιο του άνθρακα και τέσσερα μόρια νερού. Κατά την αντίδραση ορισμένης ποσότητας μεθανόλης με 48 g οξυγόνου παράχθηκαν 44 g διοξείδιο του άνθρακα και 36 g νερό. Η ποσότητα μεθανόλης που κάηκε ήταν 32 g.<br>Η καύση της μεθανόλης, όπως και όλες οι καύσεις, είναι μία εξώθερμη αντίδραση με αποτέλεσμα η θερμοκρασία του περιβάλλοντος να αυξάνεται.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "1. (Ενότητα 2.1) Να συμπληρώσετε τα κενά με την κατάλληλη λέξη ή σύμβολο ή αριθμό:",
    "a": "<span class='text-emerald-400 font-bold'>Το άτομο αποτελείται από πρωτόνια, τα οποία είναι θετικά φορτισμένα, ηλεκτρόνια, τα οποία είναι αρνητικά φορτισμένα και νετρόνια, τα οποία είναι ουδέτερα σωματίδια. Τα νετρόνια και τα πρωτόνια αποτελούν τον θετικά φορτισμένο πυρήνα, ενώ τα ηλεκτρόνια περιφέρονται γύρω από τον πυρήνα. Το φορτίο του πρωτονίου είναι ίσο κατά απόλυτη τιμή με το φορτίου του ηλεκτρονίου και το άτομο είναι ηλεκτρικά ουδέτερο, γιατί έχει ίσους αριθμούς πρωτονίων και ηλεκτρονίων. Ένα άτομο που έχει ατομικό αριθμό Z=29 και μαζικό αριθμό A=65, έχει 29 πρωτόνια, 36 νετρόνια και 29 ηλεκτρόνια.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "2. Α. Να συμπληρώσετε τα κενά στον ακόλουθο πίνακα και στη συνέχεια να απαντήσετε στις ερωτήσεις που ακολουθούν (Β, Γ, Δ):",
    "a": "<span class='text-emerald-400 font-bold'>Α. Ο πίνακας συμπληρώνεται ως εξής:<br>Si: 14p, 14n, 14e | K(2)-L(8)-M(4)<br>C: 6p, 6n, 6e | K(2)-L(4)<br>Ne: 10p, 10n, 10e | K(2)-L(8)<br>S: 16p, 16n, 16e | K(2)-L(8)-M(6)<br>Mg: 12p, 12n, 12e | K(2)-L(8)-M(2)<br>O: 8p, 8n, 8e | K(2)-L(6)<br>Β. Το στοιχείο Mg σχηματίζει ιόντα με αποβολή των δύο ηλεκτρονίων της εξωτερικής στιβάδας και μετατρέπεται σε θετικά φορτισμένο ιόν, που ονομάζεται κατιόν.<br>Γ. Το στοιχείο S σχηματίζει ιόντα με πρόσληψη δύο ηλεκτρονίων στην εξωτερική στιβάδα και μετατρέπεται σε αρνητικά φορτισμένο ιόν, που ονομάζεται ανιόν.<br>Δ. Τα στοιχεία αποβάλουν ή προσλαμβάνουν ηλεκτρόνια και μετατρέπονται σε κατιόντα ή ανιόντα αντίστοιχα, γιατί θέλουν να αποκτήσουν την μεγαλύτερη δυνατή σταθερότητα με 8 ηλεκτρόνια στην εξωτερική στιβάδα, εκτός αν εξωτερική στιβάδα είναι η Κ, οπότε θέλουν 2 ηλεκτρόνια.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "3. (Ενότητα 2.2) Να συμπληρώσετε τα κενά με την κατάλληλη λέξη ή σύμβολο ή αριθμό:",
    "a": "<span class='text-emerald-400 font-bold'>Ο χημικός δεσμός που δημιουργείται ανάμεσα σε αντίθετα φορτισμένα ιόντα ονομάζεται ιοντικός. Σε αυτό τον δεσμό ένα άτομο αποβάλλει ηλεκτρόνια και μετατρέπεται σε κατιόν, ενώ ένα άλλο άτομο προσλαμβάνει αυτά τα ηλεκτρόνια και μετατρέπεται σε ανιόν. Τα αντίθετα φορτισμένα ιόντα έλκονται και σχηματίζουν κρυστάλλους. Για παράδειγμα το 3Li έχει δομή: Κ(2)-L(1) και αποβάλει ένα ηλεκτρόνιο και μετατρέπεται σε κατιόν Li+. Το 9F έχει δομή: K(2)-L(7) και προσλαμβάνει ένα ηλεκτρόνιο και μετατρέπεται σε ανιόν F-. Τα ιόντα Li+ και F- έλκονται και σχηματίζουν τον κρύσταλλο του LiF.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "4. Α. Να βρείτε την κατανομή σε στιβάδες των ηλεκτρονίων του 17Cl, του 11Na, και του 3Li. Β. Να περιγράψετε τον σχηματισμό της ιοντικής ένωσης μεταξύ ιόντων Cl και ιόντων Na: Γ. Να περιγράψετε τον σχηματισμό της ιοντικής ένωσης μεταξύ ιόντων Cl και ιόντων Li:",
    "a": "<span class='text-emerald-400 font-bold'>Α. 17Cl: K(2)-L(8)-M(7) | 11Na: K(2)-L(8)-M(1) | 3Li: K(2)-L(1)<br>Β. Το Na αποβάλει ένα ηλεκτρόνιο από την εξωτερική του στιβάδα και μένει με συμπληρωμένη την προηγούμενη από την εξωτερική στιβάδα και μετατρέπεται σε κατιόν με φορτίο +1. Το Cl προσλαμβάνει ένα ηλεκτρόνιο και συμπληρώνουν έτσι την εξωτερική τους στιβάδα με 8 ηλεκτρόνια και μετατρέπεται σε ανιόν με φορτίο -1. Τα ιόντα Na+ και Cl- έλκονται σε αναλογία 1:1 και δημιουργούν τον κρύσταλλο του χλωριδίου του νατρίου (NaCl).<br>Γ. Το Li αποβάλει ένα ηλεκτρόνιο από την εξωτερική του στιβάδα και μένει με συμπληρωμένη την προηγούμενη από την εξωτερική στιβάδα και μετατρέπεται σε κατιόν με φορτίο +1. Το Cl προσλαμβάνει ένα ηλεκτρόνιο και συμπληρώνουν έτσι την εξωτερική τους στιβάδα με 8 ηλεκτρόνια και μετατρέπεται σε ανιόν με φορτίο -1. Τα ιόντα Li+ και Cl- έλκονται σε αναλογία 1:1 και δημιουργούν τον κρύσταλλο του χλωριδίου του λιθίου (LiCl).</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "6. (Ενότητα 2.3) Η σκοτεινόχρωμη φιάλη που δείχνει το κίτρινο βέλος της διπλανής φωτογραφίας δεν έχει ετικέτα, αλλά τα λαγωνικά του εργαστηρίου υποψιάζονται ότι μπορεί να περιέχει FeSO4, Fe(NO3)3, CuSO4 ή Al(NO3)3... Να προτείνετε μία μέθοδο με την οποία θα ταυτοποιήσετε ποια ουσία βρίσκεται στην φιάλη:",
    "a": "<span class='text-emerald-400 font-bold'>Σε δείγμα από το περιεχόμενο της φιάλης θα προσθέσουμε διάλυμα NaOH 8% μάζα προς όγκο. Αν παρατηρήσουμε σχηματισμό πράσινου ιζήματος θα περιέχονται ιόντα Fe2+ δηλαδή FeSO4. Αν σχηματιστεί καστανέρυθρο ίζημα η φιάλη περιέχει ιόντα Fe3+ δηλαδή Fe(NO3)3. Αν σχηματιστεί ανοιχτό μπλε ίζημα η φιάλη περιέχει ιόντα Cu2+ δηλαδή CuSO4. Αν σχηματιστεί ίζημα λευκό, η φιάλη περιέχει ιόντα Al3+ δηλαδή Al(NO3)3.<br>Σημείωση: Η παρουσία ιόντων αργιλίου μπορεί να προκύψει εφ' όσον έχουμε αποκλείσει τις άλλες τρεις περιπτώσεις ουσιών.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "8. Α. Ο Ίον και η Όλη διαφωνούν για το αν ο οργανισμός του ανθρώπου χρειάζεται για την λειτουργία του μεταλλικά ιόντα... Ποιος έχει δίκιο; Να αιτιολογήσετε σύντομα την άποψή σας.",
    "a": "<span class='text-emerald-400 font-bold'>Ζωτικής σημασίας για την υγεία του ανθρώπινου οργανισμού είναι η παρουσία αρκετών μετάλλων, κυρίως σε μορφή ιόντων. Η υγεία του θυρεοειδούς και των οστών και οι ηλεκτρικές μεταδόσεις που δημιουργούν νευρικές ώσεις και καρδιακούς ρυθμούς βασίζονται στο μαγνήσιο, στο κάλιο, στον σίδηρο και στο νάτριο. Τα ιόντα ψευδάργυρου είναι η γραμμή άμυνας μας ενάντια στις λοιμώξεις, αυξάνοντας την αντίσταση σε ασθένειες και διατηρώντας ένα υγιές μεταβολικό σύστημα. Τα ιόντα χαλκού παίζουν καθοριστικό ρόλο στο σχηματισμό ερυθρών αιμοσφαιρίων και στη διατήρηση της υγείας των νευρικών κυττάρων... Η έλλειψη αυτών των μετάλλων μπορεί να οδηγήσει σε πολλά προβλήματα υγείας.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "9. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες:",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Τα ιόντα νατρίου (Na+) και καλίου (K+) είναι ουσιαστικά για τη μετάδοση των νευρικών ερεθισμάτων. Η διατήρηση της σωστής συγκέντρωσης αυτών των ιόντων είναι ζωτικής σημασίας για τη λειτουργία του νευρικού συστήματος.<br>Β. Η πρόταση είναι λανθασμένη. Η ανάπτυξη των οστών και των δοντιών, η σύσπαση των μυών και η ρύθμιση του καρδιακού ρυθμού βασίζονται στο μεταλλικό ασβέστιο.<br>Γ. Η πρόταση είναι σωστή. Τα ιόντα μαγνησίου συμβάλλουν στην ρύθμιση του καρδιακού παλμού και του αγγειακού τόνου... βρίσκονται στη χλωροφύλλη...<br>Δ. Η πρόταση είναι σωστή. Ο σίδηρος είναι το κύριο συστατικό της αίμης στην οποία δρα ως μεταφορέας οξυγόνου στους ιστούς.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "3. Ποιες από τις ακόλουθες προτάσεις που αφορούν τον Π.Π. είναι σωστές και ποιες λανθασμένες; Να δικαιολογήσετε την απάντησή σας. Α. Η ταξινόμηση των στοιχείων στον Π.Π. του Mendeleev έγινε με κριτήριο την μάζα των ατόμων τους. Β. Στον Π.Π. του Mendeleev τα στοιχεία τοποθετούνται έτσι ώστε στην ίδια περίοδο να βρίσκονται στοιχεία με παρόμοιες ιδιότητες. Γ. Ο Π.Π. του Newlands απορρίφθηκε, γιατί προέβλεπε να έχουν όμοιες ιδιότητες εντελώς διαφορετικά στοιχεία.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. O D. Mendeleev στον πίνακά του παρουσίασε 60 χημικά στοιχεία τα οποία κατατάχτηκαν από το στοιχείο με τα ελαφρύτερα άτομα προς αυτό με τα βαρύτερα.<br>Β. Η πρόταση είναι λανθασμένη. Στον Π.Π. του Mendeleev τα στοιχεία τοποθετούνται έτσι ώστε στην ίδια ομάδα να βρίσκονται στοιχεία με παρόμοιες ιδιότητες.<br>Γ. Η πρόταση είναι σωστή. Η κατάταξη του Newlands παρουσίαζε προφανή άτοπα, όπως για παράδειγμα ότι ο σίδηρος «έπρεπε» να έχει παρόμοιες ιδιότητες με το οξυγόνο και ο φωσφόρος με το μαγγάνιο και για αυτό δεν έπεισε την επιστημονική κοινότητα της εποχής του.</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "4. Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:",
    "a": "<span class='text-emerald-400 font-bold'>Α. Ο σύγχρονος Περιοδικός Πίνακας κατατάσσει τα στοιχεία κατά αύξοντα ατομικό αριθμό. Περιλαμβάνει 7 οριζόντιες γραμμές, οι οποίες ονομάζονται περίοδοι, και 18 κατακόρυφες στήλες, οι οποίες ονομάζονται ομάδες. Εκτός του Περιοδικού Πίνακα σε παράρτημα βρίσκονται 2 γραμμές που η καθεμία περιέχει 14 στοιχεία.<br>Β. Τα στοιχεία που βρίσκονται στην ίδια ομάδα έχουν παρόμοιες ιδιότητες.<br>Γ. Τα στοιχεία της 1ης ομάδας, εκτός από το υδρογόνο, ονομάζονται αλκάλια, τα στοιχεία της 2ης ομάδας ονομάζονται αλκαλικές γαίες, τα στοιχεία της 17ης ομάδας ονομάζονται αλογόνα και τα στοιχεία της 18ης ομάδας ονομάζονται ευγενή αέρια.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "5. Να αντιστοιχίσετε τον αριθμό καθεμίας από τις ομάδες του Π.Π. της στήλης Α στο όνομά της στη στήλη B.",
    "a": "<span class='text-emerald-400 font-bold'>Απαντήσεις:<br>1. (1) -> αλκάλια (A1-B4)<br>2. (18) -> Ευγενή αέρια (A2-B3)<br>3. (2) -> Αλκαλικές γαίες (A3-B2)<br>4. (17) -> Αλογόνα (A4-B1)</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "7. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να δικαιολογήσετε την απάντησή σας. Α. Τα στοιχεία 11Να και 19Κ έχουν παρόμοιες ιδιότητες, επομένως είναι στην ίδια περίοδο του Π.Π. Β. Τα στοιχεία 35Br και 53I είναι αλογόνα, επομένως βρίσκονται στην 17η ομάδα του Π.Π. Γ. Τα στοιχεία 56Ba και 38Sr βρίσκονται στην 2η ομάδα του Π.Π., επομένως είναι αλκαλικές γαίες. Δ. Το 2He και το 10Ne βρίσκονται στην ίδια ομάδα του Π.Π.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Τα στοιχεία που ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα έχουν παρόμοιες ιδιότητες.<br>Β. Η πρόταση είναι σωστή. Τα στοιχεία που ανήκουν στη 17η ομάδα του Περιοδικού Πίνακα ονομάζονται αλογόνα.<br>Γ. Η πρόταση είναι σωστή. Τα στοιχεία που ανήκουν στη 2η ομάδα του Περιοδικού Πίνακα ονομάζονται αλκαλικές γαίες.<br>Δ. Η πρόταση είναι σωστή. Το 2He και το 10Ne είναι αλογόνα και βρίσκονται στη 18η ομάδα του Π.Π.</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "8. Να συμβουλευτείτε τον Π.Π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως αλκάλια (Α), αλκαλικές γαίες (ΑΓ), αλογόνα (ΑΛ) και ευγενή ή αδρανή αέρια (ΕΑ).",
    "a": "<span class='text-emerald-400 font-bold'>Kr: EA, Ca: ΑΓ, K: Α, Cl: ΑΛ, Br: ΑΛ, Na: Α, Li: Α, Ar: EA, Ba: ΑΓ</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "9. Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:",
    "a": "<span class='text-emerald-400 font-bold'>Όλα τα στοιχεία που βρίσκονται στην 1η ομάδα του Π.Π. έχουν 1 ηλεκτρόνιο (ε) στην εξωτερική στιβάδα τους, όλα τα στοιχεία που βρίσκονται στην 2η ομάδα έχουν 2 ηλεκτρόνια (ε) στην εξωτερική στιβάδα τους και όλα τα στοιχεία που βρίσκονται στην 17η ομάδα έχουν 7 ηλεκτρόνια (ε) στην εξωτερική στιβάδα τους. Τα στοιχεία που έχουν τον ίδιο αριθμό ε στην εξωτερική στιβάδα των ατόμων τους, έχουν παρόμοιες ιδιότητες. Επειδή όλα τα στοιχεία που βρίσκονται στην ίδια ομάδα του Περιοδικού Πίνακα, έχουν τον ίδιο αριθμό ηλεκτρονίων στην εξωτερική τους στιβάδα, έχουν παρόμοιες ιδιότητες.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "10. Αφού συμβουλευτείτε τον Περιοδικό Πίνακα, να απαντήσετε στα ακόλουθα ερωτήματα:",
    "a": "<span class='text-emerald-400 font-bold'>α. 1. αργό – Ar, 2. χλώριο – Cl, 3. νάτριο – Na, 4. άνθρακας – C, 5. αργίλιο – Al, 6. θείο – S, 7. ασβέστιο – Ca, 8. οξυγόνο – O, 9. σίδηρος – Fe, 10. άζωτο – N.<br>β. Το στοιχείο που είναι ευγενές αέριο είναι το αργό – Ar.<br>γ. Τα τέσσερα στοιχεία τα οποία είναι μέταλλα είναι τα: νάτριο (Na), αργίλιο (Al), ασβέστιο (Ca) και σίδηρος (Fe).<br>δ. Το στοιχείο που είναι αλκάλιο είναι το νάτριο (Na).<br>ε. Τα δύο αμέταλλα στοιχεία που περιέχονται στον αέρα που αναπνέουμε είναι το άζωτο (Ν) και το οξυγόνο (Ο).<br>στ. Το στοιχείο που είναι αλογόνο είναι το χλώριο (Cl).<br>ζ. αργό: 18η ομάδα, χλώριο: 17η ομάδα, νάτριο: 1η ομάδα.</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "11. Να αντιστοιχίσετε καθένα από τα χημικά στοιχεία της στήλης Α στην ομάδα του Π.Π. στην οποία βρίσκονται στην ομάδα Β, και στο χαρακτηρισμό τους στη στήλη Γ χωρίς να συμβουλευτείτε τον Π.Π.",
    "a": "<span class='text-emerald-400 font-bold'>Απαντήσεις:<br>1. H -> 1η ομάδα (Α1-Β1)<br>2. 10Ne -> 18η ομάδα -> Ευγενή αέρια (Α2-Β4-Γ1)<br>3. 17Cl -> 17η ομάδα -> Αλογόνα (Α3-Β3-Γ2)<br>4. 12Mg -> 2η ομάδα -> Αλκαλικές γαίες (Α4-Β2-Γ4)<br>5. 11Na -> 1η ομάδα -> Αλκάλια (Α5-Β1-Γ3)</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "12. Το σχήμα το οποίο ακολουθεί απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα... Να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες και να δικαιολογήσετε την απάντησή σας.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Τα στοιχεία Β και Γ όπως και τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Περιοδικού Πίνακα επομένως έχουν παρόμοιες ιδιότητες.<br>Β. Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο. Επομένως τα στοιχεία Β, Γ και Δ είναι στερεά αλλά το Α είναι αέριο.<br>Γ. Η πρόταση είναι λανθασμένη. Τα στοιχεία Β, Γ και Δ είναι μέταλλα αλλά το στοιχείο Α (Η) είναι αμέταλλο.<br>Δ. Η πρόταση είναι λανθασμένη. Το στοιχείο Δ ανήκει στην 2η ομάδα του Περιοδικού Πίνακα επομένως είναι αλκαλική γαία και όχι αλκάλιο.<br>Ε. Η πρόταση είναι σωστή. Το στοιχείο Κ ανήκει στην 18η ομάδα του Περιοδικού Πίνακα, επομένως είναι ευγενές αέριο.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "13. Να συμβουλευτείτε τον Π.Π. και να χαρακτηρίσετε τα ακόλουθα στοιχεία ως μέταλλα (Μ), αμέταλλα (Α) και ευγενή ή αδρανή αέρια (ΕΑ).",
    "a": "<span class='text-emerald-400 font-bold'>Ne: EA, Cr: M, Fe: M, N: A, Na: M, O: A, Cl: A, S: A, Ar: EA, Ca: M, P: A, Mg: M</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "1. (Ενότητα 4.1) Α. Ποιες ενώσεις μελετά η Οργανική Χημεία; Β. Για ποιο λόγο είναι απαραίτητη η ταξινόμηση των οργανικών ενώσεων; Γ. Πως ταξινομούνται οι οργανικές ενώσεις με κριτήριο την δομή της ανθρακικής αλυσίδας;",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η οργανική Χημεία μελετά τις ενώσεις του άνθρακα, εκτός από τον άνθρακα μονοξείδιο, τον διοξείδιο του άνθρακα, τα ανθρακικά άλατα, τα κυανιούχα άλατα και ορισμένες ακόμη ενώσεις.<br>Β. Ο μεγάλος αριθμός των οργανικών ενώσεων και η ανάγκη για ουσιαστική μελέτη των ιδιοτήτων και των μεθόδων παρασκευής τους υποχρέωσε τους χημικούς να τις ταξινομήσουν σε ομάδες.<br>Γ. Οι οργανικές ενώσεις με κριτήριο την δομή της ανθρακικής αλυσίδας ταξινομούνται σε: Άκυκλους, στους οποίους τα άτομα άνθρακα σχηματίζουν ανοικτές αλυσίδες. Κυκλικούς, στους οποίους τα άτομα άνθρακα σχηματίζουν κλειστές αλυσίδες, δηλαδή δακτύλιους.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "2. Να συμπληρώσετε τα κενά στο ακόλουθο σχήμα με μια λέξη ή ένα σύμβολο.",
    "a": "<span class='text-emerald-400 font-bold'>Υδρογονάνθρακες ονομάζονται οι οργανικές χημικές ενώσεις οι οποίες αποτελούνται μόνο από υδρογόνο και άνθρακα. Με κριτήριο τη μορφή της ανθρακικής αλυσίδας διακρίνονται σε άκυκλους και κυκλικούς. Από τις χημικές ενώσεις οι οποίες απεικονίζονται στον ακόλουθο πίνακα, υδρογονάνθρακες είναι οι Α, Β, Γ και Ε, άκυκλοι ευθύγραμμοι υδρογονάνθρακες είναι η Γ, άκυκλοι διακλαδισμένοι υδρογονάνθρακες είναι οι Α και Ε και κυκλικοί υδρογονάνθρακες είναι η Β.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "3. Να ονομάσετε τους ακόλουθους κορεσμένους υδρογονάνθρακες: A. CH3-CH2-CH3, B. CH3-CH2-CH2-CH2-CH2-CH3, Γ. CH3-CH2-CH2-CH3, Δ. CH4, E. CH3-CH2-CH2-CH2-CH2-CH2-CH3.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Προπάνιο<br>Β. Εξάνιο<br>Γ. Βουτάνιο<br>Δ. Μεθάνιο<br>Ε. Επτάνιο</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "5. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να δικαιολογήσετε την απάντησή σας. α. Όλες ανεξαιρέτως οι ενώσεις του άνθρακα είναι οργανικές ενώσεις. β. Οι οργανικές ενώσεις που αποτελούνται από άνθρακα και υδρογόνο ονομάζονται υδατάνθρακες. γ. Η οργανική ένωση με τύπο: CH3-CH2-O-CH2-CH3 είναι ένας κορεσμένος υδρογονάνθρακας. δ. Η οργανική ένωση με τύπο: CH3-CH2-CH2-CH3 ονομάζεται βουτάνιο.",
    "a": "<span class='text-emerald-400 font-bold'>α. Η πρόταση είναι λανθασμένη. Δεν είναι όλες ανεξαιρέτως οι ενώσεις που περιέχουν άνθρακα οργανικές όπως το μονοξείδιο του άνθρακα, το διοξείδιο του άνθρακα, τα ανθρακικά άλατα, τα κυανιούχα άλατα και ορισμένες ακόμη ενώσεις.<br>β. Η πρόταση είναι λανθασμένη. Οι οργανικές ενώσεις που αποτελούνται από άνθρακα και υδρογόνο ονομάζονται υδρογονάνθρακες.<br>γ. Η πρόταση είναι λανθασμένη. Η συγκεκριμένη ένωση δεν είναι υδρογονάνθρακας καθώς εκτός από άνθρακα και υδρογόνο περιέχει και οξυγόνο.<br>δ. Η πρόταση είναι σωστή. Το πρώτο συνθετικό του ονόματός της είναι: βουτ- καθώς περιέχει στο μόριό της τέσσερα άτομα άνθρακα. Το δεύτερο συνθετικό του ονόματός της είναι: -αν- καθώς περιέχει στο μόριό της μόνο απλούς δεσμούς. Το τρίτο συνθετικό στο όνομά της είναι: -ιο καθώς είναι ένας υδρογονάνθρακας.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "6. Να αντιστοιχίσετε τον τύπο του κορεσμένου υδρογονάνθρακα της στήλης Α στο όνομά του στη στήλη B.",
    "a": "<span class='text-emerald-400 font-bold'>Απαντήσεις:<br>1. CH3-CH2-CH2-CH2-CH3 -> πεντάνιο (A1-B6)<br>2. CH3-CH2-CH2-CH2-CH2-CH2-CH3 -> επτάνιο (A2-B5)<br>3. CH3-CH2-CH2-CH3 -> βουτάνιο (A3-B4)<br>4. CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3 -> οκτάνιο (A4-B3)<br>5. CH3-CH2-CH3 -> προπάνιο (A5-B2)<br>6. CH4 -> μεθάνιο (A6-B1)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "7. (Ενότητα 4.2) α. Να εξηγήσετε ποια χημική διεργασία ονομάζεται καύση. β. Να αναφέρετε τα προϊόντα της τέλειας καύσης των υδρογονανθράκων και να περιγράψετε πως θα επιβεβαιώσουμε πειραματικά την παραγωγή τους. γ. Να εξηγήσετε πότε η καύση ενός υδρογονάνθρακα χαρακτηρίζεται ατελής και ποια είναι τα πιθανά προϊόντα της. δ. Να συμπληρώσετε την εξίσωση της τέλειας καύσης του μεθανίου... ε. Δίνεται η εξίσωση καύσης ενός υδρογονάνθρακα με προσομοιώματα. Να την γράψετε με χημικούς τύπους.",
    "a": "<span class='text-emerald-400 font-bold'>α. Καύση ονομάζεται η χημική αντίδραση ενός στοιχείου ή μιας χημικής ένωσης με το οξυγόνο, η οποία συνοδεύεται από έκλυση θερμότητας και φωτός.<br>β. Τα προϊόντα της τέλειας καύσης των υδρογονανθράκων είναι το διοξείδιο του άνθρακα και το νερό. Το αέριο διοξείδιο του άνθρακα (CO2) διοχετεύεται σε διαυγές ασβεστόνερο το οποίο θολώνει ή σε έναν κώδωνα που περιέχει ένα αναμμένο κερί, το οποίο σβήνει. Οι υδρατμοί (Η2Ο) διοχετεύονται αρχικά πάνω από ένα σωλήνα που περιέχει λευκό άνυδρο θειικό χαλκό ο οποίος στη συνέχεια γίνεται μπλε.<br>γ. Όταν η καύση γίνεται με ανεπαρκή ποσότητα οξυγόνου ονομάζεται ατελής καύση. Όταν ένας υδρογονάνθρακας καίγεται με ανεπαρκή ποσότητα οξυγόνου παράγονται υδρατμοί από την καύση του υδρογόνου και ο άνθρακας μετασχηματίζεται σε άλλα προϊόντα, όπως μονοξείδιο του άνθρακα (CO), ή παραμένει άκαυστος ως αιθάλη (C- καπνιά).<br>δ. Τέλεια καύση του μεθανίου: CH4 + 2O2 -> CO2 + 2H2O. Ατελής καύση του μεθανίου προς CO: 2CH4 + 3O2 -> 2CO + 4H2O. Ατελής καύση του μεθανίου προς C: CH4 + O2 -> C + 2H2O<br>ε. 2C4H10 + 13O2 -> 8CO2 + 10H2O</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "8. α. Υπάρχει η άποψη: «Το πετρέλαιο είναι πολύ πολύτιμο για να καίγεται». Να αναφέρετε δύο τουλάχιστον λόγους οι οποίοι δικαιολογούν αυτή την άποψη. β. Πώς ονομάζεται το πετρέλαιο στη μορφή που αντλείται από το υπέδαφος; Είναι κατάλληλο για χρήση σε αυτή τη μορφή; γ. Να αναφέρετε τα στάδια της επεξεργασίας του αργού πετρελαίου και να εξηγήσετε πού αποσκοπεί το καθένα. δ. Σε ποια ιδιότητα των συστατικών του στηρίζεται ο διαχωρισμός του πετρελαίου σε κλάσματα; / δ. Παρατηρώντας τον πίνακα... να αντιστοιχίσετε τα κλάσματα του πετρελαίου...",
    "a": "<span class='text-emerald-400 font-bold'>α. «Το πετρέλαιο είναι πολύ πολύτιμο για να καίγεται», γιατί είναι μη ανανεώσιμη πηγή ενέργειας και αποτελεί την πρώτη ύλη για την παραγωγή πολλών χρήσιμων προϊόντων, όπως τα απορρυπαντικά, τα φάρμακα, τα πλαστικά και πολλά άλλα.<br>β. Το πετρέλαιο στη μορφή που αντλείται από το υπέδαφος ονομάζεται αργό πετρέλαιο. Δεν είναι κατάλληλο για χρήση σε αυτή τη μορφή αλλά απαιτείται επεξεργασία σε ειδικές βιομηχανικές μονάδες οι οποίες ονομάζονται διυλιστήρια πετρελαίου.<br>γ. Το πρώτο στάδιο της επεξεργασίας γίνεται η αποθείωση με την οποία απομακρύνονται οι θειούχες προσμείξεις και στο δεύτερο στάδιο της επεξεργασίας γίνεται η κλασματική απόσταξη, δηλαδή ο διαχωρισμός των συστατικών του πετρελαίου σε ομάδες υδρογονανθράκων (κλάσματα).<br>δ. Ο διαχωρισμός του πετρελαίου σε κλάσματα γίνεται με κριτήριο το σημείο βρασμού τους. Επειδή το σημείο βρασμού των υδρογονανθράκων εξαρτάται από το «μέγεθός» τους, δηλαδή τον αριθμό των ατόμων άνθρακα από τα οποία αποτελείται το μόριό τους, η κλασματική απόσταξη διαχωρίζει το πετρέλαιο σε ομάδες υδρογονανθράκων με παραπλήσιο αριθμό ατόμων άνθρακα.<br>δ (Αντιστοίχιση):<br>1. Μαζούτ -> >20 άτομα C -> Καύσιμο (Α1-Β2-Γ3)<br>2. Κηροζίνη -> 10-15 άτομα C -> Καύσιμο αεροπλάνων (Α2-Β3-Γ5)<br>3. Βενζίνη -> 5-12 άτομα C -> Καύσιμο για αυτοκίνητα (Α3-Β1-Γ1)<br>4. Άσφαλτος -> >20 άτομα C -> Οδοποιία (Α4-Β2-Γ2)<br>5. Παραφίνη -> >20 άτομα C -> Κεριά (Α5-Β2-Γ4)<br>6. Υγραέρια -> 3-4 άτομα C -> Καύσιμο για οικιακή χρήση (Α6-Β4-Γ6)</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "9. Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:",
    "a": "<span class='text-emerald-400 font-bold'>Το αργό πετρέλαιο και το φυσικό αέριο σχηματίστηκαν στο υπέδαφος της Γης πριν από 10-15 εκατομμύρια χρόνια, όταν φυτικοί και ζωικοί μικροοργανισμοί εγκλωβίστηκαν σε λεκάνες στο εσωτερικό της Γης και υπό την επίδραση υψηλών πιέσεων και θερμοκρασιών και τη συμμετοχή βακτηριδίων μετασχηματίστηκαν σε μείγματα υδρογονανθράκων. Το φυσικό αέριο αποτελείται κυρίως από μεθάνιο, ενώ το αργό πετρέλαιο αποτελείται κυρίως από υγρούς υδρογονάνθρακες μέσα τους οποίους είναι διαλυμένοι αέριοι και στερεοί υδρογονάνθρακες. Είναι μη ανανεώσιμοι φυσικοί πόροι.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "11. Στον διπλανό πίνακα δίνονται προσομοιώματα, χωρίς συντελεστές η τέλεια και οι ατελείς καύσεις του μεθανίου. Να συμπληρώσετε τους συντελεστές που λείπουν στην εξίσωση με τα προσομοιώματα και στη συνέχεια να συμπληρώσετε με την βοήθεια των προσομοιωμάτων την χημική εξίσωση κάθε αντίδρασης.",
    "a": "<span class='text-emerald-400 font-bold'>Α. CH4 + 2O2 -> CO2 + 2H2O<br>Β. 2CH4 + 3O2 -> 2CO + 4H2O<br>Γ. CH4 + O2 -> C + 2H2O</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "12. Να συμπληρώσετε τις ακόλουθες χημικές εξισώσεις, ώστε να είναι ορθές.",
    "a": "<span class='text-emerald-400 font-bold'>Τέλεια καύση αιθανίου: 2C2H6 + 7O2 -> 4CO2 + 6H2O<br>Ατελής καύση αιθανίου προς CO: 2C2H6 + 5O2 -> 4CO + 6H2O<br>Ατελής καύση αιθανίου προς C: 2C2H6 + 3O2 -> 4C + 6H2O<br>Τέλεια καύση προπανίου: C3H8 + 5O2 -> 3CO2 + 4H2O<br>Ατελής καύση προπανίου προς CO: 2C3H8 + 7O2 -> 6CO + 8H2O<br>Τέλεια καύση βουτανίου: 2C4H10 + 13O2 -> 8CO2 + 10H2O<br>Ατελής καύση βουτανίου προς CO: 2C4H10 + 9O2 -> 8CO + 10H2O</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "13. Να συμπληρώσετε το διάγραμμα",
    "a": "<span class='text-emerald-400 font-bold'>Το γκαζάκι του εμπορίου περιέχει βουτάνιο. Για την τέλεια καύση του απαιτείται επαρκής ποσότητα οξυγόνου, το οποίο προέρχεται από τον ατμοσφαιρικό αέρα.<br>Κατά την τέλεια καύση παράγονται:<br>- H2O: Ανιχνεύεται με διαβίβαση σε άνυδρο θειικό χαλκό, ο οποίος από λευκός γίνεται γαλάζιος.<br>- CO2: Το οποίο θολώνει το διαυγές ασβεστόνερο.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "14. Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:",
    "a": "<span class='text-emerald-400 font-bold'>«Το πετρέλαιο είναι πολύ πολύτιμο για να καίγεται», γιατί αποτελεί την πρώτη ύλη για την παραγωγή πολλών χρήσιμων προϊόντων, όπως τα απορρυπαντικά, τα φάρμακα, τα πλαστικά κ.ά., στην Πετροχημική Βιομηχανία.<br>Πολλά από αυτά τα προϊόντα παράγονται με πολυμερισμό, δηλαδή την χημική αντίδραση κατά την οποία πολλά μόρια ίδιων ή διαφορετικών οργανικών ενώσεων, που ονομάζονται μονομερή, ενώνονται και σχηματίζουν μακρομόρια, τα πολυμερή.<br>Υπάρχουν χημικά και φυσικά πολυμερή. Ένα είδος φυσικών πολυμερών είναι οι πρωτεΐνες, όπως η καζεΐνη που υπάρχει στο γάλα και η γλουτένη που υπάρχει στο αλεύρι.<br>Μια μεγάλη ομάδα συνθετικών πολυμερών είναι τα πλαστικά, τα οποία εξαιτίας της μεγάλης αντοχής στη διάβρωση επιβαρύνουν το περιβάλλον.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "15. Να αντιστοιχίσετε καθένα από τα υλικά της στήλης Α στον χαρακτηρισμό στην ομάδα Β.",
    "a": "<span class='text-emerald-400 font-bold'>Απαντήσεις:<br>1. Πολυαιθυλένιο -> Προϊόν της πετροχημικής βιομηχανίας (Α1 -> Β2)<br>2. Μετάξι -> Φυσικό πολυμερές (Α2 -> Β1)<br>3. Πρωτεΐνες -> Φυσικό πολυμερές (Α3 -> Β1)<br>4. Πολυβινυλοχλωρίδιο -> Προϊόν της πετροχημικής βιομηχανίας (Α4 -> Β2)<br>5. Απορρυπαντικά -> Προϊόν της πετροχημικής βιομηχανίας (Α5 -> Β2)<br>6. Ελαστικά αυτοκινήτων -> Προϊόν της πετροχημικής βιομηχανίας (Α6 -> Β2)</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "17. Να χαρακτηρίσετε καθεμία από τις ακόλουθες προτάσεις ως σωστή ή λανθασμένη και να αιτιολογήσετε την απάντησή σας. (Α έως Ζ)",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι λανθασμένη. Πολλά πολυμερή παρασκευάζονται στη φύση όπως το φυσικό μετάξι, το άμυλο, το καουτσούκ και οι πρωτεΐνες.<br>Β. Η πρόταση είναι λανθασμένη. Το πετρέλαιο αποτελεί την πρώτη ύλη για την παραγωγή πολλών προϊόντων, όπως τα απορρυπαντικά, τα φάρμακα, τα πλαστικά και πολλά άλλα.<br>Γ. Η πρόταση είναι λανθασμένη. Τα μακρομόρια σχηματίζονται από την συνένωση μεγάλου αριθμού όμοιων ή διαφορετικών μορίων.<br>Δ. Η πρόταση είναι λανθασμένη. Μία μόνο κατηγορία συνθετικών ή τεχνητών πολυμερών είναι τα πλαστικά.<br>Ε. Η πρόταση είναι λανθασμένη. Η εξαιρετική τους αντοχή, αποτελεί και το μεγαλύτερο περιβαλλοντικό πρόβλημα, γιατί δεν αποικοδομούνται εύκολα στη φύση με αποτέλεσμα να συσσωρεύονται και να ρυπαίνουν το έδαφος, τα ποτάμια, τις λίμνες και τη θάλασσα.<br>Ζ. Η πρόταση είναι λανθασμένη. Τα πλαστικά επειδή έχουν εξαιρετική αντοχή αποτελούν μεγάλο περιβαλλοντικό πρόβλημα, επομένως θα πρέπει να περιορίσουμε τη χρήση τους.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "18. Να σημειώσετε στην 2η στήλη σε όσα προϊόντα της πρώτης στήλης μπορούν να παραχθούν από πρώτη ύλη το πετρέλαιο με πρωτογενή επεξεργασία (κλασματική απόσταξη) και στη 3η στήλη σε όσα μπορούν να παραχθούν με δευτερογενή επεξεργασία.",
    "a": "<span class='text-emerald-400 font-bold'>Πρωτογενής επεξεργασία: κηροζίνη, βενζίνη, άσφαλτος.<br>Δευτερογενής επεξεργασία: απορρυπαντικά, φάρμακα, χρώματα, πλαστικά.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "19. Να συμπληρώσετε τα κενά με την κατάλληλη λέξη, σύμβολο ή αριθμό.",
    "a": "<span class='text-emerald-400 font-bold'>Το οινόπνευμα ονομάζεται και αιθανόλη ή αιθυλική αλκοόλη και ο μοριακός του τύπος είναι C2H5OH. Η αιθανόλη σε συνθήκες περιβάλλοντος είναι υγρή, και αναμειγνύεται με το νερό σε οποιαδήποτε αναλογία, ενώ και η ίδια είναι πολύ καλός διαλύτης. Η αιθανόλη παρασκευάζεται κατά την αλκοολική ζύμωση, από τη γλυκόζη που περιέχεται στο χυμό των γλυκών καρπών, με τη βοήθεια ενζύμων που ονομάζονται ζυμομύκητες. Είναι συστατικό των οινοπνευματωδών ποτών των οποίων η περιεκτικότητα σε αιθανόλη μετράται σε αλκοολικούς βαθμούς. Ένα ποτό 40%vol, όπως το ουίσκι περιέχει 40 mL αιθανόλης σε 100 mL ποτού. Μπορεί να χρησιμοποιηθεί και ως καύσιμο για αυτοκίνητα είτε μόνη της, είτε σε ανάμειξη με βενζίνη.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "20. Να συμπληρώσετε τις χημικές εξισώσεις: α. C6H12O6 ... β. C2H5OH + ...O2 ... (τέλεια καύση)",
    "a": "<span class='text-emerald-400 font-bold'>α. C6H12O6 (aq) --(ζυμάση)--> 2CH3CH2OH (aq) + 2CO2 (g)<br>β. C2H5OH (l) + 3O2 (g) -> 2CO2 (g) + 3H2O (g)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "21. α. Με ποια φυσική διαδικασία παρασκευάζεται η αιθανόλη; Να γράψετε τη χημική εξίσωση... β. Λίγο χρόνο μετά την τοποθέτηση του μούστου... παρατηρείται βρασμός. Που οφείλεται... γ. Τι σημαίνει η ένδειξη 12% vol... δ. Να γράψετε τη χημική εξίσωση της καύσης της. ε. Πως μπορούμε να εξακριβώσουμε πειραματικά τα προϊόντα... στ. Είναι σωστό ή λάθος ότι μπορούμε να καθαρίσουμε ένα λεκέ από μαρκαδόρο με αιθανόλη;",
    "a": "<span class='text-emerald-400 font-bold'>α. Η αιθανόλη παρασκευάζεται με την αλκοολική ζύμωση από την γλυκόζη. C6H12O6 (aq) --(ζυμάση)--> 2CH3CH2OH (aq) + 2CO2 (g)<br>β. Ο «βρασμός» οφείλεται στην παραγωγή φυσαλίδων αερίου CO2. Όταν τελειώνει ο βρασμός τα βαρέλια σφραγίζονται ώστε να μην έρχεται σε άμεση επαφή με τον ατμοσφαιρικό αέρα και συνεχιστεί η ζύμωση της αλκοόλης με αποτέλεσμα το κρασί να μετατραπεί σε ξίδι.<br>γ. Η ένδειξη 12% vol στο μπουκάλι σημαίνει ότι σε 100 mL του αλκοολούχου αυτού ποτού περιέχονται 12 mL οινόπνευμα.<br>δ. C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(g)<br>ε. Τα προϊόντα της τέλειας καύσης της αιθανόλης είναι το διοξείδιο του άνθρακα και το νερό. Το CO2 διοχετεύεται σε διαυγές ασβεστόνερο το οποίο θολώνει ή σβήνει ένα αναμμένο κερί. Οι υδρατμοί (H2O) διοχετεύονται σε άνυδρο θειικό χαλκό που από λευκός γίνεται μπλε.<br>στ. Η πρόταση είναι σωστή. Το μελάνι από μαρκαδόρο διαλύεται στην αιθανόλη.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "22. Είναι συνηθισμένο στις χαρές και τις λύπες οι ενήλικες να καταναλώνουν οινοπνευματώδη ποτά. α. Μπορείτε να εξηγήσετε τους λόγους...; β. Ποια σοβαρά προβλήματα υγείας δημιουργεί η υπερκατανάλωση; γ. Να εξηγήσετε γιατί τιμόνι και κατανάλωση αλκοόλ δεν μπορούν να συνυπάρξουν.",
    "a": "<span class='text-emerald-400 font-bold'>α. Οι άνθρωποι καταναλώνουν ποτά καθώς σε μικρή ποσότητα προκαλούν ευφορία.<br>β. Η κατανάλωση μεγάλων ποσοτήτων αιθανόλης προκαλεί αστάθεια στην ομιλία και στο βάδισμα και επιβράδυνση αντιδράσεων. Όταν η ποσότητα ξεπεράσει τα 0,35g/100mL μπορεί να προκαλέσει κώμα ή θάνατο. Η συχνή κατανάλωση προκαλεί εξάρτηση και ευθύνεται για σοβαρές ηπατικές βλάβες, όπως η κίρρωση του ήπατος.<br>γ. Προκαλεί επιβράδυνση αντιδράσεων σε ερεθίσματα (μείωση των αντανακλαστικών), επομένως αυξάνεται ο κίνδυνος για πρόκληση αυτοκινητιστικών ατυχημάτων.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "23. Πότε ένα άνθρωπος καταναλώνει περισσότερη ποσότητα οινοπνεύματος: α. όταν καταναλώνει 2 ή 5 ποτηράκια κρασί 11% vol; β. όταν καταναλώνει 1 ποτήρι βότκα 40% vol ή 3 ποτήρια κρασί 11% vol; (Όλα τα ποτήρια ίσα).",
    "a": "<span class='text-emerald-400 font-bold'>α. Η ποσότητα του οινοπνεύματος είναι ανάλογη της ποσότητας του κρασιού. Επομένως με 5 ποτήρια προσλαμβάνει περισσότερη ποσότητα σε σχέση με τα 2 ποτήρια.<br>β. Έστω V mL η χωρητικότητα του ποτηριού. Σε 1 ποτήρι βότκας 40% vol περιέχονται 0,40 * V mL οινόπνευμα. Σε 3 ποτήρια κρασιού 11% vol περιέχονται 3 * 0,11 * V = 0,33 * V mL οινόπνευμα. Παρατηρούμε ότι σε ένα ποτήρι βότκας περιέχεται μεγαλύτερη ποσότητα οινοπνεύματος (0,40V > 0,33V).</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "24. Να σημειώσετε δίπλα σε κάθε μία από τις ακόλουθες προτάσεις Σ, αν είναι σωστή και Λ, αν είναι λανθασμένη.",
    "a": "<span class='text-emerald-400 font-bold'>1. Σ (Όταν καίγεται 1 μόριο C2H6O παράγονται 2 μόρια CO2 και 3 μόρια H2O)<br>2. Λ (Τα ένζυμα αυξάνουν ή ελαττώνουν την ταχύτητα των βιοχημικών αντιδράσεων)<br>3. Σ (Η κατανάλωση 12% vol επιβαρύνει περισσότερο από 5% vol)<br>4. Λ (Η αιθανόλη μπορεί να χρησιμοποιηθεί ως καύσιμο, γιατί η καύση της είναι ενδόθερμη αντίδραση - Λάθος, είναι εξώθερμη)<br>5. Λ (Είναι προτιμότερο να κινούμαστε με ιδιωτικά αυτοκίνητα...)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "25. Να συμπληρώσετε τα ακόλουθα κείμενα, ώστε να είναι σωστά (Α, Β, Γ).",
    "a": "<span class='text-emerald-400 font-bold'>Α. Οι πρωτεΐνες είναι μεγαλομοριακές ενώσεις, που περιέχουν απαραίτητα τα στοιχεία άνθρακα (C), οξυγόνο (Ο), υδρογόνο (Η), άζωτο (Ν) και προκύπτουν από τη συνένωση, δηλαδή τον πολυμερισμό, πολλών μορίων αμινοξέων με απόλυτα καθορισμένη και μοναδική αλληλουχία. Οι πρωτεΐνες είναι απαραίτητες... Η σύνδεση των αμινοξέων γίνεται με έναν ειδικό δεσμό, ο οποίος ονομάζεται πεπτιδικός δεσμός.<br>Β. Οι υδατάνθρακες, στους οποίους ανήκουν η κυτταρίνη, η φρουκτόζη, η μαλτόζη, το άμυλο και το γλυκογόνο, αποτελούνται από άνθρακα, υδρογόνο και οξυγόνο. Στο ανθρώπινο σώμα, οι υδατάνθρακες διασπώνται σε γλυκόζη... όπου «καίγεται» προς CO2 και H2O, ελευθερώνοντας ενέργεια. Η γλυκόζη είναι η κύρια πηγή ενέργειας... είναι δομικά συστατικά του RNA και του DNA.<br>Γ. Από χημική άποψη, τα λιπίδια είναι μείγματα ενώσεων, οι οποίες ονομάζονται εστέρες, που προκύπτουν από την αντίδραση των λιπαρών οργανικών οξέων με γλυκερίνη, που ονομάζονται γλυκερίδια. Ο βιολογικός ρόλος των λιπιδίων είναι σημαντικός γιατί είναι πηγή ενέργειας...</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "26. Α. Να υπολογίσετε το ποσό θερμίδων ενός ποτηριού (250g) πλήρους νωπού γάλακτος (πρωτεΐνες 3,2%, υδατάνθρακες 4,7%, λιπαρά 3,5%) και ενός ελαφριού (λιπαρά 1,5%). Β. Ποιο ποσοστό των αναγκών σε μικροθρεπτικά συστατικά καλύπτει ένα ποτήρι γάλα; Γ. Να συγκρίνετε το γάλα αμυγδάλου και βρώμης...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Πλήρες γάλα (250g): 8g πρωτεΐνες, 11,75g υδατάνθρακες, 8,75g λιπαρά. Θερμίδες: (8*4,0 + 11,75*4,0 + 8,75*9,3) = 160,375 kcal. Ελαφρύ γάλα (250g): 8g πρωτεΐνες, 11,75g υδατάνθρακες, 3,75g λιπαρά. Θερμίδες: (8*4,0 + 11,75*4,0 + 3,75*9,3) = 113,875 kcal.<br>Β. Σε 250g περιέχονται 295 mg Ca, 247,5 mg P, 1 mg Β12. Ποσοστά κάλυψης: Ca: (0,295/0,80)*100 = 36,875%. P: (0,2475/0,72)*100 = 34,375%. B12: (1/2,5)*100 = 40%.<br>Γ. Αμυγδάλου (250g): 3g υδατάνθρακες, 1,25g πρωτεΐνες, 3g λιπαρά -> 86,75 kcal. Βρώμης (250g): 18,25g υδατάνθρακες, 3,25g πρωτεΐνες, 5,75g λιπαρά -> 139,475 kcal.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "27. Το ελαιόλαδο παρέχει ενέργεια ίση με 9,3 kcal/g. Ένας ενήλικας πρέπει να καταναλώνει 2500 kcal την ημέρα. Με δεδομένα ότι τα λιπαρά πρέπει να καλύπτουν το πολύ το 35% των ενεργειακών αναγκών, ποια είναι η μέγιστη επιτρεπόμενη ημερήσια κατανάλωση ελαιόλαδου;",
    "a": "<span class='text-emerald-400 font-bold'>Πρέπει να λάβει ενέργεια από το ελαιόλαδο ίση με (35/100)*2500 = 875 kcal. Εφόσον 1g παρέχει 9,3 kcal, η μέγιστη ποσότητα είναι: x = 875 / 9,3 = 94,1 g.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "28. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε την επιλογή σας. (Α έως Θ)",
    "a": "<span class='text-emerald-400 font-bold'>Α. Σωστή. Η πρόσληψη επαρκούς ποσότητας πρωτεϊνών είναι αναγκαία για την παραγωγή αντισωμάτων.<br>Β. Λανθασμένη. Τα αμινοξέα είναι τα μονομερή των πρωτεϊνών.<br>Γ. Λανθασμένη. Υπάρχουν αζωτούχες οργανικές ενώσεις, όπως π.χ. οι πρωτεΐνες.<br>Δ. Λανθασμένη. Η γλυκόζη είναι η κύρια πηγή ενέργειας.<br>Ε. Σωστή. Στους υδατάνθρακες τα άτομα Η και Ο βρίσκονται σε αναλογία 2/1 αντίστοιχα.<br>Στ. Λανθασμένη. Η διατροφή πρέπει να είναι ισορροπημένη και ποικίλη (αν και οι υδατάνθρακες αποτελούν σημαντικό μέρος).<br>Ζ. Λανθασμένη. Η κατανάλωση λιπιδίων είναι απαραίτητη καθώς είναι πηγή ενέργειας, δομικά συστατικά και μεταφέρουν λιποδιαλυτές βιταμίνες.<br>Η. Σωστή. Τα λίπη είναι στερεά σε συνήθεις θερμοκρασίες και έλαια αυτά που είναι υγρά.<br>Θ. Σωστή. Μια κατηγορία λιπιδίων (τα φωσφολιπίδια), συνθέτουν τις κυτταρικές μεμβράνες με αποτέλεσμα να τις προστατεύουν και να τις σταθεροποιούν.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "29. Διαβάστε με προσοχή την συσκευασία από το πακέτο πατατάκια (150g). Α. Πόσες θερμίδες θα καταναλώσετε αν φάτε όλο το πακέτο;",
    "a": "<span class='text-emerald-400 font-bold'>Α. Σε 100g προϊόντος περιέχονται 58g υδατανθράκων, 11g πρωτεϊνών και 31g λιπαρών. Επομένως στα 150g περιέχονται 87g υδατανθράκων, 16,5g πρωτεϊνών και 46,5g λιπαρών. Η ενεργειακή απόδοση των 150g του προϊόντος είναι: (87*4,0 + 16,5*4,0 + 46,5*9,3) kcal = (348 + 66 + 432,45) kcal = 846,45 kcal.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "29. Β. Με δεδομένο ότι ένα μέσο παιδί της ηλικίας σας πρέπει να καταναλώνει καθημερινά κατά μέσο όρο 2800 kcal (θερμίδες), ποιο ποσοστό της ημερήσιας πρόσληψης θερμίδων έχετε καλύψει με τα πατατάκια; Γ. Για να είναι υγιεινή η διατροφή σας συνιστάται οι υδατάνθρακες να μην ξεπερνούν τα 350 g την ημέρα, τα λίπη τα 97 g την ημέρα και οι πρωτεΐνες να είναι τουλάχιστον 56 g την ημέρα. Να βρείτε ποια έπρεπε να είναι η % μάζα προς μάζα σύσταση ενός τρόφιμου για να είναι υγιεινό. Δ. Να συγκρίνετε τη σύσταση ενός υγιεινού τρόφιμου με τα πατατάκια της φωτογραφίας και να βγάλετε τα δικά σας συμπεράσματα...",
    "a": "<span class='text-emerald-400 font-bold'>Β. Το ποσοστό της ημερήσιας πρόσληψης θερμίδων που καλύπτει ένα παιδί με τη συγκεκριμένη ποσότητα του προϊόντος αυτού είναι: (846,45 / 2800) * 100 = 30,2%.<br>Γ. Η συνολική μάζα υδατανθράκων, πρωτεϊνών και λιπαρών είναι: 350g + 97g + 56g = 503 g. Στα 503 g προϊόντος περιέχονται 350g υδατανθράκων, 97g λιπαρών και 56g πρωτεϊνών. Κάνοντας την αναγωγή στα 100g: Επομένως για να είναι το τρόφιμο αυτό υγιεινό θα πρέπει να περιέχει 69,58 % μάζα προς μάζα υδατάνθρακες, 19,28 % μάζα προς μάζα λιπαρά και 11,13 % μάζα προς μάζα πρωτεΐνες.<br>Δ. Συγκρίνοντας τη σύσταση του υγιεινού τρόφιμου με τα πατατάκια της φωτογραφίας παρατηρούμε ότι τα πατατάκια έχουν μεγαλύτερη περιεκτικότητα σε λιπαρά και μικρότερη σε υδατάνθρακες σε σχέση με το υγιεινό τρόφιμο, επομένως πρέπει να καταναλώνονται σε πολύ μικρές ποσότητες.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "1. Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις (σε κάθε κενό αντιστοιχεί μία λέξη ή ένα σύμβολο). Α. Το σύνολο των κοινών ιδιοτήτων των οξέων... Β. Όταν ένα αραιό διάλυμα θειικού οξέος αντιδρά με ψευδάργυρο... Γ. Όταν ένα διάλυμα υδροχλωρίου αντιδρά με μαγειρική σόδα... Δ. Όταν σε ένα διάλυμα υδροχλωρίου προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Το σύνολο των κοινών ιδιοτήτων των οξέων ονομάζεται όξινος χαρακτήρας και οφείλεται στην παρουσία κατιόντων υδρογόνου (Η+). Τα διαλύματα των οξέων έχουν όξινη γεύση, αλλάζουν το χρώμα των δεικτών, αντιδρούν με δραστικά μέταλλα και ελευθερώνουν αέριο υδρογόνο, και με ανθρακικά άλατα, όπως η κιμωλία και ελευθερώνουν αέριο διοξείδιο του άνθρακα (CO2). Η χρήση των οξέων απαιτεί προσοχή, γιατί πολλά οξέα είναι επικίνδυνα.<br>Β. Όταν ένα αραιό διάλυμα θειικού οξέος αντιδρά με ψευδάργυρο παράγεται αέριο υδρογόνο, το οποίο μπορούμε να ταυτοποιήσουμε αν πλησιάσουμε μια φλόγα, γιατί αναφλέγεται με κρότο.<br>Γ. Όταν ένα διάλυμα υδροχλωρίου αντιδρά με μαγειρική σόδα παράγεται αέριο CO2, το οποίο μπορούμε να ταυτοποιήσουμε αν πλησιάσουμε μια φλόγα, γιατί σβήνει.<br>Δ. Όταν σε ένα διάλυμα υδροχλωρίου προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης, το χρώμα του διαλύματος γίνεται κίτρινο.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "2. Η Αφροδίτη της Μήλου είναι ένα μαρμάρινο άγαλμα σπάνιας ομορφιάς του 5ου π.Χ. αιώνα... Να περιγράψετε τι θα συμβεί αν πάνω στο άγαλμα πέσει υδροχλωρικό οξύ και πως μπορεί να ταυτοποιηθεί το αέριο που θα παραχθεί.",
    "a": "<span class='text-emerald-400 font-bold'>Το διάλυμα υδροχλωρίου θα αντιδράσει με το μάρμαρο το οποίο είναι ένα ανθρακικό άλας και θα παραχθεί αέριο διοξείδιο του άνθρακα, το οποίο μπορούμε να το ταυτοποιήσουμε αν το διοχετεύουμε είτε στη φλόγα ενός κεριού όπου θα σβήσει, είτε σε κορεσμένο διάλυμα ασβεστόνερου όπου θα θολώσει.</span>",
    "chapterId": "chapter-2"
  },
  {
    "q": "3. Να χαρακτηρίσετε καθεμία από τις ακόλουθες προτάσεις ως σωστή ή λανθασμένη και να αιτιολογήσετε την απάντηση σας. (Α. Οι μπαταρίες... Β. Τα περισσότερα οξέα... Γ. Τα οξέα όταν διαλύονται... Δ. Ο όξινος χαρακτήρας... Ε. Δεν μπορεί να αποθηκευτεί...)",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Χρειάζεται προσοχή να μην ξεχειλίσει καθώς κινδυνεύουμε να πάθουμε σοβαρά εγκαύματα από το θειικό οξύ.<br>Β. Η πρόταση είναι λανθασμένη. Πολλά οξέα, όπως το οξικό, το κιτρικό και το ασκορβικό τα συναντούμε σε τρόφιμα και ποτά.<br>Γ. Η πρόταση είναι σωστή. Τα οξέα όταν διαλύονται στο νερό, δίνουν κατιόντα υδρογόνου (Η+).<br>Δ. Η πρόταση είναι λανθασμένη. Τα διαλύματα όλων των οξέων περιέχουν κατιόντα υδρογόνου (Η+). Σ' αυτά ακριβώς τα ιόντα οφείλονται οι κοινές ιδιότητες των οξέων.<br>Ε. Η πρόταση είναι σωστή. Δεν μπορεί να αποθηκευτεί διάλυμα HCI σε δοχείο από ψευδάργυρο ή σίδηρο καθώς θα αντιδράσει με αυτά τα μέταλλα από τα οποία είναι κατασκευασμένα τα δοχεία.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "4. Α. Να συμπληρώσετε τις ακόλουθες προτάσεις και χημικές εξισώσεις με μία λέξη, τύπο ή σύμβολο... Β. Το κοινό προϊόν της διάλυσης... Γ. Η παραγωγή αυτού του κοινού προϊόντος...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Το αέριο υδροχλώριο (HCI) όταν διαλύεται στο νερό ελευθερώνει κατιόντα υδρογόνου (Η+) σύμφωνα με τη χημική εξίσωση: HCl(aq) -> H+(aq) + Cl-(aq). Το θειικό οξύ (H2SO4) περιέχεται στις μπαταρίες των αυτοκινήτων και στο νερό ελευθερώνει κατιόντα υδρογόνου (Η+) σύμφωνα με τη χημική εξίσωση: H2SO4(aq) -> 2H+(aq) + SO4 2-(aq). Το οξικό οξύ (CH3COOH) περιέχεται στο ξίδι και στο νερό ελευθερώνει κατιόντα υδρογόνου (Η+) σύμφωνα με τη χημική εξίσωση: CH3COOH(aq) -> H+(aq) + CH3COO-(aq).<br>Β. Το κοινό προϊόν της διάλυσης όλων αυτών των ουσιών είναι το κατιόν υδρογόνου (Η+).<br>Γ. Η παραγωγή αυτού του κοινού προϊόντος έχει ως αποτέλεσμα την ομαδοποίησή τους, με το κοινό όνομα οξέα.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "5. Α. Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις (σε κάθε κενό αντιστοιχεί μία λέξη ή ένα σύμβολο). Το σύνολο των κοινών ιδιοτήτων των βάσεων... Β. Όταν σε ένα διάλυμα NaOH...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Το σύνολο των κοινών ιδιοτήτων των βάσεων ονομάζεται βασικός χαρακτήρας και οφείλεται στην παρουσία ανιόντων υδροξειδίου (ΟΗ-). Τα διαλύματα των βάσεων έχουν γεύση καυστική, αφή σαπωνοειδή, αλλάζουν το χρώμα των δεικτών, και διαλύουν τα λίπη. Η χρήση των βάσεων απαιτεί προσοχή, γιατί πολλές είναι καυστικές.<br>Β. Όταν σε ένα διάλυμα NaOH προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης, το χρώμα του διαλύματος γίνεται μπλε.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "6. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε την απάντηση σας. (Α. Τα καθαριστικά των αποχετεύσεων... Β. Πολλές βάσεις είναι διαβρωτικές... Γ. Οι βάσεις όταν διαλύονται... Δ. Ο αλκαλικός χαρακτήρας...)",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Τα αποφρακτικά των σωληνώσεων περιέχουν την καυστική βάση υδροξείδιο του νατρίου (NaOH).<br>Β. Η πρόταση είναι λανθασμένη. Πολλές βάσεις συναντούμε σε είδη καθημερινής ζωής όπως τα αποφρακτικά των σωληνώσεων που περιέχουν το καυστικό υδροξείδιο του νατρίου (NaOH), οι βαφές των μαλλιών, όπως και τα διαλύματα για τα τσιμπήματα από τις μέδουσες και τις μέλισσες περιέχουν αμμωνία (ΝΗ3). Επειδή κάποιες από αυτές είναι διαβρωτικές απαιτείται προσοχή κατά τη χρήση τους.<br>Γ. Η πρόταση είναι λανθασμένη. Οι βάσεις όταν διαλύονται στο νερό, δίνουν ανιόντα υδροξειδίου (ΟΗ-).<br>Δ. Η πρόταση είναι σωστή. Το σύνολο των κοινών ιδιοτήτων των διαλυμάτων των βάσεων ονομάζεται βασικός ή αλκαλικός χαρακτήρας και οφείλεται στο ότι ελευθερώνουν ανιόντα υδροξειδίου.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "7. Α. Να συμπληρώσετε τις ακόλουθες προτάσεις και χημικές εξισώσεις με την κατάλληλη λέξη, τύπο ή σύμβολο. Το στερεό NaOH... Το Ca(OH)2... Το ΚΟΗ... Β. Το κοινό προϊόν... Γ. Η παραγωγή...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Το στερεό NaOH όταν διαλύεται στο νερό ελευθερώνει ανιόντα υδροξειδίου σύμφωνα με τη χημική εξίσωση: NaOH(s) -> Na+(aq) + OH-(aq). Το Ca(OH)2 περιέχεται στο ασβεστόνερο και ελευθερώνει ανιόντα υδροξειδίου σύμφωνα με τη χημική εξίσωση: Ca(OH)2(aq) -> Ca2+(aq) + 2OH-(aq). Το ΚΟΗ είναι βάση, γιατί όταν διαλύεται στο νερό δίνει ανιόντα υδροξειδίου σύμφωνα με τη χημική εξίσωση: KOH(s) -> K+(aq) + OH-(aq).<br>Β. Το κοινό προϊόν της διάλυσης όλων αυτών των ουσιών είναι το ανιόν υδροξειδίου.<br>Γ. Η παραγωγή αυτού του κοινού προϊόντος έχει ως αποτέλεσμα την ομαδοποίησή τους, με το κοινό όνομα βάσεις.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "8. Α. Να χαρακτηρίσετε τις ακόλουθες ενώσεις ως βάσεις ή οξέα... (KOH, HCI, NH3, H2SO4, Ca(OH)2). Β. Από τις προηγούμενες ενώσεις διαλύουν τα λίπη... Γ. Από τις προηγούμενες ενώσεις αντιδρούν με δραστικά μέταλλα... Δ. Από τις προηγούμενες ενώσεις διαλύουν το μάρμαρο...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Βάσεις (Β): KOH, NH3, Ca(OH)2. Οξέα (Ο): HCI, H2SO4.<br>Β. Από τις προηγούμενες ενώσεις διαλύουν τα λίπη οι ΚΟΗ, ΝΗ3 και Ca(OH)2.<br>Γ. Από τις προηγούμενες ενώσεις αντιδρούν με δραστικά μέταλλα οι HCI, H2SO4 και εκλύουν αέριο υδρογόνο που καίγεται με κρότο.<br>Δ. Από τις προηγούμενες ενώσεις διαλύουν το μάρμαρο οι HCI, H2SO4 και εκλύουν αέριο CO2 που σβήνει τη φλόγα του κεριού.</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "9. Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις (σε κάθε κενό αντιστοιχεί μία λέξη ή ένα σύμβολο). Α. Το μέτρο της οξύτητας... Β. Όταν σε ένα διάλυμα ΗCΙ... Γ. Όταν σε ένα διάλυμα ΝΗ3...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Το μέτρο της οξύτητας των διαλυμάτων είναι το pH του διαλύματος, το οποίο εξαρτάται από το πλήθος των Η+ του διαλύματος. Στο απιονισμένο νερό το πλήθος των κατιόντων υδρογόνου είναι ίσο με το πλήθος των ανιόντων υδροξειδίου και το pH του διαλύματος είναι 7, στους 25°C. Σε ένα διάλυμα που περιέχει ΚΟΗ το pH του διαλύματος είναι μεγαλύτερο από 7. Σε ένα διάλυμα που περιέχει ΗΙ το pH του διαλύματος είναι μικρότερο από 7. Όσο μικρότερο είναι το pH ενός διαλύματος, τόσο πιο όξινο είναι. Όσο μεγαλύτερο είναι το pH ενός διαλύματος, τόσο πιο αλκαλικό είναι.<br>Β. Όταν σε ένα διάλυμα ΗCΙ προστεθεί νερό, δηλαδή αραιωθεί, το pH του διαλύματος αυξάνεται, ενώ αν προστεθεί μικρή ποσότητα HCI, το pH του διαλύματος ελαττώνεται.<br>Γ. Όταν σε ένα διάλυμα ΝΗ3 προστεθεί νερό, δηλαδή αραιωθεί, το pH του διαλύματος ελαττώνεται, ενώ αν προστεθεί μικρή ποσότητα ΝΗ3, το pH του διαλύματος αυξάνεται.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "10. Στον διπλανό πίνακα δίνονται διάφορα διαλύματα ή γαλακτώματα και οι αντίστοιχες τιμές ΡΗ τους... Να διατάξετε τα υγρά από το πιο όξινο προς το πιο βασικό.",
    "a": "<span class='text-emerald-400 font-bold'>Η διάταξη των διαλυμάτων από το πιο όξινο προς το πιο βασικό είναι η εξής:<br>1. HCI 36,5 g/L (0,0)<br>3. γαστρικό υγρό (1,0-2,0)<br>5. καφές (5,0)<br>7. νερό βροχής (6,5)<br>8. γάλα (6,6)<br>9. αίμα (7,4)<br>6. σόδα φαγητού (8,4)<br>2. οδοντόκρεμα (9,9)<br>10. γάλα μαγνησίας (10,5)<br>4. NaOH 40 g/L (14,0)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "12. Τι μεταβολή υφίσταται το pΗ του νερού της βρύσης, αν του προστεθεί μικρή ποσότητα χυμού λεμονιού; Να αιτιολογήσετε την απάντησή σας.",
    "a": "<span class='text-emerald-400 font-bold'>Το νερό της βρύσης έχει ελαφρά αλκαλικό pH ενώ ο χυμός λεμονιού έχει όξινο pH. Επομένως το pΗ του νερού της βρύσης θα ελαττωθεί.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "16. Να μετρήσετε χρησιμοποιώντας πεχαμετρικό χαρτί τις τιμές ΡΗ των παρακάτω διαλυμάτων: α. πορτοκαλάδα, β. μπίρα, γ. ξίδι, δ. σιρόπι κομπόστας. Στη συνέχεια να τα διατάξετε ξεκινώντας από το πιο όξινο.",
    "a": "<span class='text-emerald-400 font-bold'>Ξίδι, πορτοκαλάδα, σιρόπι κομπόστας, μπίρα.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "21. Ο Ίον και η Όλη μέτρησαν το ΡΗ τριών διαλυμάτων στο σχολικό εργαστήριο και βρήκαν τα εξής αποτελέσματα (Α: 2,50, Β: 3,50, Γ: 7,00, Δ: 11,20)... Α. Τι χρησιμοποίησαν... Β. Ποιο είναι το πιο όξινο και ποιο το πιο βασικό; Γ. Αν γνωρίζουμε ότι... να αντιστοιχίσετε... Δ. Θα υποστεί μεταβολή το pΗ... Ε. Μπορείτε να προβλέψετε το pH του τελικού διαλύματος;",
    "a": "<span class='text-emerald-400 font-bold'>Α. Έχουν χρησιμοποιήσει πεχάμετρο καθώς παρατηρούμε ότι έχουν μεγάλη ακρίβεια οι τιμές pH που έχουν καταγράψει.<br>Β. Από τα διαλύματα το πιο όξινο είναι το Α (έχει τη μικρότερη τιμή pH) ενώ το πιο βασικό είναι το Δ καθώς έχει την μεγαλύτερη τιμή pH.<br>Γ. Το απιονισμένο νερό είναι το Γ. Το μοναδικό διάλυμα με βασικό pH είναι το Δ, οπότε αυτό είναι το διάλυμα ΝΗ3 1,7% m/v. Ανάμεσα στα δύο διαλύματα με όξινο pH, το διάλυμα CH3COOH 6,0% θα έχει μικρότερο pH σε σχέση με το διάλυμα CH3COOH 0,06% καθώς περιέχονται περισσότερα Η+. Επομένως το διάλυμα Α είναι το CH3COOH 6,0% ενώ το διάλυμα Β είναι το CH3COOH 0,06%.<br>Δ. Το διάλυμα που θα προκύψει θα έχει διαφορετικό pH καθώς αναμειγνύονται διαλύματα στα οποία διαφέρει το πλήθος των κατιόντων υδρογόνου σε ορισμένο όγκο.<br>Ε. Το pH του τελικού διαλύματος που θα προκύψει θα έχει τιμή ανάμεσα στις τιμές pH των δύο αρχικών διαλυμάτων. Δηλαδή θα έχει 2,5 < pH < 3,5.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "18. Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις... Α. Σε ένα διάλυμα Δ1, ΚΟΗ... Β. Στο διάλυμα Δ2 υπάρχουν ακόμη... Γ. Το μαγειρικό αλάτι...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Σε ένα διάλυμα Δ1, ΚΟΗ, προσθέτουμε σταγόνες του δείκτη μπλε της βρωμοθυμόλης και το διάλυμα αποκτά μπλε χρώμα. Στο διάλυμα προσθέτουμε σταγόνα – σταγόνα διάλυμα HCI, οπότε κάποια στιγμή αποκτά πράσινο χρώμα, γιατί τα ΟΗ- του αρχικού διαλύματος εξουδετερώνονται από τα Η+ του διαλύματος HCI σύμφωνα με τη χημική εξίσωση: H+(aq) + OH-(aq) -> H2O(l) και το διάλυμα Δ2 που σχηματίζεται έχει pH=7 στους 25°C. Η αντίδραση αυτή ονομάζεται εξουδετέρωση. Αν συνεχίσουμε να προσθέτουμε διάλυμα HCI, το χρώμα θα γίνει κίτρινο, γιατί στο διάλυμα Δ3 θα περισσεύουν H+ και το pH θα είναι μικρότερο από 7.<br>Β. Στο διάλυμα Δ2 υπάρχουν ακόμη κατιόντα K+ και ανιόντα CΙ-. Αν το διάλυμα θερμανθεί... θα σχηματιστεί ένα λευκό στερεό, το χλωρίδιο του καλίου με τύπο: ΚCΙ, το οποίο είναι ένα άλας. Τα άλατα παράγονται κατά την εξουδετέρωση ενός οξέος από μία βάση. Αν είναι ευδιάλυτα, πρέπει να εξατμιστεί το νερό. Αν είναι δυσδιάλυτα, όπως το BaSO4 καταβυθίζονται ως ίζημα και τα παραλαμβάνουμε με διήθηση.<br>Γ. Το μαγειρικό αλάτι αποτελείται από κατιόντα νατρίου (Na+) και ανιόντα χλωρίου (CI-). Οι χημικές εξισώσεις είναι: H+(aq) + OH-(aq) -> H2O(l) [εξουδετέρωση] και Na+(aq) + CI-(aq) -> NaCl. Το αλάτι... είναι κρυσταλλικό και στερεό και έχει λευκό χρώμα. Η γεύση του είναι αλμυρή... Όταν διαλύεται στο νερό: NaCl(s) -> Na+(aq) + Cl-(aq). Το αλάτι περιέχεται στο θαλασσινό νερό, από όπου και μπορεί να παραληφθεί σε αβαθείς περιοχές, οι οποίες ονομάζονται αλυκές.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "19. Τα τσιμπήματα των εντόμων είναι οδυνηρά γιατί διοχετεύουν δηλητήριο κάτω από το δέρμα. Η μέλισσα με το κεντρί της διοχετεύει δηλητήριο που περιέχει οξύ, ενώ η σφήκα δηλητήριο που περιέχει βάση. Να επιλέξετε και να εξηγήσετε ποιο από τα διαλύματα του παρακάτω πίνακα (Α: HCI 0,0, Β: ξίδι 3,5, Γ: νερό 7,0, Δ: ΝΗ3 11,0) θα χρησιμοποιήσετε κάθε φορά για να εξουδετερώσετε το τσίμπημα: α. της μέλισσας; β. της σφήκας;",
    "a": "<span class='text-emerald-400 font-bold'>α. Η μέλισσα με το κεντρί της διοχετεύει δηλητήριο που περιέχει οξύ κάτω από το δέρμα, οπότε πρέπει να χρησιμοποιήσουμε ένα διάλυμα βάσης ώστε να το εξουδετερώσουμε. Επομένως θα χρησιμοποιήσουμε διάλυμα Δ (ΝΗ3).<br>β. Η σφήκα με το κεντρί της διοχετεύει δηλητήριο που περιέχει βάση, οπότε πρέπει να χρησιμοποιήσουμε ένα διάλυμα οξέος ώστε να το εξουδετερώσουμε. Θα επιλέξουμε το διάλυμα Β (ξίδι) και όχι το Α (HCI) καθώς αυτό έχει τόσο μικρό pH που θα προκαλέσει έγκαυμα στο δέρμα μας.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "21. Όταν διαλύεται H2SO4 στο νερό... Όταν διαλύεται Ba(OH)2 στο νερό... Αν αναμειχθεί το διάλυμα του θειικού οξέος με το διάλυμα υδροξειδίου του βαρίου, πραγματοποιούνται οι αντιδράσεις που περιγράφονται από τις χημικές εξισώσεις:",
    "a": "<span class='text-emerald-400 font-bold'>H+(aq) + OH-(aq) -> H2O(l) [εξουδετέρωση]<br>Ba2+(aq) + SO4 2-(aq) -> BaSO4(s)<br>Το άλας που σχηματίζεται είναι το θειικό βάριο και καταβυθίζεται, γιατί είναι δυσδιάλυτο και μπορεί να παραληφθεί με διήθηση.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "22. α. Να εξηγήσετε ποιες χημικές ενώσεις ονομάζονται άλατα. β. Να κυκλώσετε όσες από τις ακόλουθες ενώσεις είναι άλατα (Na2CO3, H2SO4, ZnCl2, KOH, Ca(OH)2, KBr, MgCO3, CaSO4)... Γ. Η Όλη και ο Ίον χρειάζονται ΚΒr... Να προτείνετε μία διαδικασία με την οποία μπορούν να το παρασκευάσουν. Δ. Να προτείνετε μία διαδικασία με την οποία μπορούν να παρασκευάσουν CaSO4...",
    "a": "<span class='text-emerald-400 font-bold'>Α. Άλας ονομάζεται κάθε χημική ένωση η οποία αποτελείται από ιόντα και μπορεί να προκύψει από την αντίδραση ενός οξέος με μία βάση.<br>Β. Άλατα είναι οι ενώσεις: Na2CO3, ZnCl2, KBr, MgCO3 και CaSO4.<br>Γ. Για να παρασκευάσουν βρωμίδιο του καλίου μπορούν να αναμείξουν το διάλυμα ΗΒr με το διάλυμα ΚΟΗ με τη βοήθεια του δείκτη μπλε της βρωμοθυμόλης, ώστε να διαπιστώσουν την πλήρη εξουδετέρωση των διαλυμάτων. Αυτό θα πραγματοποιηθεί όταν ο δείκτης αποκτήσει πράσινο χρώμα. Στη συνέχεια μπορούν να παραλάβουν το άλας όταν θερμάνουν το διάλυμα ώστε να απομακρυνθεί το νερό και παραμείνει στον πυθμένα το στερεό ΚΒr.<br>Δ. Για να παρασκευάσουν CaSO4 μπορούν να αναμείξουν ένα διάλυμα H2SO4 με ένα διάλυμα Ca(OH)2 καθώς θα σχηματιστεί ένα λευκό και κρυσταλλικό στερεό στον πυθμένα, γιατί το θειικό ασβέστιο (CaSO4) είναι δυσδιάλυτο και καταβυθίζεται ως ίζημα, το οποίο μπορούν να παραλάβουν με διήθηση.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "23. Το ξίδι παρασκευάζεται από «αδύνατο κρασί»... Το ξίδι είναι υδατικό διάλυμα οξικού οξέος με περιεκτικότητα περίπου 7% μάζα προς όγκο και ρΗ περίπου: Α. 12, Β. 7, Γ. 3 ... Αν προσθέσουμε στη σαλάτα 5 mL ξίδι θα καταναλώσουμε 0,35 g οξικού οξέος... 35 g οξικού οξέος περιέχονται σε...",
    "a": "<span class='text-emerald-400 font-bold'>Το pH του ξιδιού είναι περίπου 3 (Επιλογή Γ). 35 g οξικού οξέος περιέχονται σε δύο μπουκάλια ξίδι του εμπορίου όγκου 250 mL.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "25. Να παρατηρήσετε το τμήμα του περιοδικού πίνακα και στη συνέχεια να συμπληρώσετε τις προτάσεις, ώστε να είναι ορθές:",
    "a": "<span class='text-emerald-400 font-bold'>Α. Στο τμήμα του Περιοδικού Πίνακα μέταλλα είναι τα στοιχεία: Li, Na, K, Mg, Ca, Ba, Fe, Cu, Zn, Al και αμέταλλα είναι τα στοιχεία: F, CI, Br, Ι.<br>Β. Μέταλλα είναι τα στοιχεία: Li, Na, K, Mg, Ca, Ba, Fe, Cu, Zn, Al<br>Γ. Αλκάλια είναι τα στοιχεία: Li, Na και Κ.<br>Δ. Αλκαλικές γαίες είναι τα στοιχεία: Mg, Ca και Βα.<br>Ε. Σε ότι αφορά στη φυσική τους κατάσταση τα μέταλλα είναι όλα στερεά, εκτός από τον υδράργυρο που είναι υγρός.<br>ΣΤ. Ένα μέταλλο που είναι πιο δραστικό από το Η2, αντιδρά με τα οξέα και ελευθερώνει αέριο υδρογόνο, σύμφωνα με τη χημική εξίσωση: Zn(s) + 2H+(aq) -> Zn2+(aq) + H2(g).<br>Ζ. Ένα μέταλλο που είναι πιο δραστικό από ένα άλλο μέταλλο, μπορεί να το αντικαταστήσει: Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "26. Για τα μέταλλα του παραπάνω τμήματος του Περιοδικού Πίνακα γνωρίζουμε ότι... Να διατάξετε τα στοιχεία από το λιγότερο προς το περισσότερο δραστικό.",
    "a": "<span class='text-emerald-400 font-bold'>Η διάταξη των στοιχείων από το λιγότερο προς το περισσότερο δραστικό είναι η εξής: Cu, H2, Fe, Zn, Mg, Na, Ca, K</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "27. Ο Ίον και η Όλη ερεύνησαν στο εργαστήριο τη δραστικότητα τριών διαφορετικών μετάλλων με αραιό διάλυμα H2SO4... Α. Ποιο από τα τρία μέταλλα είναι πιο δραστικό; Να δικαιολογήσετε την απάντησή σας. Β. Αν το μέταλλο Β είναι το ασβέστιο, να γράψετε τη χημική εξίσωση της αντίδρασής του με το διάλυμα του θειικού οξέος.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Το πιο δραστικό από τα τρία μέταλλα είναι το Β καθώς στον ίδιο χρόνο παράγεται μεγαλύτερη ποσότητα προϊόντος (Η2).<br>B. Ca(s) + 2H+(aq) + SO4 2-(aq) -> Ca2+(aq) + SO4 2-(aq) + H2(g)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "28. Να παρατηρήσετε τον διπλανό πίνακα και στη συνέχεια: Α. Να γράψετε το όνομα και το σύμβολο των στοιχείων που είναι μέταλλα... Β. αλκάλια... Γ. αλογόνα... Δ. ευγενή αέρια... Ε. Να γράψετε τα δύο αμέταλλα στοιχεία που περιέχονται στον αέρα που αναπνέουμε; Στ. Να σημειώσετε την ομάδα του Π.Π. στην οποία βρίσκεται το νέο, χλώριο, κάλιο.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Μέταλλα: κάλιο (Κ), αργίλιο (ΑΙ), μαγνήσιο (Mg), σίδηρος (Fe).<br>Β. Αλκάλια: κάλιο (Κ)<br>Γ. Αλογόνα: χλώριο (CI)<br>Δ. Ευγενή αέρια: νέο (Ne)<br>Ε. Ατμοσφαιρικός αέρας: οξυγόνο (Ο2), άζωτο (Ν2)<br>Στ. νέο: 18η ομάδα, χλώριο: 17η ομάδα, κάλιο: 1η ομάδα.</span>",
    "chapterId": "chapter-3"
  },
  {
    "q": "29. Από τα στοιχεία: χλώριο, αργό, νάτριο, σίδηρος, οξυγόνο:",
    "a": "<span class='text-emerald-400 font-bold'>Α. Στην ομάδα των αλκαλίων ανήκει το νάτριο, το οποίο είναι απαραίτητο για τη λειτουργία του οργανισμού... Αντιδρά με νερό σύμφωνα με την αντίδραση η οποία περιγράφεται από τη χημική εξίσωση: 2Na(s) + 2H2O(l) -> 2Na+(aq) + 2OH-(aq) + H2(g). Κατά τη διάρκεια της αντίδρασης παράγεται αέριο υδρογόνο και ο σωλήνας θερμαίνεται, γιατί η αντίδραση είναι εξώθερμη. Το διάλυμα που δημιουργείται έχει pH μεγαλύτερο από 7 γιατί παράγονται ιόντα υδροξειδίου. Κάθε άτομο νατρίου κατά την αντίδρασή του με το νερό χάνει ένα ηλεκτρόνιο και μετατρέπεται σε κατιόν.<br>Β. Το αργό είναι αδρανές, γιατί ανήκει στην ομάδα των ευγενών αερίων, δηλαδή την 18η ομάδα του Π.Π.<br>Γ. Το χλώριο ανήκει στην 17η ομάδα του Π.Π., δηλαδή είναι αλογόνο, χρησιμοποιείται στην απολύμανση του πόσιμου νερού.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "30. Το σχήμα το οποίο ακολουθεί απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα: ... Να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες και να δικαιολογήσετε την απάντησή σας.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Τα στοιχεία Β και Γ ανήκουν στην ίδια ομάδα του Π.Π (1η) επομένως έχουν παρόμοιες ιδιότητες. Τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Π.Π (17η) επομένως έχουν παρόμοιες ιδιότητες.<br>Β. Η πρόταση είναι λανθασμένη. Το στοιχείο Α είναι το υδρογόνο το οποίο είναι αέριο.<br>Γ. Η πρόταση είναι λανθασμένη. Το στοιχείο Α είναι το υδρογόνο το οποίο είναι αμέταλλο.<br>Δ. Η πρόταση είναι λανθασμένη. Το στοιχείο Δ ανήκει στη 2η ομάδα του Π.Π επομένως είναι μια αλκαλική γαία και όχι ένα αλκάλιο.<br>Ε. Η πρόταση είναι σωστή. Το στοιχείο Μ ανήκει στην 7η ομάδα του Π.Π επομένως είναι μέταλλο.<br>ΣΤ. Η πρόταση είναι σωστή. Το στοιχείο Κ ανήκει στην 18η ομάδα του Π.Π επομένως δεν αντιδρά εύκολα με άλλα χημικά στοιχεία. Συγκεκριμένα είναι το ήλιο το οποίο χρησιμοποιείται ως ανυψωτικό αέριο στα αερόστατα.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "43. Συμπληρώστε τις παρακάτω αντιδράσεις για τα ιόντα:",
    "a": "<span class='text-emerald-400 font-bold'>Διάλυμα κατιόντων Ag+ + διάλυμα ανιόντων χλωρίου -> δυσδιάλυτο ίζημα AgCl λευκού χρώματος.<br>Διάλυμα κατιόντων αργύρου + διάλυμα ανιόντων I- -> δυσδιάλυτο ίζημα AgI κίτρινου χρώματος.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "1. (Ενότητα 6.1) Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, ώστε να είναι σωστό:",
    "a": "<span class='text-emerald-400 font-bold'>Α. Οι πηγές ενέργειας διακρίνονται σε ανανεώσιμες και μη ανανεώσιμες: το πετρέλαιο, το κάρβουνο, το φυσικό αέριο και το ουράνιο είναι μη ανανεώσιμες πηγές ενέργειας. Οι πηγές ενέργειας που δεν εξαντλούνται με τη χρήση, αλλά ανανεώνονται συνεχώς με φυσικές διαδικασίες, όπως η ηλιακή, η αιολική, η γεωθερμική και η ενέργεια του νερού ονομάζονται ανανεώσιμες πηγές ενέργειας.<br>Β. Η καύση των ορυκτών καυσίμων, όπως το πετρέλαιο και οι γαιάνθρακες έχει ως βασικό πλεονέκτημα ότι έχουν υψηλή ενεργειακή απόδοση, αλλά τα αποθέματά τους είναι περιορισμένα και δεν ανανεώνονται, ενώ επιβαρύνουν το περιβάλλον με διοξείδιο του άνθρακα, το οποίο είναι αέριο του θερμοκηπίου και η αύξηση του στην ατμόσφαιρα έχει προκαλέσει υπερθέρμανση της Γης και αλλαγές στο κλίμα. Για την προστασία του περιβάλλοντος είναι αναγκαίο το αποτύπωμα άνθρακα να μειωθεί με αύξηση της χρήσης ανανεώσιμων πηγών ενέργειας και ελάττωση των ενεργειακών αναγκών...</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "3. (Ενότητα 6.2) Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε σύντομα την απάντησή σας.",
    "a": "<span class='text-emerald-400 font-bold'>Α. Η πρόταση είναι σωστή. Η Χημεία έχει συμβάλει σημαντικά στη βελτίωση της ποιότητας ζωής μας μέσω της ανάπτυξης καινοτόμων υλικών (δημιουργία φαρμάκων, βιώσιμων υλικών, τεχνολογιών).<br>Β. Η πρόταση είναι σωστή. Το εξαιρετικά μικρό τους μέγεθος, αυξάνει την ελεύθερη επιφάνεια επαφής που έχουν με αποτέλεσμα να αλλάζουν τις ιδιότητες των υλικών, αποκτώντας μοναδικές νέες ιδιότητες.<br>Γ. Η πρόταση είναι σωστή. Τα νανοϋλικά έχουν πάρα πολλές χρήσεις (καταλύτες, μεταφορείς φαρμάκων, αντιηλιακά, αντιμικροβιακά ρούχα).<br>Δ. Η πρόταση είναι σωστή. Η χημική έρευνα έχει συμβάλει στην εξάλειψη πολλών μολυσματικών ασθενειών με την ανάπτυξη εμβολίων (πολιομυελίτιδα, ελονοσία, κορονοϊός), αντιβιοτικών και αντισηπτικών.<br>Ε. Η πρόταση είναι σωστή. Οι χημικές αντιδράσεις σε μια μπαταρία περιλαμβάνουν τη ροή ηλεκτρονίων από το ένα ηλεκτρόδιο (άνοδο) στο άλλο μέσω εξωτερικού κυκλώματος, καθώς ο ηλεκτρολύτης εμποδίζει την απευθείας ροή ηλεκτρονίων.</span>",
    "chapterId": "chapter-1"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να σημειώσετε στη 2η στήλη σε όσα προϊόντα της 1ης στήλης μπορούν να παραχθούν από πρώτη ύλη το πετρέλαιο με πρωτογενή επεξεργασία (κλασματική απόσταξη) και στη 3η στήλη σε όσα μπορούν να παραχθούν με δευτερογενή επεξεργασία.<br><br><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Προϊόντα</th><th>Πρωτογενής επεξεργασία</th><th>Δευτερογενής επεξεργασία</th></tr></thead><tbody><tr class='border-b border-white/20'><td>1. απορρυπαντικά</td><td></td><td></td></tr><tr class='border-b border-white/20'><td>2. κηροζίνη</td><td></td><td></td></tr><tr class='border-b border-white/20'><td>3. βενζίνη</td><td></td><td></td></tr><tr class='border-b border-white/20'><td>4. φάρμακα</td><td></td><td></td></tr><tr class='border-b border-white/20'><td>5. χρώματα</td><td></td><td></td></tr><tr class='border-b border-white/20'><td>6. πλαστικά</td><td></td><td></td></tr><tr class='border-b border-white/20'><td>7. άσφαλτος</td><td></td><td></td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><thead><tr class='border-b border-white/20'><th>Προϊόντα</th><th>Πρωτογενής επεξεργασία</th><th>Δευτερογενής επεξεργασία</th></tr></thead><tbody><tr class='border-b border-white/20'><td>1. απορρυπαντικά</td><td></td><td>✓</td></tr><tr class='border-b border-white/20'><td>2. κηροζίνη</td><td>✓</td><td></td></tr><tr class='border-b border-white/20'><td>3. βενζίνη</td><td>✓</td><td></td></tr><tr class='border-b border-white/20'><td>4. φάρμακα</td><td></td><td>✓</td></tr><tr class='border-b border-white/20'><td>5. χρώματα</td><td></td><td>✓</td></tr><tr class='border-b border-white/20'><td>6. πλαστικά</td><td></td><td>✓</td></tr><tr class='border-b border-white/20'><td>7. άσφαλτος</td><td>✓</td><td></td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε τα κενά με την κατάλληλη λέξη, σύμβολο ή αριθμό.<br>Το οινόπνευμα ονομάζεται και ........ ή ........ ........ και ο μοριακός του τύπος είναι ........ . Η αιθανόλη σε συνθήκες περιβάλλοντος είναι ........, και αναμειγνύεται με το ........ σε οποιαδήποτε αναλογία, ενώ και η ίδια είναι πολύ καλός ........ . Η αιθανόλη παρασκευάζεται κατά την ........ ........ από την ........ που περιέχεται στο χυμό των γλυκών καρπών, με τη βοήθεια ........ που ονομάζονται ........ . Είναι συστατικό των ........ ποτών των οποίων η περιεκτικότητα σε αιθανόλη μετράται σε ........ βαθμούς. Ένα ποτό 40%vol, όπως το ουίσκι περιέχει ........ αιθανόλης σε ........ ποτού. Μπορεί να χρησιμοποιηθεί και ως ........ για αυτοκίνητα είτε μόνη της, είτε σε ανάμειξη με βενζίνη.",
    "a": "<span class='text-purple-300 font-bold'>Το οινόπνευμα ονομάζεται και αιθανόλη ή αιθυλική αλκοόλη και ο μοριακός του τύπος είναι C<sub>2</sub>H<sub>5</sub>OH. Η αιθανόλη σε συνθήκες περιβάλλοντος είναι υγρή, και αναμειγνύεται με το νερό σε οποιαδήποτε αναλογία, ενώ και η ίδια είναι πολύ καλός διαλύτης. Η αιθανόλη παρασκευάζεται κατά την αλκοολική ζύμωση από την γλυκόζη που περιέχεται στο χυμό των γλυκών καρπών, με τη βοήθεια ενζύμων που ονομάζονται ζυμομύκητες. Είναι συστατικό των οινοπνευματωδών ποτών των οποίων η περιεκτικότητα σε αιθανόλη μετράται σε αλκοολικούς βαθμούς. Ένα ποτό 40%vol, όπως το ουίσκι περιέχει 40 mL αιθανόλης σε 100 mL ποτού. Μπορεί να χρησιμοποιηθεί και ως καύσιμο για αυτοκίνητα είτε μόνη της, είτε σε ανάμειξη με βενζίνη.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε τις χημικές εξισώσεις:<br>α. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> &rarr; ........ + ........<br>β. C<sub>2</sub>H<sub>5</sub>OH + ...O<sub>2</sub> &rarr; ........ + ........ (τέλεια καύση)",
    "a": "<span class='text-purple-300 font-bold'><ul><li>α. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (aq) &rarr; <i>(ζυμάση)</i> &rarr; 2CH<sub>3</sub>CH<sub>2</sub>OH (aq) + 2CO<sub>2</sub> (g)</li><li>β. C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g) &rarr; 2CO<sub>2</sub> (g) + 3H<sub>2</sub>O (g)</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "α. Με ποια φυσική διαδικασία παρασκευάζεται η αιθανόλη; Να γράψετε τη χημική εξίσωση της αντίδρασης που πραγματοποιείται.<br>β. Λίγο χρόνο μετά την τοποθέτηση του μούστου σε βαρέλι παρατηρείται βρασμός. Πού οφείλεται το φαινόμενο αυτό; Γιατί όταν τελειώνει ο βρασμός τα βαρέλια σφραγίζονται;<br>γ. Τα αλκοολούχα ποτά χαρακτηρίζονται από την %v/v περιεκτικότητα τους σε αιθανόλη. Τι σημαίνει η ένδειξη 12% vol στο μπουκάλι του κρασιού;<br>δ. Η αιθανόλη ή αιθυλική αλκοόλη ή οινόπνευμα μπορεί να χρησιμοποιηθεί ως καύσιμο σε κινητήρες αυτοκινήτων. Να γράψετε τη χημική εξίσωση της καύσης της.<br>ε. Πώς μπορούμε να εξακριβώσουμε πειραματικά ποια είναι τα προϊόντα της καύσης της αιθανόλης;<br>στ. Είναι σωστό ή λάθος ότι μπορούμε να καθαρίσουμε ένα λεκέ από μαρκαδόρο με αιθανόλη; Να δικαιολογήσετε την απάντησή σας.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Η αιθανόλη παρασκευάζεται με την αλκοολική ζύμωση από την γλυκόζη.<br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (aq) &rarr; 2CH<sub>3</sub>CH<sub>2</sub>OH (aq) + 2CO<sub>2</sub> (g)</li><li class='mb-2'>β. Ο «βρασμός» οφείλεται στην παραγωγή φυσαλίδων αερίου CO<sub>2</sub>. Όταν τελειώνει ο βρασμός τα βαρέλια σφραγίζονται ώστε να μην έρχεται σε άμεση επαφή με τον ατμοσφαιρικό αέρα και συνεχιστεί η ζύμωση της αλκοόλης (οξείδωση), με αποτέλεσμα το κρασί να μετατραπεί σε ξίδι.</li><li class='mb-2'>γ. Η ένδειξη 12% vol στο μπουκάλι σημαίνει ότι σε 100 mL του αλκοολούχου αυτού ποτού περιέχονται 12 mL οινόπνευμα.</li><li class='mb-2'>δ. C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g) &rarr; 2CO<sub>2</sub> (g) + 3H<sub>2</sub>O (g)</li><li class='mb-2'>ε. Τα προϊόντα της τέλειας καύσης της αιθανόλης είναι το διοξείδιο του άνθρακα και το νερό. Το αέριο διοξείδιο του άνθρακα (CO<sub>2</sub>) διοχετεύεται σε διαυγές ασβεστόνερο το οποίο θολώνει ή σε έναν κώδωνα που περιέχει ένα αναμμένο κερί, το οποίο σβήνει. Οι υδρατμοί (H<sub>2</sub>O) διοχετεύονται αρχικά πάνω από ένα σωλήνα που περιέχει λευκό άνυδρο θειικό χαλκό ο οποίος στη συνέχεια γίνεται μπλε.</li><li class='mb-2'>στ. Η πρόταση είναι σωστή. Το μελάνι από μαρκαδόρο διαλύεται στην αιθανόλη (αφού είναι πολύ καλός διαλύτης).</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Είναι συνηθισμένο στις χαρές και τις λύπες οι ενήλικες να καταναλώνουν οινοπνευματώδη ποτά.<br>α. Μπορείτε να εξηγήσετε τους λόγους που οι άνθρωποι καταναλώνουν ποτά;<br>β. Ποια σοβαρά προβλήματα υγείας δημιουργεί η υπερκατανάλωση αλκοόλ;<br>γ. Στατιστικά στοιχεία αποδεικνύουν ότι μεγάλος αριθμός των αυτοκινητιστικών ατυχημάτων οφείλεται σε μεθυσμένους οδηγούς. Να εξηγήσετε γιατί τιμόνι και κατανάλωση αλκοόλ δεν μπορούν να συνυπάρξουν.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Οι άνθρωποι καταναλώνουν ποτά καθώς σε μικρή ποσότητα προκαλούν αίσθημα ευφορίας και χαλάρωσης.</li><li class='mb-2'>β. Η κατανάλωση μεγάλων ποσοτήτων αιθανόλης προκαλεί αστάθεια στην ομιλία και στο βάδισμα και επιβράδυνση αντιδράσεων σε ερεθίσματα, δηλαδή μείωση των αντανακλαστικών. Όταν η ποσότητα της αιθανόλης στο αίμα ξεπεράσει τα 0,35g/100mL μπορεί να προκαλέσει κώμα ή ακόμα και θάνατο. Η συχνή κατανάλωση αιθανόλης προκαλεί εξάρτηση και επειδή στον ανθρώπινο οργανισμό μεταβολίζεται κυρίως στο συκώτι, ευθύνεται για σοβαρές ηπατικές βλάβες, όπως η κίρρωση του ήπατος.</li><li class='mb-2'>γ. Η κατανάλωση μεγάλων ποσοτήτων αιθανόλης προκαλεί επιβράδυνση αντιδράσεων σε ερεθίσματα, δηλαδή μείωση των αντανακλαστικών. Επομένως αυξάνεται ο κίνδυνος για πρόκληση αυτοκινητιστικών ατυχημάτων.</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Πότε ένας άνθρωπος καταναλώνει περισσότερη ποσότητα οινοπνεύματος;<br>α. όταν καταναλώνει 2 ή όταν καταναλώνει 5 ποτηράκια κρασί 11% vol;<br>β. όταν καταναλώνει 1 ποτήρι βότκα 40% vol; ή όταν καταναλώνει 3 ποτήρια κρασί 11% vol;<br>Όλα τα ποτήρια περιέχουν την ίδια ποσότητα ποτού. Να δικαιολογήσετε πλήρως τις απαντήσεις σας.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Η ποσότητα του οινοπνεύματος είναι ανάλογη της ποσότητας του κρασιού που καταναλώνουμε. Επομένως όταν ένας άνθρωπος καταναλώνει 5 ποτήρια κρασί τότε προσλαμβάνει περισσότερη ποσότητα οινοπνεύματος σε σχέση με την κατανάλωση 2 ποτηριών κρασί.</li><li class='mb-2'>β. Έστω ότι ένα ποτήρι περιέχει V mL οινοπνευματώδους ποτού.<br>Στα 100 mL βότκας περιέχονται 40 mL οινόπνευμα.<br>Στα V mL βότκας περιέχονται x; mL οινόπνευμα.<br>x = 0,4·V mL οινόπνευμα ανά ποτήρι.<br><br>Στα 100 mL κρασιού περιέχονται 11 mL οινόπνευμα.<br>Στα 3·V mL κρασιού περιέχονται x; mL οινόπνευμα.<br>x = 0,33·V mL οινόπνευμα συνολικά στα 3 ποτήρια.<br><br>Παρατηρούμε ότι σε ένα ποτήρι βότκας περιέχεται μεγαλύτερη ποσότητα οινοπνεύματος (0,4·V) σε σχέση με τα τρία ποτήρια κρασιού (0,33·V).</li></ul></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να σημειώσετε δίπλα σε κάθε μία από τις ακόλουθες προτάσεις Σ, αν είναι σωστή και Λ, αν είναι λανθασμένη.<br><br><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Όταν καίγεται 1 μόριο αιθανόλης (C<sub>2</sub>H<sub>6</sub>O) παράγονται 2 μόρια διοξειδίου του άνθρακα και 3 μόρια νερού.</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Τα ένζυμα αυξάνουν ή ελαττώνουν την ταχύτητα των βιοχημικών αντιδράσεων.</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Η κατανάλωση ενός αλκοολούχου ποτού 12%vol επιβαρύνει περισσότερο τον ανθρώπινο οργανισμό από ενός άλλου 5%vol.</td><td></td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Η αιθανόλη μπορεί να χρησιμοποιηθεί ως καύσιμο, γιατί η καύση της είναι ενδόθερμη αντίδραση.</td><td></td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><table class='w-full text-left border-collapse my-4'><tbody><tr class='border-b border-white/20'><td class='py-2'>1. Όταν καίγεται 1 μόριο αιθανόλης (C<sub>2</sub>H<sub>6</sub>O) παράγονται 2 μόρια διοξειδίου του άνθρακα και 3 μόρια νερού.</td><td><b>Σ</b></td></tr><tr class='border-b border-white/20'><td class='py-2'>2. Τα ένζυμα αυξάνουν ή ελαττώνουν την ταχύτητα των βιοχημικών αντιδράσεων.</td><td><b>Λ</b> (Μόνο αυξάνουν την ταχύτητα)</td></tr><tr class='border-b border-white/20'><td class='py-2'>3. Η κατανάλωση ενός αλκοολούχου ποτού 12%vol επιβαρύνει περισσότερο τον ανθρώπινο οργανισμό από ενός άλλου 5%vol.</td><td><b>Λ</b> (Εξαρτάται κυρίως από τη συνολική ποσότητα που θα καταναλωθεί)</td></tr><tr class='border-b border-white/20'><td class='py-2'>4. Η αιθανόλη μπορεί να χρησιμοποιηθεί ως καύσιμο, γιατί η καύση της είναι ενδόθερμη αντίδραση.</td><td><b>Λ</b> (Η καύση είναι πάντα εξώθερμη)</td></tr></tbody></table></span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Να συμπληρώσετε τα ακόλουθα κείμενα, ώστε να είναι σωστά.<br>Α. Οι πρωτεΐνες είναι ........ ενώσεις, που περιέχουν απαραίτητα τα στοιχεία ........ (C), ........ (O), ........ (H), ........ (N) και προκύπτουν από τη ........, δηλαδή τον ........, πολλών μορίων ........ με απόλυτα καθορισμένη και μοναδική ........ . Οι πρωτεΐνες είναι απαραίτητες στους οργανισμούς για την ........ τους, την ........ των πρωτεϊνών που χάνονται από τους ιστούς και με τα βιολογικά υγρά, τη σύνθεση ........, και ........, όπως η αδρεναλίνη και την παραγωγή ........ . Η σύνδεση των αμινοξέων γίνεται με έναν ειδικό δεσμό, ο οποίος ονομάζεται ........ δεσμός.<br>Β. Οι ........, στους οποίους ανήκουν η ........, η ........, η ........, το ........ και το ........, αποτελούνται από ........, ........ και ........ . Στο ανθρώπινο σώμα, οι υδατάνθρακες διασπώνται σε ........, η οποία εισέρχεται στην κυκλοφορία του αίματος, όπου «καίγεται» προς ........ και ........, ελευθερώνοντας ........ . Η γλυκόζη είναι η κύρια πηγή ........ για τα κύτταρα και η μοναδική πηγή για τον ........ . Εκτός από την απελευθέρωση της απαιτούμενης ενέργειας για τις λειτουργικές ανάγκες των οργανισμών, οι υδατάνθρακες είναι δομικά συστατικά του ........ και του ........ .<br>Γ. Από χημική άποψη, τα λιπίδια είναι ........ ενώσεων, οι οποίες ονομάζονται ........, που προκύπτουν από την αντίδραση των λιπαρών οργανικών ........ με ........, που ονομάζονται ........ . Ο βιολογικός ρόλος των λιπιδίων είναι σημαντικός γιατί είναι πηγή ........, είναι ........ ........ όλων των ........ είναι πηγή των απαραίτητων ........ οξέων, απορροφούν και μεταφέρουν τις ........ βιταμίνες A, D, E, K, συμβάλλουν στη διατήρηση της ........ του οργανισμού και σταθεροποιούν τις ........ δομές.",
    "a": "<span class='text-purple-300 font-bold'>Α. Οι πρωτεΐνες είναι <b>μεγαλομοριακές</b> ενώσεις, που περιέχουν απαραίτητα τα στοιχεία <b>άνθρακα</b> (C), <b>οξυγόνο</b> (O), <b>υδρογόνο</b> (H), <b>άζωτο</b> (N) και προκύπτουν από τη <b>συνένωση</b>, δηλαδή τον <b>πολυμερισμό</b>, πολλών μορίων <b>αμινοξέων</b> με απόλυτα καθορισμένη και μοναδική <b>αλληλουχία</b>. Οι πρωτεΐνες είναι απαραίτητες στους οργανισμούς για την <b>ανάπτυξή</b> τους, την <b>αντικατάσταση</b> των πρωτεϊνών που χάνονται από τους ιστούς και με τα βιολογικά υγρά, τη σύνθεση <b>γλυκόζης</b>, και <b>ορμονών</b>, όπως η αδρεναλίνη και την παραγωγή <b>αντισωμάτων</b>. Η σύνδεση των αμινοξέων γίνεται με έναν ειδικό δεσμό, ο οποίος ονομάζεται <b>πεπτιδικός</b> δεσμός.<br><br>Β. Οι <b>υδατάνθρακες</b>, στους οποίους ανήκουν η <b>κυτταρίνη</b>, η <b>φρουκτόζη</b>, η <b>μαλτόζη</b>, το <b>άμυλο</b> και το <b>γλυκογόνο</b>, αποτελούνται από <b>άνθρακα</b>, <b>υδρογόνο</b> και <b>οξυγόνο</b>. Στο ανθρώπινο σώμα, οι υδατάνθρακες διασπώνται σε <b>γλυκόζη</b>, η οποία εισέρχεται στην κυκλοφορία του αίματος, όπου «καίγεται» σε <b>CO<sub>2</sub></b> και <b>H<sub>2</sub>O</b>, ελευθερώνοντας <b>ενέργεια</b>. Η γλυκόζη είναι η κύρια πηγή <b>ενέργειας</b> για τα κύτταρα και η μοναδική πηγή για τον <b>εγκέφαλο</b>. Εκτός από την απελευθέρωση της απαιτούμενης ενέργειας για τις λειτουργικές ανάγκες των οργανισμών, οι υδατάνθρακες είναι δομικά συστατικά του <b>RNA</b> και του <b>DNA</b>.<br><br>Γ. Από χημική άποψη, τα λιπίδια είναι <b>μείγματα</b> ενώσεων, οι οποίες ονομάζονται <b>εστέρες</b>, που προκύπτουν από την αντίδραση των λιπαρών οργανικών <b>οξέων</b> με <b>γλυκερίνη</b>, που ονομάζονται <b>γλυκερίδια</b>. Ο βιολογικός ρόλος των λιπιδίων είναι σημαντικός γιατί είναι πηγή <b>ενέργειας</b>, είναι <b>δομικά συστατικά</b> όλων των <b>κυττάρων</b>, είναι πηγή των απαραίτητων <b>λιπαρών</b> οξέων, απορροφούν και μεταφέρουν τις <b>λιποδιαλυτές</b> βιταμίνες A, D, E, K, συμβάλλουν στη διατήρηση της <b>θερμοκρασίας</b> του οργανισμού και σταθεροποιούν τις <b>κυτταρικές</b> δομές.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Α. Να υπολογίσετε, αξιοποιώντας τον πίνακα ενεργειακής απόδοσης των θρεπτικών υλών (πρωτεΐνες: 4 kcal/g, υδατάνθρακες: 4 kcal/g, λίπη: 9,3 kcal/g), το ποσό θερμίδων ενός ποτηριού (250 g) πλήρους νωπού γάλακτος που η σύστασή του σε θρεπτικές ύλες είναι: πρωτεΐνες 3,2% w/w, υδατάνθρακες 4,7% w/w και λιπαρά 3,5% w/w και ενός ελαφριού που έχει διαφορά μόνο στα λιπαρά 1,5% w/w.<br>Β. Το γάλα περιέχει ακόμη σε 100 g και απαραίτητα μικροθρεπτικά συστατικά που δεν δίνουν θερμίδες, όπως 118 mg Ca, 99 mg P, 0,4 mg βιταμίνη B12. Αν η συνιστώμενη ημερήσια πρόσληψη (ΣΗΠ) είναι αντίστοιχα 0,80 g, 0,72 g και 2,5 mg, ποιο ποσοστό των αναγκών σε μικροθρεπτικά συστατικά καλύπτει ένα ποτήρι γάλα;<br>Γ. Οι ετικέτες αναφέρονται στην περιεκτικότητα του γάλακτος αμυγδάλου (Υδατάνθρακες 1,2%, Πρωτεΐνες 0,5%, Λίπη 1,2%) και του γάλακτος βρώμης (Υδατάνθρακες 7,3%, Πρωτεΐνες 1,3%, Λίπη 2,3%). Να υπολογίσετε το ποσό θερμίδων ανά ποτήρι και να συγκρίνετε τα 3 είδη γάλακτος.",
    "a": "<span class='text-purple-300 font-bold'>Α.<br>i. Σε 100 g πλήρους νωπού γάλακτος περιέχονται 3,2 g πρωτεϊνών, 4,7 g υδατανθράκων και 3,5 g λιπαρών. Επομένως στα 250 g πλήρους νωπού γάλακτος περιέχονται 8 g πρωτεϊνών, 11,75 g υδατανθράκων και 8,75 g λιπαρών.<br>Η ενεργειακή απόδοση των 250 g πλήρους νωπού γάλακτος είναι (8·4,0 + 11,75·4,0 + 8,75·9,3) kcal = (32 + 47 + 81,375) kcal = <b>160,375 kcal</b>.<br>ii. Σε 100 g ελαφριού νωπού γάλακτος περιέχονται 3,2 g πρωτεϊνών, 4,7 g υδατανθράκων και 1,5 g λιπαρών. Επομένως στα 250 g ελαφριού νωπού γάλακτος περιέχονται 8 g πρωτεϊνών, 11,75 g υδατανθράκων και 3,75 g λιπαρών.<br>Η ενεργειακή απόδοση των 250 g ελαφριού νωπού γάλακτος είναι (8·4,0 + 11,75·4,0 + 3,75·9,3) kcal = (32 + 47 + 34,875) kcal = <b>113,875 kcal</b>.<br><br>Β. Σε 100 g γάλακτος περιέχονται 118 mg Ca, 99 mg P και 0,4 mg βιταμίνη B12.<br>Σε 250 g (ένα ποτήρι) γάλακτος περιέχονται 295 mg Ca (0,295 g), 247,5 mg P (0,2475 g) και 1 mg βιταμίνη B12.<br>Το ποσοστό των αναγκών σε μικροθρεπτικά συστατικά που καλύπτονται από ένα ποτήρι γάλα είναι:<br>Για το ασβέστιο (Ca): (0,295 / 0,80) · 100 = <b>36,875 %</b><br>Για τον φωσφόρο (P): (0,2475 / 0,72) · 100 = <b>34,375 %</b><br>Για τη βιταμίνη Β: (1 / 2,5) · 100 = <b>40 %</b><br><br>Γ.<br>i. Σε 100 g γάλακτος αμυγδάλου περιέχονται 1,2 g υδατανθράκων, 0,5 g πρωτεϊνών και 1,2 g λιπαρών. Επομένως στα 250 g γάλακτος αμυγδάλου περιέχονται 3 g υδατανθράκων, 1,25 g πρωτεϊνών και 3 g λιπαρών.<br>Επομένως η ενεργειακή απόδοση των 250 g γάλακτος αμυγδάλου είναι (3·4,0 + 1,25·4,0 + 3·9,3) kcal = (12 + 5 + 27,9) kcal = <b>44,9 kcal</b>. <i>(Σημείωση: Στο σχολικό βιβλίο υπάρχει τυπογραφικό λάθος στον υπολογισμό των λιπαρών του αμυγδάλου)</i>.<br>ii. Σε 100 g γάλακτος βρώμης περιέχονται 7,3 g υδατανθράκων, 1,3 g πρωτεϊνών και 2,3 g λιπαρών. Επομένως στα 250 g γάλακτος βρώμης περιέχονται 18,25 g υδατανθράκων, 3,25 g πρωτεϊνών και 5,75 g λιπαρών.<br>Επομένως η ενεργειακή απόδοση των 250 g γάλακτος βρώμης είναι (18,25·4,0 + 3,25·4,0 + 5,75·9,3) kcal = (73 + 13 + 53,475) kcal = <b>139,475 kcal</b>.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Το ελαιόλαδο παρέχει ενέργεια ίση με 9,3 kcal/g. Ένας ενήλικας, για να ικανοποιήσει τις ενεργειακές του ανάγκες συντηρώντας το σωματικό του βάρος, πρέπει κατά μέσο όρο να καταναλώνει 2500 kcal την ημέρα. Με δεδομένα ότι τα λιπαρά πρέπει να καλύπτουν το πολύ το 35% των ενεργειακών αναγκών και ότι δεν καταναλώνει άλλα λίπη, ποια είναι η μέγιστη επιτρεπόμενη ημερήσια κατανάλωση ελαιόλαδου για έναν ενήλικα;",
    "a": "<span class='text-purple-300 font-bold'>Πρέπει να λάβει ενέργεια από το ελαιόλαδο ίση με (35/100)·2500 kcal = 875 kcal.<br>1 g ελαιόλαδου παρέχει 9,3 kcal ενέργεια<br>x g ελαιόλαδου παρέχουν 875 kcal ενέργεια<br>x = 94,1 g.<br>Επομένως η μέγιστη επιτρεπόμενη ημερήσια κατανάλωση ελαιόλαδου για έναν ενήλικα είναι <b>94,1 g</b>.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Διαβάστε με προσοχή την συσκευασία από το διπλανό πακέτο πατατάκια (Συσκευασία: 150g. Σε 100g περιέχονται: υδατάνθρακες 58%, πρωτεΐνες 11%, λίπη 31%) και απαντήστε στις ακόλουθες ερωτήσεις.<br>Α. Πόσες θερμίδες θα καταναλώσετε αν φάτε όλο το πακέτο (150 g);<br>Β. Με δεδομένο ότι ένα παιδί πρέπει να καταναλώνει καθημερινά κατά μέσο όρο 2800 kcal (θερμίδες), ποιο ποσοστό της ημερήσιας πρόσληψης θερμίδων έχετε καλύψει με τα πατατάκια;<br>Γ. Για να είναι υγιεινή η διατροφή σας συνιστάται οι υδατάνθρακες να μην ξεπερνούν τα 350 g την ημέρα, τα λίπη τα 97 g την ημέρα και οι πρωτεΐνες να είναι τουλάχιστον 56 g την ημέρα. Να βρείτε ποια έπρεπε να είναι η % μάζα προς μάζα σύσταση ενός τρόφιμου για να είναι υγιεινό.<br>Δ. Να συγκρίνετε τη σύσταση ενός υγιεινού τρόφιμου με τα πατατάκια και να βγάλετε τα δικά σας συμπεράσματα.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Σε 100 g προϊόντος περιέχονται 58 g υδατανθράκων, 11 g πρωτεϊνών και 31 g λιπαρών. Επομένως στα 150 g προϊόντος περιέχονται 87 g υδατανθράκων, 16,5 g πρωτεϊνών και 46,5 g λιπαρών.<br>Η ενεργειακή απόδοση των 150 g του προϊόντος είναι (87·4,0 + 16,5·4,0 + 46,5·9,3) kcal = (348 + 66 + 432,45) kcal = <b>846,45 kcal</b>.</li><li class='mb-2'>Β. Το ποσοστό της ημερήσιας πρόσληψης θερμίδων που καλύπτει ένα παιδί με τη συγκεκριμένη ποσότητα του προϊόντος είναι: (846,45 / 2800) · 100 = <b>30,2%</b></li><li class='mb-2'>Γ. Η συνολική μάζα υδατανθράκων, πρωτεϊνών και λιπαρών στην υγιεινή διατροφή είναι: 350g + 97g + 56g = 503 g.<br>Στα 503 g προϊόντος περιέχονται 350g υδατανθράκων, 97g λιπαρών και 56g πρωτεϊνών.<br>Στα 100 g προϊόντος περιέχονται x g υδατανθράκων, y g λιπαρών και w g πρωτεϊνών.<br>x = (350/503)*100 = 69,58%, y = (97/503)*100 = 19,28%, w = (56/503)*100 = 11,13%.<br>Επομένως, το τρόφιμο θα πρέπει να περιέχει <b>69,58 %</b> υδατάνθρακες, <b>19,28%</b> λιπαρά και <b>11,13 %</b> πρωτεΐνες.</li><li class='mb-2'>Δ. Συγκρίνοντας τη σύσταση του υγιεινού τρόφιμου με τα πατατάκια παρατηρούμε ότι τα πατατάκια έχουν πολύ μεγαλύτερη περιεκτικότητα σε λιπαρά (31% &gt; 19,28%) και μικρότερη σε υδατάνθρακες (58% &lt; 69,58%) σε σχέση με το ιδανικό υγιεινό τρόφιμο. Επομένως, είναι ανθυγιεινά και πρέπει να καταναλώνονται σε πολύ μικρές ποσότητες.</li></ul></span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις:<br>Α. Το σύνολο των ........ ιδιοτήτων των οξέων ονομάζεται ........ χαρακτήρας και οφείλεται στην παρουσία ........ (........). Τα διαλύματα των οξέων έχουν ........ γεύση, αλλάζουν το χρώμα των ........, αντιδρούν με δραστικά ........ και ελευθερώνουν αέριο ........, και με ........ άλατα, όπως η ........ και ελευθερώνουν αέριο ........ (........). Η χρήση των οξέων απαιτεί προσοχή, γιατί πολλά οξέα είναι ........ .<br>Β. Όταν ένα ........ διάλυμα θειικού οξέος αντιδρά με ψευδάργυρο παράγεται αέριο ........, το οποίο μπορούμε να ταυτοποιήσουμε αν πλησιάσουμε μια ........, γιατί αναφλέγεται με ........ .<br>Γ. Όταν ένα διάλυμα υδροχλωρίου αντιδρά με μαγειρική σόδα παράγεται αέριο ........, το οποίο μπορούμε να ταυτοποιήσουμε αν πλησιάσουμε μια ........, γιατί ........ .<br>Δ. Όταν σε ένα διάλυμα υδροχλωρίου προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης, το χρώμα του διαλύματος γίνεται ........ .",
    "a": "<span class='text-purple-300 font-bold'>Α. Το σύνολο των <b>κοινών</b> ιδιοτήτων των οξέων ονομάζεται <b>όξινος</b> χαρακτήρας και οφείλεται στην παρουσία <b>κατιόντων υδρογόνου</b> (<b>H<sup>+</sup></b>). Τα διαλύματα των οξέων έχουν <b>όξινη</b> γεύση, αλλάζουν το χρώμα των <b>δεικτών</b>, αντιδρούν με δραστικά <b>μέταλλα</b> και ελευθερώνουν αέριο <b>υδρογόνο</b>, και με <b>ανθρακικά</b> άλατα, όπως η <b>κιμωλία</b> και ελευθερώνουν αέριο <b>διοξείδιο του άνθρακα</b> (<b>CO<sub>2</sub></b>). Η χρήση των οξέων απαιτεί προσοχή, γιατί πολλά οξέα είναι <b>επικίνδυνα</b>.<br>Β. Όταν ένα <b>αραιό</b> διάλυμα θειικού οξέος αντιδρά με ψευδάργυρο παράγεται αέριο <b>υδρογόνο</b>, το οποίο μπορούμε να ταυτοποιήσουμε αν πλησιάσουμε μια <b>φλόγα</b>, γιατί αναφλέγεται με <b>κρότο</b>.<br>Γ. Όταν ένα διάλυμα υδροχλωρίου αντιδρά με μαγειρική σόδα παράγεται αέριο <b>CO<sub>2</sub></b>, το οποίο μπορούμε να ταυτοποιήσουμε αν πλησιάσουμε μια <b>φλόγα</b>, γιατί <b>σβήνει</b>.<br>Δ. Όταν σε ένα διάλυμα υδροχλωρίου προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης, το χρώμα του διαλύματος γίνεται <b>κίτρινο</b>.</span>"
  },
  {
    "chapterId": "chapter-2",
    "q": "Η Αφροδίτη της Μήλου είναι ένα μαρμάρινο άγαλμα σπάνιας ομορφιάς του 5ου π.Χ. αιώνα, το οποίο φυλάσσεται στο μουσείο του Λούβρου. Να περιγράψετε τι θα συμβεί αν πάνω στο άγαλμα πέσει υδροχλωρικό οξύ και πως μπορεί να ταυτοποιηθεί το αέριο που θα παραχθεί.",
    "a": "<span class='text-purple-300 font-bold'>Το διάλυμα υδροχλωρίου θα αντιδράσει με το μάρμαρο το οποίο είναι ένα ανθρακικό άλας και θα παραχθεί αέριο διοξείδιο του άνθρακα (CO<sub>2</sub>). Το αέριο αυτό μπορούμε να το ταυτοποιήσουμε αν το διοχετεύσουμε είτε στη φλόγα ενός κεριού όπου θα σβήσει, είτε σε κορεσμένο διάλυμα ασβεστόνερου όπου θα θολώσει.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να χαρακτηρίσετε καθεμία από τις ακόλουθες προτάσεις ως σωστή ή λανθασμένη και να αιτιολογήσετε την απάντησή σας.<br>Α. Οι μπαταρίες των αυτοκινήτων περιέχουν θειικό οξύ. Όταν συμπληρώνονται με αποσταγμένο νερό, χρειάζεται προσοχή να μην ξεχειλίσει.<br>Β. Τα περισσότερα οξέα είναι διαβρωτικά και γι’ αυτό δεν τα συναντούμε σε τρόφιμα και ποτά.<br>Γ. Τα οξέα όταν διαλύονται στο νερό ελευθερώνουν κατιόντα υδρογόνου.<br>Δ. Ο όξινος χαρακτήρας των διαλυμάτων των οξέων οφείλεται στο ότι ελευθερώνουν αέριο υδρογόνο.<br>Ε. Δεν μπορεί να αποθηκευτεί διάλυμα HCl σε δοχείο από ψευδάργυρο ή σίδηρο.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι <b>σωστή</b>. Χρειάζεται προσοχή να μην ξεχειλίσει καθώς κινδυνεύουμε να πάθουμε σοβαρά εγκαύματα από το θειικό οξύ.</li><li class='mb-2'>Β. Η πρόταση είναι <b>λανθασμένη</b>. Πολλά οξέα, όπως το οξικό, το κιτρικό και το ασκορβικό τα συναντούμε σε τρόφιμα και ποτά.</li><li class='mb-2'>Γ. Η πρόταση είναι <b>σωστή</b>. Τα οξέα όταν διαλύονται στο νερό, δίνουν κατιόντα υδρογόνου (H<sup>+</sup>).</li><li class='mb-2'>Δ. Η πρόταση είναι <b>λανθασμένη</b>. Τα διαλύματα όλων των οξέων περιέχουν κατιόντα υδρογόνου (H<sup>+</sup>). Σ’ αυτά ακριβώς τα ιόντα οφείλονται οι κοινές ιδιότητες των οξέων (όξινος χαρακτήρας), όχι στο αέριο υδρογόνο.</li><li class='mb-2'>Ε. Η πρόταση είναι <b>σωστή</b>. Δεν μπορεί να αποθηκευτεί διάλυμα HCl σε δοχείο από ψευδάργυρο ή σίδηρο καθώς θα αντιδράσει με αυτά τα μέταλλα από τα οποία είναι κατασκευασμένα τα δοχεία αυτά.</li></ul></span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να συμπληρώσετε τις ακόλουθες προτάσεις και χημικές εξισώσεις με μία λέξη, τύπο ή σύμβολο.<br>Το αέριο ........ (........) όταν διαλύεται στο νερό ελευθερώνει ........ ........ (........) σύμφωνα με τη χημική εξίσωση: HCl(aq) &rarr; ........ + ........<br>Το θειικό οξύ (........) περιέχεται στις μπαταρίες των αυτοκινήτων και στο νερό ελευθερώνει ........ ........ (........) σύμφωνα με τη χημική εξίσωση: H<sub>2</sub>SO<sub>4</sub>(aq) &rarr; ........ + ........<br>Το οξικό οξύ (........) περιέχεται στο ........ και στο νερό ελευθερώνει ........ ........ (........) σύμφωνα με τη χημική εξίσωση: CH<sub>3</sub>COOH(aq) &rarr; ........ + ........<br>Β. Το κοινό προϊόν της διάλυσης όλων αυτών των ουσιών είναι τα ........ ........ (........).<br>Γ. Η παραγωγή αυτού του κοινού προϊόντος έχει ως αποτέλεσμα την ομαδοποίησή τους, με το κοινό όνομα ........ .",
    "a": "<span class='text-purple-300 font-bold'>Το αέριο <b>υδροχλώριο</b> (<b>HCl</b>) όταν διαλύεται στο νερό ελευθερώνει <b>κατιόντα υδρογόνου</b> (<b>H<sup>+</sup></b>) σύμφωνα με τη χημική εξίσωση: HCl(aq) &rarr; <b>H<sup>+</sup>(aq)</b> + <b>Cl<sup>-</sup>(aq)</b>.<br>Το θειικό οξύ (<b>H<sub>2</sub>SO<sub>4</sub></b>) περιέχεται στις μπαταρίες των αυτοκινήτων και στο νερό ελευθερώνει <b>κατιόντα υδρογόνου</b> (<b>H<sup>+</sup></b>) σύμφωνα με τη χημική εξίσωση: H<sub>2</sub>SO<sub>4</sub>(aq) &rarr; <b>2H<sup>+</sup>(aq)</b> + <b>SO<sub>4</sub><sup>2-</sup>(aq)</b>.<br>Το οξικό οξύ (<b>CH<sub>3</sub>COOH</b>) περιέχεται στο <b>ξίδι</b> και στο νερό ελευθερώνει <b>κατιόντα υδρογόνου</b> (<b>H<sup>+</sup></b>) σύμφωνα με τη χημική εξίσωση: CH<sub>3</sub>COOH(aq) &rarr; <b>H<sup>+</sup>(aq)</b> + <b>CH<sub>3</sub>COO<sup>-</sup>(aq)</b>.<br>Β. Το κοινό προϊόν της διάλυσης όλων αυτών των ουσιών είναι τα <b>κατιόντα υδρογόνου</b> (<b>H<sup>+</sup></b>).<br>Γ. Η παραγωγή αυτού του κοινού προϊόντος έχει ως αποτέλεσμα την ομαδοποίησή τους, με το κοινό όνομα <b>οξέα</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Α. Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις:<br>Το σύνολο των κοινών ........ των βάσεων ονομάζεται ........ χαρακτήρας και οφείλεται στην παρουσία ........ ........ (........). Τα διαλύματα των βάσεων έχουν γεύση ........, αφή ........, αλλάζουν το χρώμα των ........, και διαλύουν τα ........ . Η χρήση των βάσεων απαιτεί προσοχή, γιατί πολλές είναι ........ .<br>Β. Όταν σε ένα διάλυμα NaOH προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης, το χρώμα του διαλύματος γίνεται ........ .",
    "a": "<span class='text-purple-300 font-bold'>Α. Το σύνολο των κοινών <b>ιδιοτήτων</b> των βάσεων ονομάζεται <b>βασικός</b> χαρακτήρας και οφείλεται στην παρουσία <b>ανιόντων υδροξειδίου</b> (<b>OH<sup>-</sup></b>). Τα διαλύματα των βάσεων έχουν γεύση <b>καυστική</b>, αφή <b>σαπωνοειδή</b>, αλλάζουν το χρώμα των <b>δεικτών</b>, και διαλύουν τα <b>λίπη</b>. Η χρήση των βάσεων απαιτεί προσοχή, γιατί πολλές είναι <b>καυστικές</b>.<br>Β. Όταν σε ένα διάλυμα NaOH προστίθενται σταγόνες του δείκτη μπλε της βρωμοθυμόλης, το χρώμα του διαλύματος γίνεται <b>μπλε</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Α. Να συμπληρώσετε τις ακόλουθες προτάσεις και χημικές εξισώσεις με την κατάλληλη λέξη, τύπο ή σύμβολο.<br>Το στερεό NaOH όταν διαλύεται στο νερό ελευθερώνει ........ ........ σύμφωνα με τη χημική εξίσωση: NaOH(s) &rarr; ........ + ........<br>Το ........ περιέχεται στο ασβεστόνερο και ελευθερώνει ........ ........ σύμφωνα με τη χημική εξίσωση: Ca(OH)<sub>2</sub>(aq) &rarr; ........ + ........<br>Το ........ είναι βάση, γιατί όταν διαλύεται στο νερό δίνει ανιόντα ........ σύμφωνα με τη χημική εξίσωση: KOH(s) &rarr; ........ + ........<br>Β. Το κοινό προϊόν της διάλυσης όλων αυτών των ουσιών είναι το ........ ........ .<br>Γ. Η παραγωγή αυτού του κοινού προϊόντος έχει ως αποτέλεσμα την ομαδοποίησή τους, με το κοινό όνομα ........ .",
    "a": "<span class='text-purple-300 font-bold'>Α. Το στερεό NaOH όταν διαλύεται στο νερό ελευθερώνει <b>ανιόντα υδροξειδίου</b> σύμφωνα με τη χημική εξίσωση: NaOH(s) &rarr; <b>Na<sup>+</sup>(aq)</b> + <b>OH<sup>-</sup>(aq)</b>.<br>Το <b>Ca(OH)<sub>2</sub></b> περιέχεται στο ασβεστόνερο και ελευθερώνει <b>ανιόντα υδροξειδίου</b> σύμφωνα με τη χημική εξίσωση: Ca(OH)<sub>2</sub>(aq) &rarr; <b>Ca<sup>2+</sup>(aq)</b> + <b>2OH<sup>-</sup>(aq)</b>.<br>Το <b>KOH</b> είναι βάση, γιατί όταν διαλύεται στο νερό δίνει ανιόντα <b>υδροξειδίου</b> σύμφωνα με τη χημική εξίσωση: KOH(s) &rarr; <b>K<sup>+</sup>(aq)</b> + <b>OH<sup>-</sup>(aq)</b>.<br>Β. Το κοινό προϊόν της διάλυσης όλων αυτών των ουσιών είναι το <b>ανιόν υδροξειδίου</b> (<b>OH<sup>-</sup></b>).<br>Γ. Η παραγωγή αυτού του κοινού προϊόντος έχει ως αποτέλεσμα την ομαδοποίησή τους, με το κοινό όνομα <b>βάσεις</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Α. Να χαρακτηρίσετε τις ακόλουθες ενώσεις ως βάσεις ή οξέα, γράφοντας ένα Ο για κάθε οξύ και ένα Β για κάθε βάση στο αντίστοιχο τετράγωνο.<br>KOH [ ], HCl [ ], NH<sub>3</sub> [ ], H<sub>2</sub>SO<sub>4</sub> [ ], Ca(OH)<sub>2</sub> [ ]<br>Β. Από τις προηγούμενες ενώσεις διαλύουν τα λίπη οι ................<br>Γ. Από τις προηγούμενες ενώσεις αντιδρούν με δραστικά μέταλλα οι ................ και εκλύουν αέριο ................ που ................<br>Δ. Από τις προηγούμενες ενώσεις διαλύουν το μάρμαρο οι ................ και εκλύουν αέριο ................ που ................",
    "a": "<span class='text-purple-300 font-bold'>Α. KOH: <b>Β</b>, HCl: <b>Ο</b>, NH<sub>3</sub>: <b>Β</b>, H<sub>2</sub>SO<sub>4</sub>: <b>Ο</b>, Ca(OH)<sub>2</sub>: <b>Β</b><br>Β. Από τις προηγούμενες ενώσεις διαλύουν τα λίπη οι <b>KOH, NH<sub>3</sub> και Ca(OH)<sub>2</sub></b>.<br>Γ. Από τις προηγούμενες ενώσεις αντιδρούν με δραστικά μέταλλα οι <b>HCl, H<sub>2</sub>SO<sub>4</sub></b> και εκλύουν αέριο <b>υδρογόνο</b> που <b>καίγεται με κρότο</b>.<br>Δ. Από τις προηγούμενες ενώσεις διαλύουν το μάρμαρο οι <b>HCl, H<sub>2</sub>SO<sub>4</sub></b> και εκλύουν αέριο <b>CO<sub>2</sub></b> που <b>σβήνει τη φλόγα του κεριού</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις:<br>Α. Το μέτρο της οξύτητας των διαλυμάτων είναι το ........ του διαλύματος, το οποίο εξαρτάται από το ........ των ........ του διαλύματος. Στο απιονισμένο νερό το πλήθος των κατιόντων υδρογόνου είναι ........ με το πλήθος των ........ ........ και το pH του διαλύματος είναι ........, στους 25°C. Σε ένα διάλυμα που περιέχει KOH το pH του διαλύματος είναι ........ από ........, στους 25°C. Σε ένα διάλυμα που περιέχει HCl το pH του διαλύματος είναι ........ από ........, στους 25°C. Όσο ........ είναι το pH ενός διαλύματος, τόσο πιο ........ είναι. Όσο ........ είναι το pH ενός διαλύματος, τόσο πιο ........ είναι.<br>Β. Όταν σε ένα διάλυμα HCl προστεθεί νερό, δηλαδή αραιωθεί, το pH του διαλύματος ........, ενώ αν προστεθεί μικρή ποσότητα HCl, το pH του διαλύματος ........ .<br>Γ. Όταν σε ένα διάλυμα NH<sub>3</sub> προστεθεί νερό, δηλαδή αραιωθεί, το pH του διαλύματος ........, ενώ αν προστεθεί μικρή ποσότητα NH<sub>3</sub>, το pH του διαλύματος ........ .",
    "a": "<span class='text-purple-300 font-bold'>Α. Το μέτρο της οξύτητας των διαλυμάτων είναι το <b>pH</b> του διαλύματος, το οποίο εξαρτάται από το <b>πλήθος</b> των <b>H<sup>+</sup></b> του διαλύματος. Στο απιονισμένο νερό το πλήθος των κατιόντων υδρογόνου είναι <b>ίσο</b> με το πλήθος των <b>ανιόντων υδροξειδίου</b> και το pH του διαλύματος είναι <b>7</b>, στους 25°C. Σε ένα διάλυμα που περιέχει KOH το pH του διαλύματος είναι <b>μεγαλύτερο</b> από <b>7</b>, στους 25°C. Σε ένα διάλυμα που περιέχει HCl το pH του διαλύματος είναι <b>μικρότερο</b> από <b>7</b>, στους 25°C. Όσο <b>μικρότερο</b> είναι το pH ενός διαλύματος, τόσο πιο <b>όξινο</b> είναι. Όσο <b>μεγαλύτερο</b> είναι το pH ενός διαλύματος, τόσο πιο <b>αλκαλικό</b> είναι.<br>Β. Όταν σε ένα διάλυμα HCl προστεθεί νερό, δηλαδή αραιωθεί, το pH του διαλύματος <b>αυξάνεται</b>, ενώ αν προστεθεί μικρή ποσότητα HCl, το pH του διαλύματος <b>ελαττώνεται</b>.<br>Γ. Όταν σε ένα διάλυμα NH<sub>3</sub> προστεθεί νερό, δηλαδή αραιωθεί, το pH του διαλύματος <b>ελαττώνεται</b>, ενώ αν προστεθεί μικρή ποσότητα NH<sub>3</sub>, το pH του διαλύματος <b>αυξάνεται</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Στον διπλανό πίνακα δίνονται διάφορα διαλύματα ή γαλακτώματα και οι αντίστοιχες τιμές pH τους. Να διατάξετε τα υγρά από το πιο όξινο προς το πιο βασικό.<br><br><table class='w-full text-left border-collapse my-4 border border-white/20'><thead><tr class='border-b border-white/20'><th>Διάλυμα/γαλάκτωμα</th><th>pH</th><th>Διάλυμα/γαλάκτωμα</th><th>pH</th></tr></thead><tbody><tr class='border-b border-white/20'><td>1. HCl 36,5 g/L</td><td>0,0</td><td>6. σόδα φαγητού</td><td>8,4</td></tr><tr class='border-b border-white/20'><td>2. οδοντόκρεμα</td><td>9,9</td><td>7. νερό βροχής</td><td>6,5</td></tr><tr class='border-b border-white/20'><td>3. γαστρικό υγρό</td><td>1,0-2,0</td><td>8. γάλα</td><td>6,6</td></tr><tr class='border-b border-white/20'><td>4. NaOH 40 g/L</td><td>14,0</td><td>9. αίμα</td><td>7,4</td></tr><tr class='border-b border-white/20'><td>5. καφές</td><td>5,0</td><td>10. γάλα μαγνησίας</td><td>10,5</td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'>Η διάταξη των διαλυμάτων από το πιο όξινο προς το πιο βασικό (με αύξουσα σειρά pH) είναι η εξής:<br>1 (HCl), 3 (γαστρικό υγρό), 5 (καφές), 7 (νερό βροχής), 8 (γάλα), 9 (αίμα), 6 (σόδα φαγητού), 2 (οδοντόκρεμα), 10 (γάλα μαγνησίας), 4 (NaOH).<br>Δηλαδή η σειρά: 1, 3, 5, 7, 8, 9, 6, 2, 10, 4.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Τι μεταβολή υφίσταται το pH του νερού της βρύσης, αν του προστεθεί μικρή ποσότητα χυμού λεμονιού; Να αιτιολογήσετε την απάντησή σας.",
    "a": "<span class='text-purple-300 font-bold'>Το νερό της βρύσης έχει ελαφρά αλκαλικό pH ενώ ο χυμός λεμονιού έχει όξινο pH. Με την προσθήκη όξινου διαλύματος στο νερό, αυξάνεται η συγκέντρωση των κατιόντων υδρογόνου. Επομένως το pH του νερού της βρύσης θα ελαττωθεί.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να μετρήσετε χρησιμοποιώντας πεχαμετρικό χαρτί (θεωρητικά) τις τιμές pH των παρακάτω διαλυμάτων: α. πορτοκαλάδα, β. μπίρα, γ. ξίδι, δ. σιρόπι κομπόστας. Στη συνέχεια να τα διατάξετε ξεκινώντας από το πιο όξινο.",
    "a": "<span class='text-purple-300 font-bold'>Η διάταξη από το πιο όξινο (χαμηλότερο pH) προς το λιγότερο όξινο είναι: Ξίδι, πορτοκαλάδα, σιρόπι κομπόστας, μπίρα.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να συμπληρώσετε τα κενά στις παρακάτω προτάσεις:<br>Α. Σε ένα διάλυμα Δ1, KOH, προσθέτουμε σταγόνες του δείκτη μπλε της βρωμοθυμόλης και το διάλυμα αποκτά ........ χρώμα. Στο διάλυμα προσθέτουμε σταγόνα – σταγόνα διάλυμα HCl, οπότε κάποια στιγμή αποκτά ........ χρώμα, γιατί τα ........ του αρχικού διαλύματος ........ από τα ........ του διαλύματος HCl σύμφωνα με τη χημική εξίσωση: ........(aq) + ........(aq) &rarr; ........(l) και το διάλυμα Δ2 που σχηματίζεται έχει pH=........ στους 25°C. Η αντίδραση αυτή ονομάζεται ........ . Αν συνεχίσουμε να προσθέτουμε διάλυμα HCl, το χρώμα του διαλύματος θα γίνει ........, γιατί στο διάλυμα Δ3 θα περισσεύουν ........ και το pH θα είναι ........ από 7 στους 25°C.<br>Β. Στο διάλυμα Δ2 υπάρχουν ακόμη κατιόντα ........ και ανιόντα ........ . Αν το διάλυμα θερμανθεί, ώστε να εξατμιστεί όλο το νερό θα σχηματιστεί ένα λευκό ........, το ........ ........ ........ με τύπο: ........, το οποίο είναι ένα ........ . Τα άλατα παράγονται κατά την ........ ενός οξέος από μία ........ . Αν είναι ευδιάλυτα, όπως το KCl, για να τα παραλάβουμε από το διάλυμα πρέπει να ........ το νερό. Αν είναι δυσδιάλυτα, όπως το BaSO<sub>4</sub> καταβυθίζονται ως ........ και τα παραλαμβάνουμε με ........ .<br>Γ. Το μαγειρικό αλάτι αποτελείται από κατιόντα ........ (........) και ανιόντα ........ (........). Στο εργαστήριο μπορεί να παρασκευαστεί, αν αναμειχθεί ένα διάλυμα ........ ........ με ένα διάλυμα ........ ........ ........ και αν στη συνέχεια ........ το διάλυμα που σχηματίστηκε, ώστε να εξαερωθεί όλο το νερό.<br>Οι χημικές εξισώσεις που περιγράφουν τις αντιδράσεις οι οποίες πραγματοποιούνται όταν αναμειγνύονται τα διαλύματα είναι:<br>........(aq) + ........(aq) &rarr; ........(l) [εξουδετέρωση]<br>........(aq) + ........(aq) &rarr; ........<br>Το αλάτι ως προς τη φυσική του κατάσταση, είναι ........ και ........ και έχει ........ χρώμα. Η γεύση του είναι ........ και χρησιμοποιείται για να ........ τα φαγητά, να ........ ορισμένα τρόφιμα και ως ........ στους δρόμους.<br>Όταν διαλύεται στο νερό, ο κρύσταλλός του καταστρέφεται και ελευθερώνονται πάλι τα ιόντα ........ και ........, όπως δείχνει η χημική εξίσωση: ........(s) &rarr; ........(aq) + ........(aq). Το αλάτι περιέχεται στο ........ ........ , από όπου και μπορεί να παραληφθεί σε αβαθείς περιοχές, οι οποίες ονομάζονται ........ .",
    "a": "<span class='text-purple-300 font-bold'>Α. Σε ένα διάλυμα Δ1, KOH, προσθέτουμε σταγόνες του δείκτη μπλε της βρωμοθυμόλης και το διάλυμα αποκτά <b>μπλε</b> χρώμα. Στο διάλυμα προσθέτουμε σταγόνα – σταγόνα διάλυμα HCl, οπότε κάποια στιγμή αποκτά <b>πράσινο</b> χρώμα, γιατί τα <b>OH<sup>-</sup></b> του αρχικού διαλύματος <b>εξουδετερώνονται</b> από τα <b>H<sup>+</sup></b> του διαλύματος HCl σύμφωνα με τη χημική εξίσωση: <b>H<sup>+</sup></b>(aq) + <b>OH<sup>-</sup></b>(aq) &rarr; <b>H<sub>2</sub>O</b>(l) και το διάλυμα Δ2 που σχηματίζεται έχει pH=<b>7</b> στους 25°C. Η αντίδραση αυτή ονομάζεται <b>εξουδετέρωση</b>. Αν συνεχίσουμε να προσθέτουμε διάλυμα HCl, το χρώμα του διαλύματος θα γίνει <b>κίτρινο</b>, γιατί στο διάλυμα Δ3 θα περισσεύουν <b>H<sup>+</sup></b> και το pH θα είναι <b>μικρότερο</b> από 7 στους 25°C.<br><br>Β. Στο διάλυμα Δ2 υπάρχουν ακόμη κατιόντα <b>K<sup>+</sup></b> και ανιόντα <b>Cl<sup>-</sup></b>. Αν το διάλυμα θερμανθεί, ώστε να εξατμιστεί όλο το νερό θα σχηματιστεί ένα λευκό <b>στερεό</b>, το <b>χλωρίδιο του καλίου</b> με τύπο: <b>KCl</b>, το οποίο είναι ένα <b>άλας</b>. Τα άλατα παράγονται κατά την <b>εξουδετέρωση</b> ενός οξέος από μία <b>βάση</b>. Αν είναι ευδιάλυτα, όπως το KCl, για να τα παραλάβουμε από το διάλυμα πρέπει να <b>εξατμιστεί</b> το νερό. Αν είναι δυσδιάλυτα, όπως το BaSO<sub>4</sub> καταβυθίζονται ως <b>ίζημα</b> και τα παραλαμβάνουμε με <b>διήθηση</b>.<br><br>Γ. Το μαγειρικό αλάτι αποτελείται από κατιόντα <b>νατρίου</b> (<b>Na<sup>+</sup></b>) και ανιόντα <b>χλωρίου</b> (<b>Cl<sup>-</sup></b>). Στο εργαστήριο μπορεί να παρασκευαστεί, αν αναμειχθεί ένα διάλυμα <b>υδροχλωρικού οξέος</b> με ένα διάλυμα <b>υδροξειδίου του νατρίου</b> και αν στη συνέχεια <b>θερμάνουμε</b> το διάλυμα που σχηματίστηκε, ώστε να εξαερωθεί όλο το νερό.<br>Οι χημικές εξισώσεις που περιγράφουν τις αντιδράσεις οι οποίες πραγματοποιούνται όταν αναμειγνύονται τα διαλύματα είναι:<br><b>H<sup>+</sup></b>(aq) + <b>OH<sup>-</sup></b>(aq) &rarr; <b>H<sub>2</sub>O</b>(l) [εξουδετέρωση]<br><b>Na<sup>+</sup></b>(aq) + <b>Cl<sup>-</sup></b>(aq) &rarr; <b>NaCl</b>(aq)<br>Το αλάτι ως προς τη φυσική του κατάσταση, είναι <b>κρυσταλλικό</b> και <b>στερεό</b> και έχει <b>λευκό</b> χρώμα. Η γεύση του είναι <b>αλμυρή</b> και χρησιμοποιείται για να <b>νοστιμίσει</b> τα φαγητά, να <b>συντηρήσει</b> ορισμένα τρόφιμα και ως <b>αντιπαγωτικό</b> στους δρόμους.<br>Όταν διαλύεται στο νερό, ο κρύσταλλός του καταστρέφεται και ελευθερώνονται πάλι τα ιόντα <b>Na<sup>+</sup></b> και <b>Cl<sup>-</sup></b>, όπως δείχνει η χημική εξίσωση: <b>NaCl</b>(s) &rarr; <b>Na<sup>+</sup></b>(aq) + <b>Cl<sup>-</sup></b>(aq). Το αλάτι περιέχεται στο <b>θαλασσινό νερό</b>, από όπου και μπορεί να παραληφθεί σε αβαθείς περιοχές, οι οποίες ονομάζονται <b>αλυκές</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Τα τσιμπήματα των εντόμων είναι οδυνηρά γιατί διοχετεύουν δηλητήριο κάτω από το δέρμα. Η μέλισσα με το κεντρί της διοχετεύει δηλητήριο που περιέχει οξύ κάτω από το δέρμα, ενώ η σφήκα δηλητήριο που περιέχει βάση. Να επιλέξετε και να εξηγήσετε ποιο από τα διαλύματα του παρακάτω πίνακα θα χρησιμοποιήσετε κάθε φορά για να εξουδετερώσετε το τσίμπημα: α. της μέλισσας; β. της σφήκας;<br><table class='w-full text-left border-collapse my-4 border border-white/20'><thead><tr class='border-b border-white/20'><th>Είδος διαλύματος</th><th>pH</th></tr></thead><tbody><tr class='border-b border-white/20'><td>i. διάλυμα A: HCl</td><td>0,0</td></tr><tr class='border-b border-white/20'><td>ii. διάλυμα B: ξίδι</td><td>3,5</td></tr><tr class='border-b border-white/20'><td>iii. διάλυμα Γ: νερό</td><td>7,0</td></tr><tr class='border-b border-white/20'><td>iv. διάλυμα Δ: NH<sub>3</sub></td><td>11,0</td></tr></tbody></table>",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>α. Η μέλισσα με το κεντρί της διοχετεύει δηλητήριο που περιέχει <b>οξύ</b>, οπότε πρέπει να χρησιμοποιήσουμε ένα <b>διάλυμα βάσης</b> ώστε να το εξουδετερώσουμε. Επομένως θα χρησιμοποιήσουμε το <b>διάλυμα Δ</b> (αμμωνία, NH<sub>3</sub>).</li><li class='mb-2'>β. Η σφήκα με το κεντρί της διοχετεύει δηλητήριο που περιέχει <b>βάση</b>, οπότε πρέπει να χρησιμοποιήσουμε ένα <b>διάλυμα οξέος</b> ώστε να το εξουδετερώσουμε. Θα επιλέξουμε το <b>διάλυμα Β (ξίδι)</b> και όχι το Α (HCl) καθώς αυτό είναι πάρα πολύ ισχυρό (pH=0) και θα προκαλέσει χημικό έγκαυμα στο δέρμα μας.</li></ul></span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Ο Ίον και η Όλη μέτρησαν το pH τριών διαλυμάτων στο σχολικό εργαστήριο και βρήκαν τα εξής αποτελέσματα:<br><table class='w-full text-left border-collapse my-4 border border-white/20'><thead><tr class='border-b border-white/20'><th>Είδος διαλύματος</th><th>pH</th></tr></thead><tbody><tr class='border-b border-white/20'><td>i. διάλυμα Α</td><td>2,50</td></tr><tr class='border-b border-white/20'><td>ii. διάλυμα Β</td><td>3,50</td></tr><tr class='border-b border-white/20'><td>iii. διάλυμα Γ</td><td>7,00</td></tr><tr class='border-b border-white/20'><td>iv. διάλυμα Δ</td><td>11,20</td></tr></tbody></table><br>Να απαντήσετε στις ακόλουθες ερωτήσεις αιτιολογώντας την απάντησή σας.<br>Α. Τι χρησιμοποίησαν για να μετρήσουν το pH των διαλυμάτων;<br>Β. Ποιο από τα διαλύματα είναι το πιο όξινο και ποιο το πιο βασικό;<br>Γ. Αν γνωρίζουμε ότι ένα από τα διαλύματα είναι απιονισμένο νερό και τα υπόλοιπα περιέχουν NH<sub>3</sub> 1,7 % w/v, CH<sub>3</sub>COOH 6,0 % w/v, CH<sub>3</sub>COOH 0,06 % w/v, να αντιστοιχίσετε τα διαλύματα στις ουσίες που περιέχουν.<br>Δ. Θα υποστεί μεταβολή το pH του διαλύματος Δ, αν η Όλη προσθέσει σε αυτό το διάλυμα Δ1; (εννοείται ανάμειξη με άλλο διάλυμα)<br>Ε. Μπορείτε να προβλέψετε το pH του τελικού διαλύματος που θα προκύψει αν αναμειχθούν τα διαλύματα Α και Β;",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Έχουν χρησιμοποιήσει <b>πεχάμετρο</b>, καθώς παρατηρούμε ότι οι τιμές pH που έχουν καταγράψει έχουν μεγάλη ακρίβεια (δύο δεκαδικά ψηφία), κάτι που δεν επιτυγχάνεται με το πεχαμετρικό χαρτί ή τους δείκτες.</li><li class='mb-2'>Β. Το πιο όξινο είναι το <b>διάλυμα Α</b> (μικρότερη τιμή pH), ενώ το πιο βασικό είναι το <b>διάλυμα Δ</b> (μεγαλύτερη τιμή pH).</li><li class='mb-2'>Γ. Το απιονισμένο νερό είναι το <b>Γ (pH=7)</b>. Το μοναδικό διάλυμα με βασικό pH είναι το Δ, οπότε αυτό είναι το <b>διάλυμα NH<sub>3</sub> 1,7% w/v</b>. Ανάμεσα στα δύο διαλύματα οξέος (CH<sub>3</sub>COOH), αυτό με τη μεγαλύτερη περιεκτικότητα (6,0% w/v) θα έχει περισσότερα H<sup>+</sup> σε ορισμένο όγκο, άρα μικρότερο pH. Επομένως το <b>διάλυμα Α</b> είναι το διάλυμα CH<sub>3</sub>COOH 6,0% w/v, ενώ το <b>διάλυμα Β</b> είναι το διάλυμα CH<sub>3</sub>COOH 0,06% w/v.</li><li class='mb-2'>Δ. Το διάλυμα που θα προκύψει θα έχει <b>διαφορετικό pH</b>, καθώς αναμειγνύονται διαλύματα στα οποία διαφέρει το πλήθος των κατιόντων υδρογόνου ή ανιόντων OH<sup>-</sup> σε ορισμένο όγκο διαλύματος.</li><li class='mb-2'>Ε. Το pH του τελικού διαλύματος που θα προκύψει από την ανάμειξη των Α και Β θα έχει τιμή ενδιάμεση στις τιμές pH των δύο αρχικών διαλυμάτων. Δηλαδή θα έχει <b>2,5 &lt; pH &lt; 3,5</b>.</li></ul></span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Όταν διαλύεται H<sub>2</sub>SO<sub>4</sub> στο νερό, πραγματοποιείται η αντίδραση που περιγράφεται από τη χημική εξίσωση: ........(aq) &rarr; ........(aq) + ........(aq).<br>Όταν διαλύεται Ba(OH)<sub>2</sub> στο νερό, πραγματοποιείται η αντίδραση που περιγράφεται από τη χημική εξίσωση: ........(aq) &rarr; ........(aq) + ........(aq).<br>Αν αναμειχθεί το διάλυμα του θειικού οξέος με το διάλυμα υδροξειδίου του βαρίου, πραγματοποιούνται οι αντιδράσεις που περιγράφονται από τις χημικές εξισώσεις:<br>........(aq) + ........(aq) &rarr; ........(l) [........] και<br>........(aq) + ........(aq) &rarr; ........(s)<br>Το άλας που σχηματίζεται είναι το ........ ........ και καταβυθίζεται, γιατί είναι ........ και μπορεί να παραληφθεί με ........ .",
    "a": "<span class='text-purple-300 font-bold'>Όταν διαλύεται H<sub>2</sub>SO<sub>4</sub> στο νερό, πραγματοποιείται η αντίδραση που περιγράφεται από τη χημική εξίσωση: <b>H<sub>2</sub>SO<sub>4</sub></b>(aq) &rarr; <b>2H<sup>+</sup></b>(aq) + <b>SO<sub>4</sub><sup>2-</sup></b>(aq).<br>Όταν διαλύεται Ba(OH)<sub>2</sub> στο νερό, πραγματοποιείται η αντίδραση που περιγράφεται από τη χημική εξίσωση: <b>Ba(OH)<sub>2</sub></b>(aq) &rarr; <b>Ba<sup>2+</sup></b>(aq) + <b>2OH<sup>-</sup></b>(aq).<br>Αν αναμειχθεί το διάλυμα του θειικού οξέος με το διάλυμα υδροξειδίου του βαρίου, πραγματοποιούνται οι αντιδράσεις που περιγράφονται από τις χημικές εξισώσεις:<br><b>H<sup>+</sup></b>(aq) + <b>OH<sup>-</sup></b>(aq) &rarr; <b>H<sub>2</sub>O</b>(l) [<b>εξουδετέρωση</b>].<br><b>Ba<sup>2+</sup></b>(aq) + <b>SO<sub>4</sub><sup>2-</sup></b>(aq) &rarr; <b>BaSO<sub>4</sub></b>(s).<br>Το άλας που σχηματίζεται είναι το <b>θειικό βάριο</b> και καταβυθίζεται, γιατί είναι <b>δυσδιάλυτο</b> και μπορεί να παραληφθεί με <b>διήθηση</b>.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "α. Να εξηγήσετε ποιες χημικές ενώσεις ονομάζονται άλατα.<br>β. Να κυκλώσετε όσες από τις ακόλουθες ενώσεις είναι άλατα και να εξηγήσετε με ποια κριτήρια αποφασίσατε: 1. Na<sub>2</sub>CO<sub>3</sub>, 2. H<sub>2</sub>SO<sub>4</sub>, 3. ZnCl<sub>2</sub>, 4. KOH, 5. Ca(OH)<sub>2</sub>, 6. KBr, 7. MgCO<sub>3</sub>, 8. CaSO<sub>4</sub><br>Γ. Η Όλη και ο Ίον χρειάζονται KBr για να το χρησιμοποιήσουν σαν λίπασμα σε μια μηλιά που φαίνεται να μην είναι σε καλή κατάσταση. Το KBr είναι ένα ευδιάλυτο άλας. Να προτείνετε μία διαδικασία με την οποία μπορούν να το παρασκευάσουν, αν έχετε διαθέσιμα τα διπλανά αντιδραστήρια.<br>Δ. Να προτείνετε μία διαδικασία με την οποία μπορούν να παρασκευάσουν CaSO<sub>4</sub>, το οποίο είναι δυσδιάλυτο, αν έχετε διαθέσιμα τα διπλανά αντιδραστήρια.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Άλας ονομάζεται κάθε χημική ένωση η οποία αποτελείται από ιόντα και μπορεί να προκύψει από την αντίδραση ενός οξέος με μία βάση.</li><li class='mb-2'>Β. Άλατα είναι οι ενώσεις: 1. <b>Na<sub>2</sub>CO<sub>3</sub></b>, 3. <b>ZnCl<sub>2</sub></b>, 6. <b>KBr</b>, 7. <b>MgCO<sub>3</sub></b> και 8. <b>CaSO<sub>4</sub></b>. (Τα υπόλοιπα είναι οξέα και βάσεις).</li><li class='mb-2'>Γ. Για να παρασκευάσουν βρωμίδιο του καλίου (KBr) μπορούν να αναμείξουν το διάλυμα HBr με το διάλυμα KOH με τη βοήθεια του δείκτη μπλε της βρωμοθυμόλης, ώστε να διαπιστώσουν την πλήρη εξουδετέρωση των διαλυμάτων. Αυτό θα πραγματοποιηθεί όταν ο δείκτης αποκτήσει πράσινο χρώμα. Στη συνέχεια μπορούν να παραλάβουν το άλας όταν θερμάνουν το διάλυμα ώστε να απομακρυνθεί το νερό και παραμείνει στον πυθμένα του ποτηριού ζέσεως το στερεό KBr.</li><li class='mb-2'>Δ. Για να παρασκευάσουν CaSO<sub>4</sub> μπορούν να αναμείξουν ένα διάλυμα H<sub>2</sub>SO<sub>4</sub> με ένα διάλυμα Ca(OH)<sub>2</sub> καθώς θα σχηματιστεί ένα λευκό και κρυσταλλικό στερεό στον πυθμένα του ποτηριού ζέσεως, γιατί το θειικό ασβέστιο (CaSO<sub>4</sub>) είναι δυσδιάλυτο και καταβυθίζεται ως ίζημα το οποίο μπορούν να παραλάβουν με διήθηση.</li></ul></span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Το ξίδι παρασκευάζεται από «αδύνατο κρασί» με την βοήθεια ενζύμων κατά την οξική ζύμωση. Χρησιμοποιείται για να δώσει ευχάριστη γεύση στις ........ και σε ορισμένα φαγητά, αλλά και για τη συντήρηση ορισμένων τροφίμων, όπως τα ........ (........). Το ξίδι είναι υδατικό διάλυμα ........ οξέος με περιεκτικότητα περίπου 7% w/v και pH περίπου: Α. 12, Β. 7, Γ. 3 (επιλέξτε: ........). Αν προσθέσουμε στη σαλάτα 5 mL ξίδι θα καταναλώσουμε ........ g οξικού οξέος. Ένα μπουκάλι ξίδι του εμπορίου όγκου 250 mL περιέχει ........ g οξικού οξέος. 35 g οξικού οξέος περιέχονται σε ........ μπουκάλια ξίδι του εμπορίου όγκου 250 mL.",
    "a": "<span class='text-purple-300 font-bold'>Το ξίδι παρασκευάζεται από «αδύνατο κρασί» με την βοήθεια ενζύμων κατά την οξική ζύμωση. Χρησιμοποιείται για να δώσει ευχάριστη γεύση στις <b>σαλάτες</b> και σε ορισμένα φαγητά, αλλά και για τη συντήρηση ορισμένων τροφίμων, όπως τα <b>λαχανικά</b> (<b>τουρσί</b>). Το ξίδι είναι υδατικό διάλυμα <b>οξικού</b> οξέος με περιεκτικότητα περίπου 7% w/v και pH περίπου: <b>Γ. 3</b>. Αν προσθέσουμε στη σαλάτα 5 mL ξίδι θα καταναλώσουμε <b>0,35</b> g οξικού οξέος. Ένα μπουκάλι ξίδι του εμπορίου όγκου 250 mL περιέχει <b>17,5</b> g οξικού οξέος. 35 g οξικού οξέος περιέχονται σε <b>δύο</b> μπουκάλια ξίδι του εμπορίου όγκου 250 mL.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Στις ακόλουθες ερωτήσεις να επιλέξετε τη σωστή απάντηση.<br>Α. Το μύρτιλλο είναι από τα λίγα φυτά που ευδοκιμεί σε εδάφη όξινα. Το pH ενός εδάφους κατάλληλου για την καλλιέργεια μύρτιλλου μπορεί να είναι: (i: 4,2-5,0, ii: 13,0-14,0, iii: 7,0-8,0). Αν το διαθέσιμο έδαφος έχει pH=7,2 θα πρέπει να χρησιμοποιηθεί για την εξουδετέρωσή του: (iv: Ca(OH)<sub>2</sub>, v: HCl, vi: NH<sub>3</sub>)<br>Β. Τα άλατα χρησιμοποιούνται: i. στα δομικά υλικά, ii. στα τρόφιμα ως συντηρητικά, iii. λιπάσματα, iv. σε όλα τα προηγούμενα.<br>Γ. Οι βάσεις χρησιμοποιούνται: i. στα αντιόξινα σκευάσματα, ii. καθαριστικά τζαμιών, iii. για την παρασκευή σαπουνιών, iv. όλα τα προηγούμενα.<br>Δ. Για την όξινη βροχή ευθύνονται: i. τα άλατα, ii. τα οξείδια του θείου και του αζώτου, iii. οι βάσεις, iv. τα λιπάσματα.<br>Ε. Για τον καθαρισμό των δύσκολων λεκέδων από λίπη χρησιμοποιείται: i. HCl, ii. NH<sub>3</sub>, iii. NaOH, iv. HNO<sub>3</sub>.<br>Στ. Για τον καθαρισμό της πέτρας που συσσωρεύεται στις τουαλέτες χρησιμοποιείται: i. HCl, ii. NH<sub>3</sub>, iii. NaOH, iv. Ξίδι.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Σωστή απάντηση: <b>i</b> (όξινο pH). Για το διαθέσιμο έδαφος (pH=7,2 ελαφρώς βασικό), σωστή απάντηση: <b>v</b> (απαιτείται οξύ, HCl).</li><li class='mb-2'>Β. Σωστή απάντηση: <b>iv</b> (σε όλα τα προηγούμενα).</li><li class='mb-2'>Γ. Σωστή απάντηση: <b>iv</b> (όλα τα προηγούμενα).</li><li class='mb-2'>Δ. Σωστή απάντηση: <b>ii</b> (τα οξείδια του θείου και του αζώτου).</li><li class='mb-2'>Ε. Σωστή απάντηση: <b>iii</b> (NaOH, αποτελεσματικό στη διάλυση λιπών).</li><li class='mb-2'>Στ. Σωστή απάντηση: <b>i</b> (HCl, κατάλληλο για καθαρισμό πέτρας / αλάτων).</li></ul></span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Συμπληρώστε τις παρακάτω αντιδράσεις καθίζησης:<br>Διάλυμα κατιόντων Ag<sup>+</sup> + διάλυμα ανιόντων χλωρίου (Cl<sup>-</sup>) &rarr; δυσδιάλυτο ίζημα ........ ........ χρώματος.<br>Διάλυμα κατιόντων αργύρου (Ag<sup>+</sup>) + διάλυμα ανιόντων ιωδίου (I<sup>-</sup>) &rarr; δυσδιάλυτο ίζημα ........ ........ χρώματος.",
    "a": "<span class='text-purple-300 font-bold'>Διάλυμα κατιόντων Ag<sup>+</sup> + διάλυμα ανιόντων χλωρίου &rarr; δυσδιάλυτο ίζημα <b>AgCl λευκού</b> χρώματος.<br>Διάλυμα κατιόντων αργύρου + διάλυμα ανιόντων ιωδίου &rarr; δυσδιάλυτο ίζημα <b>AgI κίτρινου</b> χρώματος.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Να παρατηρήσετε το τμήμα του περιοδικού πίνακα και στη συνέχεια να συμπληρώσετε τις προτάσεις, ώστε να είναι ορθές:<br><table class='w-full text-center border-collapse my-4 border border-white/20'><tbody><tr class='border-b border-white/20'><td class='bg-red-500'>H</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class='bg-purple-500'>He</td></tr><tr class='border-b border-white/20'><td class='bg-red-500'>Li</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class='bg-blue-300'>Al</td><td></td><td></td><td class='bg-green-300'>F</td><td class='bg-purple-500'>Ne</td></tr><tr class='border-b border-white/20'><td class='bg-red-500'>Na</td><td class='bg-orange-500'>Mg</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class='bg-green-300'>Cl</td><td class='bg-purple-500'>Ar</td></tr><tr class='border-b border-white/20'><td class='bg-red-500'>K</td><td class='bg-orange-500'>Ca</td><td></td><td></td><td></td><td class='bg-teal-500'>Fe</td><td></td><td></td><td></td><td></td><td class='bg-teal-500'>Cu</td><td class='bg-teal-500'>Zn</td><td></td><td></td><td></td><td></td><td class='bg-green-300'>Br</td><td class='bg-purple-500'>Kr</td></tr><tr class='border-b border-white/20'><td></td><td class='bg-orange-500'>Ba</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class='bg-green-300'>I</td><td class='bg-purple-500'>Xe</td></tr></tbody></table><br>Α. Στο τμήμα του Περιοδικού Πίνακα μέταλλα είναι τα στοιχεία: ........ και αμέταλλα είναι τα στοιχεία: ........<br>Β. Μέταλλα είναι τα στοιχεία: ........<br>Γ. Αλκάλια είναι τα στοιχεία: ........<br>Δ. Αλκαλικές γαίες είναι τα στοιχεία: ........<br>Ε. Σε ότι αφορά στη φυσική τους κατάσταση τα μέταλλα είναι όλα ........, εκτός από τον ........ που είναι ........<br>ΣΤ. Ένα μέταλλο που είναι πιο δραστικό από το H<sub>2</sub>, αντιδρά με τα ........ και ελευθερώνει αέριο ........, σύμφωνα με τη χημική εξίσωση: Zn(s) + 2H<sup>+</sup>(aq) &rarr; ........ + ........<br>Ζ. Ένα μέταλλο που είναι πιο δραστικό από ένα άλλο μέταλλο, μπορεί να το αντικαταστήσει: Zn(s) + Cu<sup>2+</sup>(aq) &rarr; ........ + ........",
    "a": "<span class='text-purple-300 font-bold'>Α. Στο τμήμα του Περιοδικού Πίνακα μέταλλα είναι τα στοιχεία: <b>Li, Na, K, Mg, Ca, Ba, Fe, Cu, Zn, Al</b> και αμέταλλα είναι τα στοιχεία: <b>F, Cl, Br, I</b> (όπως και <b>He, Ne, Ar, Kr, Xe, H</b>).<br>Β. Μέταλλα είναι τα στοιχεία: <b>Li, Na, K, Mg, Ca, Ba, Fe, Cu, Zn, Al</b>.<br>Γ. Αλκάλια είναι τα στοιχεία: <b>Li, Na και K</b>.<br>Δ. Αλκαλικές γαίες είναι τα στοιχεία: <b>Mg, Ca και Ba</b>.<br>Ε. Σε ότι αφορά στη φυσική τους κατάσταση τα μέταλλα είναι όλα <b>στερεά</b>, εκτός από τον <b>υδράργυρο (Hg)</b> που είναι <b>υγρός</b>.<br>ΣΤ. Ένα μέταλλο που είναι πιο δραστικό από το H<sub>2</sub>, αντιδρά με τα <b>οξέα</b> και ελευθερώνει αέριο <b>υδρογόνο</b>, σύμφωνα με τη χημική εξίσωση: Zn(s) + 2H<sup>+</sup>(aq) &rarr; <b>Zn<sup>2+</sup>(aq)</b> + <b>H<sub>2</sub>(g)</b>.<br>Ζ. Ένα μέταλλο που είναι πιο δραστικό από ένα άλλο μέταλλο, μπορεί να το αντικαταστήσει: Zn(s) + Cu<sup>2+</sup>(aq) &rarr; <b>Zn<sup>2+</sup>(aq)</b> + <b>Cu(s)</b>.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Για τα μέταλλα του παραπάνω τμήματος του Περιοδικού Πίνακα γνωρίζουμε ότι: Το Ca μπορεί να αντικαταστήσει το Mg και το Na στις ενώσεις τους. Το K μπορεί να αντικαταστήσει το Ca και το Na στις ενώσεις τους. Ο Zn αντικαθιστά το Fe στις ενώσεις του, αλλά αντικαθίσταται από το Mg. Ο Fe αντιδρά με τα οξέα και ελευθερώνει H<sub>2</sub>, ενώ ο χαλκός όχι. Να διατάξετε τα στοιχεία από το λιγότερο προς το περισσότερο δραστικό.",
    "a": "<span class='text-purple-300 font-bold'>Η διάταξη των στοιχείων από το λιγότερο προς το περισσότερο δραστικό είναι η εξής:<br><b>Cu, H<sub>2</sub>, Fe, Zn, Mg, Na, Ca, K</b>.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Ο Ίον και η Όλη ερεύνησαν στο εργαστήριο τη δραστικότητα τριών διαφορετικών μετάλλων με αραιό διάλυμα H<sub>2</sub>SO<sub>4</sub>. Σε κάθε περίπτωση χρησιμοποίησαν το ίδιο διάλυμα οξέος, στις ίδιες συνθήκες και μέτρησαν τον όγκο αέριου H<sub>2</sub> που παράχθηκε από το κάθε μέταλλο σε χρόνο 2 λεπτά. Το πείραμα επαναλήφθηκε δύο φορές. Τα αποτελέσματα δίνονται στον ακόλουθο πίνακα:<br><table class='w-full text-left border-collapse my-4 border border-white/20'><thead><tr class='border-b border-white/20'><th>Πείραμα</th><th colspan='3'>Όγκος H<sub>2</sub> που παράχθηκε μετρημένος στις ίδιες συνθήκες σε t=2 min</th></tr><tr class='border-b border-white/20'><th></th><th>Μέταλλο Α</th><th>Μέταλλο Β</th><th>Μέταλλο Γ</th></tr></thead><tbody><tr class='border-b border-white/20'><td>1</td><td>240 cm<sup>3</sup></td><td>360 cm<sup>3</sup></td><td>176 cm<sup>3</sup></td></tr><tr class='border-b border-white/20'><td>2</td><td>216 cm<sup>3</sup></td><td>389 cm<sup>3</sup></td><td>190 cm<sup>3</sup></td></tr></tbody></table><br>Α. Ποιο από τα τρία μέταλλα είναι το πιο δραστικό; Να δικαιολογήσετε την απάντησή σας.<br>Β. Αν το μέταλλο Β είναι το ασβέστιο, να γράψετε τη χημική εξίσωση της αντίδρασής του με το διάλυμα του θειικού οξέος.",
    "a": "<span class='text-purple-300 font-bold'>Α. Το πιο δραστικό από τα τρία μέταλλα είναι το <b>Β</b> καθώς στον ίδιο χρόνο παράγεται μεγαλύτερη ποσότητα προϊόντος (αερίου H<sub>2</sub>).<br>Β. Ca(s) + 2H<sup>+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq) &rarr; <b>Ca<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq) + H<sub>2</sub>(g)</b>.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Να παρατηρήσετε τον διπλανό πίνακα και στη συνέχεια:<br>1. νέο, 2. χλώριο, 3. κάλιο, 4. άνθρακας, 5. αργίλιο, 6. θείο, 7. μαγνήσιο, 8. οξυγόνο, 9. σίδηρος, 10. άζωτο.<br>Α. Να γράψετε το όνομα και το σύμβολο των στοιχείων που είναι μέταλλα και να αναφέρετε τα κύρια χαρακτηριστικά τους.<br>Β. Να γράψετε το όνομα και το σύμβολο των στοιχείων που είναι αλκάλια και να αναφέρετε τα κύρια χαρακτηριστικά τους.<br>Γ. Να γράψετε το όνομα και το σύμβολο των στοιχείων που είναι αλογόνα και να αναφέρετε τα κύρια χαρακτηριστικά τους.<br>Δ. Να γράψετε το όνομα και το σύμβολο των στοιχείων που είναι ευγενή αέρια και να αναφέρετε τα κύρια χαρακτηριστικά τους.<br>Ε. Να γράψετε τα δύο αμέταλλα στοιχεία που περιέχονται στον αέρα που αναπνέουμε.<br>Στ. Να σημειώσετε την ομάδα του Π.Π. στην οποία βρίσκεται το: νέο: ........ ομάδα, χλώριο: ........ ομάδα, κάλιο: ........ ομάδα.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Μέταλλα: κάλιο (K), αργίλιο (Al), μαγνήσιο (Mg), σίδηρος (Fe). (Είναι καλοί αγωγοί θερμότητας/ηλεκτρισμού, στερεά εκτός Hg κλπ.)</li><li class='mb-2'>Β. Αλκάλια: κάλιο (K). (Μαλακά μέταλλα, πολύ δραστικά, αντιδρούν με το νερό.)</li><li class='mb-2'>Γ. Αλογόνα: χλώριο (Cl). (Πολύ δραστικά αμέταλλα, σχηματίζουν άλατα.)</li><li class='mb-2'>Δ. Ευγενή αέρια: νέο (Ne). (Αδρανή, δεν σχηματίζουν εύκολα ενώσεις.)</li><li class='mb-2'>Ε. Ατμοσφαιρικός αέρας: οξυγόνο (O<sub>2</sub>), άζωτο (N<sub>2</sub>).</li><li class='mb-2'>Στ. νέο: <b>18<sup>η</sup></b> ομάδα, χλώριο: <b>17<sup>η</sup></b> ομάδα, κάλιο: <b>1<sup>η</sup></b> ομάδα.</li></ul></span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Από τα στοιχεία: χλώριο, αργό, νάτριο, σίδηρος, οξυγόνο:<br>Α. Στην ομάδα των αλκαλίων ανήκει το ........, το οποίο είναι απαραίτητο για τη λειτουργία του οργανισμού, γιατί είναι συστατικό της αντλίας καλίου-........, η οποία ελέγχει τη λειτουργία των ........ κυττάρων. Αντιδρά με νερό σύμφωνα με την αντίδραση η οποία περιγράφεται από τη χημική εξίσωση: ........(s) + 2H<sub>2</sub>O(l) &rarr; ........(aq) + ........(aq) + ........(g). Κατά τη διάρκεια της αντίδρασης παράγεται αέριο ........ και ο σωλήνας θερμαίνεται, γιατί η αντίδραση είναι ........ . Το διάλυμα που δημιουργείται έχει pH ........ από 7 γιατί παράγονται ιόντα ........ . Κάθε άτομο ........ κατά την αντίδρασή του με το νερό χάνει ένα ........ και μετατρέπεται σε ........ .<br>Β. Το ........ είναι αδρανές, γιατί ανήκει στην ομάδα των ........ αερίων, δηλαδή την ........ ομάδα του Π.Π.<br>Γ. Το ........ ανήκει στην 17<sup>η</sup> ομάδα του Π.Π., δηλαδή είναι ........ χρησιμοποιείται στην απολύμανση του πόσιμου νερού.",
    "a": "<span class='text-purple-300 font-bold'>Α. Στην ομάδα των αλκαλίων ανήκει το <b>νάτριο</b>, το οποίο είναι απαραίτητο για τη λειτουργία του οργανισμού, γιατί είναι συστατικό της <b>αντλίας καλίου-νατρίου</b>, η οποία ελέγχει τη λειτουργία των <b>νευρικών</b> κυττάρων. Αντιδρά με νερό σύμφωνα με την αντίδραση η οποία περιγράφεται από τη χημική εξίσωση: <b>2Na</b>(s) + 2H<sub>2</sub>O(l) &rarr; <b>2Na<sup>+</sup></b>(aq) + <b>2OH<sup>-</sup></b>(aq) + <b>H<sub>2</sub></b>(g). Κατά τη διάρκεια της αντίδρασης παράγεται αέριο <b>υδρογόνο</b> και ο σωλήνας θερμαίνεται, γιατί η αντίδραση είναι <b>εξώθερμη</b>. Το διάλυμα που δημιουργείται έχει pH <b>μεγαλύτερο</b> από 7 γιατί παράγονται ιόντα <b>υδροξειδίου</b>. Κάθε άτομο <b>νατρίου</b> κατά την αντίδρασή του με το νερό χάνει ένα <b>ηλεκτρόνιο</b> και μετατρέπεται σε <b>κατιόν</b>.<br>Β. Το <b>αργό</b> είναι αδρανές, γιατί ανήκει στην ομάδα των <b>ευγενών</b> αερίων, δηλαδή την <b>18<sup>η</sup></b> ομάδα του Π.Π.<br>Γ. Το <b>χλώριο</b> ανήκει στην 17<sup>η</sup> ομάδα του Π.Π., δηλαδή είναι <b>αλογόνο</b> και χρησιμοποιείται στην απολύμανση του πόσιμου νερού.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Το σχήμα το οποίο ακολουθεί απεικονίζει τις τέσσερις πρώτες περιόδους του περιοδικού πίνακα:<br><table class='w-full text-center border-collapse my-4 border border-white/20 text-xs'><tbody><tr class='border-b border-white/20'><td class='bg-blue-300 w-8'>A</td><td colspan='16'></td><td class='bg-green-300 w-8'>K</td></tr><tr class='border-b border-white/20'><td class='bg-blue-300 w-8'>B</td><td></td><td colspan='10'></td><td></td><td></td><td></td><td class='bg-yellow-300 w-8'>E</td><td></td><td></td></tr><tr class='border-b border-white/20'><td></td><td class='bg-blue-300 w-8'>Δ</td><td colspan='10'></td><td></td><td></td><td></td><td class='bg-yellow-300 w-8'>Z</td><td class='bg-green-300 w-8'>Λ</td><td></td></tr><tr class='border-b border-white/20'><td class='bg-blue-300 w-8'>Γ</td><td></td><td colspan='3'></td><td class='bg-blue-300 w-8'>M</td><td colspan='6'></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><br>Να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες και να δικαιολογήσετε την απάντησή σας.<br>Α. Το στοιχείο Β έχει παρόμοιες ιδιότητες με το στοιχείο Γ και το στοιχείο Ε με το στοιχείο Ζ.<br>Β. Το στοιχείο Α είναι στερεό, όπως τα στοιχεία Β, Γ και Δ.<br>Γ. Τα στοιχεία Α, Β, Γ και Δ είναι μέταλλα.<br>Δ. Το στοιχείο Δ είναι αλκάλιο.<br>Ε. Το στοιχείο Μ είναι μέταλλο.<br>ΣΤ. Το στοιχείο Κ δεν αντιδρά εύκολα με άλλα χημικά στοιχεία και επειδή είναι ελαφρύ χρησιμοποιείται στα μπαλόνια των αερόστατων.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'>Α. Η πρόταση είναι <b>σωστή</b>. Τα στοιχεία Β και Γ ανήκουν στην ίδια ομάδα του Π.Π (1<sup>η</sup>) επομένως έχουν παρόμοιες ιδιότητες. Τα στοιχεία Ε και Ζ ανήκουν στην ίδια ομάδα του Π.Π (17<sup>η</sup>) επομένως έχουν παρόμοιες ιδιότητες.</li><li class='mb-2'>Β. Η πρόταση είναι <b>λανθασμένη</b>. Το στοιχείο Α είναι το υδρογόνο το οποίο είναι αέριο.</li><li class='mb-2'>Γ. Η πρόταση είναι <b>λανθασμένη</b>. Το στοιχείο Α είναι το υδρογόνο το οποίο είναι αμέταλλο.</li><li class='mb-2'>Δ. Η πρόταση είναι <b>λανθασμένη</b>. Το στοιχείο Δ ανήκει στη 2<sup>η</sup> ομάδα του Π.Π επομένως είναι μια αλκαλική γαία και όχι ένα αλκάλιο.</li><li class='mb-2'>Ε. Η πρόταση είναι <b>σωστή</b>. Το στοιχείο Μ ανήκει στις ομάδες 3-12 (στοιχεία μετάπτωσης) του Π.Π επομένως είναι μέταλλο.</li><li class='mb-2'>Στ. Η πρόταση είναι <b>σωστή</b>. Το στοιχείο Κ ανήκει στην 18<sup>η</sup> ομάδα του Π.Π επομένως δεν αντιδρά εύκολα με άλλα χημικά στοιχεία (ευγενές αέριο). Συγκεκριμένα είναι το ήλιο (He) το οποίο χρησιμοποιείται ως ανυψωτικό αέριο στα αερόστατα.</li></ul></span>"
  },
  {
    "chapterId": "chapter-6",
    "q": "Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, ώστε να είναι σωστό:<br>Α. Οι πηγές ενέργειας διακρίνονται σε ........ και μη ........ . Το ........, το ........ ........ και το ........ είναι μη ανανεώσιμες πηγές ενέργειας. Οι πηγές ενέργειας που δεν εξαντλούνται με τη χρήση, αλλά ανανεώνονται συνεχώς με φυσικές διαδικασίες, όπως η ........, η ........, η ........ και η ενέργεια του ........ ονομάζονται ........ πηγές ........ .<br>Β. Η καύση των ........ καυσίμων, όπως το πετρέλαιο και οι ........ έχει ως βασικό πλεονέκτημα ότι έχουν υψηλή ενεργειακή ........, αλλά τα αποθέματα τους είναι ........ και δεν ........, ενώ επιβαρύνουν το ........ με διοξείδιο του άνθρακα, το οποίο είναι αέριο του ........ και η αύξηση του στην ατμόσφαιρα έχει προκαλέσει ........ της Γης και αλλαγές στο ........ . Για την προστασία του περιβάλλοντος είναι αναγκαίο το ........ ........ να μειωθεί με αύξηση της χρήσης ........ πηγών ........ και ελάττωση των ........ αναγκών, τόσο σε ........, όσο και σε συλλογικό επίπεδο.",
    "a": "<span class='text-purple-300 font-bold'>Α. Οι πηγές ενέργειας διακρίνονται σε <b>ανανεώσιμες</b> και μη <b>ανανεώσιμες</b>. Το <b>πετρέλαιο</b>, το <b>κάρβουνο</b>, το <b>φυσικό</b> αέριο και το <b>ουράνιο</b> είναι μη ανανεώσιμες πηγές ενέργειας. Οι πηγές ενέργειας που δεν εξαντλούνται με τη χρήση, αλλά ανανεώνονται συνεχώς με φυσικές διαδικασίες, όπως η <b>ηλιακή</b>, η <b>αιολική</b>, η <b>γεωθερμική</b> και η ενέργεια του <b>νερού</b> ονομάζονται <b>ανανεώσιμες</b> πηγές <b>ενέργειας</b>.<br><br>Β. Η καύση των <b>ορυκτών</b> καυσίμων, όπως το πετρέλαιο και οι <b>γαιάνθρακες</b> έχει ως βασικό πλεονέκτημα ότι έχουν υψηλή ενεργειακή <b>απόδοση</b>, αλλά τα αποθέματα τους είναι <b>περιορισμένα</b> και δεν <b>ανανεώνονται</b>, ενώ επιβαρύνουν το <b>περιβάλλον</b> με διοξείδιο του άνθρακα, το οποίο είναι αέριο του <b>θερμοκηπίου</b> και η αύξηση του στην ατμόσφαιρα έχει προκαλέσει <b>υπερθέρμανση</b> της Γης και αλλαγές στο <b>κλίμα</b>. Για την προστασία του περιβάλλοντος είναι αναγκαίο το <b>αποτύπωμα άνθρακα</b> να μειωθεί με αύξηση της χρήσης <b>ανανεώσιμων</b> πηγών <b>ενέργειας</b> και ελάττωση των <b>ενεργειακών</b> αναγκών, τόσο σε <b>ατομικό</b>, όσο και σε συλλογικό επίπεδο.</span>"
  },
  {
    "chapterId": "chapter-6",
    "q": "Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε σύντομα την απάντησή σας.<br>Α. Η Χημεία έχει κάνει τη ζωή μας πιο ασφαλή, πιο υγιή και πιο εύκολη χάρη στα καινοτόμα υλικά που παράγει.<br>Β. Τα νανοϋλικά έχουν εξαιρετικές ιδιότητες, που οφείλονται στο μέγεθός τους.<br>Γ. Τα νανοϋλικά έχουν πάρα πολλές χρήσεις.<br>Δ. Χάρη στην χημική έρευνα και στην παραγωγή χημικών προϊόντων έχουν εξαλειφθεί ή αντιμετωπιστεί αποτελεσματικά πολλές μολυσματικές ασθένειες.<br>Ε. Η λειτουργία μίας μπαταρίας στηρίζεται σε χημικές αντιδράσεις που πραγματοποιούνται στα ηλεκτρόδια.",
    "a": "<span class='text-purple-300 font-bold'><ul><li class='mb-2'><b>Α. Η πρόταση είναι σωστή.</b> Η Χημεία έχει συμβάλει σημαντικά στη βελτίωση της ποιότητας ζωής μας μέσω της ανάπτυξης καινοτόμων υλικών. Μερικά παραδείγματα περιλαμβάνουν:<br>- τη δημιουργία φαρμάκων που έχουν βελτιώσει τη θεραπεία και την πρόληψη ασθενειών, βελτιώνοντας έτσι την υγεία και το προσδόκιμο ζωής.<br>- την προστασία του Περιβάλλοντος με την δημιουργία περισσότερο βιώσιμων υλικών και τεχνολογιών που μειώνουν τον αντίκτυπο στο περιβάλλον, όπως ανανεώσιμες πηγές ενέργειας και βιοδιασπώμενα πλαστικά.<br>- την ανάπτυξη καινοτόμων προϊόντων και τεχνολογιών σε πολλούς τομείς, όπως η ηλεκτρονική, η ιατρική, η αεροναυπηγική, οι κατασκευές κ.α.</li><li class='mb-2'><b>Β. Η πρόταση είναι σωστή.</b> Το εξαιρετικά μικρό τους μέγεθος, αυξάνει την ελεύθερη επιφάνεια επαφής που έχουν με αποτέλεσμα να αλλάζουν τις ιδιότητες των υλικών, αποκτώντας μοναδικές νέες ιδιότητες.</li><li class='mb-2'><b>Γ. Η πρόταση είναι σωστή.</b> Τα νανοϋλικά έχουν πάρα πολλές χρήσεις καθώς είναι: Καταλύτες χημικών αντιδράσεων, Μεταφορείς φαρμάκων στα κύτταρα, Αντηλιακά και φακοί γυαλιών, Πρώτη ύλη για τη δημιουργία αντιμικροβιακών και αδιάβροχων ρούχων, χρωμάτων κ.α.</li><li class='mb-2'><b>Δ. Η πρόταση είναι σωστή.</b> Η χημική έρευνα και η παραγωγή χημικών προϊόντων έχουν συμβάλει στην εξάλειψη ή την αποτελεσματική αντιμετώπιση πολλών μολυσματικών ασθενειών με την ανάπτυξη εμβολίων, τα οποία έχουν συμβάλει στην εξάλειψη ή τη μείωση της διάδοσης μολυσματικών ασθενειών όπως η πολιομυελίτιδα, η ελονοσία και η επιδημία του ιού του κορονοϊού. Με την ανάπτυξη και παραγωγή αντιβιοτικών έχει βοηθήσει στην αντιμετώπιση πολλών μολυσματικών ασθενειών που προκαλούνται από βακτήρια, όπως οι βακτηριακές πνευμονίες και οι λοιμώξεις του αίματος. Με τη δημιουργία αντισηπτικών και αντιμικροβιακών προϊόντων τα οποία χρησιμοποιούνται για τον έλεγχο της διάδοσης μολυσματικών ασθενειών σε νοσοκομεία, σχολεία κ.α.</li><li class='mb-2'><b>Ε. Η πρόταση είναι σωστή.</b> Οι χημικές αντιδράσεις σε μια μπαταρία περιλαμβάνουν τη ροή ηλεκτρονίων από το ένα ηλεκτρόδιο, την άνοδο στο άλλο, μέσω ενός εξωτερικού κυκλώματος, καθώς ο ηλεκτρολύτης εμποδίζει την απευθείας ροή ηλεκτρονίων από την άνοδο προς την κάθοδο.</li></ul></span>"
  }
];

export const gGymnasiouMCQ: MCQ[] = [
  {
    "chapterId": "chapter-4",
    "q": "Η σειρά που περιέχει μόνο οργανικές ενώσεις είναι:",
    "options": [
      {
        "text": "i. CH3-CH2-CH3, CH3-CH2-CH2OH, CO, CH3-CH2-CH2-COOH",
        "correct": false
      },
      {
        "text": "ii. CH3-CH2-CH3, CH3-CH2-CH2NH2, CO, CH3-CH2-CH2-COOH",
        "correct": false
      },
      {
        "text": "iii. CH3-CH2-CH3, CH3-CH2-CH2OH, CH3-CH2-CH2NH2, CH3-CH2-CH2-COOH",
        "correct": true
      },
      {
        "text": "iv. CH4, CH3-CH2-CH2OH, K2CO3, CH3-CH2-CH2-COOH",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: iii (ή Γ). Οι επιλογές i και ii απορρίπτονται διότι περιέχουν CO (ανόργανη), ενώ η επιλογή iv απορρίπτεται διότι περιέχει K<sub>2</sub>CO<sub>3</sub> (ανόργανη).</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Για να επιβεβαιώσουμε την ύπαρξη του άνθρακα στην ζάχαρη επιδρούμε με σταγόνες πυκνού διαλύματος θειικού οξέος και παρατηρούμε:",
    "options": [
      {
        "text": "i. την ζάχαρη να αναφλέγεται.",
        "correct": false
      },
      {
        "text": "ii. την ζάχαρη να μετατρέπεται από λευκό στερεό σε μαύρο πορώδη άνθρακα.",
        "correct": true
      },
      {
        "text": "iii. την ζάχαρη να υγροποιείται.",
        "correct": false
      },
      {
        "text": "iv. την ζάχαρη να μετατρέπεται από λευκό στερεό σε αέριο διοξείδιο του άνθρακα.",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: ii. Το πυκνό θειικό οξύ δρα ως ισχυρό αφυδατικό μέσο, αφαιρώντας υδρογόνο και οξυγόνο (ως νερό) από τη ζάχαρη και αφήνοντας πίσω τον άνθρακα (μαύρο πορώδες στερεό).</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Το φυσικό αέριο αποτελείται κυρίως από:",
    "options": [
      {
        "text": "i. οκτάνιο",
        "correct": false
      },
      {
        "text": "ii. επτάνιο",
        "correct": false
      },
      {
        "text": "iii. μεθάνιο",
        "correct": true
      },
      {
        "text": "iv. CO2",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: iii. Το φυσικό αέριο είναι μείγμα αερίων υδρογονανθράκων, με κύριο συστατικό το μεθάνιο.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Το φυσικό αέριο είναι:",
    "options": [
      {
        "text": "i. ορυκτός φυσικός πόρος",
        "correct": true
      },
      {
        "text": "ii. συστατικό του πετρελαίου",
        "correct": false
      },
      {
        "text": "iii. προϊόν της πετροχημικής βιομηχανίας",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: i. Το φυσικό αέριο, όπως και το πετρέλαιο και οι γαιάνθρακες, συγκαταλέγεται στους ορυκτούς φυσικούς πόρους (ορυκτά καύσιμα).</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Το υγραέριο αποτελείται κυρίως από:",
    "options": [
      {
        "text": "i. προπάνιο και βουτάνιο",
        "correct": true
      },
      {
        "text": "ii. μεθάνιο",
        "correct": false
      },
      {
        "text": "iii. οκτάνιο",
        "correct": false
      },
      {
        "text": "iv. CO2",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: i. Το υγραέριο (LPG) είναι μείγμα κυρίως προπανίου και βουτανίου, τα οποία υγροποιούνται εύκολα υπό πίεση.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Από τις ακόλουθες προτάσεις δεν είναι σωστή για τον Π.Π. του Mendeleev.",
    "options": [
      {
        "text": "Α. Τα στοιχεία ταξινομήθηκαν από αυτό με τα ελαφρύτερα προς αυτό με τα βαρύτερα άτομα.",
        "correct": false
      },
      {
        "text": "Β. Ο Mendeleev προέβλεψε την ύπαρξη στοιχείων που δεν είχαν ανακαλυφθεί.",
        "correct": false
      },
      {
        "text": "Γ. Τα στοιχεία ταξινομήθηκαν κατά αύξοντα ατομικό αριθμό.",
        "correct": true
      },
      {
        "text": "Δ. Στον Π.Π. του υπήρχαν κενές θέσεις.",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η πρόταση Γ είναι λανθασμένη, διότι ο Mendeleev ταξινόμησε τα στοιχεία με βάση το ατομικό τους βάρος (μάζα), όχι τον ατομικό αριθμό. Ο σύγχρονος Περιοδικός Πίνακας ταξινομεί τα στοιχεία κατά αύξοντα ατομικό αριθμό.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Στον Π.Π. του Mendeleev:",
    "options": [
      {
        "text": "Α. Οι οριζόντιες γραμμές ονομάστηκαν ομάδες.",
        "correct": false
      },
      {
        "text": "Β. Οι κατακόρυφες στήλες ονομάστηκαν περίοδοι και σε αυτές τοποθετήθηκαν στοιχεία με παρόμοιες ιδιότητες.",
        "correct": false
      },
      {
        "text": "Γ. Οι οριζόντιες γραμμές ονομάστηκαν περίοδοι και σε αυτές τοποθετήθηκαν στοιχεία με παρόμοιες ιδιότητες.",
        "correct": false
      },
      {
        "text": "Δ. Οι κατακόρυφες στήλες ονομάστηκαν ομάδες και σε αυτές τοποθετήθηκαν στοιχεία με παρόμοιες ιδιότητες.",
        "correct": true
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Ο Mendeleev ονόμασε τις κατακόρυφες στήλες ομάδες, στις οποίες τοποθετούσε στοιχεία που παρουσίαζαν παρόμοιες χημικές ιδιότητες.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Στον σύγχρονο Π.Π. τα στοιχεία κατατάσσονται κατά:",
    "options": [
      {
        "text": "i. αύξουσα μάζα των ατόμων τους",
        "correct": false
      },
      {
        "text": "ii. αύξοντα ατομικό αριθμό",
        "correct": true
      },
      {
        "text": "iii. αύξουσα μάζα των μορίων τους",
        "correct": false
      },
      {
        "text": "iv. κατά αύξουσα πυκνότητα",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Η θεμελιώδης αρχή του σύγχρονου Περιοδικού Πίνακα είναι η κατάταξη των στοιχείων με βάση τον ατομικό τους αριθμό (αριθμός πρωτονίων).</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Στην 6η και στην 7η περίοδο ο Π.Π. έχει 32 στοιχεία και γι' αυτό έχει:",
    "options": [
      {
        "text": "i. 32 ομάδες",
        "correct": false
      },
      {
        "text": "ii. 6 ομάδες",
        "correct": false
      },
      {
        "text": "iii. 7 ομάδες",
        "correct": false
      },
      {
        "text": "iv. 18 ομάδες και 2 παραρτήματα με 14 στοιχεία στο καθένα",
        "correct": true
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Οι 18 ομάδες βρίσκονται στον κύριο κορμό του πίνακα και κάτω από αυτόν (στα παραρτήματα) τοποθετούνται οι λανθανίδες (14 στοιχεία της 6ης περιόδου) και οι ακτινίδες (14 στοιχεία της 7ης περιόδου).</span>"
  },
  {
    "q": "5. Α. Στο 1ο και 2ο μέλος μίας χημικής εξίσωσης είναι:",
    "options": [
      {
        "text": "Α. ίσο το άθροισμα του αριθμού μορίων των αντιδρώντων και των προϊόντων.",
        "correct": false
      },
      {
        "text": "Β. ίσο οι αριθμοί των ατόμων κάθε στοιχείου που μετέχει στην αντίδραση",
        "correct": false
      },
      {
        "text": "Γ. ίσο το άθροισμα του αριθμού των ατόμων των αντιδρώντων με το άθροισμα του αριθμού των ατόμων των προϊόντων.",
        "correct": true
      },
      {
        "text": "Δ. ίσοι οι αριθμοί των μορίων των αντιδρώντων και προϊόντων.",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Γ</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "Β. Στη χημική εξίσωση: (NH4)2CO3(s) -> ...NH3(g) + ...CO2(g) + H2O(g), οι συντελεστές NH3, CO2, H2O είναι αντίστοιχα:",
    "options": [
      {
        "text": "Α. 1-1-1",
        "correct": false
      },
      {
        "text": "Β. 2-1-1",
        "correct": true
      },
      {
        "text": "Γ. 2-2-1",
        "correct": false
      },
      {
        "text": "Δ. κανένα από τα προηγούμενα",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Β</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "Γ. Από τη χημική αντίδραση του υδρογόνου με το άζωτο παράγεται:",
    "options": [
      {
        "text": "Α. NH3",
        "correct": true
      },
      {
        "text": "Β. HBr",
        "correct": false
      },
      {
        "text": "Γ. H2O",
        "correct": false
      },
      {
        "text": "Δ. HCl",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Α</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "Δ. Όταν αντιδρούν 64 g θείου (CH4) με 96 g οξυγόνου (O2), παράγονται:",
    "options": [
      {
        "text": "Α. 160 g CO2",
        "correct": false
      },
      {
        "text": "Β. 64 g SO2",
        "correct": false
      },
      {
        "text": "Γ. 160 g SO3",
        "correct": true
      },
      {
        "text": "Δ. 96 g SO2",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Γ</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "E. 245 g KClO3, όταν θερμαίνονται ισχυρά, διασπώνται και παράγουν 96 g O2 και a KCI. Η αντίδραση είναι:",
    "options": [
      {
        "text": "Α. εξώθερμη",
        "correct": false
      },
      {
        "text": "Β. δεν συνοδεύεται από μεταβολές στην ενέργεια",
        "correct": false
      },
      {
        "text": "Γ. ενδόθερμη ή εξώθερμη",
        "correct": true
      },
      {
        "text": "Δ. ενδόθερμη",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Γ</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "E. (Μέρος 2) Από την αντίδραση (της προηγούμενης ερώτησης) παράχθηκαν:",
    "options": [
      {
        "text": "E. 56 g KCI",
        "correct": false
      },
      {
        "text": "Στ. 100 g KCI",
        "correct": false
      },
      {
        "text": "Z. 149 g KCI",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Ζ</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "Στ. Στην αντίδραση που περιγράφεται από την χημική εξίσωση: 2HI + Cl2 -> ....... + ....... ο σωστός τρόπος αναδιάταξης των ατόμων είναι:",
    "options": [
      {
        "text": "Επιλογή Α",
        "correct": false
      },
      {
        "text": "Επιλογή Β",
        "correct": false
      },
      {
        "text": "Επιλογή Γ",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Γ</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "5. Α. Οι ιοντικές ενώσεις αποτελούνται από:",
    "options": [
      {
        "text": "Α. μόρια",
        "correct": false
      },
      {
        "text": "Β. άτομα",
        "correct": false
      },
      {
        "text": "Γ. ιόντα",
        "correct": true
      },
      {
        "text": "Δ. συσσωματώματα μορίων",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Γ. Οι ιοντικές ενώσεις δεν αποτελούνται από μόρια, αλλά από θετικά και αρνητικά ιόντα τα οποία σχηματίζουν κρυστάλλους.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "5. Β. Το στοιχείο 15Ρ για να αποκτήσει σταθερή δομή μετατρέπεται σε:",
    "options": [
      {
        "text": "Α. κατιόν με φορτίο +3",
        "correct": false
      },
      {
        "text": "Β. ανιόν με φορτίο -3",
        "correct": true
      },
      {
        "text": "Γ. κατιόν με φορτίο -3",
        "correct": false
      },
      {
        "text": "Δ. ανιόν με φορτίο -2",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Β. Το στοιχείο 15Ρ έχει ηλεκτρονιακή δομή: K(2)-L(8)-M(5). Για να αποκτήσει σταθερή δομή προσλαμβάνει τρία ηλεκτρόνια και συμπληρώνει έτσι την εξωτερική του στιβάδα με 8 ηλεκτρόνια και μετατρέπεται σε ανιόν με φορτίο -3.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "4. α. Η σειρά που περιέχει μόνο οργανικές ενώσεις είναι:",
    "options": [
      {
        "text": "i. CH3-CH2-CH3, CH3-CH2-CH2OH, CO, CH3-CH2-CH2-COOH",
        "correct": false
      },
      {
        "text": "ii. CH3-CH2-CH3, CH3-CH2-CH2NH2, CO, CH3-CH2-CH2-COOH",
        "correct": false
      },
      {
        "text": "iii. CH3-CH2-CH3, CH3-CH2-CH2OH, CH3-CH2-CH2NH2, CH3-CH2-CH2-COOH",
        "correct": true
      },
      {
        "text": "iv. CH4, CH3-CH2-CH2OH, K2CO3, CH3-CH2-CH2-COOH",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Γ (που αντιστοιχεί στο iii)</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "4. β. Για να επιβεβαιώσουμε την ύπαρξη του άνθρακα στην ζάχαρη επιδρούμε με σταγόνες πυκνού διαλύματος θειικού οξέος και παρατηρούμε:",
    "options": [
      {
        "text": "i. την ζάχαρη να αναφλέγεται.",
        "correct": false
      },
      {
        "text": "ii. την ζάχαρη να μετατρέπεται από λευκό στερεό σε μαύρο πορώδη άνθρακα.",
        "correct": true
      },
      {
        "text": "iii. την ζάχαρη να υγροποιείται.",
        "correct": false
      },
      {
        "text": "iv. την ζάχαρη να μετατρέπεται από λευκό στερεό σε αέριο διοξείδιο του άνθρακα.",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Β (που αντιστοιχεί στο ii)</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "10. α. Το φυσικό αέριο αποτελείται κυρίως από",
    "options": [
      {
        "text": "i. οκτάνιο",
        "correct": false
      },
      {
        "text": "ii. επτάνιο",
        "correct": false
      },
      {
        "text": "iii. μεθάνιο",
        "correct": true
      },
      {
        "text": "iv. CO2",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: iii</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "10. α (συνέχεια). και είναι",
    "options": [
      {
        "text": "v. ορυκτός φυσικός πόρος",
        "correct": true
      },
      {
        "text": "vi. συστατικό του πετρελαίου",
        "correct": false
      },
      {
        "text": "vii. προϊόν της πετροχημικής βιομηχανίας",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: v</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "10. β. Το υγραέριο αποτελείται κυρίως από",
    "options": [
      {
        "text": "i. προπάνιο και βουτάνιο",
        "correct": true
      },
      {
        "text": "ii. μεθάνιο",
        "correct": false
      },
      {
        "text": "iii. οκτάνιο",
        "correct": false
      },
      {
        "text": "iv. CO2",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: i</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "16. α. Από τα ακόλουθα σώματα, προϊόντα της πετροχημικής βιομηχανίας είναι (i. τα απορρυπαντικά, ii. το PVC, iii. το φυσικό καουτσούκ):",
    "options": [
      {
        "text": "Α. μόνο το i",
        "correct": false
      },
      {
        "text": "Β. τα i, ii",
        "correct": true
      },
      {
        "text": "Γ. τα i, ii, iii",
        "correct": false
      },
      {
        "text": "Δ. όλα",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Β (τα απορρυπαντικά και το PVC είναι προϊόντα της πετροχημικής βιομηχανίας).</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "16. β. Το νάιλον είναι ένα πολυμερές, επομένως:",
    "options": [
      {
        "text": "Α. δεν είναι ανθεκτικό",
        "correct": false
      },
      {
        "text": "Β. δεν αποικοδομείται εύκολα από το περιβάλλον",
        "correct": true
      },
      {
        "text": "Γ. είναι ελαφρύ",
        "correct": false
      },
      {
        "text": "Δ. είναι προϊόν της κλασματικής απόσταξης του πετρελαίου",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: Β</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "11. α. Το αίμα με pH = 7.4 σε σύγκριση με τα ούρα που έχουν pH = 6.0 είναι:",
    "options": [
      {
        "text": "i. περισσότερο βασικό",
        "correct": true
      },
      {
        "text": "ii. λιγότερο βασικό",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: i. Το αίμα έχει μεγαλύτερο pH από τα ούρα, άρα είναι περισσότερο βασικό.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "11. β. Το γάλα μαγνησίας, το οποίο χρησιμοποιείται ως αντιόξινο... που έχει ΡΗ = 10,5 σε σύγκριση με το Azax για τα τζάμια που έχει ρΗ = 10,0 είναι:",
    "options": [
      {
        "text": "i. περισσότερο βασικό",
        "correct": true
      },
      {
        "text": "ii. λιγότερο βασικό",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: i. (Έχει μεγαλύτερη τιμή pH).</span>",
    "chapterId": "chapter-2"
  },
  {
    "q": "13. Σε διάλυμα αμμωνίας με ρΗ = 11 προστίθεται μικρή ποσότητα καθαρής αμμωνίας (ΝΗ3).",
    "options": [
      {
        "text": "α. Το pΗ του τελικού διαλύματος είναι > 11",
        "correct": true
      },
      {
        "text": "β. Το ΡΗ του τελικού διαλύματος είναι < 11",
        "correct": false
      },
      {
        "text": "γ. Το pΗ του τελικού διαλύματος είναι = 11",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: α. Με την προσθήκη ποσότητας καθαρής αμμωνίας (ΝΗ3) στο διάλυμα θα αυξηθεί το πλήθος των ανιόντων υδροξειδίου με αποτέλεσμα να αυξηθεί το ΡΗ.</span>",
    "chapterId": "chapter-2"
  },
  {
    "q": "14. Σε διάλυμα (NaOH) με pH = 13 προστίθεται αποσταγμένο νερό. Να επιλέξετε τη σωστή απάντηση και να δικαιολογήσετε την επιλογή σας.",
    "options": [
      {
        "text": "α. Το pΗ του τελικού διαλύματος είναι > 13",
        "correct": false
      },
      {
        "text": "β. Το pΗ του τελικού διαλύματος είναι < 13",
        "correct": false
      },
      {
        "text": "γ. Το ΡΗ του τελικού διαλύματος είναι = 13",
        "correct": false
      },
      {
        "text": "δ. Το pΗ του τελικού διαλύματος είναι 7 < pH < 13",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: δ. Όταν αραιώνουμε βασικό διάλυμα, δηλαδή προσθέτουμε νερό, το διάλυμα γίνεται λιγότερο βασικό, γιατί σε ορισμένο όγκο διαλύματος περιέχονται λιγότερα ΟΗ-. Επομένως, το pΗ του διαλύματος ελαττώνεται. Όσο νερό και αν προσθέσουμε σε ένα βασικό διάλυμα, το διάλυμα θα παραμείνει βασικό.</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "15. Σε ένα ξίδι (διάλυμα CH3COOH) που έχει pH = 3,5 προστίθεται αποσταγμένο νερό.",
    "options": [
      {
        "text": "α. Το pΗ του τελικού διαλύματος είναι > 3,5",
        "correct": false
      },
      {
        "text": "β. Το ΡΗ του τελικού διαλύματος είναι < 3,5",
        "correct": false
      },
      {
        "text": "γ. Το pΗ του τελικού διαλύματος είναι = 3,5",
        "correct": false
      },
      {
        "text": "δ. Το pH του τελικού διαλύματος είναι 3,5 < pH < 7,0",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: δ. Όταν αραιώνουμε όξινο διάλυμα, δηλαδή προσθέτουμε νερό, το διάλυμα γίνεται λιγότερο όξινο, γιατί σε ορισμένο όγκο διαλύματος περιέχονται λιγότερα Η+. Επομένως, το ΡΗ του διαλύματος αυξάνεται. Όσο νερό και αν προσθέσουμε, το διάλυμα θα παραμείνει όξινο (το pH θα είναι μικρότερο από 7).</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "20. Να επιλέξετε από τα παρακάτω διαλύματα αυτό που πρέπει να προστεθεί σε διάλυμα που έχει ρΗ = 1 σε ικανοποιητική ποσότητα για να προκύψει διάλυμα με ρΗ = 11.",
    "options": [
      {
        "text": "α. διάλυμα ΗCΙ με pH = 4",
        "correct": false
      },
      {
        "text": "β. καθαρό νερό",
        "correct": false
      },
      {
        "text": "γ. διάλυμα NaOH με pH = 13",
        "correct": true
      },
      {
        "text": "δ. διάλυμα NaOH με pH = 10",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: γ. Χρειαζόμαστε την προσθήκη ενός ισχυρά βασικού διαλύματος (με pH μεγαλύτερο από το επιθυμητό τελικό 11) για να εξουδετερώσουμε το οξύ και να κάνουμε το τελικό διάλυμα βασικό με pH 11.</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "24. Στις ακόλουθες ερωτήσεις να επιλέξετε τη σωστή απάντηση. Α. Το μύρτιλλο είναι από τα λίγα φυτά που ευδοκιμεί σε εδάφη όξινα. Το pΗ ενός εδάφους κατάλληλου για την καλλιέργεια μύρτιλλου μπορεί να είναι:",
    "options": [
      {
        "text": "i: 4,2 - 5,0",
        "correct": true
      },
      {
        "text": "ii: 13,0 - 14,0",
        "correct": false
      },
      {
        "text": "iii: 7,0 - 8,0",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: i (4,2-5,0), καθώς αυτή είναι η μόνη περιοχή τιμών που αντιστοιχεί σε όξινο περιβάλλον (pH < 7).</span>",
    "chapterId": "chapter-2"
  },
  {
    "q": "24. (Συνέχεια) Αν το διαθέσιμο έδαφος έχει pH=7,2 θα πρέπει να χρησιμοποιηθεί για την εξουδετέρωσή του:",
    "options": [
      {
        "text": "iv. Ca(OH)2",
        "correct": false
      },
      {
        "text": "v. HCI",
        "correct": true
      },
      {
        "text": "vi. NH3",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: v</span>",
    "chapterId": "chapter-2"
  },
  {
    "q": "24. Β. Τα άλατα χρησιμοποιούνται:",
    "options": [
      {
        "text": "i. στα δομικά υλικά",
        "correct": false
      },
      {
        "text": "ii. λιπάσματα",
        "correct": false
      },
      {
        "text": "iii. στα τρόφιμα ως συντηρητικά",
        "correct": false
      },
      {
        "text": "iv. σε όλα τα προηγούμενα",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: iv</span>",
    "chapterId": "chapter-5"
  },
  {
    "q": "24. Γ. Οι βάσεις χρησιμοποιούνται:",
    "options": [
      {
        "text": "i. στα αντιόξινα σκευάσματα",
        "correct": false
      },
      {
        "text": "ii. καθαριστικά τζαμιών",
        "correct": false
      },
      {
        "text": "iii. για την παρασκευή σαπουνιών",
        "correct": false
      },
      {
        "text": "iv. όλα τα προηγούμενα",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: iv</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "24. Δ. Για την όξινη βροχή ευθύνονται:",
    "options": [
      {
        "text": "i. τα άλατα",
        "correct": false
      },
      {
        "text": "ii. τα οξείδια του θείου και του αζώτου",
        "correct": true
      },
      {
        "text": "iii. οι βάσεις",
        "correct": false
      },
      {
        "text": "iv. τα λιπάσματα",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: ii</span>",
    "chapterId": "chapter-2"
  },
  {
    "q": "24. Ε. Για τον καθαρισμό των δύσκολων λεκέδων από λίπη χρησιμοποιείται:",
    "options": [
      {
        "text": "i. HCI",
        "correct": false
      },
      {
        "text": "ii. NH3",
        "correct": false
      },
      {
        "text": "iii. NaOH",
        "correct": true
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: iii</span>",
    "chapterId": "chapter-4"
  },
  {
    "q": "24. Στ. Για τον καθαρισμό της πέτρας που συσσωρεύεται στις τουαλέτες χρησιμοποιείται:",
    "options": [
      {
        "text": "i. HCI",
        "correct": true
      },
      {
        "text": "ii. HNO3",
        "correct": false
      },
      {
        "text": "iii. Ξίδι",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή απάντηση: i</span>",
    "chapterId": "chapter-1"
  },
  {
    "q": "2. (Ενότητα 6.1) Να επιλέξετε τη σωστή πρόταση:",
    "options": [
      {
        "text": "α. Όλα ανεξαιρέτως τα υλικά σώματα έχουν αποθηκευμένη χημική ενέργεια.",
        "correct": true
      },
      {
        "text": "β. Η χημική ενέργεια αποθηκεύεται αποκλειστικά στις μπαταρίες.",
        "correct": false
      },
      {
        "text": "γ. Χημική ενέργεια έχουν αποθηκευμένη ορισμένες ουσίες, όπως το πετρέλαιο και το φυσικό αέριο και οι μπαταρίες.",
        "correct": false
      },
      {
        "text": "δ. Οι ανεμογεννήτριες μετατρέπουν την χημική ενέργεια του αέρα σε ηλεκτρική.",
        "correct": false
      }
    ],
    "explanation": "<span class='text-emerald-400 font-bold'>Σωστή πρόταση: α</span>",
    "chapterId": "chapter-1"
  },
  {
    "chapterId": "chapter-4",
    "q": "Από τα ακόλουθα σώματα, προϊόντα της πετροχημικής βιομηχανίας είναι:<br>i. τα απορρυπαντικά, ii. το PVC, iii. το φυσικό καουτσούκ, iv. το υγραέριο",
    "options": [
      {
        "text": "Α. i",
        "correct": false
      },
      {
        "text": "Β. i, ii",
        "correct": true
      },
      {
        "text": "Γ. i, ii, iii",
        "correct": false
      },
      {
        "text": "Δ. όλα",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Β. Τα απορρυπαντικά (i) και το PVC (ii) παράγονται από προϊόντα της πετροχημικής βιομηχανίας. Το φυσικό καουτσούκ προέρχεται από τα φυτά, ενώ το υγραέριο είναι κλάσμα της διύλισης του πετρελαίου (όχι πετροχημικό προϊόν καθαυτό με την έννοια της συνθετικής χημείας σε αυτό το πλαίσιο).</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "Το νάιλον είναι ένα πολυμερές, επομένως:",
    "options": [
      {
        "text": "i. δεν είναι ανθεκτικό",
        "correct": false
      },
      {
        "text": "ii. δεν αποικοδομείται εύκολα από το περιβάλλον",
        "correct": true
      },
      {
        "text": "iii. είναι ελαφρύ",
        "correct": false
      },
      {
        "text": "iv. είναι προϊόν της κλασματικής απόσταξης του πετρελαίου",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: ii. Ως συνθετικό πολυμερές (πλαστικό), το νάιλον χαρακτηρίζεται από εξαιρετική αντοχή, γι' αυτό το λόγο δεν αποικοδομείται εύκολα και επιβαρύνει το περιβάλλον.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να επιλέξετε τη σωστή απάντηση.<br>α. Το αίμα με pH = 7,4 σε σύγκριση με τα ούρα που έχουν pH = 6,0 είναι:<br>β. Το γάλα μαγνησίας (pH = 10,5) σε σύγκριση με υγρό για τα τζάμια (pH = 10,0) είναι:",
    "options": [
      {
        "text": "α(i): περισσότερο βασικό, β(i): περισσότερο βασικό",
        "correct": true
      },
      {
        "text": "α(i): περισσότερο βασικό, β(ii): λιγότερο βασικό",
        "correct": false
      },
      {
        "text": "α(ii): λιγότερο βασικό, β(i): περισσότερο βασικό",
        "correct": false
      },
      {
        "text": "α(ii): λιγότερο βασικό, β(ii): λιγότερο βασικό",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Το αίμα (pH 7,4) έχει μεγαλύτερο pH από τα ούρα (6,0), άρα είναι περισσότερο βασικό. Ομοίως, το γάλα μαγνησίας (pH 10,5) έχει μεγαλύτερο pH από το υγρό για τα τζάμια (10,0), άρα είναι περισσότερο βασικό.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Σε διάλυμα αμμωνίας με pH = 11 προστίθεται μικρή ποσότητα καθαρής αμμωνίας (NH3). Να επιλέξετε τη σωστή απάντηση:",
    "options": [
      {
        "text": "α. Το pH του τελικού διαλύματος είναι > 11",
        "correct": true
      },
      {
        "text": "β. Το pH του τελικού διαλύματος είναι < 11",
        "correct": false
      },
      {
        "text": "γ. Το pH του τελικού διαλύματος είναι = 11",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: α. Με την προσθήκη ποσότητας καθαρής αμμωνίας στο διάλυμα, αυξάνεται η ποσότητα της διαλυμένης βάσης, επομένως θα αυξηθεί το πλήθος των ανιόντων OH<sup>-</sup> με αποτέλεσμα να αυξηθεί το pH (pH > 11).</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Σε διάλυμα (NaOH) με pH = 13 προστίθεται αποσταγμένο νερό. Να επιλέξετε τη σωστή απάντηση:",
    "options": [
      {
        "text": "α. Το pH του τελικού διαλύματος είναι > 13",
        "correct": false
      },
      {
        "text": "β. Το pH του τελικού διαλύματος είναι < 13",
        "correct": false
      },
      {
        "text": "γ. Το pH του τελικού διαλύματος είναι = 13",
        "correct": false
      },
      {
        "text": "δ. Το pH του τελικού διαλύματος είναι 7 < pH < 13",
        "correct": true
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: δ. Όταν αραιώνουμε βασικό διάλυμα με νερό, το pH ελαττώνεται. Όμως, παραμένει βασικό (pH > 7). Άρα 7 < pH < 13.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Σε ένα ξίδι (διάλυμα CH3COOH) που έχει pH = 3,5 προστίθεται αποσταγμένο νερό. Να επιλέξετε τη σωστή απάντηση:",
    "options": [
      {
        "text": "α. Το pH του τελικού διαλύματος είναι > 3,5",
        "correct": false
      },
      {
        "text": "β. Το pH του τελικού διαλύματος είναι < 3,5",
        "correct": false
      },
      {
        "text": "γ. Το pH του τελικού διαλύματος είναι = 3,5",
        "correct": false
      },
      {
        "text": "δ. Το pH του τελικού διαλύματος είναι 3,5 < pH < 7,0",
        "correct": true
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: δ. Όταν αραιώνουμε όξινο διάλυμα προσθέτοντας νερό, το pH αυξάνεται, πλησιάζοντας το 7. Όμως δεν μπορεί να γίνει βασικό ή ουδέτερο μόνο με αραίωση, άρα παραμένει όξινο (pH < 7). Επομένως 3,5 < pH < 7,0.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "Να επιλέξετε από τα παρακάτω διαλύματα αυτό που πρέπει να προστεθεί σε διάλυμα που έχει pH = 1 σε ικανοποιητική ποσότητα για να προκύψει διάλυμα με pH = 11.",
    "options": [
      {
        "text": "α. διάλυμα HCl με pH = 4",
        "correct": false
      },
      {
        "text": "β. καθαρό νερό",
        "correct": false
      },
      {
        "text": "γ. διάλυμα NaOH με pH = 13",
        "correct": true
      },
      {
        "text": "δ. διάλυμα NaOH με pH = 10",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: γ. Το αρχικό διάλυμα είναι πολύ όξινο (pH=1). Για να προκύψει βασικό διάλυμα με pH=11, πρέπει να προστεθεί μια ισχυρή βάση με pH μεγαλύτερο του 11, ώστε να εξουδετερώσει το οξύ και να δώσει την επιθυμητή βασικότητα. Η μόνη επιλογή είναι το διάλυμα NaOH με pH=13.</span>"
  },
  {
    "chapterId": "chapter-6",
    "q": "Να επιλέξετε τη σωστή πρόταση:",
    "options": [
      {
        "text": "α. Όλα ανεξαιρέτως τα υλικά σώματα έχουν αποθηκευμένη χημική ενέργεια.",
        "correct": true
      },
      {
        "text": "β. Η χημική ενέργεια αποθηκεύεται αποκλειστικά στις μπαταρίες.",
        "correct": false
      },
      {
        "text": "γ. Χημική ενέργεια έχουν αποθηκευμένη ορισμένες ουσίες, όπως το πετρέλαιο και το φυσικό αέριο και οι μπαταρίες.",
        "correct": false
      },
      {
        "text": "δ. Οι ανεμογεννήτριες μετατρέπουν την χημική ενέργεια του αέρα σε ηλεκτρική.",
        "correct": false
      }
    ],
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: α. Όλα ανεξαιρέτως τα υλικά σώματα έχουν αποθηκευμένη χημική ενέργεια στους δεσμούς των μορίων τους.</span>"
  }
];