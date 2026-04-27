const ffmpegPath = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = 'D:\\BIBLIA\\video.mp4';
const outputDir = path.join(__dirname, 'public', 'video-frames');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Extracting frames from video.mp4...');

try {
  // We extract frames at 30 fps (or whatever the original is) 
  // Let's use the original framerate by not specifying -r, or just output sequentially.
  // Using -qscale:v 2 to maintain high quality for JPGs.
  const cmd = `"${ffmpegPath}" -i "${videoPath}" -qscale:v 2 "${path.join(outputDir, 'frame_%04d.jpg')}"`;
  execSync(cmd, { stdio: 'inherit' });
  console.log('Extraction complete!');
  
  // Count the frames
  const files = fs.readdirSync(outputDir).filter(f => f.startsWith('frame_') && f.endsWith('.jpg'));
  console.log(`Total frames generated: ${files.length}`);
} catch (error) {
  console.error('Error extracting frames:', error);
}
