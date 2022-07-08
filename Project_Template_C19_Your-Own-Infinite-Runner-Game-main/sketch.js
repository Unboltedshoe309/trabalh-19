var sonic
var eggman
var infinit
var gameover
var metalsonic
var pathImg

var gameoverAud
var gameoverImag

var END =0
var PLAY =1
var gameState  =PLAY 
var distance=0;
var gameOver, restart;

function preload(){
pathImg = loadImage("Road.png");

sonic= loadImage("sonic running.png")
eggman= loadImage("sonic running.png")
infinit= loadImage("sonic running.png")
metalsonic=loadImage("metal sonic.png")

gameoverImag=loadImage("gameOver.png")
gameoverAud=loadSound("sonic game over.mp3")


}

function setup() {
createCanvas(1200,300);
path=createSprite(100,150);
path. addimage(pathImg);
path.velocityX = -5;

sonic = createSprite(70,150);
sonic.scale=0.07
sonic.setCollider("rectangle",0,0,40,40,50);

gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false; 

}

function draw() {
    background(0);
  
    drawSprites();
    textSize(20);
    fill(255);
    text("Distance: "+ distance,900,30);
    
    if(gameState===PLAY){
      
     distance = distance + Math.round(getFrameRate()/50);
     path.velocityX = -(6 + 2*distance/150);
    
     sonic.y = World.mouseY;
    
     edges= createEdgeSprites();
     sonic .collide(edges);
    
    //code to reset the background
    if(path.x < 0 ){
      path.x = width/2;
    }
    
    
    var select_oppPlayer = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer == 1) {
      pinkCyclists();
    } else if (select_oppPlayer == 2) {
      yellowCyclists();
    } else {
      redCyclists();
    }
    }
  
   if(eggman.isTouching(mainCyclist)){
     gameState = END;
     gameoverAud.play()
    eggman.velocityY = 0;

    }
    
    if(infinit.isTouching(mainCyclist)){
      gameState = END;
      gameoverAud.play()
      infinit.velocityY = 0;
      
    }
    
    if(metalsonic.isTouching(mainCyclist)){
      gameState = END;
      gameoverAud.play()
      metalsonic.velocityY = 0;
 
    }
}
  }  if(gameState===END){
    gameOver.visible = true;
  
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    path.velocityX = 0;
    sonic.velocityY = 0;
    sonic.addAnimation("SahilRunning",mainRacerImg2);
  
    eggman.setVelocityXEach(0);
    eggman.setLifetimeEach(-1);
  
    metalsonic.setVelocityXEach(0);
    metalsonic.setLifetimeEach(-1);
  
    infinit.setVelocityXEach(0);
    infinit.setLifetimeEach(-1);

    if(keyDown("UP_ARROW")) {
        reset();
      }
 }
 {}
 
 function pinkCyclists(){
         player1 =createSprite(1100,Math.round(random(50, 250)));
         player1.scale =0.06;
         player1.velocityX = -(6 + 2*distance/150);
         player1.addAnimation("opponentPlayer1",oppPink1Img);
         player1.setLifetime=170;
         pinkCG.add(player1);
 }
 
 function Eggamn(){
         eggman=createSprite(1100,Math.round(random(50, 250)));
          eggman.scale =0.06;
         eggman.velocityX = -(6 + 2*distance/150);
         eggman.addAnimation("opponentPlayer2",oppYellow1Img);
         eggman.setLifetime=170;
         eggman.add(player2);
 }
 
 function(){
         player3 =createSprite(1100,Math.round(random(50, 250)));
         player3.scale =0.06;
         player3.velocityX = -(6 + 2*distance/150);
         player3.addAnimation("opponentPlayer3",oppRed1Img);
         player3.setLifetime=170;
         redCG.add(player3);



}







 