const fs = require('fs');
const p1 = fs.readFileSync('points2.txt', 'utf8').split('\n')[0].replace('P1: ', '');
const p2 = fs.readFileSync('points2.txt', 'utf8').split('\n')[1].replace('P2: ', '');
const p3 = fs.readFileSync('points2.txt', 'utf8').split('\n')[2].replace('P3: ', '');
const p4 = fs.readFileSync('points2.txt', 'utf8').split('\n')[3].replace('P4: ', '');

let fileContent = fs.readFileSync('src/components/authors/AuthorsHero.tsx', 'utf8');

let polygons = fileContent.match(/points="[^"]+"/g);

if (polygons && polygons.length === 4) {
  fileContent = fileContent.replace(polygons[0], 'points="' + p1 + '"');
  fileContent = fileContent.replace(polygons[1], 'points="' + p2 + '"');
  fileContent = fileContent.replace(polygons[2], 'points="' + p3 + '"');
  fileContent = fileContent.replace(polygons[3], 'points="' + p4 + '"');
  
  fs.writeFileSync('src/components/authors/AuthorsHero.tsx', fileContent);
  console.log('File successfully updated!');
} else {
  console.log('Failed to find exactly 4 polygons.', polygons ? polygons.length : 0);
}
