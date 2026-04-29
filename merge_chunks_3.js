const fs = require('fs');

const userQuestions = [
  // --- ΚΕΦΑΛΑΙΟ 6 (Χημικά Στοιχεία και Ενώσεις) -> PORTAL: chapter-9 ---
  {
    chapterId: "chapter-9", // Remapped
    q: `9. Να συμπληρώσετε τα ονόματα των χημικών στοιχείων και των χημικών ενώσεων των οποίων δίνονται οι χημικοί τύποι και να τα χαρακτηρίσετε στην τελευταία στήλη ως μονοατομικό (διατομικό...) στοιχείο ή χημική ένωση.
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'>
      <th class='py-3 px-4 font-semibold'>Χημικός τύπος</th>
      <th class='py-3 px-4 font-semibold'>Όνομα</th>
      <th class='py-3 px-4 font-semibold'>Χαρακτηρισμός</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>H<sub>2</sub>O</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>HCl</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>CO</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>N<sub>2</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>CO<sub>2</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>NH<sub>3</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>S<sub>6</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>P<sub>4</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>O<sub>3</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Cl<sub>2</sub></td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
  </tbody>
</table></div>`,
    a: `<span class='text-purple-300 font-bold'>
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
</table></div>
</span>`
  },

  // --- ΚΕΦΑΛΑΙΟ 7 (Η δομή του ατόμου) -> PORTAL: chapter-4 ---
  {
    chapterId: "chapter-4", // Remapped
    q: `2. Να αναφέρετε τα δομικά σωματίδια ενός ατόμου και τα χαρακτηριστικά τους ως προς το φορτίο, τη μάζα και τη θέση τους στο άτομο.`,
    a: `<span class='text-purple-300 font-bold'>Τα δομικά σωματίδια ενός ατόμου είναι:
<ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>1. Τα πρωτόνια (p) που είναι θετικά φορτισμένα σωματίδια και έχουν το στοιχειώδες θετικό φορτίο (+e).</li>
  <li class='mb-2'>2. Τα νετρόνια (n) που είναι ηλεκτρικά ουδέτερα σωματίδια με μάζα περίπου ίση με τη μάζα του πρωτονίου.</li>
  <li class='mb-2'>3. Τα ηλεκτρόνια (e) που είναι αρνητικά φορτισμένα σωματίδια και έχουν το στοιχειώδες αρνητικό φορτίο (-e), ενώ έχουν αμελητέα μάζα.<br>Η μάζα του ηλεκτρονίου είναι 1.836 φορές μικρότερη από τη μάζα του πρωτονίου.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `3. α. Τι εκφράζει και πώς συμβολίζεται ο ατομικός αριθμός;<br>β. Τι εκφράζει και πώς συμβολίζεται ο μαζικός αριθμός;`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Ατομικός αριθμός (Z) ονομάζεται ο αριθμός των πρωτονίων που περιέχονται στον πυρήνα του ατόμου ενός στοιχείου.</li>
  <li class='mb-2'>β. Μαζικός αριθμός (A) ονομάζεται το άθροισμα του αριθμού των πρωτονίων και του αριθμού των νετρονίων που περιέχονται στον πυρήνα του ατόμου ενός στοιχείου.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `4. Να συμπληρώσετε τα κενά του παρακάτω πίνακα.
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'>
      <th class='py-3 px-4 font-semibold'>Στοιχείο</th><th class='py-3 px-4 font-semibold'>Σύμβολο</th><th class='py-3 px-4 font-semibold'>Ατομικός αριθμός</th><th class='py-3 px-4 font-semibold'>Μαζικός αριθμός</th><th class='py-3 px-4 font-semibold'>Αριθμός πρωτονίων</th><th class='py-3 px-4 font-semibold'>Αριθμός ηλεκτρονίων</th><th class='py-3 px-4 font-semibold'>Αριθμός νετρονίων</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΧΛΩΡΙΟ</td><td class='py-3 px-4'>Cl</td><td class='py-3 px-4'></td><td class='py-3 px-4'>35</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
  </tbody>
</table></div>`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'>
      <th class='py-3 px-4 font-semibold'>Στοιχείο</th><th class='py-3 px-4 font-semibold'>Σύμβολο</th><th class='py-3 px-4 font-semibold'>Ατομικός αριθμός</th><th class='py-3 px-4 font-semibold'>Μαζικός αριθμός</th><th class='py-3 px-4 font-semibold'>Αριθμός πρωτονίων</th><th class='py-3 px-4 font-semibold'>Αριθμός ηλεκτρονίων</th><th class='py-3 px-4 font-semibold'>Αριθμός νετρονίων</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΧΛΩΡΙΟ</td><td class='py-3 px-4 text-emerald-400'>Cl</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'>35</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'>18</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΑΖΩΤΟ</td><td class='py-3 px-4 text-emerald-400'>N</td><td class='py-3 px-4'>7</td><td class='py-3 px-4'>14</td><td class='py-3 px-4'>7</td><td class='py-3 px-4'>7</td><td class='py-3 px-4'>7</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΜΑΓΝΗΣΙΟ</td><td class='py-3 px-4 text-emerald-400'>Mg</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>24</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>12</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΑΡΓΙΛΙΟ</td><td class='py-3 px-4 text-emerald-400'>Al</td><td class='py-3 px-4'>13</td><td class='py-3 px-4'>27</td><td class='py-3 px-4'>13</td><td class='py-3 px-4'>13</td><td class='py-3 px-4'>14</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΠΥΡΙΤΙΟ</td><td class='py-3 px-4 text-emerald-400'>Si</td><td class='py-3 px-4'>14</td><td class='py-3 px-4'>28</td><td class='py-3 px-4'>14</td><td class='py-3 px-4'>14</td><td class='py-3 px-4'>14</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΣΙΔΗΡΟΣ</td><td class='py-3 px-4 text-emerald-400'>Fe</td><td class='py-3 px-4'>26</td><td class='py-3 px-4'>56</td><td class='py-3 px-4'>26</td><td class='py-3 px-4'>26</td><td class='py-3 px-4'>30</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΒΡΩΜΙΟ</td><td class='py-3 px-4 text-emerald-400'>Br</td><td class='py-3 px-4'>35</td><td class='py-3 px-4'>80</td><td class='py-3 px-4'>35</td><td class='py-3 px-4'>35</td><td class='py-3 px-4'>45</td></tr>
  </tbody>
</table></div>
</span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `5. Δίνεται ο ατομικός και ο μαζικός αριθμός των στοιχείων:<br>1. άζωτο έχει Z=7 και A=14, 2. χλώριο έχει Z=17 και A=35, 3. κάλιο έχει Z=19 και A=39.<br>α. Να περιγράψετε τη δομή του ατόμου κάθε στοιχείου.<br>β. Να κάνετε την κατανομή των ηλεκτρονίων του σε στιβάδες.`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>1. α. Το άτομο του αζώτου περιέχει: 7 πρωτόνια, 7 ηλεκτρόνια και 7 νετρόνια.<br>β. K(2) - L(5)</li>
  <li class='mb-2'>2. α. Το άτομο του χλωρίου περιέχει: 17 πρωτόνια, 17 ηλεκτρόνια και 18 νετρόνια.<br>β. K(2) - L(8) - M(7)</li>
  <li class='mb-2'>3. α. Το άτομο του καλίου περιέχει: 19 πρωτόνια, 19 ηλεκτρόνια και 20 νετρόνια.<br>β. K(2) - L(8) - M(8) - N(1)</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `6. Να συμπληρώσετε τον παρακάτω πίνακα στιβάδων κάνοντας την κατανομή των ηλεκτρονίων για το στοιχείο της κάθε γραμμής.<br>α. Ποια στοιχεία του πίνακα έχουν συμπληρωμένη την εξωτερική τους στιβάδα, δηλαδή είναι ευγενή αέρια;<br>β. Ποια στοιχεία του πίνακα έχουν την ίδια εξωτερική στιβάδα;<br>γ. Ποια στοιχεία του πίνακα έχουν 2 e στην εξωτερική στιβάδα;<br>δ. Ποια στοιχεία του πίνακα έχουν 6 e στην εξωτερική στιβάδα;`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>ΣΤΟΙΧΕΙΟ</th><th class='py-3 px-4 font-semibold'>ΣΥΜΒΟΛΟ</th><th class='py-3 px-4 font-semibold'>ΑΤΟΜΙΚΟΣ ΑΡΙΘΜΟΣ</th><th class='py-3 px-4 font-semibold'>K L M N O P Q</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΥΔΡΟΓΟΝΟ</td><td class='py-3 px-4 text-emerald-400'>H</td><td class='py-3 px-4'>1</td><td class='py-3 px-4'>1</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΝΕΟΝ</td><td class='py-3 px-4 text-emerald-400'>Ne</td><td class='py-3 px-4'>10</td><td class='py-3 px-4'>2 8</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΛΙΘΙΟ</td><td class='py-3 px-4 text-emerald-400'>Li</td><td class='py-3 px-4'>3</td><td class='py-3 px-4'>2 1</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΝΑΤΡΙΟ</td><td class='py-3 px-4 text-emerald-400'>Na</td><td class='py-3 px-4'>11</td><td class='py-3 px-4'>2 8 1</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΜΑΓΝΗΣΙΟ</td><td class='py-3 px-4 text-emerald-400'>Mg</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>2 8 2</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΑΝΘΡΑΚΑΣ</td><td class='py-3 px-4 text-emerald-400'>C</td><td class='py-3 px-4'>6</td><td class='py-3 px-4'>2 4</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΑΖΩΤΟ</td><td class='py-3 px-4 text-emerald-400'>N</td><td class='py-3 px-4'>7</td><td class='py-3 px-4'>2 5</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΘΕΙΟ</td><td class='py-3 px-4 text-emerald-400'>S</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>2 8 6</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>ΧΛΩΡΙΟ</td><td class='py-3 px-4 text-emerald-400'>Cl</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'>2 8 7</td></tr>
  </tbody>
</table></div>
<ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Το στοιχείο Νέον έχει συμπληρωμένη την εξωτερική του στιβάδα με 8 ηλεκτρόνια.</li>
  <li class='mb-2'>β. Τα στοιχεία Na, Mg, S και Cl έχουν εξωτερική στιβάδα την M. Τα στοιχεία Ne, Li, C, N έχουν εξωτερική στιβάδα την L.</li>
  <li class='mb-2'>γ. 2 e στην εξωτερική στιβάδα έχει το στοιχείο Mg.</li>
  <li class='mb-2'>δ. 6 e στην εξωτερική στιβάδα έχει το στοιχείο S.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `7. Να συμπληρώσετε τα e στις στιβάδες για τα άτομα 15P και 13Al.`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>15P: K(2) - L(8) - M(5)</li>
  <li class='mb-2'>13Al: K(2) - L(8) - M(3)</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `8. Να δώσετε με συντομία τους ορισμούς των όρων:<br>α. Ιόν<br>β. Ιοντική ένωση`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Ιόν ονομάζεται το ηλεκτρικά φορτισμένο σωματίδιο το οποίο προκύπτει όταν ένα άτομο προσλάβει ή αποβάλλει ηλεκτρόνια.</li>
  <li class='mb-2'>β. Ιοντική ένωση ονομάζεται η ένωση που δεν αποτελείται από μόρια, αλλά από θετικά και αρνητικά ιόντα τα οποία έλκονται σχηματίζοντας κρυστάλλους.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `9. Το άτομο του ψευδαργύρου έχει στον πυρήνα του συνολικά 65 νουκλεόνια και γύρω από τον πυρήνα περιφέρονται 30 ηλεκτρόνια. Να βρείτε τον ατομικό και μαζικό αριθμό, τα πρωτόνια, τα νετρόνια και να εξηγήσετε πώς δημιουργείται το ιόν του.`,
    a: `<span class='text-purple-300 font-bold'>Ο ψευδάργυρος έχει 30 πρωτόνια και 35 νετρόνια, έχει ατομικό αριθμό Z=30, μαζικό αριθμό A=65.<br>Το ιόν του ψευδαργύρου δημιουργείται με αποβολή 2 ηλεκτρονίων και έχει φορτίο +2.</span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `11. Να συμπληρώσετε τα κενά στους πίνακες των ατόμων (α) και των ιόντων (β).`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Στοιχείο</th><th class='py-3 px-4 font-semibold'>Ατομικός αριθμός</th><th class='py-3 px-4 font-semibold'>Μαζικός αριθμός</th><th class='py-3 px-4 font-semibold'>Αριθμός πρωτονίων</th><th class='py-3 px-4 font-semibold'>Αριθμός ηλεκτρονίων</th><th class='py-3 px-4 font-semibold'>Κατανομή σε στιβάδες</th><th class='py-3 px-4 font-semibold'>Αριθμός νετρονίων</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-emerald-400'>ΘΕΙΟ</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>32</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>K(2)-L(8)-M(6)</td><td class='py-3 px-4'>16</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-emerald-400'>ΟΞΥΓΟΝΟ</td><td class='py-3 px-4'>8</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>8</td><td class='py-3 px-4'>8</td><td class='py-3 px-4'>K(2)-L(6)</td><td class='py-3 px-4'>8</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-emerald-400'>ΑΝΘΡΑΚΑΣ</td><td class='py-3 px-4'>6</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>6</td><td class='py-3 px-4'>6</td><td class='py-3 px-4'>K(2)-L(4)</td><td class='py-3 px-4'>12</td></tr>
  </tbody>
</table></div>
<br>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>ΙΟΝ</th><th class='py-3 px-4 font-semibold'>Ατομικός αριθμός</th><th class='py-3 px-4 font-semibold'>Αριθμός πρωτονίων</th><th class='py-3 px-4 font-semibold'>Αριθμός ηλεκτρονίων</th><th class='py-3 px-4 font-semibold'>Κατανομή σε στιβάδες</th><th class='py-3 px-4 font-semibold'>Φορτίο ιόντος</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-blue-400'>ΧΛΩΡΙΟΥ</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'>17</td><td class='py-3 px-4'>18</td><td class='py-3 px-4'>K(2)-L(8)-M(8)</td><td class='py-3 px-4'>-1</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-blue-400'>ΜΑΓΝΗΣΙΟΥ</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>12</td><td class='py-3 px-4'>10</td><td class='py-3 px-4'>K(2)-L(8)</td><td class='py-3 px-4'>+2</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-blue-400'>ΚΑΛΙΟΥ</td><td class='py-3 px-4'>19</td><td class='py-3 px-4'>19</td><td class='py-3 px-4'>18</td><td class='py-3 px-4'>K(2)-L(8)-M(8)</td><td class='py-3 px-4'>+1</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-blue-400'>ΘΕΙΟΥ</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>16</td><td class='py-3 px-4'>18</td><td class='py-3 px-4'>K(2)-L(8)-M(8)</td><td class='py-3 px-4'>-2</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 text-blue-400'>ΟΞΥΓΟΝΟΥ</td><td class='py-3 px-4'>8</td><td class='py-3 px-4'>8</td><td class='py-3 px-4'>10</td><td class='py-3 px-4'>K(2)-L(8)</td><td class='py-3 px-4'>-2</td></tr>
  </tbody>
</table></div>
</span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `12. Ο ατομικός αριθμός του φθορίου είναι 9 και ο μαζικός αριθμός 19. Να απαντήσετε στις ακόλουθες ερωτήσεις που αφορούν το άτομο και τα ιόντα του φθορίου και να δικαιολογήσετε τις απαντήσεις σας.<br>α. Πόσα πρωτόνια, πόσα νετρόνια και πόσα ηλεκτρόνια συγκροτούν το άτομο του φθορίου;<br>β. Πού βρίσκεται συγκεντρωμένη η μάζα του φθορίου και γιατί;<br>γ. Είναι σωστό ή λάθος ότι το μεγαλύτερο μέρος του ατόμου είναι κενό;<br>δ. Είναι σωστό ή λάθος ότι το άτομο είναι ηλεκτρικά ουδέτερο;<br>ε. Το άτομο του φθορίου μπορεί να προσλάβει ένα ηλεκτρόνιο. Σε τι θα μετατραπεί σε αυτή την περίπτωση;<br>στ. Τα ιόντα φθορίου σχηματίζουν με τα ιόντα νατρίου (+1) την ιοντική ένωση NaF. Ποια είναι τα δομικά σωματίδια της ένωσης;`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Το άτομο του φθορίου περιέχει 9 πρωτόνια, 10 νετρόνια και 9 ηλεκτρόνια.</li>
  <li class='mb-2'>β. Η μάζα του ατόμου είναι συγκεντρωμένη στον πυρήνα του.</li>
  <li class='mb-2'>γ. Η πρόταση είναι σωστή. Παρόλο που η μάζα του ατόμου είναι συγκεντρωμένη στον πυρήνα, ο όγκος του πυρήνα είναι ελάχιστος σε σχέση με τον συνολικό όγκο του ατόμου, με αποτέλεσμα το άτομο να αποτελείται κυρίως από κενό χώρο.</li>
  <li class='mb-2'>δ. Η πρόταση είναι σωστή. Το άτομο είναι ηλεκτρικά ουδέτερο, γιατί ο αριθμός πρωτονίων στον πυρήνα είναι ίσος με τον αριθμό των ηλεκτρονίων που περιφέρονται γύρω από τον πυρήνα.</li>
  <li class='mb-2'>ε. Σε ιόν (ανιόν) με φορτίο -1.</li>
  <li class='mb-2'>στ. Τα δομικά σωματίδια της ένωσης NaF είναι το κατιόν νατρίου και το ανιόν φθορίου.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `18. Να συμπληρώσετε την ακροστιχίδα (Λύση).
1. Ακέφαλο το μέρος του ατόμου που περιέχει συγκεντρωμένη σχεδόν όλη τη μάζα του.
2. Τα θετικά φορτισμένα υποατομικά σωματίδια.
3. Τόσα ηλεκτρόνια έχει ένα άτομο με Z=8.
4. Ο αριθμός των πρωτονίων του πυρήνα.
5. Τόσα ηλεκτρόνια έχει προσλάβει ένα ιόν που έχει φορτίο -3.
6. Τα νετρόνια είναι σωματίδια ηλεκτρικά...
7. Ο αριθμός που δηλώνει το άθροισμα πρωτονίων και νετρονίων του πυρήνα.
8. Δημιουργείται όταν ένα άτομο προσλαμβάνει ή αποβάλλει ηλεκτρόνια.
9. Δημιουργείται όταν ένα άτομο αποβάλλει ηλεκτρόνια.
10. Δημιουργείται όταν ένα άτομο προσλαμβάνει ηλεκτρόνια.`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>1.</td><td class='py-3 px-4'>YPHΝΑΣ</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>2.</td><td class='py-3 px-4'>ΠΡΩΤΟΝIA</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>3.</td><td class='py-3 px-4'>ΟΚΤΩ</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>4.</td><td class='py-3 px-4'>ATOMIKOΣ</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>5.</td><td class='py-3 px-4'>TPIA</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>6.</td><td class='py-3 px-4'>ΟΥΔΕΤΕΡΑ</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>7.</td><td class='py-3 px-4'>MAZIΚΟΣ</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>8.</td><td class='py-3 px-4'>ΙΟΝ</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>9.</td><td class='py-3 px-4'>KATION</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4 font-semibold'>10.</td><td class='py-3 px-4'>ANION</td></tr>
  </tbody>
</table></div>
</span>`
  },

  // --- ΚΕΦΑΛΑΙΟ 8 (Χημικές Αντιδράσεις) -> PORTAL: chapter-10 ---
  {
    chapterId: "chapter-10", // Remapped
    q: `1. α. Πότε ένα φαινόμενο χαρακτηρίζεται χημική αντίδραση;<br>β. Να χαρακτηρίσετε τα σώματα της ακόλουθης χημικής εξίσωσης ως αντιδρώντα ή προϊόντα: υδροχλώριο + υδροξείδιο του νατρίου -> χλωρίδιο του νατρίου + νερό`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Χημική αντίδραση ή χημική μεταβολή ονομάζεται κάθε μεταβολή κατά την οποία από τις αρχικές ουσίες, οι οποίες ονομάζονται αντιδρώντα, σχηματίζονται νέες ουσίες με διαφορετικές ιδιότητες, οι οποίες ονομάζονται προϊόντα.</li>
  <li class='mb-2'>β. Αντιδρώντα είναι το υδροχλώριο και το υδροξείδιο του νατρίου. Προϊόντα είναι το χλωρίδιο του νατρίου και το νερό.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `2. Να συμπληρώσετε τα κενά στον ακόλουθο πίνακα για τις χημικές αντιδράσεις.
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Περιγραφή</th><th class='py-3 px-4 font-semibold'>Χημική αντίδραση με λέξεις</th><th class='py-3 px-4 font-semibold'>Χημική εξίσωση</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Το μαγνήσιο αντιδρά με το οξυγόνο και παράγει το οξείδιο του μαγνησίου</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Ο άνθρακας αντιδρά με το οξυγόνο και παράγει διοξείδιο του άνθρακα</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Ο σίδηρος αντιδρά με το οξυγόνο και παράγει οξείδιο του σιδήρου</td><td class='py-3 px-4'></td><td class='py-3 px-4'></td></tr>
  </tbody>
</table></div>`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Περιγραφή</th><th class='py-3 px-4 font-semibold'>Χημική αντίδραση με λέξεις</th><th class='py-3 px-4 font-semibold'>Χημική εξίσωση</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Το μαγνήσιο αντιδρά με το οξυγόνο και παράγει το οξείδιο του μαγνησίου</td><td class='py-3 px-4'>μαγνήσιο + οξυγόνο -> οξείδιο του μαγνησίου</td><td class='py-3 px-4'>2Mg + O<sub>2</sub> -> 2MgO</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Ο άνθρακας αντιδρά με το οξυγόνο και παράγει διοξείδιο του άνθρακα</td><td class='py-3 px-4'>άνθρακας + οξυγόνο -> διοξείδιο του άνθρακα</td><td class='py-3 px-4'>C + O<sub>2</sub> -> CO<sub>2</sub></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>Ο σίδηρος αντιδρά με το οξυγόνο και παράγει οξείδιο του σιδήρου</td><td class='py-3 px-4'>σίδηρος + οξυγόνο -> οξείδιο του σιδήρου</td><td class='py-3 px-4'>2Fe + O<sub>2</sub> -> 2FeO</td></tr>
  </tbody>
</table></div>
</span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `3. Να αντιστοιχίσετε καθεμία από τις ουσίες της στήλης Α στα αντιδρώντα από τα οποία μπορεί να παραχθεί στη στήλη Β.
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Στήλη Α</th><th class='py-3 px-4 font-semibold'>Στήλη Β</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>1. NaCl</td><td class='py-3 px-4'>1. H<sub>2</sub> + I<sub>2</sub></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>2. CO<sub>2</sub></td><td class='py-3 px-4'>2. N<sub>2</sub> + O<sub>2</sub></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>3. N<sub>2</sub>O<sub>5</sub></td><td class='py-3 px-4'>3. Fe + O<sub>2</sub></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>4. Fe<sub>2</sub>O<sub>3</sub></td><td class='py-3 px-4'>4. Na + Cl<sub>2</sub></td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>5. HI</td><td class='py-3 px-4'>5. C + O<sub>2</sub></td></tr>
  </tbody>
</table></div>`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Στήλη Α</th><th class='py-3 px-4 font-semibold'>Στήλη Β (Απαντήσεις)</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>1. NaCl</td><td class='py-3 px-4'>4. Na + Cl<sub>2</sub> (A1 -> B4)</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>2. CO<sub>2</sub></td><td class='py-3 px-4'>5. C + O<sub>2</sub> (A2 -> B5)</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>3. N<sub>2</sub>O<sub>5</sub></td><td class='py-3 px-4'>2. N<sub>2</sub> + O<sub>2</sub> (A3 -> B2)</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>4. Fe<sub>2</sub>O<sub>3</sub></td><td class='py-3 px-4'>3. Fe + O<sub>2</sub> (A4 -> B3)</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>5. HI</td><td class='py-3 px-4'>1. H<sub>2</sub> + I<sub>2</sub> (A5 -> B1)</td></tr>
  </tbody>
</table></div>
</span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `4. Να αναπαραστήσετε τις ακόλουθες χημικές εξισώσεις με σύμβολα και με λέξεις (όπου δίνονται προσομοιώματα) ή το αντίστροφο.<br>α. Με προσομοιώματα: Δύο μόρια υδροβρωμίου παράγουν ένα μόριο υδρογόνου και ένα μόριο βρωμίου.<br>β. Με προσομοιώματα: Ένα μόριο αζώτου αντιδρά με 3 μόρια υδρογόνου και παράγουν δύο μόρια αμμωνίας.<br>γ. Με λέξεις: Ένα άτομο άνθρακα αντιδρά με δύο μόρια υδρογόνου και παράγεται ένα μόριο μεθανίου.<br>δ. Με λέξεις: 1 μόριο αζώτου αντιδρά με δύο μόρια οξυγόνου και παράγουν 2 μόρια διοξειδίου του αζώτου.`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Με λέξεις: 2 μόρια υδροβρωμίου παράγουν ένα μόριο υδρογόνου και ένα μόριο βρωμίου.<br>Με χημική εξίσωση: 2HBr -> H<sub>2</sub> + Br<sub>2</sub></li>
  <li class='mb-2'>β. Με λέξεις: Ένα μόριο αζώτου αντιδρά με 3 μόρια υδρογόνου και παράγουν δύο μόρια αμμωνίας.<br>Με χημική εξίσωση: N<sub>2</sub> + 3H<sub>2</sub> -> 2NH<sub>3</sub></li>
  <li class='mb-2'>γ. Με λέξεις: Ένα άτομο άνθρακα αντιδρά με δύο μόρια υδρογόνου και παράγεται ένα μόριο μεθανίου.<br>Με χημική εξίσωση: C + 2H<sub>2</sub> -> CH<sub>4</sub></li>
  <li class='mb-2'>δ. Με χημική εξίσωση: N<sub>2</sub>(g) + 2O<sub>2</sub>(g) -> 2NO<sub>2</sub>(g)<br>Με λέξεις: 1 μόριο αζώτου αντιδρά με δύο μόρια οξυγόνου και παράγουν 2 μόρια διοξειδίου του αζώτου.</li>
</ul></span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `5. Οι χημικές εξισώσεις που ακολουθούν έχουν ένα λάθος ή μία παράλειψη. Να το εντοπίσετε και να γράψετε τη χημική εξίσωση συμπληρωμένη σωστά.<br>α. N<sub>2</sub> + 3H<sub>2</sub> -> 2NH<sub>3</sub><br>β. H<sub>2</sub>(g) + I<sub>2</sub>(g) -> HI(g)<br>γ. H<sub>2</sub>(g) + O<sub>2</sub>(g) -> H<sub>2</sub>O(l)<br>δ. H<sub>2</sub>(g) + Cl<sub>2</sub>(g) -> 2HI(g)<br>ε. C(s) + O(g) -> CO(g)`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Δεν έχουν αναγραφεί οι φυσικές καταστάσεις των ουσιών.<br>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) -> 2NH<sub>3</sub>(g)</li>
  <li class='mb-2'>β. Δεν ισχύει η αρχή διατήρησης των ατόμων (απαιτείται συντελεστής).<br>H<sub>2</sub>(g) + I<sub>2</sub>(g) -> 2HI(g)</li>
  <li class='mb-2'>γ. Δεν ισχύει η αρχή διατήρησης των ατόμων.<br>2H<sub>2</sub>(g) + O<sub>2</sub>(g) -> 2H<sub>2</sub>O(l)</li>
  <li class='mb-2'>δ. Το προϊόν έχει αναγραφεί λανθασμένα καθώς πρέπει να παράγεται HCl.<br>H<sub>2</sub>(g) + Cl<sub>2</sub>(g) -> 2HCl(g)</li>
  <li class='mb-2'>ε. Το οξυγόνο είναι διατομικό στοιχείο.<br>2C(s) + O<sub>2</sub>(g) -> 2CO(g)</li>
</ul></span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `6. Να συμπληρώσετε τους συντελεστές στις ακόλουθες εξισώσεις, έτσι ώστε όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.<br>α. N<sub>2</sub>(g) + H<sub>2</sub>(g) -> NH<sub>3</sub>(g)<br>β. N<sub>2</sub>(g) + O<sub>2</sub>(g) -> NO(g)<br>γ. CH<sub>4</sub>(g) + O<sub>2</sub>(g) -> CO<sub>2</sub>(g) + H<sub>2</sub>O(g)<br>δ. SO<sub>2</sub>(g) + O<sub>2</sub>(g) -> SO<sub>3</sub>(g)<br>ε. C<sub>4</sub>H<sub>10</sub>(g) + O<sub>2</sub>(g) -> CO<sub>2</sub>(g) + H<sub>2</sub>O(g)`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. N<sub>2</sub>(g) + 3H<sub>2</sub>(g) -> 2NH<sub>3</sub>(g)</li>
  <li class='mb-2'>β. N<sub>2</sub>(g) + O<sub>2</sub>(g) -> 2NO(g)</li>
  <li class='mb-2'>γ. CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) -> CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)</li>
  <li class='mb-2'>δ. 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) -> 2SO<sub>3</sub>(g)</li>
  <li class='mb-2'>ε. 2C<sub>4</sub>H<sub>10</sub>(g) + 13O<sub>2</sub>(g) -> 8CO<sub>2</sub>(g) + 10H<sub>2</sub>O(g)</li>
</ul></span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `7. Να συμπληρώσετε τους δείκτες στους χημικούς τύπους στις ακόλουθες εξισώσεις, έτσι ώστε όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.<br>α. 4P(s) + 5O(g) -> 2P<sub>2</sub>O<sub>5</sub>(g)<br>β. N(g) + 2O(g) -> 2NO<sub>2</sub>(g)<br>γ. C<sub>4</sub>H(g) + 6O<sub>2</sub>(g) -> 4CO<sub>2</sub>(g) + 4H<sub>2</sub>O(g)<br>δ. 2SO(g) -> 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. 4P(s) + 5O<sub>2</sub>(g) -> 2P<sub>2</sub>O<sub>5</sub>(g)</li>
  <li class='mb-2'>β. N<sub>2</sub>(g) + 2O<sub>2</sub>(g) -> 2NO<sub>2</sub>(g)</li>
  <li class='mb-2'>γ. C<sub>4</sub>H<sub>8</sub>(g) + 6O<sub>2</sub>(g) -> 4CO<sub>2</sub>(g) + 4H<sub>2</sub>O(g)</li>
  <li class='mb-2'>δ. 2SO<sub>3</sub>(g) -> 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)</li>
</ul></span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `8. Να αντιστοιχίσετε τα σύμβολα της γλώσσας με τα σύμβολα της χημείας στα οποία πιστεύετε ότι αντιστοιχούν.
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Στήλη Α</th><th class='py-3 px-4 font-semibold'>Στήλη Β</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>1. γράμμα</td><td class='py-3 px-4'>1. μοριακός τύπος</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>2. λέξη</td><td class='py-3 px-4'>2. χημική εξίσωση</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>3. πρόταση</td><td class='py-3 px-4'>3. σύμβολο ατόμου</td></tr>
  </tbody>
</table></div>`,
    a: `<span class='text-purple-300 font-bold'>
<div class="overflow-x-auto my-4"><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
  <thead class='bg-white/10'>
    <tr class='border-b border-white/20'><th class='py-3 px-4 font-semibold'>Στήλη Α</th><th class='py-3 px-4 font-semibold'>Στήλη Β (Απαντήσεις)</th></tr>
  </thead>
  <tbody class="divide-y divide-white/10">
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>1. γράμμα</td><td class='py-3 px-4'>3. σύμβολο ατόμου (Α1 - Β3)</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>2. λέξη</td><td class='py-3 px-4'>1. μοριακός τύπος (Α2 - Β1)</td></tr>
    <tr class='hover:bg-white/5 transition-colors'><td class='py-3 px-4'>3. πρόταση</td><td class='py-3 px-4'>2. χημική εξίσωση (Α3 - Β2)</td></tr>
  </tbody>
</table></div>
</span>`
  },
  {
    chapterId: "chapter-10", // Remapped
    q: `9. Να παρατηρήσετε την ακόλουθη χημική εξίσωση: 4HCl(g) + O<sub>2</sub>(g) -> 2Cl<sub>2</sub>(g) + 2H<sub>2</sub>O(g)<br>στη συνέχεια:<br>α. Να χαρακτηρίσετε όλες τις χημικές ουσίες ως αντιδρώντα ή προϊόντα.<br>β. Να την περιγράψετε με λόγια.<br>γ. Να εξηγήσετε γιατί μπροστά από ορισμένα σύμβολα μορίων υπάρχουν αριθμοί και τι σημαίνουν αυτοί.`,
    a: `<span class='text-purple-300 font-bold'><ul class='list-disc ml-5 mt-2'>
  <li class='mb-2'>α. Αντιδρώντα: HCl, O<sub>2</sub>. Προϊόντα: Cl<sub>2</sub>, H<sub>2</sub>O.</li>
  <li class='mb-2'>β. 4 μόρια υδροχλωρίου αντιδρούν με 1 μόριο οξυγόνου και παράγουν 2 μόρια χλωρίου και 2 μόρια νερού.</li>
  <li class='mb-2'>γ. Οι αριθμοί μπροστά από τους τύπους ονομάζονται συντελεστές και δηλώνουν τον αριθμό των μορίων που συμμετέχουν στην αντίδραση, ώστε να ισχύει η αρχή διατήρησης της μάζας (δηλαδή ο αριθμός των ατόμων κάθε στοιχείου στα αντιδρώντα να ισούται με τον αριθμό τους στα προϊόντα).</li>
</ul></span>`
  }
];

