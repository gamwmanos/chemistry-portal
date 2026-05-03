const Jimp = require("jimp");

async function makeTransparent() {
  const image = await Jimp.read("public/ximeiastintaxi.jpg");
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx+1];
    const b = this.bitmap.data[idx+2];
    
    const dist = Math.sqrt((r-255)**2 + (g-255)**2 + (b-255)**2);
    
    let alpha = 255;
    if (dist < 120) {
      // It's part of the background or a very light edge
      alpha = Math.max(0, (dist / 120) * 255);
      
      // For antialiasing to work well without a white halo against a dark background,
      // we need to remove the "whiteness" from the edge pixels.
      // We can do this by darkening the pixel towards the average dark color of the logo.
      // Let's just scale down r,g,b towards 0 (or a dark blue).
      this.bitmap.data[idx] = Math.max(0, r - (255-alpha));
      this.bitmap.data[idx+1] = Math.max(0, g - (255-alpha));
      this.bitmap.data[idx+2] = Math.max(0, b - (255-alpha));
    }
    
    this.bitmap.data[idx+3] = alpha;
  });
  
  await image.writeAsync("public/ximeiastintaxi.png");
  console.log("Image saved to public/ximeiastintaxi.png");
}

makeTransparent().catch(console.error);
