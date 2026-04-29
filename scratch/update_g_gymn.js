const fs = require('fs');

// Read ggymn.txt
const text = fs.readFileSync('public/ggymn.txt', 'utf-8');

function extractArrays(text, name) {
    const pattern = new RegExp(`export const ${name}:.*?=\\s*\\[(.*?)\\];`, 'gs');
    let matches = [];
    let match;
    while ((match = pattern.exec(text)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}

const q_arrays = extractArrays(text, 'bGymnasiouQuestions');
const mcq_arrays = extractArrays(text, 'bGymnasiouMCQ');

// For chapter 1
const ch1_q = q_arrays[0].replace(/chapter-6/g, 'chapter-1');
const ch1_mcq = mcq_arrays[0].replace(/chapter-6/g, 'chapter-1');

// For chapter 2
function injectChapterId(content, chapterId) {
    return content.replace(/{\s*q:/g, `{\n    chapterId: "${chapterId}",\n    q:`);
}

const ch2_q = injectChapterId(q_arrays[1], 'chapter-2');
const ch2_mcq = injectChapterId(mcq_arrays[1], 'chapter-2');

const new_questions_str = ch1_q + ",\n" + ch2_q;
const new_mcqs_str = ch1_mcq + ",\n" + ch2_mcq;

// Read gGymnasiouQuestions.ts
let orig = fs.readFileSync('src/data/gGymnasiouQuestions.ts', 'utf-8');

const q_orig_match = /export const gGymnasiouQuestions: Question\[\] = \[(.*?)\];/s.exec(orig);
const q_orig_content = q_orig_match[1];

const mcq_orig_match = /export const gGymnasiouMCQ: MCQ\[\] = \[(.*?)\];/s.exec(orig);
const mcq_orig_content = mcq_orig_match[1];

function removeNItems(content, n) {
    const parts = content.split(/  },?\s*\n/);
    const remaining = parts.slice(n);
    return remaining.join("  },\n");
}

const q_rem = removeNItems(q_orig_content, 14);
const mcq_rem = removeNItems(mcq_orig_content, 7);

const final_q = new_questions_str + ",\n" + q_rem;
const final_mcq = new_mcqs_str + ",\n" + mcq_rem;

orig = orig.replace("import type { Question, MCQ } from './questions';", `export interface Question {
  chapterId?: string;
  q: string;
  a: string;
}

export interface MCQ {
  chapterId?: string;
  q: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
}`);

orig = orig.replace(/export const gGymnasiouQuestions: Question\[\] = \[.*?\];/s, `export const gGymnasiouQuestions: Question[] = [\n${final_q}\n];`);
orig = orig.replace(/export const gGymnasiouMCQ: MCQ\[\] = \[.*?\];/s, `export const gGymnasiouMCQ: MCQ[] = [\n${final_mcq}\n];`);

fs.writeFileSync('src/data/gGymnasiouQuestions.ts', orig, 'utf-8');
console.log("Done updating gGymnasiouQuestions.ts");
