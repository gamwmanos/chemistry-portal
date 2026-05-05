const fs = require('fs');
const file = 'src/data/bGymnasiouQuestions.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. ADD DONKEY QUESTION
const donkeyQuestion = `  {
    "chapterId": "chapter-3",
    "q": "<div class='flex flex-col md:flex-row gap-4 mb-4'><div class='flex-1'>Παρατηρήστε τη διπλανή εικόνα και τους αντίστοιχους ισχυρισμούς.<br>Έχει δίκιο ο Σώτος ότι δεν θα κουραστεί ο Μέντιος;<br>Ένα διάλυμα ζυγίζει λιγότερο από όσο ζυγίζουν τα υλικά του πριν από την ανάμειξη;<br><br>α. Ναι [ ] &nbsp;&nbsp; β. Όχι [ ] &nbsp;&nbsp; γ. Εξαρτάται [ ]<br><br>Να σχεδιάσετε ένα πείραμα με το οποίο θα αποδείξετε την απάντησή σας.<br>Έχετε στη διάθεσή σας: ηλεκτρονική ζυγαριά, ποτήρι ζέσεως, ζάχαρη, ύαλο ωρολογίου, νερό, σπάτουλα.<br><br>Ο σάκος του υπεραθλητή Cani Recori θα γίνει πιο ελαφρύς αν διαλύσει τη σκόνη ηλεκτρολυτών στο μπουκάλι με το νερό του, αντί να την έχει δίπλα σε αυτό;</div><div class='w-full md:w-1/3'><div class='bg-white/10 p-4 rounded-xl text-center border border-dashed border-white/30 text-white/60'>[Προσθέστε την εικόνα sotos.png εδώ]</div></div></div>",
    "a": "<span class='text-rose-400 font-bold'>Όχι, δεν έχει δίκιο ο Σώτος. Η μάζα ενός διαλύματος ισούται με το άθροισμα των μαζών του διαλύτη και της διαλυμένης ουσίας (m<sub>διαλύματος</sub> = m<sub>διαλύτη</sub> + m<sub>διαλ. ουσίας</sub>), λόγω της αρχής διατήρησης της μάζας. Επομένως, το συνολικό βάρος που κουβαλάει ο Μέντιος δεν θα αλλάξει.<br><br><b>Πείραμα:</b> Ζυγίζουμε το ποτήρι ζέσεως με το νερό και τη ζάχαρη στην ύαλο ωρολογίου χωριστά, και βρίσκουμε το άθροισμα των μαζών τους. Στη συνέχεια, ρίχνουμε τη ζάχαρη στο νερό, ανακατεύουμε με τη σπάτουλα μέχρι να διαλυθεί πλήρως, και ζυγίζουμε το ποτήρι ζέσεως με το διάλυμα. Θα διαπιστώσουμε ότι η μάζα του διαλύματος είναι ίση με το άθροισμα των αρχικών μαζών.<br><br>Για τον αθλητή: Όχι, το συνολικό βάρος θα παραμείνει ίδιο.</span>"
  },`;

// Insert after question 8 in chapter-3
const q8Idx = content.indexOf('"8. Ο Ίον έχει μάζα 75 kg');
if (q8Idx !== -1) {
    const endOfQ8 = content.indexOf('},', q8Idx) + 3;
    content = content.substring(0, endOfQ8) + '\n' + donkeyQuestion + '\n' + content.substring(endOfQ8);
    console.log('✓ Added donkey question (Σώτος/Μέντιος)');
} else {
    console.log('✗ Could not find where to insert donkey question');
}

// 2. ADD IMAGE PLACEHOLDER TO "Ανίχνευση νερού"
const waterQIdx = content.indexOf('"7. Να παρατηρήσετε προσεκτικά τη διπλανή εικόνα (Ανίχνευση νερού σε τρόφιμα) και να προσπαθήσετε να εξηγήσετε τι δείχνει και γιατί."');
if (waterQIdx !== -1) {
    const newWaterQ = '"<div class=\'flex flex-col md:flex-row gap-4\'><div class=\'flex-1\'>7. Να παρατηρήσετε προσεκτικά τη διπλανή εικόνα (Ανίχνευση νερού σε τρόφιμα) και να προσπαθήσετε να εξηγήσετε τι δείχνει και γιατί.</div><div class=\'w-full md:w-1/3\'><div class=\'bg-white/10 p-4 rounded-xl text-center border border-dashed border-white/30 text-white/60\'>[Προσθέστε την εικόνα water.png εδώ]</div></div></div>"';
    content = content.replace('"7. Να παρατηρήσετε προσεκτικά τη διπλανή εικόνα (Ανίχνευση νερού σε τρόφιμα) και να προσπαθήσετε να εξηγήσετε τι δείχνει και γιατί."', newWaterQ);
    console.log('✓ Added image placeholder to water detection question');
} else {
    console.log('✗ Could not find water detection question');
}

