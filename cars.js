let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 92,150, 210, 270, 318];
let veloCars = [2, 3, 5, 7, 2.2, 1.9];
let widthCars = 50
let heightCars = 45 

function showCar(){
  for(let i = 0; i < carImages.length ; i++){
  image(carImages[i], xCars[i], yCars[i], widthCars ,heightCars);}
 
}

function moveCar(){
  for(let i = 0; i < carImages.length; i++){
  xCars[i] -= veloCars[i] }
  
}
function resetCars(){
  for(i = 0; i < carImages.length; i++){
  if(crossLinmit(xCars[i])){
    xCars[i]  = 600}
  }
}

function crossLinmit(xCar){
  return xCar + 50 < 0
}
