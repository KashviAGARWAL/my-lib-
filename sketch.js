
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car,wall
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  car= createSprite(100, 500,100,30);
  car.velocityX=5;
  car.shapeColor="blue"

  wall= createSprite(800, 500,20,100);
  wall.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 if(isTouching(car,wall)){
   car.shapeColor="green"
   wall.shapeColor="green"
 }
 else{
  wall.shapeColor="yellow"
  car.shapeColor="blue"
 }

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




