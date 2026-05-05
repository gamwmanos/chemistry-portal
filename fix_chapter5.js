const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf8');

// === FIX 1: Fix Aphrodite image path ===
content = content.replace(
  `src='/images/aphrodite_milos.png'`,
  `src='/images/gGymnasiou/media__1777991400868.png'`
);
console.log('Fix 1: Aphrodite image path fixed');

// === FIX 2: Fix periodic table image path (question 30) - replace img with CSS table ===
const oldQ30Img = `<img src='/images/periodic_table_letters.png' alt='Περιοδικός Πίνακας με γράμματα' class='w-full max-w-lg h-auto my-2'>`;
const newQ30Table = `<table class='border-collapse text-xs my-2 font-mono'>
<tbody>
<tr>
<td class='border border-gray-400 p-1 bg-[#bfdbfe] font-bold'>Α</td>
<td class='border border-gray-400 p-1' colspan='16'></td>
<td class='border border-gray-400 p-1 bg-[#fef08a] font-bold'>Κ</td>
</tr>
<tr>
<td class='border border-gray-400 p-1 bg-[#bbf7d0] font-bold'>Β</td>
<td class='border border-gray-400 p-1' colspan='14'></td>
<td class='border border-gray-400 p-1 bg-[#fef08a] font-bold'>Ε</td>
<td class='border border-gray-400 p-1' colspan='1'></td>
</tr>
<tr>
<td class='border border-gray-400 p-1' colspan='1'></td>
<td class='border border-gray-400 p-1 bg-[#bbf7d0] font-bold'>Δ</td>
<td class='border border-gray-400 p-1' colspan='9'></td>
<td class='border border-gray-400 p-1 bg-[#bbf7d0] font-bold'>Μ</td>
<td class='border border-gray-400 p-1' colspan='3'></td>
<td class='border border-gray-400 p-1 bg-[#fef08a] font-bold'>Ζ</td>
<td class='border border-gray-400 p-1 bg-[#fef08a] font-bold'>Λ</td>
</tr>
</tbody>
</table>`;
content = content.replace(oldQ30Img, newQ30Table);
console.log('Fix 2: Q30 periodic table replaced with CSS table');

// === FIX 3: Remove Q6 (Bases) from Questions array and add it to MCQ ===
// The Q6 for bases (chapter-5) needs to be converted to MCQ format
// First, let's find its exact text in the file to remove it from Questions

const q6QuestionText = `<b>6. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε την απάντησή σας.</b><br><b>Α.</b> Τα καθαριστικά των αποχετεύσεων και των σωληνώσεων περιέχουν βάσεις.<br><b>Β.</b> Πολλές βάσεις είναι διαβρωτικές και γι' αυτό δεν τις συναντούμε σε είδη καθημερινής ζωής.<br><b>Γ.</b> Οι βάσεις όταν διαλύονται στο νερό ελευθερώνουν κατιόντα υδρογόνου.<br><b>Δ.</b> Ο αλκαλικός χαρακτήρας των διαλυμάτων των βάσεων οφείλεται στο ότι ελευθερώνουν ανιόντα υδροξειδίου.`;

