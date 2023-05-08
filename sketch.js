var cloud, cloudImg;
var bird, birdImg;
var obstacle1, obstacle1Img, obstacleGroup,obstacle2;
var obstacle3, obstacle2Img, obstacle3Img;

//var gameState = "play";
//var gameOver, gameOverImg;

function preload(){
    createCanvas(1200,1200);
   cloudImg = loadImage("cloud.jpg");
   birdImg = loadImage("bird.png");
   obstacle1Img = loadImage("cone.png");
   obstacle2Img = loadImage("cone.png");
   obstacle3Img = loadImage("cone.png");
   gameOverImg = loadImage("gameOver.png");
  
}

function setup() {
    cloud = createSprite(600,600)
   cloud.addImage("cloud", cloudImg);
    bird = createSprite(20,100);
    bird.addImage("bird",birdImg)
    bird.scale = 0.1;
    obstacle1 = createSprite(450,Math.round(random(20,350)));
    obstacle1.addImage("ob1",obstacle1Img);
    obstacle1.scale = 0.2;
    obstacle2 = createSprite(450,Math.round(random(20,350)));
    obstacle2.addImage("ob2",obstacle2Img);
    obstacle2.scale = 0.2;
    obstacle3 = createSprite(450,Math.round(random(20,350)));
    obstacle3.addImage("ob3",obstacle3Img);
    obstacle3.scale = 0.2;
   obstacleGroup = createGroup();
   obstacleGroup.add(obstacle1);
   obstacleGroup.add(obstacle2)
   obstacleGroup.add(obstacle3)
   gameOver = createSprite(200,200);
   gameOver.addImage("gameover",gameOverImg);
   gameOver.visible = false;
}

function draw() {
  
         drawSprites();
         textSize(20)
         text("Dodge the Obstacles!",100,20);
         text("USE UP AND DOWN ARROW!",80,380);
      
    
}

