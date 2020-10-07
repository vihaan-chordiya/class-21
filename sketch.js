var fixedRect,movingRect
var fixedRect1
var rect1, rect2
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80)
  fixedRect.shapeColor = "green"
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor = "green"
  fixedRect1=createSprite(300,600,75,25)
  fixedRect1.shapeColor = "pink"
  rect1=createSprite(400,100,50,20)
  rect1.shapeColor="yellow"
  rect2=createSprite(400,300,50,20)
  rect2.shapeColor="purple"

  rect1.velocityY = 3
  rect2.velocityY = -3
  
}

function draw() {
  background("lightblue");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(isTouching(movingRect,fixedRect1)){//function call
    fixedRect1.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
  else{
    fixedRect1.shapeColor = "pink"
    movingRect.shapeColor = "green"
  }

  bouncing(rect1,rect2);

  drawSprites();
}