// Find and remove this entry from gGymnasiouQuestions (open-ended)
// We need to find the block and remove it
const q6Block = `  {
    "chapterId": "chapter-5",
    "q": "<b>6. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε την απάντησή σας.</b><br><b>Α.</b> Τα καθαριστικά των αποχετεύσεων και των σωληνώσεων περιέχουν βάσεις.<br><b>Β.</b> Πολλές βάσεις είναι διαβρωτικές και γι' αυτό δεν τις συναντούμε σε είδη καθημερινής ζωής.<br><b>Γ.</b> Οι βάσεις όταν διαλύονται στο νερό ελευθερώνουν κατιόντα υδρογόνου.<br><b>Δ.</b> Ο αλκαλικός χαρακτήρας των διαλυμάτων των βάσεων οφείλεται στο ότι ελευθερώνουν ανιόντα υδροξειδίου.",
    "a": "<span class='text-purple-300 font-bold'><b>Α. Η πρόταση είναι σωστή.</b> Τα αποφρακτικά των σωληνώσεων περιέχουν την καυστική βάση υδροξείδιο του νατρίου (NaOH).<br><b>Β. Η πρόταση είναι λανθασμένη.</b> Πολλές βάσεις συναντούμε σε είδη καθημερινής ζωής όπως τα αποφρακτικά των σωληνώσεων περιέχουν το καυστικό υδροξείδιο του νατρίου (NaOH), οι βαφές των μαλλιών, όπως και τα διαλύματα για τα τσιμπήματα από τις μέδουσες και τις μέλισσες περιέχουν αμμωνία (NH<sub>3</sub>). Επειδή κάποιες από αυτές είναι διαβρωτικές απαιτείται προσοχή κατά τη χρήση τους.<br><b>Γ. Η πρόταση είναι λανθασμένη.</b> Οι βάσεις όταν διαλύονται στο νερό, δίνουν ανιόντα υδροξειδίου (OH<sup>-</sup>).<br><b>Δ. Η πρόταση είναι σωστή.</b> Το σύνολο των κοινών ιδιοτήτων των διαλυμάτων των βάσεων ονομάζεται βασικός ή αλκαλικός χαρακτήρας οφείλεται στο ότι ελευθερώνουν ανιόντα υδροξειδίου.</span>"
  },`;

if (content.includes(q6Block)) {
  content = content.replace(q6Block + '\n', '');
  console.log('Fix 3: Q6 removed from open-ended questions');
} else {
  console.log('WARNING: Q6 block not found exactly - checking partial...');
  // Try to find a partial match
  if (content.includes('6. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές')) {
    console.log('Q6 text found in file');
  }
}

