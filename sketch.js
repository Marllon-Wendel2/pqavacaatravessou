
function setup() {
  createCanvas(500, 400);
  soundTrilha.loop()
}

function draw() {
  background(roadImage);
  showCar();
  showCown();
  moveCar();
  moveCown();
  resetCars();
  checkHit();
  pontos();
  gol();
  
}



