function setup() {
 createCanvas(400,400); 
 strokeWeight(30);
}

function draw() {
 background(204);
 stroke(102);
 line(30,0,70,height);
 if(mouseButton == LEFT){
   stroke(0)
 } else if (mouseButton == RIGHT) {
   stroke(255);
 } else {
   stroke(150)
 }
 line(0,70,width,50);
}