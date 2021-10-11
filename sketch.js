var bg,bgImg;
var boy,boyImg;
var girl,girlImg;
var apple,appleImg;
var book,bookImg;
var broken_computer,broken_computerImg;
var ground,groundImg;
var broken_pencil,broken_pencilImg;
var broken_sofa, broken_sofaImg;
var capsicum,capsicumImg;
var carrot,carrotImg;
var cloth,clothImg;
var reset_button,reset_buttonImg;
var game_over,game_overImg;
var play=1
var end=0
var gamestate=play
var score=0


function preload(){

    bgImg=loadImage("background.png");
    boyImg=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png")

    groundImg=loadImage("ground 1.jpg")
    girlImg=loadAnimation("girl1.png","girl2.png","girl4.png","girl5.png","girl6.png","girl7.png","girl8.png","girl9.png","girl10.png")
 

    appleImg=loadImage("apple.png")
    bookImg=loadImage("book.png")
    broken_computerImg=loadImage("broken_computer.png")
    broken_pencilImg=loadImage("broken_pencil.png")
    broken_sofaImg=loadImage("capsicum.png")
    capsicumImg=loadImage("capsicum.png")
    carrotImg=loadImage("carrot.png")
    clothImg=loadImage("cloth.png")

    reset_buttonImg=loadImage("reset_button.png")

    game_overImg=loadImage("game_over.png")

}




 function setup()
 {
    createCanvas(400,400)
   
    bg=createSprite(165,200);
    bg.addImage(bgImg);
    bg.scale=1.5
    
    ground=createSprite(200,350);
    ground.addImage(groundImg);
    
    
   
    boy=createSprite(80,220,50,50);
    boy.addAnimation("boy_running",boyImg);

restart=createSprite(150,150);
restart.addImage(reset_buttonImg);
restart.scale=0.5;

gameOver=createSprite(150,200);
gameOver.addImage(game_overImg);
gameOver.scale=0.3;

gameOver.visible=false;
restart.visible=false;

    topObstaclesGroup = new Group();
    bottomObstaclesGroup = new Group();




 }




 function draw(){

background("black")
text("score"+score,70,170)
if(gamestate===play)
{



//spawnObstaclesBottom();
spawnObstaclesTop();
spawnObstaclesTop2();

if(keyDown("Right_Arrow")) {
  boy.x = boy.x+3 ;
 // jumpSound.play();
}
if(keyDown("Left_Arrow")) {
  boy.x = boy.x-3 ;
}
if(topObstaclesGroup.isTouching(ground))
{
topObstaclesGroup.destroyEach()
  
}
if(topObstaclesGroup.isTouching(boy)){
  socre=score+1;
}
}



else if(gamestate===end){


if(topObstaclesGroup2.isTouching(boy))
{
  gameOver.visible=true;
  restart.visible=true;
}

if(mousePressedOver(restart)){
  reset()
}

}

drawSprites();

 }



 function reset()
{
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  topObstaclesGroup.destroyEach();
  topObstaclesGroup2.destroyEach();

  score=0;
}



 function spawnObstaclesTop() 
{
  if(World.frameCount % 60 === 0) {
    obstacleTop = createSprite(200,50,40,50);

//obstacleTop.addImage(obsTop1);

obstacleTop.scale = 0.2;
obstacleTop.velocityY = 6;

//random y positions for top obstacles
obstacleTop.x = Math.round(random(40,350));

//generate random top obstacles
var rand = Math.round(random(1,5));
switch(rand) {
  case 1: obstacleTop.addImage(appleImg);
          break;
  

  case 2: obstacleTop.addImage(capsicumImg);
          break;

case 3: obstacleTop.addmage(carrotImg);
              break;

 case 4: obstacleTop.addImage(clothImg);
              break;
 case 5: obstacleTop.addImage(bookImg);
              break;
     
    

  default: break;
}

 //assign lifetime to the variable
obstacleTop.lifetime = 100;


topObstaclesGroup.add(obstacleTop);

  }
}

function spawnObstaclesTop2() 
{
  if(World.frameCount % 60 === 0) {
    obstacleTop = createSprite(200,50,40,50);

//obstacleTop.addImage(obsTop1);

obstacleTop.scale = 0.2;
obstacleTop.velocityY = 6;

//random y positions for top obstacles
obstacleTop.x = Math.round(random(40,350));

//generate random top obstacles
var rand = Math.round(random(1,3));
switch(rand) {
 
  case 1: obstacleTop.addImage(broken_sofaImg);
          break;
  
case 2: obstacleTop.addImage(broken_pencilImg);
          break;

case 3: obstacleTop.addImage(broken_computerImg);
              break;
 
     
    

  default: break;
}

 //assign lifetime to the variable
obstacleTop.lifetime = 100;


topObstaclesGroup.add(obstacleTop);

  }
}



 

function Score()
{
         if(balloon.isTouching(barGroup))
         {
           score = score + 1;
         }
        textFont("algerian");
        textSize(30);
        fill("yellow");
        text("Score: "+ score, 250, 50);
       
  
}
