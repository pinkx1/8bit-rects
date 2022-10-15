let bgColor = [0,254];
let rects = []

for (step = 0; step < 40; step++) {
    let tempRect = {posX:getRandomArbitrary(0, 1200), 
        posY:getRandomArbitrary(0, 800), 
        size: getRandomArbitrary(50, 150)}
    rects.push(tempRect);
}

//FUNCTIONS
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function setup() {
    createCanvas(1200, 800);
    frameRate(35);
}

function goRandomPath(recrec){
    recrec.posX = random(1200);
    recrec.posY = random(800);
    recrec.size = random(0,150);
}

function draw() {

    var bc =  random(bgColor)
    background(random(bgColor));
    noStroke();

    if (bc == 0) { 
        fill(254);
    } else {
        fill(0);
    }    
    
    for (let i = 0; i < rects.length; i += 1) {
        rects[i].size -= 10;
        rects[i].posX += 5;
		rects[i].posY += 5;

        if(rects[i].size <= 0){
            goRandomPath(rects[i])
        }

        rect(rects[i].posX, rects[i].posY, rects[i].size);
    }
}