// 3. FIX ACROSTIC CHAPTER 3
const oldAcrosticStart = content.indexOf('"Να συμπληρώσετε την ακροστιχίδα: 1. Μέθοδος διαχωρισμού των χρωστικών. 2. Μέθοδος διαχωρισμού στερεού από υγρό σε ετερογενές μείγμα.');
if (oldAcrosticStart !== -1) {
    const oldAcrosticEnd = content.indexOf('},', oldAcrosticStart) + 2;
    
    const newAcrostic = `"17. Να συμπληρώσετε την ακροστιχίδα. Η λέξη στην ακροστιχίδα δηλώνει τον στόχο που έχουμε όταν εκχυλίζουμε, αποστάζουμε, διηθούμε ένα μείγμα (στην αιτιατική).\\n1. Μέθοδος διαχωρισμού στερεού από υγρό σε ετερογενές μείγμα.\\n2. Μία τέτοια αξιοποιούμε για να διαχωρίσουμε ένα μείγμα στα συστατικά του.\\n3. Μέθοδος διαχωρισμού στερεού - υγρού, όταν θέλουμε να παραλάβουμε και τα δύο.\\n4. Η μέθοδος που χρησιμοποιείται για τον διαχωρισμό των χρωστικών της μελάνης.\\n5. Ένα από τα φωνήεντα των χρωστικών.\\n6. Αυτό του τσαγιού παραλαμβάνεται με εκχύλιση των αιθέριων ελαίων των φύλλων του φυτού.\\n7. Το στερεό υπόλειμμα.\\n8. Τέτοια πρέπει να είναι η διαλυμένη ουσία για να διαχωριστεί με εξάτμιση του διαλύτη.\\n9. Το αποτέλεσμα της ανάμειξης ουσιών.\\n10. Τέτοιο μείγμα είναι το διάλυμα του αλατόνερου.",
    "a": "<div class='overflow-x-auto my-4'><table class='border-collapse text-sm'><thead><tr><th class='py-2 px-3 text-left text-white/60 font-normal'>#</th><th class='py-2 px-3 text-left text-white/60 font-normal'>Απάντηση</th></tr></thead><tbody><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>1.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Δ</span><span class='text-emerald-300'>ΙΗΘΗΣΗ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>2.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ι</span><span class='text-emerald-300'>ΔΙΟΤΗΤΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>3.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Α</span><span class='text-emerald-300'>ΠΟΣΤΑΞΗ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>4.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Χ</span><span class='text-emerald-300'>ΡΩΜΑΤΟΓΡΑΦΙΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>5.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ω</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>6.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ρ</span><span class='text-emerald-300'>ΟΦΗΜΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>7.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ι</span><span class='text-emerald-300'>ΖΗΜΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>8.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Σ</span><span class='text-emerald-300'>ΤΕΡΕΗ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>9.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Μ</span><span class='text-emerald-300'>ΕΙΓΜΑ</span></td></tr><tr class='border-t border-white/10'><td class='py-2 px-3 text-white/60'>10.</td><td class='py-2 px-3'><span class='inline-flex items-center justify-center w-7 h-7 rounded bg-yellow-400 text-gray-900 font-bold mr-1'>Ο</span><span class='text-emerald-300'>ΜΟΓΕΝΕΣ</span></td></tr></tbody></table></div><p class='mt-3 text-yellow-300 font-bold text-base'>Η λέξη της ακροστιχίδας είναι: <span class='tracking-widest text-yellow-400 text-lg'>ΔΙΑΧΩΡΙΣΜΟ</span></p>"
  }`;
  
    content = content.substring(0, oldAcrosticStart - 6) + newAcrostic + content.substring(oldAcrosticEnd - 1);
    console.log('✓ Fixed Chapter 3 acrostic grid');
} else {
    console.log('✗ Could not find Chapter 3 acrostic');
}

fs.writeFileSync(file, content, 'utf8');
console.log('Done!');
