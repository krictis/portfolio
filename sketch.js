var up = true;
var r=0;
var b=255;

var oval1= {
  x:112,
  y:118,
  diametr:30
};

var oval2 = {
  x:185,
  y:118,
  diametr:30
};

var left = false;
var lpupil = {
  x:110,
  y:140
};
var rpupil = {
  x:185,
  y:140,
};

//Sound
var song;
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("Alive.mp3", loaded);
  slider = createSlider (0,1,05, 0.01);
  song.setVolume (0.5);
}
function loaded () {
  song.play();
}

function draw() {
  r=map(mouseX,0,width,0,255);
  background(r,0,b); 
  song.setVolume (slider.value());
  
}
//left/right eyebrow animation  
  if (up) {
    oval1.y--;
    oval2.y--;
  } 
  
  else {
    oval1.y++;
    oval2.y++;
  }
  
  if (oval1.y < 116 || oval1.y > 122) {
    up = !up;   
  }
  
//left/right pupil animation
  if (left) {
    lpupil.x--;
    rpupil.x--;
  }
  else {
    lpupil.x++;
    rpupil.x++;
  }
    if(lpupil.x < 108 || lpupil.x > 112)
      left = !left;
//right pupil animation
   
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
  
  //pupil dvigalis vlevo i vpravo
  fill(0);
  stroke(30,144,255);
  strokeWeight(2);
  ellipse(lpupil.x,lpupil.y,8,8);//left
  ellipse(rpupil.x,rpupil.y,8,8);//right
  

  //nose
  fill(289,198,198);
  stroke(235,149,149);
  ellipse(149,160,20,10);
 
  //mouth
  line(130,193,170,193);
  arc(150, 193, 40, 30, 0, PI);
  
}
  
  

