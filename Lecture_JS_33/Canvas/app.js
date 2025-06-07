let canvas = document.querySelector("canvas");

// brush == context

let ctx = canvas.getContext("2d");
ctx.fillStyle = "red"; // brush ko paint mai dubo
ctx.fillRect(50, 100, 150, 100); // fir rectangle bana do

ctx.strokeStyle = "green"; // brush ko paint mai dubo
ctx.strokeRect(50, 220, 100, 80);

// path
ctx.beginPath();
ctx.moveTo(50, 320);
ctx.lineTo(80, 310);
ctx.lineTo(120, 340);
ctx.lineTo(120, 390);
ctx.lineTo(70, 390);
ctx.lineTo(50, 320);
ctx.stroke();
ctx.closePath()




// triangle

ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(350, 200);
ctx.lineTo(250, 200);
ctx.lineTo(300, 100);
// ctx.stroke();   // only triangle border come
ctx.fill();     // triangle filled with color
ctx.closePath();




// drawing text
ctx.font = '28px mono-space'
ctx.fillStyle = 'blue'
ctx.fillText( "Uday", 300, 300);








