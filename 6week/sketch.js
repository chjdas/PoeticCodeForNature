let r=150;
let xp;
let yp;
let xs=2;
let cell=15;

function setup() {
  createCanvas(800, 600);
  background(255);

}
function draw() {
  background(255);
  stroke(200);

  for (let i=0; i<=width;i+=cell) {
    for (let j=0; j<=height;j+=cell) {
  this.m = createVector(mouseX,mouseY);
  this.p = createVector(i,j);
  m.sub(p);
  m.normalize();
  m.mult(15);
strokeWeight(2);
push();
translate(i,j);
  line(0,0,m.x,m.y);
  pop();
    }
  }

}
