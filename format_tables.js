const fs = require('fs');

let text = fs.readFileSync('src/data/bGymnasiouQuestions.ts', 'utf8');

// Replace Question 7
let q7Target = `"a": "<span class='text-rose-400 font-bold'>A<sub>1</sub>-B<sub>5</sub><br>A<sub>2</sub>-B<sub>7</sub><br>A<sub>3</sub>-B<sub>1</sub><br>A<sub>4</sub>-B<sub>6</sub><br>A<sub>5</sub>-B<sub>2</sub><br>A<sub>6</sub>-B<sub>1</sub>, B<sub>3</sub>, B<sub>8</sub><br>A<sub>7</sub>-B<sub>3</sub>, B<sub>4</sub>, B<sub>5</sub>, B<sub>7</sub><br>Α<sub>8</sub>-B<sub>3</sub>, B<sub>4</sub></span>"`;

let q7Replacement = `"a": \`
<div class='overflow-x-auto my-4'>
  <table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
    <thead class='bg-white/10'>
      <tr>
        <th class='py-3 px-4 font-semibold'>ΥΛΙΚΟ</th>
        <th class='py-3 px-4 font-semibold'>Προϊόν - Δραστηριότητα</th>
        <th class='py-3 px-4 font-semibold text-emerald-400'>Απαντήσεις</th>
      </tr>
    </thead>
    <tbody class='divide-y divide-white/10'>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>1. χάλυβας (κράμα σιδήρου)</td>
        <td class='py-3 px-4'>Β1. μεταφορές - ταξίδια</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>1 → Β5</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>2. τεχνητό μετάξι (ρεγιόν)</td>
        <td class='py-3 px-4'>Β2. καλλιέργειες</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>2 → Β7</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>3. βενζίνη</td>
        <td class='py-3 px-4'>Β3. υλικά συσκευασίας</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>3 → Β1</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>4. ασπιρίνη</td>
        <td class='py-3 px-4'>Β4. ζωγραφική</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>4 → Β6</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>5. λίπασμα</td>
        <td class='py-3 px-4'>Β5. κατασκευές</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>5 → Β2</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>6. πλαστικό</td>
        <td class='py-3 px-4'>Β6. ανακούφιση πυρετού</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>6 → Β1, Β3, Β8</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>7. χρώμα</td>
        <td class='py-3 px-4'>Β7. ρούχα</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>7 → Β3, Β4, Β5, Β7</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4'>8. χαρτί</td>
        <td class='py-3 px-4'>Β8. μπάλες ποδοσφαίρου</td>
        <td class='py-3 px-4 text-emerald-400 font-bold'>8 → Β3, Β4</td>
      </tr>
    </tbody>
  </table>
</div>
\``;

text = text.replace(q7Target, q7Replacement);

// Let's also fix Question 2 from the JSON (the table with Si, C, Ne, etc)
// Actually we can just find it: "Α. Ο πίνακας συμπληρώνεται ως εξής:<br>Si: 14p, 14n, 14e | K(2)-L(8)-M(4)"
let q2TargetRegex = /"a":\s*"<span class='text-emerald-400 font-bold'>Α\. Ο πίνακας συμπληρώνεται ως εξής:(.*?)"/s;
let q2Replacement = `"a": \`
<span class='text-emerald-400 font-bold'>Α. Ο πίνακας συμπληρώνεται ως εξής:</span>
<div class='overflow-x-auto my-4'>
  <table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden'>
    <thead class='bg-white/10'>
      <tr>
        <th class='py-3 px-4 font-semibold'>Στοιχείο</th>
        <th class='py-3 px-4 font-semibold text-center'>p</th>
        <th class='py-3 px-4 font-semibold text-center'>n</th>
        <th class='py-3 px-4 font-semibold text-center'>e</th>
        <th class='py-3 px-4 font-semibold'>Κατανομή Ηλεκτρονίων</th>
      </tr>
    </thead>
    <tbody class='divide-y divide-white/10 text-emerald-300 font-medium'>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4 font-bold text-white'>Si</td>
        <td class='py-3 px-4 text-center'>14</td>
        <td class='py-3 px-4 text-center'>14</td>
        <td class='py-3 px-4 text-center'>14</td>
        <td class='py-3 px-4 tracking-widest'>K(2)-L(8)-M(4)</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4 font-bold text-white'>C</td>
        <td class='py-3 px-4 text-center'>6</td>
        <td class='py-3 px-4 text-center'>6</td>
        <td class='py-3 px-4 text-center'>6</td>
        <td class='py-3 px-4 tracking-widest'>K(2)-L(4)</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4 font-bold text-white'>Ne</td>
        <td class='py-3 px-4 text-center'>10</td>
        <td class='py-3 px-4 text-center'>10</td>
        <td class='py-3 px-4 text-center'>10</td>
        <td class='py-3 px-4 tracking-widest'>K(2)-L(8)</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4 font-bold text-white'>S</td>
        <td class='py-3 px-4 text-center'>16</td>
        <td class='py-3 px-4 text-center'>16</td>
        <td class='py-3 px-4 text-center'>16</td>
        <td class='py-3 px-4 tracking-widest'>K(2)-L(8)-M(6)</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4 font-bold text-white'>Mg</td>
        <td class='py-3 px-4 text-center'>12</td>
        <td class='py-3 px-4 text-center'>12</td>
        <td class='py-3 px-4 text-center'>12</td>
        <td class='py-3 px-4 tracking-widest'>K(2)-L(8)-M(2)</td>
      </tr>
      <tr class='hover:bg-white/5 transition-colors'>
        <td class='py-3 px-4 font-bold text-white'>O</td>
        <td class='py-3 px-4 text-center'>8</td>
        <td class='py-3 px-4 text-center'>8</td>
        <td class='py-3 px-4 text-center'>8</td>
        <td class='py-3 px-4 tracking-widest'>K(2)-L(6)</td>
      </tr>
    </tbody>
  </table>
</div>
<span class='text-emerald-400 font-bold'>
<br>Β. Το στοιχείο Mg σχηματίζει ιόντα με αποβολή των δύο ηλεκτρονίων της εξωτερικής στιβάδας και μετατρέπεται σε θετικά φορτισμένο ιόν, που ονομάζεται κατιόν.<br>Γ. Το στοιχείο S σχηματίζει ιόντα με πρόσληψη δύο ηλεκτρονίων στην εξωτερική στιβάδα και μετατρέπεται σε αρνητικά φορτισμένο ιόν, που ονομάζεται ανιόν.<br>Δ. Τα στοιχεία αποβάλουν ή προσλαμβάνουν ηλεκτρόνια και μετατρέπονται σε κατιόντα ή ανιόντα αντίστοιχα, γιατί θέλουν να αποκτήσουν την μεγαλύτερη δυνατή σταθερότητα με 8 ηλεκτρόνια στην εξωτερική στιβάδα, εκτός αν εξωτερική στιβάδα είναι η Κ, οπότε θέλουν 2 ηλεκτρόνια.</span>
\``;

text = text.replace(q2TargetRegex, q2Replacement);

fs.writeFileSync('src/data/bGymnasiouQuestions.ts', text, 'utf8');
console.log("Updated tables successfully");
