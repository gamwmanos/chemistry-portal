const fs = require('fs');

function catmullRom2bezier(pts) {
  let result = [];
  for (let i = 0; i < pts.length - 1; i++) {
    let p0 = i == 0 ? pts[0] : pts[i - 1];
    let p1 = pts[i];
    let p2 = pts[i + 1];
    let p3 = i + 2 < pts.length ? pts[i + 2] : p2;

    let cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    let cp1y = p1[1] + (p2[1] - p0[1]) / 6;

    let cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    let cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    result.push([cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]]);
  }
  return result;
}

function bezierPoint(p0, cp1, cp2, p1, t) {
  let cx = 3 * (cp1[0] - p0[0]);
  let bx = 3 * (cp2[0] - cp1[0]) - cx;
  let ax = p1[0] - p0[0] - cx - bx;

  let cy = 3 * (cp1[1] - p0[1]);
  let by = 3 * (cp2[1] - cp1[1]) - cy;
  let ay = p1[1] - p0[1] - cy - by;

  let tSquared = t * t;
  let tCubed = tSquared * t;

  let x = (ax * tCubed) + (bx * tSquared) + (cx * t) + p0[0];
  let y = (ay * tCubed) + (by * tSquared) + (cy * t) + p0[1];

  return [x, y];
}

function interpolateSpline(pts, numPoints) {
  let curves = catmullRom2bezier(pts);
  let interpolated = [];
  let segments = curves.length;
  
  for(let i=0; i<segments; i++) {
    let p0 = pts[i];
    let curve = curves[i];
    let pointsInSegment = Math.floor(numPoints / segments);
    if(i === segments - 1) pointsInSegment += numPoints % segments;
    
    for(let j=0; j<pointsInSegment; j++) {
      let t = j / pointsInSegment;
      let point = bezierPoint(p0, [curve[0], curve[1]], [curve[2], curve[3]], [curve[4], curve[5]], t);
      interpolated.push(point[0].toFixed(2) + ',' + point[1].toFixed(2));
    }
  }
  interpolated.push(pts[pts.length-1][0].toFixed(2) + ',' + pts[pts.length-1][1].toFixed(2));
  return interpolated.join(' ');
}

// Measured EXACTLY from the user's 1066x531 screenshot
const p1 = [
  [0, 100], [0, 60], [2.5, 52], [5.5, 45], [9.8, 38], [12, 31], 
  [16.5, 28.2], [20.5, 30], [23.7, 36], [26.5, 45], [29.7, 54], [31, 68], 
  [28.5, 85], [26.4, 100]
];

const p2 = [
  [26.4, 100], [28.5, 85], [31, 68], [29.7, 54], [31, 45], [34.5, 38], 
  [37, 34], [39.7, 32.7], [43, 34], [44.9, 38], [47, 45], [49.4, 54], [50, 68], 
  [48, 85], [46.1, 100]
];

const p3 = [
  [46.1, 100], [48, 85], [50, 68], [47.9, 54], [50, 45], [51.4, 38], 
  [55, 31], [59.7, 30.0], [64, 31], [68.0, 38], [69, 45], [69.6, 54],
  [68, 68], [67, 85], [66.2, 100]
];

const p4 = [
  [66.2, 100], [67, 85], [68, 68], [66.2, 54], [69, 45], [74, 36], 
  [76.6, 30], [82.6, 24.8], [86.6, 26], [88.6, 30], [92, 40], [95, 47], 
  [97.5, 55], [100, 75], [100, 100]
];

const s1 = interpolateSpline(p1, 100);
const s2 = interpolateSpline(p2, 100);
const s3 = interpolateSpline(p3, 100);
const s4 = interpolateSpline(p4, 100);

let fileContent = fs.readFileSync('src/components/authors/AuthorsHero.tsx', 'utf8');

let polygons = fileContent.match(/points="[^"]+"/g);

if (polygons && polygons.length === 4) {
  fileContent = fileContent.replace(polygons[0], 'points="' + s1 + '"');
  fileContent = fileContent.replace(polygons[1], 'points="' + s2 + '"');
  fileContent = fileContent.replace(polygons[2], 'points="' + s3 + '"');
  fileContent = fileContent.replace(polygons[3], 'points="' + s4 + '"');
  
  fs.writeFileSync('src/components/authors/AuthorsHero.tsx', fileContent);
  console.log('File successfully updated!');
} else {
  console.log('Failed to find exactly 4 polygons.');
}
