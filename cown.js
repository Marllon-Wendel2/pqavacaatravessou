let xCown = 100;
let yCown = 388;
let hit = false;
let meusPontos = 0

function showCown(){
  image(cownImage, xCown, yCown, 30, 30)
}

function moveCown(){
  if(keyIsDown(UP_ARROW)){
    yCown -= 2
  }
  if(keyIsDown(DOWN_ARROW)){
    yCown+= 2}
  if(keyIsDown(LEFT_ARROW)){
    xCown -= 2}
  if(keyIsDown(RIGHT_ARROW)){
    xCown +=2}
}

function checkHit(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
 for (let i = 0; i < carImages.length; i++) {
   hit = collideRectCircle (xCars[i], yCars[i], widthCars, heightCars, xCown, yCown, 10)
   if(hit){
     carHit()
     soundLose.play()
     meusPontos = meusPontos -1
   }
 }
}

function carHit(){
  xCown = 100
  yCown = 388
}

function pontos(){
  textSize(20)
  textAlign(CENTER)
  fill(0, 255, 255)
  text(meusPontos, width / 5, 25)
}

function gol(){
  if(yCown < 15){
    meusPontos++
    soundPoint.play()
    carHit()
    
  }
}
