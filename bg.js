
var x2 = 0;
var y2 = 0;

function setup() {
  createCanvas(800, 800);
  background(255);
}


function draw() {
  for (let x=20; x<=width+100; x+=56){
    for (let y=10; y<=height+100; y+=56){
      
      //red shade changer
      var move = abs(mouseX-x);
      strokeWeight(2);
      stroke(move, 0, 0);
      
      //OCTAGON
      //polygon template, modified no. of sides
      //adapted from https://p5js.org/examples/form-regular-polygon.html
      let angle = TWO_PI / 8;           
      beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * 28;
        let sy = y + sin(a) * 28;
        vertex(sx, sy);
      }
      endShape(CLOSE);
      
      //details inside octogon, wheel
      ellipse(x, y, 45, 45);
      rectMode(CENTER);
      rect(x, y, 30, 30);
      for (let w = 0; w<=10; w+=5){
        //horizontal weave
        line(x-15, y-w, x, y-w);
        line(x+15, y+w, x, y+w);
        //vertical weave
        line(x+w, y, x+w, y-15);
        line(x-w, y, x-w, y+15);
      }
    }
  }
}