// === FIX 4: Add MCQ entries for chapter-5 at the end of gGymnasiouMCQ array ===
const newMCQ = `
  {
    "chapterId": "chapter-5",
    "q": "<b>3. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε την απάντησή σας.</b><br><b>Α.</b> Τα μπαταρίες των αυτοκινήτων περιέχουν θειικό οξύ. Όταν συμπληρώνονται με αποσταγμένο νερό, χρειάζεται προσοχή να μην ξεχειλίσει.<br><b>Β.</b> Τα περισσότερα οξέα είναι διαβρωτικά και γι' αυτό δεν τα συναντούμε σε τρόφιμα και ποτά.<br><b>Γ.</b> Τα οξέα όταν διαλύονται στο νερό ελευθερώνουν κατιόντα υδρογόνου.<br><b>Δ.</b> Ο όξινος χαρακτήρας των διαλυμάτων των οξέων οφείλεται στο ότι ελευθερώνουν αέριο υδρογόνο.<br><b>Ε.</b> Δεν μπορεί να αποθηκευτεί διάλυμα HCl σε δοχείο από ψευδάργυρο ή σίδηρο.",
    "options": [
      "Α. Σωστή, Β. Σωστή, Γ. Σωστή, Δ. Λανθασμένη, Ε. Σωστή",
      "Α. Σωστή, Β. Λανθασμένη, Γ. Σωστή, Δ. Λανθασμένη, Ε. Σωστή",
      "Α. Λανθασμένη, Β. Λανθασμένη, Γ. Λανθασμένη, Δ. Σωστή, Ε. Λανθασμένη",
      "Α. Σωστή, Β. Λανθασμένη, Γ. Λανθασμένη, Δ. Σωστή, Ε. Λανθασμένη"
    ],
    "correct": 1,
    "explanation": "<span class='text-purple-300 font-bold'>Α. Σωστή. Χρειάζεται προσοχή να μην ξεχειλίσει καθώς κινδυνεύουμε να πάθουμε σοβαρά εγκαύματα από το θειικό οξύ.<br>Β. Λανθασμένη. Πολλά οξέα, όπως το οξικό, το κιτρικό και το ασκορβικό τα συναντούμε σε τρόφιμα και ποτά.<br>Γ. Σωστή. Τα οξέα όταν διαλύονται στο νερό, δίνουν κατιόντα υδρογόνου (H⁺).<br>Δ. Λανθασμένη. Τα διαλύματα όλων των οξέων περιέχουν κατιόντα υδρογόνου (H⁺). Σ' αυτά ακριβώς τα ιόντα οφείλονται οι κοινές ιδιότητες των οξέων.<br>Ε. Σωστή. Δεν μπορεί να αποθηκευτεί διάλυμα HCl σε δοχείο από ψευδάργυρο ή σίδηρο καθώς θα αντιδράσει με αυτά τα μέταλλα που είναι κατασκευασμένα τα δοχεία αυτά.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "<b>6. Να χαρακτηρίσετε τις ακόλουθες προτάσεις ως σωστές ή λανθασμένες και να αιτιολογήσετε την απάντησή σας.</b><br><b>Α.</b> Τα καθαριστικά των αποχετεύσεων και των σωληνώσεων περιέχουν βάσεις.<br><b>Β.</b> Πολλές βάσεις είναι διαβρωτικές και γι' αυτό δεν τις συναντούμε σε είδη καθημερινής ζωής.<br><b>Γ.</b> Οι βάσεις όταν διαλύονται στο νερό ελευθερώνουν κατιόντα υδρογόνου.<br><b>Δ.</b> Ο αλκαλικός χαρακτήρας των διαλυμάτων των βάσεων οφείλεται στο ότι ελευθερώνουν ανιόντα υδροξειδίου.",
    "options": [
      "Α. Σωστή, Β. Σωστή, Γ. Σωστή, Δ. Λανθασμένη",
      "Α. Σωστή, Β. Λανθασμένη, Γ. Σωστή, Δ. Σωστή",
      "Α. Σωστή, Β. Λανθασμένη, Γ. Λανθασμένη, Δ. Σωστή",
      "Α. Λανθασμένη, Β. Σωστή, Γ. Λανθασμένη, Δ. Σωστή"
    ],
    "correct": 2,
    "explanation": "<span class='text-purple-300 font-bold'><b>Α. Σωστή.</b> Τα αποφρακτικά των σωληνώσεων περιέχουν την καυστική βάση υδροξείδιο του νατρίου (NaOH).<br><b>Β. Λανθασμένη.</b> Πολλές βάσεις συναντούμε σε είδη καθημερινής ζωής: τα αποφρακτικά σωληνώσεων, οι βαφές μαλλιών, τα διαλύματα για τσιμπήματα από μέδουσες και μέλισσες περιέχουν αμμωνία (NH<sub>3</sub>). Επειδή κάποιες είναι διαβρωτικές, απαιτείται προσοχή.<br><b>Γ. Λανθασμένη.</b> Οι βάσεις όταν διαλύονται στο νερό, δίνουν ανιόντα υδροξειδίου (OH<sup>-</sup>), όχι κατιόντα υδρογόνου.<br><b>Δ. Σωστή.</b> Ο αλκαλικός χαρακτήρας των βάσεων οφείλεται στα ανιόντα υδροξειδίου (OH<sup>-</sup>) που ελευθερώνονται στο νερό.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "<b>24. Στις ακόλουθες ερωτήσεις να επιλέξετε τη σωστή απάντηση.</b><br><b>Α.</b> Το μύρτιλλο είναι από τα λίγα φυτά που ευδοκιμεί σε έδαφος όξινο. Το pH ενός εδάφους κατάλληλου για την καλλιέργεια μύρτιλλου μπορεί να είναι:",
    "options": [
      "i: 4,2-5,0",
      "ii: 13,0-14,0",
      "iii: 7,0-8,0",
      "iv: 9,0-10,0"
    ],
    "correct": 0,
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: <b>i: 4,2-5,0</b><br>Το μύρτιλλο ευδοκιμεί σε όξινο έδαφος, δηλαδή με pH &lt; 7. Η τιμή 4,2-5,0 είναι η μόνη όξινη επιλογή.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "<b>Β.</b> Αν το διαθέσιμο έδαφος έχει pH=7,2 θα πρέπει να χρησιμοποιηθεί για την εξουδετέρωσή του:",
    "options": [
      "iv: Ca(OH)<sub>2</sub>",
      "v: HCl",
      "vi: NH<sub>3</sub>",
      "vii: NaCl"
    ],
    "correct": 1,
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: <b>v: HCl</b><br>Για να μειωθεί το pH (να γίνει πιο όξινο) πρέπει να προσθέσουμε οξύ. Το HCl είναι το κατάλληλο οξύ.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "<b>Από τις προηγούμενες ενώσεις:</b><br><b>Β.</b> Τα άλατα αντιδρούν με δραστικά μέταλλα ml H<sub>2</sub>, H<sub>2</sub>SO<sub>4</sub>, και εκλύουν αέριο υδρογόνο που καίγεται με κρότο.",
    "options": [
      "Σωστή",
      "Λανθασμένη",
      "Εξαρτάται από το μέταλλο",
      "Εξαρτάται από το αλάτι"
    ],
    "correct": 0,
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: <b>Σωστή</b><br>Τα οξέα (όχι τα άλατα) αντιδρούν με δραστικά μέταλλα και εκλύουν αέριο υδρογόνο που καίγεται με κρότο.</span>"
  },
  {
    "chapterId": "chapter-5",
    "q": "<b>21. Η Όλη και ο Ίον μέτρησαν το pH τριών διαλυμάτων στο σχολικό εργαστήριο και βρήκαν τα εξής αποτελέσματα:</b><br><table class='w-auto text-sm text-left border-collapse mt-2 border border-gray-400'><thead><tr class='bg-gray-100 dark:bg-slate-800'><th class='border border-gray-400 p-2'>Είδος διαλύματος</th><th class='border border-gray-400 p-2'>pH</th></tr></thead><tbody><tr><td class='border border-gray-400 p-2'>i. διάλυμα Α</td><td class='border border-gray-400 p-2'>2,50</td></tr><tr><td class='border border-gray-400 p-2'>ii. διάλυμα Β</td><td class='border border-gray-400 p-2'>3,50</td></tr><tr><td class='border border-gray-400 p-2'>iii. διάλυμα Γ</td><td class='border border-gray-400 p-2'>7,00</td></tr><tr><td class='border border-gray-400 p-2'>iv. διάλυμα Δ1</td><td class='border border-gray-400 p-2'>11,20</td></tr></tbody></table><br>Α. Χρησιμοποιώντας τον pH-μετρο να μετρήσουν τα pH. Ποιο από τα πιο όξινο και ποιο το πιο βασικό;",
    "options": [
      "Α: πιο όξινο, Δ1: πιο βασικό",
      "Β: πιο όξινο, Γ: πιο βασικό",
      "Γ: πιο όξινο, Δ1: πιο βασικό",
      "Α: πιο βασικό, Δ1: πιο όξινο"
    ],
    "correct": 0,
    "explanation": "<span class='text-purple-300 font-bold'>Σωστή απάντηση: <b>Α: πιο όξινο, Δ1: πιο βασικό</b><br>Από τα διαλύματα το πιο όξινο είναι το Α καθώς έχει τη μικρότερη τιμή pH ενώ το πιο βασικό είναι το Δ καθώς έχει τη μεγαλύτερη τιμή pH.</span>"
  }`;

// Insert the new MCQ entries before the closing of gGymnasiouMCQ array
const mcqEnd = '\n];\n';
const lastBraceIdx = content.lastIndexOf(mcqEnd);
if (lastBraceIdx !== -1) {
  content = content.substring(0, lastBraceIdx) + ',\n' + newMCQ + '\n];\n';
  console.log('Fix 4: Added MCQ entries for chapter-5');
} else {
  console.log('ERROR: Could not find end of MCQ array');
}

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', content, 'utf8');
console.log('\nAll fixes applied! File saved.');
