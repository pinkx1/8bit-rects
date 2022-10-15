let bgColor = [0,254];
var rectangle1 = {
		posX: getRandomArbitrary(0,800),
		posY: getRandomArbitrary(0,800),
		size: getRandomArbitrary(50, 150)
	}
var rectangle2 = {
		posX: getRandomArbitrary(0,800),
		posY: getRandomArbitrary(0,800),
		size: getRandomArbitrary(50, 150)
	}
var rectangle3 = {
		posX: 600,
		posY: 600,
		size: getRandomArbitrary(50, 150)
	}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function setup() {
	createCanvas(800, 800);
	frameRate(35);
}

function draw() {
	var bc = random(bgColor);
	
	background(bc);
	
	if (bc == 0) { 
		fill(254);
	} else {
		fill(0);
	}	
	
	rectangle1.size -= 10; 
	rectangle1.posX += 5; 
	rectangle1.posY += 5; 
	
	if (rectangle1.size <= 0) { 
		rectangle1.posX = random(800);
		rectangle1.posY = random(800);
		rectangle1.size = random(0,150);
	}
	
	rectangle2.size -= 10; 
	rectangle2.posX += 5; 
	rectangle2.posY += 5; 
	
	if (rectangle2.size <= 0) { 
		rectangle2.posX = random(800);
		rectangle2.posY = random(800);
		rectangle2.size = random(0,150);
	}
	
	rectangle3.size -= 10; 
	rectangle3.posX += 5; 
	rectangle3.posY += 5; 
	
	if (rectangle3.size <= 0) { 
		rectangle3.posX = random(800);
		rectangle3.posY = random(800);
		rectangle3.size = random(0,150);
	}
	
	rect(rectangle1.posX,rectangle1.posY,rectangle1.size); 
	rect(rectangle2.posX,rectangle2.posY,rectangle2.size); 
	rect(rectangle3.posX,rectangle3.posY,rectangle3.size); 

}
