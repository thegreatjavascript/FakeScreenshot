export default function(canvas, image, count = 0) {
  return new Promise((resolve, reject) => {
    let ctx = canvas.getContext('2d');
    ctx.putImageData(image, 0, 0);
    let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(let c = 0; c < count; c++) {
      for(let i = 0; i <= data.data.length; i += 4) {
        let r = data.data[i];
        let g = data.data[i+1];
        let b = data.data[i+2];
        let y = Math.floor((  77*r + 150*g + 29*b) >> 8);
        let u = Math.floor(((-43*r -  85*g +128*b) >> 8)) - 0.2;
        let v = Math.floor(((128*r - 107*g - 21*b) >> 8)) - 0.2;
        r     = Math.floor(y + ((91881  * v)             >> 16));
        g     = Math.floor(y + ((-22553 * u - 46802 * v) >> 16));
        b     = Math.floor(y + ((116130 * u)             >> 16));
        data.data[i] = r;
        data.data[i+1] = g;
        data.data[i+2] = b;
      }
    }
    ctx.putImageData(data, 0, 0);
    if(count != 0) {
      resolve(canvas.toDataURL('image/jpeg', 1.01 - count / 100));
    } else {
      resolve(canvas.toDataURL('image/png'));
    }
  }); 
}