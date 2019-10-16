let color = 0
let d = +1

function setup() {
  createCanvas (600,400)
  background (250, 250, 100)
}

function draw() {
  background (250, 250, 100)
  
  fill(color, 0, 0)
  
  if (color == 255) {
    d = -1
  } else if (color == 0) {
    d = +1
  }
  
  color += d
  
  let x = map(mouseX, 0, width, 200, 400, true)
  let y = map(mouseY, 0, height, 100, 300, true)
  
  ellipse(x, y,100,100)
  
}
