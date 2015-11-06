
function setup() {
  createCanvas(500,500);
  strokeWeight(1);
}

function draw() {
 background(204);
 for(var i = 0; i<500; i += 4){
  stroke(200,200,0,200);
  line(i, height, width, 0);
  stroke(0,10,200,200);
  line(0,i,width,height);
  
  noStroke();
  fill(200,0,0,10);
  ellipse(width/2,height/2,100,100);

 }
}