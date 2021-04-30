
// Code adapted from 
//https://github.com/mahirarai/present-future/blob/main/sketches/CH2.js

let s; 
let sf;
var count = 2500;
var spacing = 5;
var repulsionRadius = 80;
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  for (let i = 0; i < count; i++) {
    let angle = i * 137.5;
    let r = spacing * sqrt(i);
    let x = r * cos(radians(angle)) + width / 2;
    let y = r * sin(radians(angle)) + height / 2;
    
    particles.push(new Particle(random(width), -50, x, y, 1.5));
  
  }
} 

function draw() {
  background(255);

  
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
  
  strokeWeight(repulsionRadius);
  noStroke();
  point(mouseX, mouseY);
  
}

function Particle(x, y, targetX, targetY, maxForce) {
  
  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
  this.target = new p5.Vector(targetX, targetY);
  this.maxForce = maxForce * random(0.8, 1.2);
  
  this.move = function() {
    let distThreshold = 20;
    let steer = new p5.Vector(this.target.x, this.target.y);
    let distance = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
    
    if (distance > 0.5) {
      steer.sub(this.pos);
      steer.normalize();
      steer.mult(map(min(distance, distThreshold), 0, distThreshold, 0, this.maxForce));
      this.acc.add(steer);
    }
    
    let mouseDistance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    
    if (mouseDistance < repulsionRadius) {
      let repulse = new p5.Vector(this.pos.x, this.pos.y);
      repulse.sub(mouseX, mouseY);
      repulse.mult(map(mouseDistance, 100, 0, 0, 0.5));
      this.acc.add(repulse);
    }
		
    this.vel.mult(0.95);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.display = function() {

    strokeWeight(1);
    stroke(255, 214, 0, 70);
    fill(255, 214, 0, 70);
    
    s = int(random(1,4)); 
    sf = int(random(1,3));
    
    if (s == 1){
      if(sf == 2){noFill();}
      else{noStroke();}
      // rect(this.pos.x, this.pos.y, random(8),random(8));
    }
    else if(s == 2){
      if(sf == 2){noFill();}
      else{noStroke();}
      
      var angle=TWO_PI/5;
    var halfAngle=angle/2;
    beginShape();
    for (var a=0; a<TWO_PI; a+=angle){
      var sx=this.pos.x+cos(a)*10;
      var sy=this.pos.y+sin(a)*10;
      vertex(sx, sy);
      sx=this.pos.x+cos(a+halfAngle)* random(4);
      sy=this.pos.y+sin(a+halfAngle)* random (4);
      vertex(sx, sy);
    }
    endShape(CLOSE);
    }
    else if(s == 3){
      if(sf == 2){noFill();}
      else{noStroke();}
      circle(this.pos.x, this.pos.y, random(8));
    }
  }
}