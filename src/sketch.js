export default function sketch(p) {

  p.particles = [];
  p.currentParticles = [];
  p.pos = 0;

  p.setup = function() {
    p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.canvas.parent('canvasContainer');
	  p.background(253, 190, 0);
    p.stroke(20, 4);
    p.strokeWeight(1);
    for(p.i = 0; p.i < p.windowWidth / 40; p.i++) {
      p.particles.push(new Particle(p.random(p.windowWidth), p.random(p.windowHeight)));
    }
    console.log(p.particles);
  };


  p.draw = function() {
    p.backgroundR = p.map(p.pos, 0, 370, 253, 0);
    p.backgroundG = p.map(p.pos, 0, 370, 190, 0);
    p.background(p.backgroundR, p.backgroundG, 0);
    // p.fill(0);
    for(p.i = 0; p.i < p.particles.length; p.i++) {
      if (p.particles[p.i].distance < 200) {
        p.particles[p.i].attract(p.mouseX, p.mouseY);
      } else {
        p.particles[p.i].attract(p.particles[p.i].x, p.particles[p.i].y);
      }
      p.particles[p.i].update(p.mouseX, p.mouseY, p.particles[p.i]);
    }
    p.currentParticles = [];

    // p.noLoop();
  };

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.position = p.createVector(x, y);
      this.velocity = p.createVector();
      this.acceleration = p.createVector();

    }

    update(mx, my, triggeredP) {
      //MAP FILL TO DIST
      this.distance = p.dist(mx, my, this.position.x, this.position.y);
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);

      if (this.distance < 200) {
        p.fill(p.map(p.pos, 0, 370, 0, 253), p.map(p.pos, 0, 370, 0, 190), 0);
        p.ellipse(this.position.x, this.position.y, 2, 2);
        p.currentParticles.push(triggeredP);
        p.beginShape(p.TRIANGLE_STRIP);
        p.fill(p.map(p.pos, 0, 370, 0, 253), p.map(p.pos, 0, 370, 0, 190), 0, 10);
        for(p.j = 0; p.j < p.currentParticles.length; p.j ++) {
          p.vertex(p.currentParticles[p.j].position.x, p.currentParticles[p.j].position.y);
          p.vertex(mx, my);
        }
        p.endShape(p.CLOSED);
      }
    }

    attract(targetX, targetY) {
      // this.target = p.createVector(targetX, targetY);
      this.dx = targetX - this.position.x;
      this.dy = targetY - this.position.y;
      this.force = p.createVector(this.dx, this.dy);
      this.dSq = this.force.magSq();
      this.dSq = p.constrain(this.dSq, 500, 1000);
      this.g = 6.7;
      this.strength = this.g / this.dSq;
      // this.strength = 1;
      this.force.setMag(this.strength);
      this.acceleration = this.force;
    }

  }

  p.mouseWheel = function(event) {
    p.pos += event.delta;
    p.pos = p.constrain(p.pos, 0, 570);
    // console.log(p.pos);
  };

  p.windowResized = function() {
    p.particles = [];
    p.currentParticles = [];
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    for(p.i = 0; p.i < p.windowWidth / 40; p.i++) {
      p.particles.push(new Particle(p.random(p.windowWidth), p.random(p.windowHeight)));
    }
    console.log(p.particles);
  };
};
