const fs = require('fs');
const file = 'src/data/bGymnasiouQuestions.ts';
let content = fs.readFileSync(file, 'utf8');
let changes = 0;

// FIX 1: Add CSS molecular models to the chapter-6 question
const oldMolQ = '"6. Να συμβουλευτείτε τα χρώματα των προσομοιωμάτων στην ενότητα 5 και στη συνέχεια να γράψετε τον μοριακό τύπο της χημικής ένωσης που αντιστοιχεί στο καθένα από τα προσομοιώματα του ακόλουθου πίνακα."';

const newMolQ = `"6. Να συμβουλευτείτε τα χρώματα των προσομοιωμάτων στην ενότητα 5 και στη συνέχεια να γράψετε τον μοριακό τύπο της χημικής ένωσης που αντιστοιχεί στο καθένα από τα προσομοιώματα του ακόλουθου πίνακα.<div class='overflow-x-auto my-4'><table class='border-collapse text-center text-sm bg-white/5 rounded-xl overflow-hidden w-full'><thead class='bg-white/10'><tr><th class='py-3 px-3 font-semibold'>1ο</th><th class='py-3 px-3 font-semibold'>2ο</th><th class='py-3 px-3 font-semibold'>3ο</th><th class='py-3 px-3 font-semibold'>4ο</th><th class='py-3 px-3 font-semibold'>5ο</th></tr></thead><tbody><tr><td class='py-4 px-3'><span style='display:inline-block;width:18px;height:18px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:10px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#5B2D8E;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>υδροϊώδιο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#718096;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>διοξείδιο άνθρακα</small></td><td class='py-4 px-3'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#ECC94B;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>υδρόθειο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#38a169;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#38a169;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#718096;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#38a169;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:1px;'></span><br><small class='text-white/60'>χλωροφόρμιο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#3182ce;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>διοξείδιο αζώτου</small></td></tr><tr class='text-xs text-white/50'><td class='pb-2'>λευκό=H, μωβ=I</td><td class='pb-2'>κόκκ.=O, γκρι=C</td><td class='pb-2'>λευκό=H, κίτρ.=S</td><td class='pb-2'>γκρι=C, πράσ.=Cl, λευκό=H</td><td class='pb-2'>κόκκ.=O, μπλε=N</td></tr></tbody></table></div>"`;

if (content.includes(oldMolQ)) {
  content = content.replace(oldMolQ, newMolQ);
  console.log('OK: Προσομοιώματα προστέθηκαν');
  changes++;
} else {
  console.log('X: Δεν βρέθηκε η ερώτηση προσομοιωμάτων');
}

// FIX 2: Fix broken acrostic question numbers (script wrongly made 1. → <sub>1</sub>.)
const brokenCount = (content.match(/<sub>(\d+)<\/sub>\./g) || []).length;
if (brokenCount > 0) {
  content = content.replace(/<sub>(\d+)<\/sub>\. (Τέτοια|Σημείο|Αυτές|Στοιχείο|Χημική|Το σημείο|Παράγεται|Ακέφαλο|Τα θετικά|Τόσα|Ο αριθμός|Τα νετρόνια|Δημιουργείται)/g, '$1. $2');
  console.log('OK: Ακροστιχίδα αριθμοί διορθώθηκαν');
  changes++;
}

// FIX 3: Sulfur symbol: (CH4) → (S) 
if (content.includes('θείου (CH<sub>4</sub>)')) {
  content = content.replace(/θείου \(CH<sub>4<\/sub>\)/g, 'θείου (S)');
  console.log('OK: Θείο (S) διορθώθηκε');
  changes++;
}

if (changes > 0) {
  fs.writeFileSync(file, content, 'utf8');
  console.log('Συνολο:', changes, 'διορθώσεις αποθηκεύτηκαν');
}
