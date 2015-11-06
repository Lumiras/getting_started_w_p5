function setup(){
  createCanvas(1000,1000);
  strokeWeight(30);
}

function draw(){
  background(204);
  stroke(102);
      stroke(mouseX/2,90,20,mouseY/2);
  if(mouseIsPressed == true){

  }
  for(var x = 0; x <= width; x+=50){
    line(x,0,x,height);
  }
  // line(40,0,70,height);
  if(mouseIsPressed == true){
    stroke(120,mouseY/2,150,mouseX/2);
  }
/*  line(0,70,width,50);*/
  for(var y = 0; y <= height; y+=50){
    line(0, y, width, y-50)
  }
}