const fs = require('fs');

let content = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

function getChapterIdFromText(text) {
    text = text.toLowerCase();
    
    // Exact text from the first 13 questions of gGymnasiouQuestions (Chapter 0)
    // We can just check their exact queries:
    if (text.includes("χημική αντίδραση ονομάζεται κάθε") || 
        text.includes("το υδρογόνο αντιδρά με το βρόμιο") ||
        text.includes("οι χημικές εξισώσεις που ακολουθούν έχουν ένα λάθος") ||
        text.includes("να συμπληρώσετε τους συντελεστές στις ακόλουθες εξισώσεις") ||
        text.includes("να συμπληρώσετε τους δείκτες στους χημικούς") ||
        text.includes("η καύση της αιθανόλης (c<sub>2</sub>h<sub>6</sub>o)") ||
        text.includes("η καύση της αιθανόλης (c2h6o)") ||
        text.includes("που αφορά την καύση της μεθανόλης") ||
        text.includes("οι ιοντικές ενώσεις αποτελούνται από") ||
        text.includes("για να αποκτήσει σταθερή δομή μετατρέπεται") ||
        text.includes("τα ιόντα νατρίου και καλίου") ||
        text.includes("τα κατιόντα ασβεστίου δεν είναι απαραίτητα") ||
        text.includes("το μαγνήσιο έχει κεντρικό ρόλο στην υγεία") ||
        text.includes("ο σίδηρος είναι απαραίτητος για την μεταφορά") ||
        text.includes("το άτομο αποτελείται από ......., τα οποία είναι θετικά") ||
        text.includes("να συμπληρώσετε τα κενά στον ακόλουθο πίνακα") && text.includes("si") && text.includes("ne") ||
        text.includes("το στοιχείο mg σχηματίζει ιόντα με") ||
        text.includes("ο χημικός δεσμός που δημιουργείται ανάμεσα σε") ||
        text.includes("να βρείτε την κατανομή σε στιβάδες των ηλεκτρονίων του") ||
        text.includes("μία σκοτεινόχρωμη φιάλη στο εργαστήριο δεν έχει") ||
        text.includes("ο ίον και η όλη διαφωνούν") ||
        text.includes("στο 1ο και 2ο μέλος μίας χημικής εξίσωσης") ||
        text.includes("2hi + cl2") || text.includes("kclo3") || text.includes("64 g θείου") ||
        text.includes("από τη χημική αντίδραση του υδρογόνου με το άζωτο") ||
        text.includes("nh4)2co3(s)")) {
        return "chapter-0";
    }
    
    // Chapter 2 (Periodic Table)
    if (text.includes("newlands") || text.includes("mendeleev") || text.includes("π.π.") || 
        text.includes("περιοδικό") || text.includes("αλκάλια") || text.includes("αλογόνα") ||
        text.includes("ευγενή αέρια") || text.includes("κατανομή e σε στιβάδες") || 
        text.includes("μέταλλα (μ), αμέταλλα (α)") || text.includes("ταξινομήθηκε")) {
        return "chapter-2";
    }

    // Chapter 3 (Organic Chemistry)
    if (text.includes("οργανική") || text.includes("υδρογονάνθρακες") || text.includes("φυσικό αέριο") || 
        text.includes("πετρέλαιο") || text.includes("πολυμερή") || text.includes("αιθανόλη") || 
        text.includes("πρωτεΐνες") || text.includes("υδατάνθρακες") || text.includes("λίπη") ||
        text.includes("αλκοολική ζύμωση") || text.includes("πατατάκια") || text.includes("θερμίδες") ||
        text.includes("πλαστικά") || text.includes("μεθάνιο") || text.includes("προπάνιο") ||
        text.includes("βουτάνιο") || text.includes("οκτάνιο") || text.includes("κλασματική απόσταξη")) {
        return "chapter-3";
    }

    // Chapter 1 (Acids, Bases, Salts)
    if (text.includes("οξέων") || text.includes("βάσεων") || text.includes("οξύ ") || text.includes("βάση") ||
        text.includes("ph") || text.includes("δείκτες") || text.includes("υδροχλώριο") || 
        text.includes("θειικό") || text.includes("όξινος") || text.includes("βασικός") ||
        text.includes("νάτριο") && text.includes("naoh") || text.includes("άλατα") || text.includes("όξινη βροχή") ||
        text.includes("αφροδίτη της μήλου") || text.includes("μπαταρίες")) {
        return "chapter-1";
    }
    
    // Chapter 6 (Energy)
    if (text.includes("ενέργεια") && text.includes("καύσιμα") || text.includes("εξώθερμη")) {
        return "chapter-6";
    }

    return null;
}

let newContent = content.replace(/{\s*(chapterId:\s*"chapter-\d+",\s*)?(q:.*?)}/gs, (match, p1, p2) => {
    let textForHeuristics = match;
    let chId = getChapterIdFromText(textForHeuristics);
    
    if (!chId) {
        if (p1) {
            chId = p1.match(/chapter-\d+/)[0];
        } else {
            console.log("Could not find chapter for:", textForHeuristics.substring(0, 100));
            chId = "chapter-0"; 
        }
    }
    
    return `{\n    chapterId: "${chId}",\n    ${p2}}`;
});

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', newContent, 'utf-8');
console.log("Finished assigning chapters again.");
