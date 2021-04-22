var myFlower
var flowers= []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for (var i=0;i<15;i++){
		let flower = generateRandomFlower()
		flowers.push(flower)
	}	
}

function drawFlower(flower){
	push();
		translate(flower.x,flower.y);
		rotate(flower.size);
		fill(255, 214, 0);
		strokeWeight(1.5);
		ellipse(0,0,50);
		ellipseMode(CORNER)
		fill(255, 253, 240);
		stroke(237, 235, 218);
	  if (flower.color){
			fill(flower.color);
		}
		for (var i=0;i<30;i++){
			ellipse(20,-20,60*flower.size,20);
			rotate(PI/12);
		}
	pop()
}
var list =["#fcfce3","#ffa6a6","#bbb3ff","#f9ff99","#ff8a66","#ffcb6b", "#cea3e3", "#d1ff9c"]
var sizes = [1,0.9,1.1,0.9,0.8]
function generateRandomFlower(x,y){
	return{
		x: x ||random(width),	
		y: y ||random(height),
		size:random(sizes) ,
		color: random(list)
	}
}

function mousePressed(){
	var flower = generateRandomFlower(mouseX,mouseY)
	flowers.push(flower)
}

function draw() {
	
	background(255);
	
	for (var i=0;i<flowers.length;i++){
		let flower = flowers[i]
		drawFlower(flower)
	
		if (dist(mouseX,mouseY,flower.x,flower.y)<200){
			flower.size=lerp(flower.size,2,0.1)
		}else{
			flower.size=lerp(flower.size,0.8,0.05)
		}
		
	}
	

}