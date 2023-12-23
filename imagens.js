//images
let roadImage;
let cownImage;
let carImage;
let carImage2;
let carImage3;
let soundTrilha;
let soundPoint;
let soundLose;

function preload(){
  roadImage = loadImage("image/estrada.png");
  cownImage = loadImage("image/ator-1.png");
  carImage = loadImage("image/carro-1.png");
  carImage2 = loadImage("image/carro-2.png");
  carImage3 = loadImage("image/carro-3.png");
  soundTrilha = loadSound("sound/trilha.mp3")
  soundPoint = loadSound("sound/pontos.wav")
  soundLose = loadSound("sound/colidiu.mp3")
  
  carImages = [carImage, carImage2, carImage3, carImage2, carImage, carImage3]
}