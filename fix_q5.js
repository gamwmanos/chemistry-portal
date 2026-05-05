const fs = require('fs');

const questionsFile = 'd:/BIBLIA/chemistry-portal/src/data/gGymnasiouQuestions.ts';
let tsContent = fs.readFileSync(questionsFile, 'utf8');

// The original questions in g_chap1_batch1.json
const batch1 = JSON.parse(fs.readFileSync('d:/BIBLIA/chemistry-portal/src/data/g_chap1_batch1.json', 'utf8'));

// Filter out the question 5
const normalQuestions = batch1.filter(q => !q.q.startsWith('5. Να επιλέξετε'));

const newMCQs = [
  {
    chapterId: 'chapter-1',
    q: '5. Α. Στο 1<sup>ο</sup> και 2<sup>ο</sup> μέλος μίας χημικής εξίσωσης είναι:',
    options: [
      { text: 'Α. ίσο το άθροισμα του αριθμού μορίων των αντιδρώντων και των προϊόντων.', correct: false },
      { text: 'Β. ίσοι οι αριθμοί των ατόμων κάθε στοιχείου που μετέχει στην αντίδραση', correct: true },
      { text: 'Γ. ίσο το άθροισμα του αριθμού των ατόμων των αντιδρώντων με το άθροισμα του αριθμού των ατόμων των προϊόντων.', correct: false },
      { text: 'Δ. ίσοι οι αριθμοί των μορίων των αντιδρώντων και προϊόντων.', correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Γ (Σύμφωνα με το σχολικό βιβλίο). Ωστόσο, επιστημονικά ακριβέστερο είναι το Β, καθώς ο αριθμός ατόμων διατηρείται για ΚΑΘΕ στοιχείο χωριστά. Το βιβλίο δίνει ως σωστή επιλογή το Γ.</span>"
  },
  {
    chapterId: 'chapter-1',
    q: '5. Β. Στη χημική εξίσωση: (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>(s) &rarr; ...NH<sub>3</sub>(g) + ...CO<sub>2</sub>(g) + H<sub>2</sub>O(g), οι συντελεστές NH<sub>3</sub>, CO<sub>2</sub>, H<sub>2</sub>O είναι αντίστοιχα:',
    options: [
      { text: 'Α. 1-1-1', correct: false },
      { text: 'Β. 2-1-1', correct: true },
      { text: 'Γ. 2-2-1', correct: false },
      { text: 'Δ. κανένα από τα προηγούμενα', correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Β</span>"
  },
  {
    chapterId: 'chapter-1',
    q: '5. Γ. Από τη χημική αντίδραση του υδρογόνου με το άζωτο παράγεται:',
    options: [
      { text: 'Α. NH<sub>3</sub>', correct: true },
      { text: 'Β. HBr', correct: false },
      { text: 'Γ. H<sub>2</sub>O', correct: false },
      { text: 'Δ. HCl', correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Α</span>"
  },
  {
    chapterId: 'chapter-1',
    q: '5. Δ. Όταν αντιδρούν 64 g θείου (S) με 96 g οξυγόνου (O<sub>2</sub>), παράγονται:',
    options: [
      { text: 'Α. 160 g CO<sub>2</sub>', correct: false },
      { text: 'Β. 64 g SO<sub>2</sub>', correct: false },
      { text: 'Γ. 160 g SO<sub>3</sub>', correct: true },
      { text: 'Δ. 96 g SO<sub>2</sub>', correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Γ (64g + 96g = 160g SO<sub>3</sub> σύμφωνα με την αρχή διατήρησης της μάζας).</span>"
  },
  {
    chapterId: 'chapter-1',
    q: '5. Ε. 245 g KClO<sub>3</sub>, όταν θερμαίνονται ισχυρά, διασπώνται και παράγουν 96 g O<sub>2</sub> και a g KCl. Η αντίδραση είναι:',
    options: [
      { text: 'Α. εξώθερμη', correct: false },
      { text: 'Β. δεν συνοδεύεται από μεταβολές στην ενέργεια', correct: false },
      { text: 'Γ. ενδόθερμη ή εξώθερμη', correct: true },
      { text: 'Δ. ενδόθερμη', correct: false }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Γ</span>"
  },
  {
    chapterId: 'chapter-1',
    q: '5. Από την αντίδραση (της προηγούμενης ερώτησης) παράχθηκαν:',
    options: [
      { text: 'Ε. 56 g KCl', correct: false },
      { text: 'Στ. 100 g KCl', correct: false },
      { text: 'Ζ. 149 g KCl.', correct: true }
    ],
    explanation: "<span class='text-purple-300 font-bold'>Σωστή απάντηση: Ζ (Σύμφωνα με το νόμο διατήρησης της μάζας: 245g - 96g = 149g).</span>"
  }
];

const newTsContent = `import type { Question, MCQ } from './questions';

export const gGymnasiouQuestions: Question[] = ${JSON.stringify(normalQuestions, null, 2)};

export const gGymnasiouMCQ: MCQ[] = ${JSON.stringify(newMCQs, null, 2)};
`;

fs.writeFileSync(questionsFile, newTsContent);
console.log('Successfully updated gGymnasiouQuestions.ts with MCQs!');
