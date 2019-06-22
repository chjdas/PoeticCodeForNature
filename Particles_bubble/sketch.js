let circles = [];
let drawing = false;
let next = 0;
let current;
let previous;

function setup() {
  title = createElement('h3', "<a href='/PoeticCodeForNature'> HOME  <br/> </a> Bubble");
title.position (50,0);
  canvas = createCanvas(600,600);
  canvas.position(50,100);
  description = " <br/>\
  떨어지는 파티클에 역중력을 적용시키다가 떠오른 아이디어. <br/>\
  비눗방울을 불면 처음에 바람에 밀렸다가 올라가는 궤적과 <br/>\
  마지막에 그대로 올라가는 다른 궤적들의 차이로 작품을 만들 수 있을 것같아 시도해보았다.<br/>\
  ";
text = createDiv(description);
text.position(20, 700);
text.style("font-family", "monospace");
text.style("font-size", "12pt");
  current = createVector(0,0);
  previous = createVector(0,0);
}

function draw() {
  background(100, 250);
  if (millis() > next && drawing) {
    current.x = mouseX;
    current.y = mouseY;
    let force = p5.Vector.sub(current, previous);
    force.mult(0.05);
    circles[circles.length - 1].add(current, force);
    next = millis() + random(100);
    previous.x = current.x;
    previous.y = current.y;
  }
  for( let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}

function mousePressed() {
  next = 0;
  drawing = true;
  previous.x = mouseX;
  previous.y = mouseY;
  circles.push(new Path());
}

function mouseReleased() {
  drawing = false;
}

function Path() {
  this.particles = [];
  this.hue = random(50);
}

Path.prototype.add = function(position, force) {
  this.particles.push(new Particle(position, force, this.hue));
}

Path.prototype.update = function() {
  for (let i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
  }
}

Path.prototype.display = function() {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    if (this.particles[i].lifespan <= 0) {
      this.particles.splice(i, 1);
    } else {
      this.particles[i].display(this.particles[i+1]);
    }
  }

}


function Particle(position, force, hue) {
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(force.x, force.y);
  this.drag = 0.95;
  this.lifespan = 255;
  this.size = 5;
}

Particle.prototype.update = function() {
  this.position.add(this.velocity);
  this.velocity.mult(this.drag);
  this.lifespan = this.lifespan-1;
  this.size = this.size+0.05;
}

Particle.prototype.display = function(other) {
  noStroke();
  fill(255, this.lifespan*2);
  ellipse(this.position.x,this.position.y-(this.size*20), this.size, this.size);
}
