const fs = require('fs');

const chap4Questions = [
  {
    chapterId: "chapter-4",
    q: "<b>11. Στον διπλανό πίνακα δίνονται με προσομοιώματα, χωρίς συντελεστές η τέλεια και οι ατελείς καύσεις του μεθανίου. Να συμπληρώσετε τους συντελεστές που λείπουν στην εξίσωση με τα προσομοιώματα και στη συνέχεια να συμπληρώσετε με την βοήθεια των προσομοιωμάτων την χημική εξίσωση κάθε αντίδρασης.</b><br><br>μεθάνιο + οξυγόνο &rarr; διοξείδιο του άνθρακα + νερό + θερμότητα<br>... [μοντέλο μεθανίου] + ... [μοντέλο οξυγόνου] &rarr; ... [μοντέλο CO<sub>2</sub>] + ... [μοντέλο νερού]<br><br>μεθάνιο + οξυγόνο &rarr; μονοξείδιο του άνθρακα + νερό + θερμότητα<br>... [μοντέλο μεθανίου] + ... [μοντέλο οξυγόνου] &rarr; ... [μοντέλο CO] + ... [μοντέλο νερού]<br><br>μεθάνιο + οξυγόνο &rarr; άνθρακας (αιθάλη) + νερό + θερμότητα<br>... [μοντέλο μεθανίου] + ... [μοντέλο οξυγόνου] &rarr; ... [άτομο C] + ... [μοντέλο νερού]",
    a: "<span class='text-purple-300 font-bold'><b>ΑΠΑΝΤΗΣΕΙΣ</b><br><b>A.</b><br>[Μοντέλο μεθανίου] + 2 [Μοντέλο οξυγόνου] &rarr; [Μοντέλο CO<sub>2</sub>] + 2 [Μοντέλο νερού]<br><b>CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O</b><br><br><b>B.</b><br>2 [Μοντέλο μεθανίου] + 3 [Μοντέλο οξυγόνου] &rarr; 2 [Μοντέλο CO] + 4 [Μοντέλο νερού]<br><b>2CH<sub>4</sub> + 3O<sub>2</sub> &rarr; 2CO + 4H<sub>2</sub>O</b><br><br><b>Γ.</b><br>[Μοντέλο μεθανίου] + [Μοντέλο οξυγόνου] &rarr; [Μαύρη σφαίρα C] + 2 [Μοντέλο νερού]<br><b>CH<sub>4</sub> + O<sub>2</sub> &rarr; C + 2H<sub>2</sub>O</b></span>"
  },
  {
    chapterId: "chapter-4",
    q: "<b>12. Να συμπληρώσετε τις ακόλουθες χημικές εξισώσεις, ώστε να είναι ορθές.</b><br>Τέλεια καύση αιθανίου: ...<br>Ατελής καύση αιθανίου προς CO: ...<br>Ατελής καύση αιθανίου προς C: ...<br>Τέλεια καύση προπανίου: ...<br>Ατελής καύση προπανίου προς CO: ...<br>Ατελής καύση προπανίου προς C: ...<br>Τέλεια καύση βουτανίου: ...<br>Ατελής καύση βουτανίου προς CO: ...<br>Ατελής καύση βουτανίου προς C: ...<br>Τέλεια καύση πεντανίου: ...<br>Τέλεια καύση εξανίου: ...<br>Τέλεια καύση επτανίου: ...<br>Τέλεια καύση οκτανίου: ...<br>Ατελής καύση οκτανίου προς CO: ...<br>Ατελής καύση οκτανίου προς C: ...",
    a: "<span class='text-purple-300 font-bold'><b>ΑΠΑΝΤΗΣΕΙΣ</b><br>Τέλεια καύση αιθανίου: <b>2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> &rarr; 4CO<sub>2</sub> + 6H<sub>2</sub>O</b><br>Ατελής καύση αιθανίου προς CO: <b>2C<sub>2</sub>H<sub>6</sub> + 5O<sub>2</sub> &rarr; 4CO + 6H<sub>2</sub>O</b><br>Ατελής καύση αιθανίου προς C: <b>2C<sub>2</sub>H<sub>6</sub> + 3O<sub>2</sub> &rarr; 4C + 6H<sub>2</sub>O</b><br>Τέλεια καύση προπανίου: <b>C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> &rarr; 3CO<sub>2</sub> + 4H<sub>2</sub>O</b><br>Ατελής καύση προπανίου προς CO: <b>2C<sub>3</sub>H<sub>8</sub> + 7O<sub>2</sub> &rarr; 6CO + 8H<sub>2</sub>O</b><br>Ατελής καύση προπανίου προς C: <b>C<sub>3</sub>H<sub>8</sub> + 2O<sub>2</sub> &rarr; 3C + 4H<sub>2</sub>O</b><br>Τέλεια καύση βουτανίου: <b>2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> &rarr; 8CO<sub>2</sub> + 10H<sub>2</sub>O</b><br>Ατελής καύση βουτανίου προς CO: <b>2C<sub>4</sub>H<sub>10</sub> + 9O<sub>2</sub> &rarr; 8CO + 10H<sub>2</sub>O</b><br>Ατελής καύση βουτανίου προς C: <b>2C<sub>4</sub>H<sub>10</sub> + 5O<sub>2</sub> &rarr; 8C + 10H<sub>2</sub>O</b><br>Τέλεια καύση πεντανίου: <b>C<sub>5</sub>H<sub>12</sub> + 8O<sub>2</sub> &rarr; 5CO<sub>2</sub> + 6H<sub>2</sub>O</b><br>Τέλεια καύση εξανίου: <b>2C<sub>6</sub>H<sub>14</sub> + 19O<sub>2</sub> &rarr; 12CO<sub>2</sub> + 14H<sub>2</sub>O</b><br>Τέλεια καύση επτανίου: <b>C<sub>7</sub>H<sub>16</sub> + 11O<sub>2</sub> &rarr; 7CO<sub>2</sub> + 8H<sub>2</sub>O</b><br>Τέλεια καύση οκτανίου: <b>2C<sub>8</sub>H<sub>18</sub> + 25O<sub>2</sub> &rarr; 16CO<sub>2</sub> + 18H<sub>2</sub>O</b><br>Ατελής καύση οκτανίου προς CO: <b>2C<sub>8</sub>H<sub>18</sub> + 17O<sub>2</sub> &rarr; 16CO + 18H<sub>2</sub>O</b><br>Ατελής καύση οκτανίου προς C: <b>2C<sub>8</sub>H<sub>18</sub> + 9O<sub>2</sub> &rarr; 16C + 18H<sub>2</sub>O</b></span>"
  },
  {
    chapterId: "chapter-4",
    q: "<b>13. Να συμπληρώσετε το διάγραμμα</b><br>Το γκαζάκι του εμπορίου περιέχει βουτάνιο. Για την τέλεια καύση του απαιτείται ......... . Το οποίο προέρχεται από τον ......... .<br>Κατά την τέλεια καύση παράγονται: ......... και ......... .<br>Ανιχνεύεται με διαβίβαση σε ......... ο οποίος από λευκός γίνεται ......... .<br>Το οποίο θολώνει το ......... .",
    a: "<span class='text-purple-300 font-bold'>Το γκαζάκι του εμπορίου περιέχει βουτάνιο. Για την τέλεια καύση του απαιτείται <b>επαρκής ποσότητα οξυγόνου</b>. Το οποίο προέρχεται από τον <b>ατμοσφαιρικό αέρα</b>.<br>Κατά την τέλεια καύση παράγονται: <b>H<sub>2</sub>O</b> και <b>CO<sub>2</sub></b>.<br>Το νερό (H<sub>2</sub>O) ανιχνεύεται με διαβίβαση σε <b>άνυδρο θειικό χαλκό</b> ο οποίος από λευκός γίνεται <b>γαλάζιος</b>.<br>Το CO<sub>2</sub> θολώνει το <b>διαυγές ασβεστόνερο</b>.</span>"
  },
  {
    chapterId: "chapter-4",
    q: "<b>4.3. Οι ενώσεις του άνθρακα ως πρώτες ύλες</b><br><br><b>14. Να συμπληρώσετε το ακόλουθο κείμενο με τις κατάλληλες λέξεις, χημικούς τύπους ή σχήματα, ώστε να είναι σωστό:</b><br>«Το πετρέλαιο είναι πολύ πολύτιμο για να ......... », γιατί αποτελεί την ......... για την παραγωγή πολλών χρήσιμων προϊόντων, όπως τα ........., τα ........., τα ......... στην ......... Βιομηχανία.<br>Πολλά από αυτά τα προϊόντα παράγονται με πολυμερισμό, δηλαδή την χημική ......... κατά την οποία ......... ή ......... οργανικών ενώσεων, που ονομάζονται ........., ενώνονται και σχηματίζουν ........., τα .......... Υπάρχουν ......... και ......... πολυμερή. Ένα είδος φυσικών πολυμερών είναι οι ........., όπως η καζεΐνη που υπάρχει στο ......... και η ......... που υπάρχει στο αλεύρι. Μια μεγάλη ομάδα συνθετικών πολυμερών είναι τα ........., τα οποία εξαιτίας της μεγάλης ......... στη διάβρωση επιβαρύνουν το ..........",
    a: "<span class='text-purple-300 font-bold'>«Το πετρέλαιο είναι πολύ πολύτιμο για να <b>καίγεται</b>», γιατί αποτελεί την <b>πρώτη ύλη</b> για την παραγωγή πολλών χρήσιμων προϊόντων, όπως τα <b>απορρυπαντικά</b>, τα <b>φάρμακα</b>, τα <b>πλαστικά κ.ά.</b>, στην <b>Πετροχημική</b> Βιομηχανία.<br>Πολλά από αυτά τα προϊόντα παράγονται με πολυμερισμό, δηλαδή την χημική <b>αντίδραση</b> κατά την οποία <b>πολλά μόρια ίδιων</b> ή <b>διαφορετικών</b> οργανικών ενώσεων, που ονομάζονται <b>μονομερή</b>, ενώνονται και σχηματίζουν <b>μακρομόρια</b>, τα <b>πολυμερή</b>. Υπάρχουν <b>χημικά</b> και <b>φυσικά</b> πολυμερή. Ένα είδος φυσικών πολυμερών είναι οι <b>πρωτεΐνες</b>, όπως η καζεΐνη που υπάρχει στο <b>γάλα</b> και η <b>γλουτένη</b> που υπάρχει στο αλεύρι. Μια μεγάλη ομάδα συνθετικών πολυμερών είναι τα <b>πλαστικά</b>, τα οποία εξαιτίας της μεγάλης <b>αντοχής</b> στη διάβρωση επιβαρύνουν το <b>περιβάλλον</b>.</span>"
  },
  {
    chapterId: "chapter-4",
    q: "<b>15. Να αντιστοιχίσετε καθένα από τα υλικά της στήλης Α στον χαρακτηρισμό στην ομάδα Β.</b><br><table class='w-full text-sm text-left border-collapse mt-2 border border-gray-400'><thead><tr class='bg-gray-100 dark:bg-slate-800'><th class='border border-gray-400 p-2'></th><th class='border border-gray-400 p-2'>A</th><th class='border border-gray-400 p-2'>B</th></tr></thead><tbody><tr><td class='border border-gray-400 p-2 text-center font-bold'>1.</td><td class='border border-gray-400 p-2'>Πολυαιθυλένιο</td><td class='border border-gray-400 p-2'>Φυσικό πολυμερές</td></tr><tr><td class='border border-gray-400 p-2 text-center font-bold'>2.</td><td class='border border-gray-400 p-2'>Μετάξι</td><td class='border border-gray-400 p-2'>Προϊόν της πετροχημικής βιομηχανίας</td></tr><tr><td class='border border-gray-400 p-2 text-center font-bold'>3.</td><td class='border border-gray-400 p-2'>Πρωτεΐνες</td><td class='border border-gray-400 p-2'></td></tr><tr><td class='border border-gray-400 p-2 text-center font-bold'>4.</td><td class='border border-gray-400 p-2'>Πολυβινυλοχλωρίδιο</td><td class='border border-gray-400 p-2'></td></tr><tr><td class='border border-gray-400 p-2 text-center font-bold'>5.</td><td class='border border-gray-400 p-2'>Απορρυπαντικά</td><td class='border border-gray-400 p-2'></td></tr><tr><td class='border border-gray-400 p-2 text-center font-bold'>6.</td><td class='border border-gray-400 p-2'>Ελαστικά αυτοκινήτων</td><td class='border border-gray-400 p-2'></td></tr></tbody></table>",
    a: "<span class='text-purple-300 font-bold'><b>Απαντήσεις:</b><br>1 (Πολυαιθυλένιο) &rarr; Προϊόν της πετροχημικής βιομηχανίας<br>2 (Μετάξι) &rarr; Φυσικό πολυμερές<br>3 (Πρωτεΐνες) &rarr; Φυσικό πολυμερές<br>4 (Πολυβινυλοχλωρίδιο) &rarr; Προϊόν της πετροχημικής βιομηχανίας<br>5 (Απορρυπαντικά) &rarr; Προϊόν της πετροχημικής βιομηχανίας<br>6 (Ελαστικά αυτοκινήτων) &rarr; Προϊόν της πετροχημικής βιομηχανίας</span>"
  }
];

