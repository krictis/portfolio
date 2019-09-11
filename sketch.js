function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(230);
  ellipseMode(CENTER);
  ellipseMode(CENTER);

  //head
  fill(247,213,213);
  ellipse(150,150,150,150);
  
  //eyes
  fill(42,123,229);
  ellipse(110,140,20,20);
  ellipse(186,140,20,20);
  

  //nose
  fill(289,198,198)
  ellipse(149,160,25,10);
 
  //mouse
  line(130,193,170,193);
}