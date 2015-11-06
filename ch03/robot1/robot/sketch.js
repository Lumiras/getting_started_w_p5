function setup() {
  createCanvas(720,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  
  //Neck
  stroke(102); //stroke is gray
  line(266,257,266,162); //left
  line(276,257,276,162); //middle
  line(286,257,286,162); //right
  
  //antenna
  line(276,155,246,112); //small
  line(276,155,306,56); //tall
  line(276,155,342,170); //medium
  
  //body
  noStroke();
  fill(102);
  ellipse(264,377,33,33);
  fill(0);
  rect(219,257,90,120);
  fill(102);
  rect(219,274,90,6);
  
  //head
  fill(0);
  ellipse(276,155,45,45);
  fill(255);
  ellipse(288,150,14,14);
  fill(0);
  ellipse(288,150,3,3);
  fill(153);
  ellipse(263,148,5,5);
  ellipse(296,130,5,5);
  ellipse(305,162,3,3);
  
}