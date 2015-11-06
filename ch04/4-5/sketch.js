x = 250
function setup() {
  createCanvas(500,500);
  strokeWeight(2);
}

function draw() {
 background(204);
 for (var i = 0; i < 500; i+= 10){
   line(i,40,i,60);
   line(i,120,i,80);
   line(i,140,i,160);
   line(i+20,160,i+40,200);
   line(i-20,160,i-40,200);
   line(i,200,i,260);
   line(i+10,260,i+40,300);
   line(i-10,260,i-40,300);
   line(i,300,i,370);
   line(i,370,i+40,425);
   line(i+40,425,i-40,500);
 }
}