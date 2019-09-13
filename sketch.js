function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(100);
  

  //head
  fill(247,213,213);
  ellipse(150,150,150,170);
  
  //eyebrows
  fill(105,105,105);
  noStroke(0);
  ellipse(112,118,25,8);
  ellipse(185,118,25,8);

  //eyes
  fill(255);
  stroke(108,101,94);
  ellipse(110,140,25,20);
  ellipse(186,140,25,20);
  
  //zrachok
  fill(0);
  stroke(30,144,255);
  strokeWeight(2);
  ellipse(110,140,8,8);//left
  ellipse(185,140,8,8);//right
  

  //nose
  fill(289,198,198);
  stroke(235,149,149);
  ellipse(149,160,20,10);
 
  //mouse
  line(130,193,170,193);
  arc(150, 193, 40, 30, 0, PI);
  
}
  