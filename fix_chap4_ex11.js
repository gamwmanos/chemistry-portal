const fs = require('fs');

const file = 'd:/BIBLIA/chemistry-portal/src/data/gGymnasiouQuestions.ts';
let content = fs.readFileSync(file, 'utf8');

// Find and replace in Exercise 11
const ch4_model = "<div class='inline-grid grid-cols-3 grid-rows-3 gap-0 w-8 h-8 items-center justify-items-center mx-1'><div class='col-start-2 row-start-1'><div class='w-5 h-5 rounded-full bg-white border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-700 shadow-sm z-10'>H</div></div><div class='col-start-1 row-start-2'><div class='w-5 h-5 rounded-full bg-white border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-700 shadow-sm z-10'>H</div></div><div class='col-start-2 row-start-2'><div class='w-6 h-6 rounded-full bg-gray-800 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>C</div></div><div class='col-start-3 row-start-2'><div class='w-5 h-5 rounded-full bg-white border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-700 shadow-sm z-10'>H</div></div><div class='col-start-2 row-start-3'><div class='w-5 h-5 rounded-full bg-white border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-700 shadow-sm z-10'>H</div></div></div>";

const o2_model = "<div class='inline-flex items-center -space-x-1.5 mx-1'><div class='w-6 h-6 rounded-full bg-red-600 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>O</div><div class='w-6 h-6 rounded-full bg-red-600 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>O</div></div>";

const co2_model = "<div class='inline-flex items-center -space-x-1.5 mx-1'><div class='w-6 h-6 rounded-full bg-red-600 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>O</div><div class='w-6 h-6 rounded-full bg-gray-800 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>C</div><div class='w-6 h-6 rounded-full bg-red-600 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>O</div></div>";

const co_model = "<div class='inline-flex items-center -space-x-1.5 mx-1'><div class='w-6 h-6 rounded-full bg-gray-800 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>C</div><div class='w-6 h-6 rounded-full bg-red-600 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>O</div></div>";

const c_model = "<div class='inline-flex items-center mx-1'><div class='w-6 h-6 rounded-full bg-gray-800 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>C</div></div>";

const h2o_model = "<div class='inline-flex items-center -space-x-1.5 mx-1'><div class='w-5 h-5 rounded-full bg-white border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-700 shadow-sm z-10'>H</div><div class='w-6 h-6 rounded-full bg-red-600 border border-black/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm z-10'>O</div><div class='w-5 h-5 rounded-full bg-white border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-700 shadow-sm z-10'>H</div></div>";

const fire_icon = "<div class='inline-flex items-center mx-1'><span class='text-xl'>🔥</span></div>";

// We need to replace [μοντέλο μεθανίου] and similar with the respective models in Exercise 11
let modified = false;

// Parse the file into a module to do precise replacement
// Actually, it's a TS file, we can just string replace if we are careful
if (content.includes('11. Στον διπλανό πίνακα δίνονται με προσομοιώματα')) {
  content = content.replace(/\[μοντέλο μεθανίου\]/gi, ch4_model);
  content = content.replace(/\[Μοντέλο μεθανίου\]/gi, ch4_model);
  
  content = content.replace(/\[μοντέλο οξυγόνου\]/gi, o2_model);
  content = content.replace(/\[Μοντέλο οξυγόνου\]/gi, o2_model);
  
  content = content.replace(/\[μοντέλο CO<sub>2<\/sub>\]/gi, co2_model);
  content = content.replace(/\[Μοντέλο CO<sub>2<\/sub>\]/gi, co2_model);
  
  content = content.replace(/\[μοντέλο νερού\]/gi, h2o_model);
  content = content.replace(/\[Μοντέλο νερού\]/gi, h2o_model);
  
  content = content.replace(/\[μοντέλο CO\]/gi, co_model);
  content = content.replace(/\[Μοντέλο CO\]/gi, co_model);
  
  content = content.replace(/\[άτομο C\]/gi, c_model);
  content = content.replace(/\[Μαύρη σφαίρα C\]/gi, c_model);
  
  // also add fire icon instead of text "+ θερμότητα"
  // content = content.replace(/\+ θερμότητα/g, `+ ${fire_icon}`);
  
  modified = true;
}

if (modified) {
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated models for Ex 11!');
} else {
  console.log('Ex 11 not found or no changes made.');
}

