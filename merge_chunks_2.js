const fs = require('fs');

const userQuestions = [
  // ---------------- ΕΝΟΤΗΤΑ: Τα σωματίδια της ύλης & Χημικά Στοιχεία (Κεφ. 4 του βιβλίου) ----------------
  {
    chapterId: "chapter-3",
    q: "Να αναφέρετε συνοπτικά τις απόψεις των αρχαίων Ελλήνων φιλοσόφων (Δημόκριτος, Αριστοτέλης) και του Lavoisier σχετικά με τη δομή της ύλης, όπως περιγράφονται στο εννοιολογικό σχήμα.",
    a: `<span class='text-purple-300 font-bold'>
    <ul class='list-disc ml-5 mt-2'>
      <li class='mb-2'>Ο Δημόκριτος πίστευε ότι τα υλικά σώματα αποτελούνται από άτομα τα οποία είναι άφθαρτα, άτμητα και αναλλοίωτα. Ο συνδυασμός τους σχηματίζει τα ουράνια σώματα. Η θεωρία του δεν έγινε αποδεκτή από τους συγχρόνους του [cite: 429-434].</li>
      <li class='mb-2'>Ο Αριστοτέλης πίστευε ότι τα υλικά σώματα προέρχονται από τον συνδυασμό 4 στοιχείων τα οποία είναι αέρας, φωτιά, γη, νερό και του αιθέρα [cite: 435-439]. Η θεωρία του έγινε αποδεκτή, επηρέασε τους αλχημιστές (στην προσπάθειά τους για τη φιλοσοφική λίθο και το ελιξίριο της ζωής) και καταρρίφθηκε αργότερα [cite: 437-440].</li>
      <li class='mb-2'>Ο Lavoisier απέδειξε ότι το νερό σχηματίζεται από H<sub>2</sub> και O<sub>2</sub>, δηλαδή είναι χημική ένωση[cite: 438].</li>
    </ul></span>`
  },
  {
    chapterId: "chapter-9",
    q: "α. Πότε ένα υλικό σώμα χαρακτηρίζεται καθαρή ουσία; β. Πότε μία χημική ουσία χαρακτηρίζεται χημικό στοιχείο; (Δώστε 2 παραδείγματα) γ. Πότε μία χημική ουσία χαρακτηρίζεται χημική ένωση; (Δώστε 2 παραδείγματα).",
    a: `<span class='text-purple-300 font-bold'>
    <ul class='list-disc ml-5 mt-2'>
      <li class='mb-2'>α. Καθαρές ουσίες ονομάζονται οι ουσίες που έχουν απόλυτα καθορισμένη σύσταση[cite: 451].</li>
      <li class='mb-2'>β. Χημικό στοιχείο είναι μία ουσία που δεν μπορεί να διασπαστεί σε άλλες απλούστερες[cite: 452]. Χαρακτηριστικά παραδείγματα είναι το υδρογόνο και το οξυγόνο[cite: 453].</li>
      <li class='mb-2'>γ. Χημική ένωση είναι μία ουσία που μπορεί να διασπαστεί σε άλλες απλούστερες, έχει σταθερή σύσταση και έχει καθορισμένες φυσικές σταθερές [cite: 454-460]. Χαρακτηριστικά παραδείγματα είναι το νερό και η ζάχαρη[cite: 460].</li>
    </ul></span>`
  },
  {
    chapterId: "chapter-9",
    q: "α. Πώς κατέληξε ο Lavoisier στο συμπέρασμα ότι το νερό είναι μία χημική ένωση; β. Ποιες πειραματικές μεθόδους χρησιμοποιούμε για να διαπιστώσουμε τα στοιχεία του νερού; γ. Αν παράγονται 2 L αερίου Α και 4 L αερίου Β, ποιο είναι το καθένα; δ. Αν παράγονται 4 g οξυγόνου, πόσα g υδρογόνου παράγονται και πόσα g νερού διασπάστηκαν;",
    a: `<span class='text-purple-300 font-bold'>
    <ul class='list-disc ml-5 mt-2'>
      <li class='mb-2'>α. Ο Lavoisier παρασκεύασε νερό από υδρογόνο και οξυγόνο, δηλαδή από απλούστερες χημικές ουσίες[cite: 468].</li>
      <li class='mb-2'>β. Για το οξυγόνο βάζουμε μια μισοσβησμένη παρασχίδα στον σωλήνα και παρατηρούμε ότι αναφλέγεται[cite: 468]. Για το υδρογόνο πλησιάζουμε αναμμένη παρασχίδα στις φυσαλίδες και ακούμε χαρακτηριστικό κρότο (καίγεται με έντονη φλόγα)[cite: 468].</li>
      <li class='mb-2'>γ. Ο όγκος του υδρογόνου είναι διπλάσιος από τον όγκο του οξυγόνου. Επομένως το αέριο Α (2 L) είναι το οξυγόνο και το Β (4 L) το υδρογόνο[cite: 468].</li>
      <li class='mb-2'>δ. Η μάζα του οξυγόνου είναι οκταπλάσια του υδρογόνου. Άρα για 4 g οξυγόνου παράγονται 0,5 g υδρογόνου. Συνολικά διασπάστηκαν 4,5 g νερού[cite: 468].</li>
    </ul></span>`
  },
  {
    chapterId: "chapter-9",
    q: "Η κρυσταλλική ζάχαρη είναι μία χημική ένωση με σημείο τήξης περίπου 170°C. Πώς θα βρείτε αν ένα δείγμα είναι νοθευμένο; Αν αρχίζει να λιώνει στους 160°C και η θερμοκρασία αυξάνεται σταδιακά, έχει προσμείξεις;",
    a: `<span class='text-purple-300 font-bold'>Θα μπορούσαμε να θερμάνουμε το δείγμα ζάχαρης. Αν το σημείο τήξης του δείγματος είναι διαφορετικό από 170°C (όπως στην περίπτωση που λιώνει στους 160°C), τότε έχει προσμείξεις και είναι νοθευμένο [cite: 483-488].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Να συμπληρώσετε τα κενά: α. Τα μείγματα σε αντίθεση με τις χημικές ουσίες δεν έχουν ... β. Κατά τη διάρκεια του βρασμού του απιοντισμένου νερού η θερμοκρασία ... γιατί το νερό είναι ...",
    a: `<span class='text-purple-300 font-bold'>α. καθορισμένες φυσικές σταθερές[cite: 490]. <br>β. διατηρείται σταθερή, γιατί το νερό είναι καθαρή ουσία[cite: 491].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Ο Ίον έχει μάζα 75 kg και το 66% της μάζας του είναι νερό (δηλαδή 49,5 kg νερό). Με δεδομένο ότι η αναλογία μαζών υδρογόνου - οξυγόνου στο νερό είναι σταθερή και ίση με 1/8, υπολογίστε τις μάζες τους.",
    a: `<span class='text-purple-300 font-bold'>Η μάζα του υδρογόνου στο νερό στο σώμα του Ίονα είναι 5,5 kg και η μάζα του οξυγόνου είναι 44 kg [cite: 492-501].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Δίνεται διάγραμμα θέρμανσης υγρών Α και Β. Τη χρονική στιγμή t1 αρχίζει να βράζει το Α και τη χρονική στιγμή t2 το Β. Στο διάγραμμα, το σώμα Β διατηρεί σταθερή θερμοκρασία μετά την t2, ενώ το Α όχι. Είναι κάποιο από τα δύο χημική ουσία;",
    a: `<span class='text-purple-300 font-bold'>Καθαρή ουσία είναι μόνο το σώμα Β, καθώς μετά τη χρονική στιγμή t2 (όπου αρχίζει ο βρασμός του) παρατηρούμε ότι η θερμοκρασία παραμένει σταθερή [cite: 504-516].</span>`
  },

  // ---------------- ΕΝΟΤΗΤΑ: Η δομή του ατόμου (Κεφ. 5 του βιβλίου) ----------------
  {
    chapterId: "chapter-4",
    q: "Ποιο είναι το βασικό δομικό υλικό των υλικών σωμάτων;",
    a: `<span class='text-purple-300 font-bold'>Το βασικό δομικό υλικό των υλικών σωμάτων είναι το άτομο [cite: 534-536].</span>`
  },
  {
    chapterId: "chapter-4",
    q: "Ποιες ομοιότητες και ποιες διαφορές παρουσιάζουν οι ατομικές θεωρίες του Δημόκριτου και του Dalton;",
    a: `<span class='text-purple-300 font-bold'>Οι ομοιότητες είναι ότι πίστευαν ότι η ύλη δεν τέμνεται επ' άπειρο αλλά αποτελείται από πολύ μικρά σωματίδια, τα οποία είναι άφθαρτα και άτμητα[cite: 539]. Επίσης υποστήριξαν ότι τα άτομα έχουν συγκεκριμένα χαρακτηριστικά και οι διαφορετικές ουσίες αποτελούνται από διαφορετικά είδη ατόμων[cite: 540]. Η διαφορά είναι ότι ο Δημόκριτος δεν ανέπτυξε συγκεκριμένη θεωρία για τον τρόπο σύνδεσης των ατόμων, ενώ ο Dalton υποστήριξε ότι τα άτομα συνδυάζονται με συγκεκριμένες αναλογίες σχηματίζοντας χημικές ενώσεις[cite: 541].</span>`
  },
  {
    chapterId: "chapter-4",
    q: "Να συμπληρώσετε τα κενά: α. Τα άτομα συνδυάζονται σε καθορισμένη ... και σχηματίζουν ενώσεις. Τα μόρια από όμοια άτομα είναι ... ενώ από διαφορετικά είναι ... β. ... ονομάζεται ο αριθμός ατόμων που σχηματίζουν το μόριο του στοιχείου.",
    a: `<span class='text-purple-300 font-bold'>α. αναλογία. Τα μόρια που σχηματίζονται από τον συνδυασμό όμοιων ατόμων είναι μόρια στοιχείων ενώ αυτά που σχηματίζονται από τον συνδυασμό διαφορετικών ατόμων είναι μόρια χημικών ενώσεων [cite: 559-560]. <br>β. Ατομικότητα ονομάζεται ο αριθμός ατόμων που σχηματίζουν το μόριο του στοιχείου[cite: 561].</span>`
  },
  {
    chapterId: "chapter-4",
    q: "Παρατηρώντας ένα προσομοίωμα ακετόνης (με άτομα άνθρακα, οξυγόνου και υδρογόνου): α. Το προσομοίωμα αναπαριστά μόριο χημικής ένωσης ή χημικού στοιχείου; β. Από ποια άτομα αποτελείται;",
    a: `<span class='text-purple-300 font-bold'>α. Το προσομοίωμα αναπαριστά μόριο χημικής ένωσης καθώς αποτελείται από άτομα διαφορετικών στοιχείων[cite: 566]. <br>β. Το μόριο της ακετόνης αποτελείται από 3 άτομα άνθρακα, 6 άτομα υδρογόνου και 1 άτομο οξυγόνου[cite: 567].</span>`
  },

  // ---------------- ΕΝΟΤΗΤΑ: Χημικά Στοιχεία & Χημικοί Τύποι (Κεφ. 6 του βιβλίου) ----------------
  {
    chapterId: "chapter-9",
    q: "α. Πώς συμβολίζονται τα άτομα των χημικών στοιχείων; β. Πώς συμβολίζονται τα μόρια των χημικών στοιχείων;",
    a: `<span class='text-purple-300 font-bold'>α. Συμβολίζονται με ένα κεφαλαίο γράμμα που σε μερικές περιπτώσεις συνοδεύεται από ένα πεζό (αρχικά του ονόματός τους)[cite: 574]. <br>β. Από το σύμβολο του ατόμου με έναν αριθμό ως δείκτη δεξιά ο οποίος δηλώνει τον αριθμό των ατόμων (Π.χ. H<sub>2</sub>) [cite: 575-576].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Πώς συμβολίζονται τα μόρια των χημικών ενώσεων; Να γράψετε ένα παράδειγμα.",
    a: `<span class='text-purple-300 font-bold'>Με τα σύμβολα των ατόμων που το καθένα έχει έναν αριθμό ως δείκτη δεξιά, που δηλώνει τον αριθμό των ατόμων που μετέχουν στο μόριο της χημικής ένωσης. Π.χ. H<sub>2</sub>O [cite: 578-579].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Να συμπληρώσετε τα κενά: α. Ο μοριακός τύπος του νιτρικού οξέος: HNO<sub>3</sub> μας πληροφορεί ότι... β. Ο μοριακός τύπος της αιθανόλης: C<sub>2</sub>H<sub>6</sub>O μας πληροφορεί ότι...",
    a: `<span class='text-purple-300 font-bold'>α. Το μόριο αποτελείται από 1 άτομο αζώτου, 1 άτομο υδρογόνου και 3 άτομα οξυγόνου [cite: 581-582]. <br>β. Το μόριο αποτελείται από 1 άτομο οξυγόνου, 2 άτομα άνθρακα και 6 άτομα υδρογόνου[cite: 583].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Να γράψετε τον μοριακό τύπο για το Υδρόθειο (2 άτομα υδρογόνου, 1 άτομο θείου) και το Πεντοξείδιο του αζώτου (5 άτομα οξυγόνου, 2 άτομα αζώτου).",
    a: `<span class='text-purple-300 font-bold'>Υδρόθειο: H<sub>2</sub>S[cite: 585]. Πεντοξείδιο του αζώτου: N<sub>2</sub>O<sub>5</sub>[cite: 586].</span>`
  },
  {
    chapterId: "chapter-9",
    q: "Να συμπληρώσετε τον πίνακα με τα σύμβολα των στοιχείων (υδρογόνο, οξυγόνο, άζωτο, άνθρακας, χαλκός, σίδηρος, θείο, φωσφόρος, χλώριο, βρώμιο, ιώδιο, μαγνήσιο, κάλιο, νάτριο, υδράργυρος, αργίλιο, ασβέστιο, πυρίτιο).",
    a: `
    <span class='text-purple-300 font-bold'>Ο συμπληρωμένος πίνακας είναι[cite: 610]:</span>
    <div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
      <thead class='bg-white/10'>
        <tr class='border-b border-white/20'>
          <th class='py-3 px-4 font-semibold'>Στοιχείο</th>
          <th class='py-3 px-4 font-semibold'>Σύμβολο</th>
          <th class='py-3 px-4 font-semibold'>Στοιχείο</th>
          <th class='py-3 px-4 font-semibold'>Σύμβολο</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/10">
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>υδρογόνο</td><td class='py-3 px-4 text-emerald-400'>H</td><td class='py-3 px-4'>κάλιο</td><td class='py-3 px-4 text-emerald-400'>K</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>οξυγόνο</td><td class='py-3 px-4 text-emerald-400'>O</td><td class='py-3 px-4'>νάτριο</td><td class='py-3 px-4 text-emerald-400'>Na</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>άζωτο</td><td class='py-3 px-4 text-emerald-400'>N</td><td class='py-3 px-4'>υδράργυρος</td><td class='py-3 px-4 text-emerald-400'>Hg</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>άνθρακας</td><td class='py-3 px-4 text-emerald-400'>C</td><td class='py-3 px-4'>αργίλιο</td><td class='py-3 px-4 text-emerald-400'>Al</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>χαλκός</td><td class='py-3 px-4 text-emerald-400'>Cu</td><td class='py-3 px-4'>ασβέστιο</td><td class='py-3 px-4 text-emerald-400'>Ca</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>σίδηρος</td><td class='py-3 px-4 text-emerald-400'>Fe</td><td class='py-3 px-4'>πυρίτιο</td><td class='py-3 px-4 text-emerald-400'>Si</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>θείο</td><td class='py-3 px-4 text-emerald-400'>S</td><td class='py-3 px-4'>χλώριο</td><td class='py-3 px-4 text-emerald-400'>Cl</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>φωσφόρος</td><td class='py-3 px-4 text-emerald-400'>P</td><td class='py-3 px-4'>βρώμιο</td><td class='py-3 px-4 text-emerald-400'>Br</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ιώδιο</td><td class='py-3 px-4 text-emerald-400'>I</td><td class='py-3 px-4'>μαγνήσιο</td><td class='py-3 px-4 text-emerald-400'>Mg</td></tr>
      </tbody>
    </table></div>`
  },
  {
    chapterId: "chapter-9",
    q: "Να συμπληρώσετε τον πίνακα δίνοντας το όνομα και τον χαρακτηρισμό (χημική ένωση ή διατομικό/τριατομικό/κτλ στοιχείο) για τους τύπους: H<sub>2</sub>O, HCl, CO, N<sub>2</sub>, CO<sub>2</sub>, NH<sub>3</sub>, S<sub>6</sub>, P<sub>4</sub>, O<sub>3</sub>, Cl<sub>2</sub>.",
    a: `
    <span class='text-purple-300 font-bold'>Ο συμπληρωμένος πίνακας είναι[cite: 634]:</span>
    <div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
      <thead class='bg-white/10'>
        <tr class='border-b border-white/20'>
          <th class='py-3 px-4 font-semibold'>Χημικός τύπος</th>
          <th class='py-3 px-4 font-semibold'>Όνομα</th>
          <th class='py-3 px-4 font-semibold'>Χαρακτηρισμός</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/10">
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>H<sub>2</sub>O</td><td class='py-3 px-4'>Νερό</td><td class='py-3 px-4 text-emerald-400'>χημική ένωση</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>HCl</td><td class='py-3 px-4'>Υδροχλώριο</td><td class='py-3 px-4 text-emerald-400'>χημική ένωση</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>CO</td><td class='py-3 px-4'>Μονοξείδιο του άνθρακα</td><td class='py-3 px-4 text-emerald-400'>χημική ένωση</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>N<sub>2</sub></td><td class='py-3 px-4'>Άζωτο</td><td class='py-3 px-4 text-blue-400'>διατομικό στοιχείο</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>CO<sub>2</sub></td><td class='py-3 px-4'>Διοξείδιο του άνθρακα</td><td class='py-3 px-4 text-emerald-400'>χημική ένωση</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>NH<sub>3</sub></td><td class='py-3 px-4'>Αμμωνία</td><td class='py-3 px-4 text-emerald-400'>χημική ένωση</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>S<sub>6</sub></td><td class='py-3 px-4'>Θείο</td><td class='py-3 px-4 text-blue-400'>εξατομικό στοιχείο</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>P<sub>4</sub></td><td class='py-3 px-4'>Φωσφόρος</td><td class='py-3 px-4 text-blue-400'>τετρατομικό στοιχείο</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>O<sub>3</sub></td><td class='py-3 px-4'>Όζον</td><td class='py-3 px-4 text-blue-400'>τριατομικό στοιχείο</td></tr>
        <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Cl<sub>2</sub></td><td class='py-3 px-4'>Χλώριο</td><td class='py-3 px-4 text-blue-400'>διατομικό στοιχείο</td></tr>
      </tbody>
    </table></div>`
  }
];

const userMCQ = [
  // ---------------- ΕΝΟΤΗΤΑ: Χημικά Στοιχεία & Σταθερές (Κεφ. 4 του βιβλίου) ----------------
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Ο άνθρακας δεν μπορεί να διασπαστεί σε άλλες απλούστερες ουσίες, επομένως είναι μία χημική ένωση.",
    options: [
      { text: "Σωστή", correct: false },
      { text: "Λανθασμένη", correct: true }
    ],
    explanation: "Ο άνθρακας είναι χημικό στοιχείο, γι' αυτό και δεν διασπάται[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Το αλατόνερο περιέχει πολλά διαφορετικά χημικά στοιχεία, επομένως είναι μία χημική ένωση.",
    options: [
      { text: "Σωστή", correct: false },
      { text: "Λανθασμένη", correct: true }
    ],
    explanation: "Το αλατόνερο είναι μείγμα (διάλυμα), όχι χημική ένωση[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Μπορούμε να ανιχνεύσουμε αν ένα αέριο είναι το υδρογόνο πλησιάζοντας ένα μισοσβησμένο σπίρτο, γιατί θα το δούμε να ανάβει ξανά.",
    options: [
      { text: "Σωστή", correct: false },
      { text: "Λανθασμένη", correct: true }
    ],
    explanation: "Αυτός είναι ο τρόπος ανίχνευσης του οξυγόνου. Το υδρογόνο ανιχνεύεται με τον χαρακτηριστικό κρότο[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Το οινόπνευμα έχει σημείο βρασμού 78.5°C, οπότε αν ένα σώμα αρχίζει να βράζει στους 78,5°C, είναι οπωσδήποτε οινόπνευμα.",
    options: [
      { text: "Σωστή", correct: false },
      { text: "Λανθασμένη", correct: true }
    ],
    explanation: "Και άλλες ουσίες μπορεί να έχουν το ίδιο σημείο βρασμού, απαιτείται επιβεβαίωση και άλλων σταθερών[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Οι χημικές ενώσεις έχουν καθορισμένες φυσικές σταθερές, ενώ τα χημικά στοιχεία όχι.",
    options: [
      { text: "Σωστή", correct: false },
      { text: "Λανθασμένη", correct: true }
    ],
    explanation: "Τόσο τα χημικά στοιχεία όσο και οι χημικές ενώσεις (καθαρές ουσίες) έχουν καθορισμένες φυσικές σταθερές[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Το θαλασσινό νερό δεν έχει σταθερό σημείο βρασμού.",
    options: [
      { text: "Σωστή", correct: true },
      { text: "Λανθασμένη", correct: false }
    ],
    explanation: "Το θαλασσινό νερό είναι μείγμα και τα μείγματα δεν έχουν σταθερές φυσικές σταθερές[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Από τα ακόλουθα σώματα, χημικό στοιχείο είναι το:",
    options: [
      { text: "γάλα", correct: false },
      { text: "νερό", correct: false },
      { text: "μαγειρικό αλάτι", correct: false },
      { text: "άνθρακας", correct: true }
    ],
    explanation: "Ο άνθρακας είναι χημικό στοιχείο, τα υπόλοιπα είναι μείγματα ή ενώσεις[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Δεν είναι σωστή η πρόταση για μία χημική ένωση:",
    options: [
      { text: "Μπορεί να συντεθεί από απλούστερες ουσίες.", correct: false },
      { text: "Έχει καθορισμένες φυσικές σταθερές σε ορισμένες συνθήκες.", correct: false },
      { text: "Η αναλογία μαζών των στοιχείων που την αποτελούν είναι σταθερή.", correct: false },
      { text: "Διατηρεί τις ιδιότητες των στοιχείων που την αποτελούν.", correct: true }
    ],
    explanation: "Οι ενώσεις αποκτούν νέες ιδιότητες, εντελώς διαφορετικές από τα συστατικά τους στοιχεία[cite: 468]."
  },
  {
    chapterId: "chapter-9",
    q: "Τα χημικά στοιχεία έχουν καθορισμένα και σταθερά:",
    options: [
      { text: "σημείο τήξης", correct: false },
      { text: "σημείο βρασμού", correct: false },
      { text: "σύσταση", correct: false },
      { text: "τα α, β, γ", correct: true }
    ],
    explanation: "Ως καθαρές ουσίες, τα στοιχεία διαθέτουν όλα τα παραπάνω χαρακτηριστικά [cite: 471-476]."
  },
  {
    chapterId: "chapter-9",
    q: "Από τα ακόλουθα σώματα δεν έχει σταθερό σημείο τήξης:",
    options: [
      { text: "το χλωριούχο νάτριο", correct: false },
      { text: "ο χρυσός", correct: false },
      { text: "ο χάλυβας", correct: true },
      { text: "ο μόλυβδος", correct: false }
    ],
    explanation: "Ο χάλυβας είναι κράμα (μείγμα) και τα μείγματα δεν έχουν σταθερές φυσικές σταθερές [cite: 477-482]."
  },

  // ---------------- ΕΝΟΤΗΤΑ: Η δομή του ατόμου (Κεφ. 5 του βιβλίου) ----------------
  {
    chapterId: "chapter-4",
    q: "Τα άτομα, σύμφωνα με τον Δημόκριτο, είναι:",
    options: [
      { text: "ακίνητα", correct: false },
      { text: "χωρίς κενό", correct: true },
      { text: "δημιουργούνται από το μηδέν", correct: false },
      { text: "φθαρτά", correct: false }
    ],
    explanation: "Ο Δημόκριτος πίστευε ότι τα άτομα είναι άφθαρτα, άτμητα και πλήρη (χωρίς κενό) [cite: 543-547]."
  },
  {
    chapterId: "chapter-4",
    q: "Τα άτομα, σύμφωνα με τον Dalton:",
    options: [
      { text: "είναι όλα ίδια", correct: false },
      { text: "καταστρέφονται", correct: false },
      { text: "δημιουργούνται από το μηδέν", correct: false },
      { text: "έχουν ίδια μάζα αν ανήκουν στο ίδιο στοιχείο", correct: true }
    ],
    explanation: "Σύμφωνα με τον Dalton, τα άτομα του ίδιου στοιχείου είναι απολύτως όμοια σε μάζα και ιδιότητες [cite: 548-555]."
  },

  // ---------------- ΕΝΟΤΗΤΑ: Χημικοί Τύποι (Κεφ. 6 του βιβλίου) ----------------
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Οι μοριακοί τύποι μάς πληροφορούν για την αναλογία των ατόμων κάθε στοιχείου στο μόριο της ένωσης.",
    options: [
      { text: "Σωστή", correct: true },
      { text: "Λανθασμένη", correct: false }
    ],
    explanation: "Αυτή είναι η βασική λειτουργία του μοριακού τύπου[cite: 588]."
  },
  {
    chapterId: "chapter-9",
    q: "Να χαρακτηρίσετε την πρόταση ως Σωστή (Σ) ή Λανθασμένη (Λ): Μοριακούς τύπους χρησιμοποιούμε μόνο για τις χημικές ενώσεις.",
    options: [
      { text: "Σωστή", correct: false },
      { text: "Λανθασμένη", correct: true }
    ],
    explanation: "Χρησιμοποιούμε μοριακούς τύπους και για τα μόρια των στοιχείων (π.χ. O<sub>2</sub>)[cite: 588]."
  },
  {
    chapterId: "chapter-9",
    q: "Ο φωσφόρος είναι ένα στοιχείο το οποίο άλλοτε είναι τετρατομικό και άλλοτε εξατομικό. Το μόριό του λοιπόν συμβολίζεται με τους τύπους:",
    options: [
      { text: "P", correct: false },
      { text: "P<sub>4</sub> ή P<sub>6</sub>", correct: true },
      { text: "P<sub>6</sub>", correct: false },
      { text: "P<sub>4</sub>", correct: false }
    ],
    explanation: "Ο δείκτης δηλώνει την ατομικότητα, άρα P<sub>4</sub> για το τετρατομικό και P<sub>6</sub> για το εξατομικό [cite: 618-624]."
  },
  {
    chapterId: "chapter-9",
    q: "Η γλυκόζη έχει μοριακό τύπο C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, επομένως:",
    options: [
      { text: "6 άτομα άνθρακα συνδέονται με 12 άτομα υδρογόνου και 6 άτομα οξυγόνου, και σχηματίζονται δύο μόρια γλυκόζης.", correct: false },
      { text: "12 άτομα άνθρακα συνδέονται με 12 άτομα υδρογόνου και 6 άτομα οξυγόνου, και σχηματίζονται δύο μόρια γλυκόζης.", correct: false },
      { text: "12 άτομα άνθρακα συνδέονται με 24 άτομα υδρογόνου και 12 άτομα οξυγόνου, και σχηματίζεται ένα μόριο γλυκόζης.", correct: false },
      { text: "6 άτομα άνθρακα συνδέονται με 12 άτομα υδρογόνου και 6 άτομα οξυγόνου, και σχηματίζεται ένα μόριο γλυκόζης.", correct: true }
    ],
    explanation: "Ο μοριακός τύπος μάς δείχνει τα άτομα που συνθέτουν ακριβώς ένα μόριο της ένωσης [cite: 625-632]."
  }
];

let content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');

const qRegex = /export const bGymnasiouQuestions: Question\[\] = (\[[\s\S]*?\]);\n\nexport const bGymnasiouMCQ: MCQ\[\]/;
const matchQ = content.match(qRegex);
if (matchQ) {
  let existingQs = eval(matchQ[1]);
  existingQs = existingQs.filter(q => q.chapterId !== 'chapter-3' && q.chapterId !== 'chapter-4' && q.chapterId !== 'chapter-9');
  existingQs.push(...userQuestions);
  let newQsStr = JSON.stringify(existingQs, null, 2);
  content = content.replace(qRegex, `export const bGymnasiouQuestions: Question[] = ${newQsStr};\n\nexport const bGymnasiouMCQ: MCQ[]`);
}

const mRegex = /export const bGymnasiouMCQ: MCQ\[\] = (\[[\s\S]*?\]);$/;
const matchM = content.match(mRegex);
if (matchM) {
  let existingMs = eval(matchM[1]);
  existingMs = existingMs.filter(q => q.chapterId !== 'chapter-3' && q.chapterId !== 'chapter-4' && q.chapterId !== 'chapter-9');
  existingMs.push(...userMCQ);
  let newMsStr = JSON.stringify(existingMs, null, 2);
  content = content.replace(mRegex, `export const bGymnasiouMCQ: MCQ[] = ${newMsStr};`);
}

fs.writeFileSync('src/data/bGymnasiouQuestions.ts', content, 'utf8');
console.log('Merged successfully.');
