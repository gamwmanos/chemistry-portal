import re

# Read ggymn.txt
with open('public/ggymn.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# I will just write a regex to extract the arrays from ggymn.txt
# Since ggymn.txt contains 2 bGymnasiouQuestions arrays and 2 bGymnasiouMCQ arrays,
# I will extract them using regex.

def extract_arrays(text, name):
    pattern = r"export const " + name + r":.*?=\s*\[(.*?)\];"
    return re.findall(pattern, text, re.DOTALL)

q_arrays = extract_arrays(text, 'bGymnasiouQuestions')
mcq_arrays = extract_arrays(text, 'bGymnasiouMCQ')

# For chapter 1 (first arrays)
ch1_q = q_arrays[0].replace('chapter-6', 'chapter-1')
ch1_mcq = mcq_arrays[0].replace('chapter-6', 'chapter-1')

# For chapter 2 (second arrays)
# Some might not have chapterId, let's inject it.
def inject_chapterId(content, chapter_id):
    # insert chapterId: "chapter-X", right after {
    content = re.sub(r'{\s*q:', f'{{\n    chapterId: "{chapter_id}",\n    q:', content)
    return content

ch2_q = inject_chapterId(q_arrays[1], 'chapter-2')
ch2_mcq = inject_chapterId(mcq_arrays[1], 'chapter-2')

# Combine them
new_questions_str = ch1_q + ",\n" + ch2_q
new_mcqs_str = ch1_mcq + ",\n" + ch2_mcq

# Now read gGymnasiouQuestions.ts
with open('src/data/gGymnasiouQuestions.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# The original arrays in gGymnasiouQuestions.ts
q_orig_match = re.search(r"export const gGymnasiouQuestions: Question\[\] = \[(.*?)\];\n\nexport const", orig, re.DOTALL)
if not q_orig_match:
    q_orig_match = re.search(r"export const gGymnasiouQuestions: Question\[\] = \[(.*?)\];", orig, re.DOTALL)
q_orig_content = q_orig_match.group(1)

mcq_orig_match = re.search(r"export const gGymnasiouMCQ: MCQ\[\] = \[(.*?)\];", orig, re.DOTALL)
mcq_orig_content = mcq_orig_match.group(1)

# Now we need to remove the first 14 questions and first 7 MCQs.
# We can do this by splitting the string by "  }," and taking the remaining.
def remove_n_items(content, n):
    parts = re.split(r'  },?\s*\n', content)
    remaining = parts[n:]
    # re-join
    return "  },\n".join(remaining)

q_rem = remove_n_items(q_orig_content, 14)
mcq_rem = remove_n_items(mcq_orig_content, 7)

# Prepend the new items
final_q = new_questions_str + ",\n" + q_rem
final_mcq = new_mcqs_str + ",\n" + mcq_rem

# Replace in the original file
# Also change the interface import to local interface definition
new_orig = orig.replace("import type { Question, MCQ } from './questions';", """export interface Question {
  chapterId?: string;
  q: string;
  a: string;
}

export interface MCQ {
  chapterId?: string;
  q: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
}""")

new_orig = re.sub(r"export const gGymnasiouQuestions: Question\[\] = \[.*?\];", f"export const gGymnasiouQuestions: Question[] = [\n{final_q}\n];", new_orig, flags=re.DOTALL)
new_orig = re.sub(r"export const gGymnasiouMCQ: MCQ\[\] = \[.*?\];", f"export const gGymnasiouMCQ: MCQ[] = [\n{final_mcq}\n];", new_orig, flags=re.DOTALL)

with open('src/data/gGymnasiouQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(new_orig)

print("Done updating gGymnasiouQuestions.ts")
