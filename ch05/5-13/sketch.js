var x;
var offset = 10;
function setup() {
 createCanvas(400,400); 
 x = width/2;
}

function draw() {
  // background(204);
  if (mouseX < x){
    x += 0.5;
    offset = -10;
  };
    if (mouseX > x){
    x -= 0.5;
    offset = 10;
  }
  
  //draw arrow left or right depending on 'offset' value
  line(x,0,x,height);
  line(mouseX,mouseY,mouseX + offset, mouseY - 10);
  line(mouseX,mouseY,mouseX + offset, mouseY + 10);
  line(mouseX,mouseY,mouseX + offset*3, mouseY);
}