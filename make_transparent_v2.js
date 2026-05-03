const Jimp = require("jimp");

async function run() {
  const img = await Jimp.read("public/ximeiastintaxi.jpg");
  
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
    let r = this.bitmap.data[idx + 0] / 255;
    let g = this.bitmap.data[idx + 1] / 255;
    let b = this.bitmap.data[idx + 2] / 255;
    
    // The target background we want to remove is white (1, 1, 1)
    // The alpha required to reproduce the pixel when composited over white is:
    // a = 1 - min(r, g, b)
    let minColor = Math.min(r, g, b);
    
    // Because of JPEG artifacts, pure white might be slightly off.
    // If all colors are very close to white, make it fully transparent.
    if (r > 0.94 && g > 0.94 && b > 0.94) {
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      this.bitmap.data[idx + 3] = 0;
      return;
    }
    
    let a = 1 - minColor;
    
    // Boost alpha slightly to compensate for JPEG muddy edges
    a = Math.min(1, a * 1.05);
    
    if (a <= 0) {
      this.bitmap.data[idx + 3] = 0;
      return;
    }
    
    // Recover original color: C_orig = (C_blend - 1*(1-a)) / a
    let newR = (r - (1 - a)) / a;
    let newG = (g - (1 - a)) / a;
    let newB = (b - (1 - a)) / a;
    
    this.bitmap.data[idx + 0] = Math.max(0, Math.min(255, newR * 255));
    this.bitmap.data[idx + 1] = Math.max(0, Math.min(255, newG * 255));
    this.bitmap.data[idx + 2] = Math.max(0, Math.min(255, newB * 255));
    this.bitmap.data[idx + 3] = Math.max(0, Math.min(255, a * 255));
  });
  
  await img.writeAsync("public/ximeiastintaxi.png");
  console.log("High-res transparent PNG created.");
}
run();
