let front;
let back;
let usingSensor = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  front = loadImage("veta.jpg");
  back = loadImage("back.jpg");

  // Check if running on a mobile device
  if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
    usingSensor = true;
    // Set fullscreen on mobile devices
    let canvas = document.querySelector('canvas');
    canvas.requestFullscreen();
  }
}

function draw() {
  background(0);
  imageMode(CENTER);
  rotateY(QUARTER_PI);

  if (usingSensor) {
    rotateX(radians(touchRotationY));
    rotateY(radians(touchRotationX));
  } else {
    rotateX(radians(mouseY));
    rotateY(radians(mouseX));
  }

  image(front, 0, 0);
  translate(0, 0, 1);
  image(back, 0, 0);
}

// Phone orientation event listener and variables
let touchRotationX = 0;
let touchRotationY = 0;
let touchStartX = 0;
let touchStartY = 0;

function touchStarted() {
  touchStartX = touches[0].x;
  touchStartY = touches[0].y;
}

function touchMoved() {
  const dx = touches[0].x - touchStartX;
  const dy = touches[0].y - touchStartY;
  touchRotationX = map(dx, 0, width/3, 0, 360);
  touchRotationY = map(dy, 0, height/3, 0, 360);
  touchStartX = touches[0].x;
  touchStartY = touches[0].y;
  return false; // Prevent default touch behavior
}