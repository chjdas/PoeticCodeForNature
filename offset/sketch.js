function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	offset = 0;
  fill(random(150,200),80,random(80,180));
}

let i;
let j;
let r;
let dist;
let offset;

function draw() {
	clear();

    noStroke();
	if(mouseIsPressed){
	  offset -= 0.03;
	}
	for(i = 1; i < width / 30; i++){
		for(j = 1; j < height / 30; j++){
			dist = sqrt(pow(abs(i * 30 - mouseX), 2) + pow(abs(j * 30 - mouseY), 2));
			r = sin(dist / 200 + offset) * 25 + 5;
			ellipse(i * 30, j * 30, r, r);
	  }
	}
}
