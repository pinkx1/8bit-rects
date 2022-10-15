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
	var bc = random(bgColor); // выбор рандомного цвета фона
	
	background(bc); // установка рандомного цвета фона
	
	if (bc == 0) { //выбор цвета квадрата в зависимости от цвета фона
		fill(254);
	} else {
		fill(0);
	}	
	
	rectangle1.size -= 10; // уменьшаю размер квадрата
	rectangle1.posX += 5; // фиксирую положение по центру
	rectangle1.posY += 5; // фиксирую положение по центру
	
	if (rectangle1.size <= 0) { // перемещаю квадрат после его уменьшения до 0
		rectangle1.posX = random(800);
		rectangle1.posY = random(800);
		rectangle1.size = random(0,150);
	}
	
	rectangle2.size -= 10; // уменьшаю размер квадрата
	rectangle2.posX += 5; // фиксирую положение по центру
	rectangle2.posY += 5; // фиксирую положение по центру
	
	if (rectangle2.size <= 0) { // перемещаю квадрат после его уменьшения до 0
		rectangle2.posX = random(800);
		rectangle2.posY = random(800);
		rectangle2.size = random(0,150);
	}
	
	rectangle3.size -= 10; // уменьшаю размер квадрата
	rectangle3.posX += 5; // фиксирую положение по центру
	rectangle3.posY += 5; // фиксирую положение по центру
	
	if (rectangle3.size <= 0) { // перемещаю квадрат после его уменьшения до 0
		rectangle3.posX = random(800);
		rectangle3.posY = random(800);
		rectangle3.size = random(0,150);
	}
	
	rect(rectangle1.posX,rectangle1.posY,rectangle1.size); //рисую квадрат
	rect(rectangle2.posX,rectangle2.posY,rectangle2.size); //рисую квадрат
	rect(rectangle3.posX,rectangle3.posY,rectangle3.size); //рисую квадрат

}