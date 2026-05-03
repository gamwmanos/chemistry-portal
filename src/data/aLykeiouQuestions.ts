/**
 * Ερωτήσεις και Ασκήσεις Χημείας Α' Λυκείου
 * Νέο βιβλίο (ανανεωμένη έκδοση)
 *
 * Κεφάλαια:
 * 1. Η ΧΗΜΕΙΑ ΣΤΗΝ ΚΑΘΗΜΕΡΙΝΗ ΖΩΗ ΚΑΙ ΣΤΗΝ ΚΟΙΝΩΝΙΑ
 * 2. Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – Ο ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ
 * 3. Ο ΧΗΜΙΚΟΣ ΔΕΣΜΟΣ
 * 4. Η ΓΛΩΣΣΑ ΤΗΣ ΑΝΟΡΓΑΝΗΣ ΧΗΜΕΙΑΣ
 * 5. ΕΙΣΑΓΩΓΗ ΣΤΙΣ ΧΗΜΙΚΕΣ ΑΝΤΙΔΡΑΣΕΙΣ
 * 6. ΣΤΟΙΧΕΙΟΜΕΤΡΙΑ
 */

export interface Question {
  chapterId?: string;
  q: string;
  a: string;
}

export interface MCQOption {
  text: string;
  correct: boolean;
}

export interface MCQ {
  chapterId?: string;
  q: string;
  options: MCQOption[];
  explanation: string;
}

// ─── ΚΕΦΑΛΑΙΟ 1 ────────────────────────────────────────────────────────────────
// Η ΧΗΜΕΙΑ ΣΤΗΝ ΚΑΘΗΜΕΡΙΝΗ ΖΩΗ ΚΑΙ ΣΤΗΝ ΚΟΙΝΩΝΙΑ

export const ch1Questions: Question[] = [];

export const ch1MCQ: MCQ[] = [];

// ─── ΚΕΦΑΛΑΙΟ 2 ────────────────────────────────────────────────────────────────
// Η ΔΟΜΗ ΤΟΥ ΑΤΟΜΟΥ – Ο ΠΕΡΙΟΔΙΚΟΣ ΠΙΝΑΚΑΣ

export const ch2Questions: Question[] = [];

export const ch2MCQ: MCQ[] = [];

// ─── ΚΕΦΑΛΑΙΟ 3 ────────────────────────────────────────────────────────────────
// Ο ΧΗΜΙΚΟΣ ΔΕΣΜΟΣ

export const ch3Questions: Question[] = [];

export const ch3MCQ: MCQ[] = [];

// ─── ΚΕΦΑΛΑΙΟ 4 ────────────────────────────────────────────────────────────────
// Η ΓΛΩΣΣΑ ΤΗΣ ΑΝΟΡΓΑΝΗΣ ΧΗΜΕΙΑΣ

export const ch4Questions: Question[] = [];

export const ch4MCQ: MCQ[] = [];

// ─── ΚΕΦΑΛΑΙΟ 5 ────────────────────────────────────────────────────────────────
// ΕΙΣΑΓΩΓΗ ΣΤΙΣ ΧΗΜΙΚΕΣ ΑΝΤΙΔΡΑΣΕΙΣ

export const ch5Questions: Question[] = [];

export const ch5MCQ: MCQ[] = [];

// ─── ΚΕΦΑΛΑΙΟ 6 ────────────────────────────────────────────────────────────────
// ΣΤΟΙΧΕΙΟΜΕΤΡΙΑ

export const ch6Questions: Question[] = [];

export const ch6MCQ: MCQ[] = [];
