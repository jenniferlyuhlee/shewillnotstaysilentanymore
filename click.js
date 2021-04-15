var diam =20;
var strokeColor=(0, 0, 0);
var isGrowing=true;
var centX, centY;
bgImg=loadImage('asset/tw cover.png');

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  smooth();
  image(bgImg, 0, 0, width, height);
  centX=width/2;
  centY=height/2
  strokeWeight(10);
  fill(255, 25);
}

function draw(){
  if(diam<=400){
    ellipse(centX, centY, diam, diam);
    diam+=20;
  }
}