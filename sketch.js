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
    window.addEventListener("deviceorientation", handleOrientation, true);
  }
}

function draw() {
  background(255);
  imageMode(CENTER);
  translate(width / 2, height / 2);

  if (usingSensor) {
    rotateX(radians(rotationY));
    rotateY(radians(rotationX));
  } else {
    rotateX(radians(mouseY));
    rotateY(radians(mouseX));
  }

  image(front, 0, 0);
  translate(0, 0, 1);
  rotateY(PI);
  image(back, 0, 0);
}

// Phone orientation event listener and variables
let rotationX = 0;
let rotationY = 0;

function handleOrientation(event) {
  rotationX = event.alpha;
  rotationY = event.beta;
}