const userMCQ = [
  // --- ΚΕΦΑΛΑΙΟ 7 (Η δομή του ατόμου) -> PORTAL: chapter-4 ---
  {
    chapterId: "chapter-4", // Remapped
    q: `Οι απόψεις των επιστημόνων για τη δομή της ύλης δεν έχουν αλλάξει από τον 18ο αιώνα που ο Dalton διατύπωσε την ατομική του θεωρία.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Οι απόψεις των επιστημόνων έχουν αλλάξει ριζικά, με μεταγενέστερα μοντέλα όπως του Thomson, του Rutherford και του Bohr.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Οι επιστήμονες ανέκαθεν πίστευαν ότι το άτομο αποτελείται κυρίως από κενό.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Αυτό διαπιστώθηκε αργότερα με τα πειράματα του Rutherford. Παλαιότερα το θεωρούσαν συμπαγές.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Ο Ε. Rutherford ήταν ο πρώτος που μίλησε για τον πυρήνα και τα ηλεκτρόνια που περιφέρονται σε μεγάλη απόσταση από αυτόν.`,
    options: [
      { text: "Σωστό", correct: true },
      { text: "Λάθος", correct: false }
    ],
    explanation: `Ο Rutherford πρότεινε το πλανητικό μοντέλο του ατόμου, με έναν μικρό θετικό πυρήνα στο κέντρο.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Ο Ν. Bohr διατύπωσε πρώτος την άποψη ότι τα ηλεκτρόνια κινούνται με τυχαίο τρόπο γύρω από τον πυρήνα.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Ο Bohr διατύπωσε την άποψη ότι τα ηλεκτρόνια κινούνται σε καθορισμένες κυκλικές τροχιές (στιβάδες), όχι τυχαία.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Για να μετατραπεί ένα άτομο σε κατιόν:`,
    options: [
      { text: "προσλαμβάνει πρωτόνια", correct: false },
      { text: "προσλαμβάνει ηλεκτρόνια", correct: false },
      { text: "αποβάλλει πρωτόνια", correct: false },
      { text: "αποβάλλει ηλεκτρόνια", correct: true }
    ],
    explanation: `Τα κατιόντα είναι θετικά φορτισμένα ιόντα και σχηματίζονται με την αποβολή ηλεκτρονίων (αρνητικών φορτίων).`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Το ασβέστιο με ατομικό αριθμό 20 μετατρέπεται σε ιόν αποβάλλοντας δύο ηλεκτρόνια. Το φορτίο του ιόντος του ασβεστίου είναι:`,
    options: [
      { text: "+1", correct: false },
      { text: "+2", correct: true },
      { text: "-2", correct: false },
      { text: "κανένα από τα προηγούμενα", correct: false }
    ],
    explanation: `Εφόσον χάνει 2 αρνητικά φορτία (ηλεκτρόνια), το άτομο αποκτά πλεόνασμα 2 θετικών φορτίων, άρα +2.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Το θείο έχει ατομικό αριθμό 16 και το ιόν του έχει 18 e. Το φορτίο του ιόντος είναι:`,
    options: [
      { text: "+1", correct: false },
      { text: "+2", correct: false },
      { text: "-2", correct: true },
      { text: "-1", correct: false }
    ],
    explanation: `Το άτομο θείου έχει 16 πρωτόνια (+16). Με 18 ηλεκτρόνια (-18), το συνολικό φορτίο είναι +16 - 18 = -2.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Δομικά σωματίδια των χημικών ουσιών είναι μόνο τα μόρια.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Οι χημικές ουσίες μπορούν να αποτελούνται από μόρια, αλλά και από ιόντα (ιοντικές ενώσεις) ή άτομα.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Τα διατομικά στοιχεία αποτελούνται από ιόντα.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Τα διατομικά στοιχεία αποτελούνται από μόρια που περιέχουν δύο όμοια άτομα (π.χ. O<sub>2</sub>), όχι από ιόντα.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Τα ιόντα δημιουργούνται αν το άτομο προσλάβει ή αποβάλλει πρωτόνια ή ηλεκτρόνια.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Τα ιόντα δημιουργούνται ΜΟΝΟ με την πρόσληψη ή αποβολή ηλεκτρονίων. Ο αριθμός των πρωτονίων δεν αλλάζει σε χημικές αντιδράσεις.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Ένα άτομο με ατομικό αριθμό 17 έχει 17 νετρόνια στον πυρήνα του.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Ο ατομικός αριθμός δηλώνει τον αριθμό των πρωτονίων, όχι των νετρονίων.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Ένα άτομο με μαζικό αριθμό 80 έχει μεγαλύτερη μάζα από ένα άτομο με μαζικό αριθμό 56.`,
    options: [
      { text: "Σωστό", correct: true },
      { text: "Λάθος", correct: false }
    ],
    explanation: `Ο μαζικός αριθμός εκφράζει το άθροισμα πρωτονίων και νετρονίων, δηλαδή πρακτικά τη μάζα του ατόμου.`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Ένα άτομο μπορεί να έχει θετικό ή αρνητικό φορτίο ή να είναι ηλεκτρικά ουδέτερο.`,
    options: [
      { text: "Σωστό", correct: false },
      { text: "Λάθος", correct: true }
    ],
    explanation: `Ένα "άτομο" από ορισμό είναι πάντα ηλεκτρικά ουδέτερο. Αν έχει φορτίο, ονομάζεται πλέον "ιόν".`
  },
  {
    chapterId: "chapter-4", // Remapped
    q: `Αν γνωρίζουμε ότι το άτομο σιδήρου μπορεί να αποβάλλει 2 ή 3 ηλεκτρόνια, συμπεραίνουμε ότι σχηματίζει δύο διαφορετικά ιόντα.`,
    options: [
      { text: "Σωστό", correct: true },
      { text: "Λάθος", correct: false }
    ],
    explanation: `Ακριβώς. Αν αποβάλλει 2 ηλεκτρόνια σχηματίζει το ιόν Fe<sup>+2</sup>, ενώ αν αποβάλλει 3 σχηματίζει το ιόν Fe<sup>+3</sup>.`
  }
];

