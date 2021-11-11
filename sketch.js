

const PLAY = -1;
const END = 1;
const START = 0
var gameState = START;


var jack,jack2;
var platform,platform2;
var jack_image, platform_image;
var platform1,platform2,platform3,platform4,platform5,platform6;;


function preload(){
  jack_image=loadImage("images/jack2.png");
platform1 = loadImage("images/platform1.png");
platform2 = loadImage("images/platform2.png");
platform3 = loadImage("images/platform3.png");
platform4 = loadImage("images/platform4.png");
platform5 = loadImage("images/platform5.png");
platform6 = loadImage("images/platform6.png");
bg = loadImage('images/bg.png');
}

function setup() {
  createCanvas(500, 500);
 
  player = createSprite(250,300,20,50);
  player.addImage("player",jack_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform3)
  platform.scale=0.1;
 platformGroups = new Group(); 
}

function draw() {
  
  background(bg);

  if(gameState==START){
    fill(255);
    textSize(16);
    text("Press UP to start and make jack jump",95,80);
    text("Press right and left arrow to make jack go right and left",50,100);
  spawnplatforms();
    if(keyDown("up")) {
      platform.y = 700;
    player.velocityY = -16;  
   
   
    gameState = PLAY;
  }
    
  }
  if(gameState == PLAY){
    spawnplatforms();
    
    player.collide(platform);
    
  if(platformGroups.isTouching(player) && player.velocityY>5) {
      player.velocityY = -16;  
    }

    // //jump when the player touches the platform
    
   
    if(keyDown("left"))
      {
        player.x-=7
      }
    
    if(keyDown("right"))
      {
        player.x+=7
      }
    //add gravity
    player.velocityY = player.velocityY + 0.8;
    
    }
   
  drawSprites();
  
  
}
function spawnplatforms() {

  if(frameCount % 40 == 0) {
    xx=Math.round(random(50,450))
    var platform = createSprite(xx,-10,150,20);
    platform.velocityY = 4;

    var r = Math.round(random(1,5))
    switch(r){
      case 1 : platform.addImage(platform1);
      break;
      case 2 : platform.addImage(platform2);
      break;
      case 3 : platform.addImage(platform3);
      break;
      case 4 : platform.addImage(platform4);
      break;
      case 5 : platform.addImage(platform5);
      break;
      default: break;
    }
 
    //assign scale and lifetime to the platform           
    platform.scale = 0.1;

    platform.lifetime = 200;
    
    //add each platform to the group
    platformGroups.add(platform);
   
}

}
