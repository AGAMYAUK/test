var sea;
var ship;
var  seaImg,ship1Img;


function preload(){
 seaImg = loadImage("sea.png");
 ship1Img=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}





function setup(){
  createCanvas(600,300);
  ship = createSprite(200,200);
  ship.addImage("ship",ship1Img);

  sea = createSprite(10,200,600,300);
  as 


}

function draw() {
  background("white");
 
}