const chap4MCQ = [
  {
    chapterId: "chapter-4",
    q: "<b>16. α.</b> Από τα ακόλουθα σώματα, προϊόντα της πετροχημικής βιομηχανίας είναι:<br>i. τα απορρυπαντικά, ii. το PVC, iii. το φυσικό καουτσούκ iv. το υγραέριο",
    options: [
      { text: "Α. i", correct: false },
      { text: "Β. i, ii", correct: true },
      { text: "Γ. i, ii, iii", correct: false },
      { text: "Δ. όλα", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Β</span>"
  },
  {
    chapterId: "chapter-4",
    q: "<b>16. β.</b> Το νάιλον είναι ένα πολυμερές, επομένως:",
    options: [
      { text: "i. δεν είναι ανθεκτικό", correct: false },
      { text: "ii. δεν αποικοδομείται εύκολα από το περιβάλλον", correct: true },
      { text: "iii. είναι ελαφρύ", correct: false },
      { text: "iv. είναι προϊόν της κλασματικής απόσταξης του πετρελαίου", correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: ii</span>"
  }
];

const file = 'd:/BIBLIA/chemistry-portal/src/data/gGymnasiouQuestions.ts';
let content = fs.readFileSync(file, 'utf8');

// Insert questions
const qInsertPos = content.lastIndexOf('];', content.indexOf('export const gGymnasiouMCQ'));
let newContent = content.substring(0, qInsertPos);
newContent += ',\n  ' + chap4Questions.map(q => JSON.stringify(q, null, 2).split('\\n').join('\\n').replace(/\n/g, '\n  ')).join(',\n  ');
newContent += '\n' + content.substring(qInsertPos);

// Insert MCQs
const mcqInsertPos = newContent.lastIndexOf('];');
let finalContent = newContent.substring(0, mcqInsertPos);
finalContent += ',\n  ' + chap4MCQ.map(q => JSON.stringify(q, null, 2).split('\\n').join('\\n').replace(/\n/g, '\n  ')).join(',\n  ');
finalContent += '\n' + newContent.substring(mcqInsertPos);

fs.writeFileSync(file, finalContent, 'utf8');
console.log('Script completed. Second batch of Chapter 4 inserted.');
