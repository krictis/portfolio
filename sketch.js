
var r=0;
var b=255;

var oval1= {
  x:118,
  y:118,
  diametr:30
};

var oval2= {
  x:185,
  y:118,
  diametr:30
};

function setup() {
  createCanvas(1400, 1400);
}

function draw() {
  r=map(mouseX,0,600,0,255);
  background(r,0,b);
  oval1.x=oval1.x-1;
  oval2.y=oval2.y-1;
 

  //head
  fill(247,213,213);
  ellipse(150,150,150,170);
  
  //EYEBROWS
  fill(105,105,105);
  noStroke(0);
  ellipse(oval1.x,oval1.y,oval1.diametr,8);
  ellipse(oval2.x,oval2.y,oval2.diametr,8);

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
 
  //mouth
  line(130,193,170,193);
  arc(150, 193, 40, 30, 0, PI);
  
}
  
  