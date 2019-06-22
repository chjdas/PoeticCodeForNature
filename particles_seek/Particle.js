// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

  constructor() {
    this.acc = createVector(0, 0.05);
    this.vel = createVector(random(-1, 1), random(-5,-1));
    this.pos = createVector(width/2, 300);
    this.alpha = 255;
    this.color = color(255);
    this.size = random(5,10);
  }

  run() {
    this.update();
    this.display();
    this.colorChange();
  }

  // Method to update position
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    //this.pos = createVector(width/2, 300);
    this.alpha -= 5;
  }

  colorChange() {
    let mousePos = createVector(mouseX, mouseY);
    let force = p5.Vector.sub(mousePos, this.pos);
    let distance = force.mag();
    //console.log(distance);
    stroke(255);
    noCursor();
    line(mouseX-5,mouseY,mouseX+5,mouseY);
    line(mouseX,mouseY-5,mouseX,mouseY+5);

    fill(51);
    if (distance < 10) {
      this.color = random(66, 245);
    }
  }

  // Method to display
  display() {
    noStroke();
    strokeWeight(2);
    fill(255, this.color, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }


  // Is the particle still useful?
  isDead() {
    if (this.alpha < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
