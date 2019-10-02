let mover = [];
let amount = 50;
let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  for(let i = 0; i < amount; i++) {
    mover[i] = new Mover();
  }
}

function draw() {
  background(55,70);

  for(let i = 0; i < amount; i++) {
    mover[i].prison();
    mover[i].update();
    mover[i].render();
  }
}