let content = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');

const qRegex = /export const bGymnasiouQuestions: Question\[\] = (\[[\s\S]*?\]);\n\nexport const bGymnasiouMCQ: MCQ\[\]/;
const matchQ = content.match(qRegex);
if (matchQ) {
  let existingQs = eval(matchQ[1]);
  // WE ARE DELETING THE OLD UNFORMATTED CHAPTER 10 QUESTIONS BECAUSE THE USER JUST GAVE US THE PERFECT REPLACEMENTS
  existingQs = existingQs.filter(q => q.chapterId !== 'chapter-10');
  existingQs.push(...userQuestions);
  let newQsStr = JSON.stringify(existingQs, null, 2);
  content = content.replace(qRegex, `export const bGymnasiouQuestions: Question[] = ${newQsStr};\n\nexport const bGymnasiouMCQ: MCQ[]`);
}

const mRegex = /export const bGymnasiouMCQ: MCQ\[\] = (\[[\s\S]*?\]);$/;
const matchM = content.match(mRegex);
if (matchM) {
  let existingMs = eval(matchM[1]);
  existingMs.push(...userMCQ);
  let newMsStr = JSON.stringify(existingMs, null, 2);
  content = content.replace(mRegex, `export const bGymnasiouMCQ: MCQ[] = ${newMsStr};`);
}

fs.writeFileSync('src/data/bGymnasiouQuestions.ts', content, 'utf8');
console.log('Merged successfully.');
