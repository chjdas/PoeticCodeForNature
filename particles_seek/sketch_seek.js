// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// 참고가 되는 책 내용은 아래와 같습니다.
// https://natureofcode.com/book/chapter-4-particle-systems/

// let trigger2 = 50;
let particleSystem;

function setup() {
  createCanvas(640, 360);
  particleSystem = new ParticleSystem();
}

function draw() {
  background(51);

  particleSystem.addParticle();
  particleSystem.run();
}
