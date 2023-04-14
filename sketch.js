var path,redcar,yellowcar,greencar,bluecar,policecar;
var pathImg,redcarImg,greencarImg,bluecarImg,yellowcarImg,policecarImg;
var CarsDestroyed = 0;
var Gyellow,Gblue,Ggreen,policeGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("space.png");
  redcarImg = loadAnimation("spaceship.png");
  yellowcarImg = loadImage("asteroid.png");
  greenImg = loadImage("asteroid2.png");
  bluecarImg = loadImage("asteroid3.png");
  policecarImg = loadImage("spaceship2.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
redcar = createSprite(70,580,20,20);
redcar.addAnimation("redcar",redcarImg);
redcar.scale=0.3;
  
  
Gyellow=new Group();
Gblue=new Group();
Ggreen=new Group();
policeGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  redcar.x = World.mouseX;
  
  edges= createEdgeSprites();
  redcar.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createyellowcar();
    createbluecar();
    creategreencar();
    createpolicecar();

    if (Gyellow.isTouching(redcar)) {
      Gyellow.destroyEach();
      CarsDestroyed=CarsDestroyed+50;
    }
    else if (Ggreen.isTouching(redcar)) {
      Ggreen.destroyEach();
      CarsDestroyed=CarsDestroyed+100;
      
    }else if(Gblue.isTouching(redcar)) {
      Gblue.destroyEach();
      CarsDestroyed= CarsDestroyed + 150;
      
    }else{
      if(policeGroup.isTouching(redcar)) {
        gameState=END;
        
        
         redcar.addAnimation("redcar",endImg);
        

        redcar.x=200;
        redcar.y=300;
        redcar.scale=0.3;
        
         Ggreen.destroyEach;
         Gblue.destroyEach;
         Gyellow.destroyEach;
         policeGroup.destroyEach;

        
        Ggreen.setVelocityYEach(0);
        Gblue.setVelocityYEach(0);
        Gyellow.setVelocityYEach(0);
        policeGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Asteroids Destroyed: "+ CarsDestroyed,10,30);
  }

}

function createyellowcar() {
  if (World.frameCount % 200 == 0) {
  var yellowcar = createSprite(Math.round(random(50, 350),40, 10, 10));
  yellowcar.addImage(yellowcarImg);
  yellowcar.scale=0.3;
  yellowcar.velocityY = 3;
  yellowcar.lifetime = 150;
  Gyellow.add(yellowcar);
  }
}

function createbluecar() {
  if (World.frameCount % 320 == 0) {
  var bluecar = createSprite(Math.round(random(50, 350),40, 10, 10));
  bluecar.addImage(bluecarImg);
  bluecar.scale=0.3;
  bluecar.velocityY = 3;
  bluecar.lifetime = 150;
  Gblue.add(bluecar);
}
}

function creategreencar() {
  if (World.frameCount % 410 == 0) {
  var greencar = createSprite(Math.round(random(50, 350),40, 10, 10));
  greencar.addImage(greencarImg);
  greencar.scale=0.3;
  greencar.velocityY = 3;
  greencar.lifetime = 150;
  Ggreen.add(greencar);
  }
}

function createpolicecar(){
  if (World.frameCount % 530 == 0) {
  var policecar = createSprite(Math.round(random(50, 350),40, 10, 10));
  policecar.addImage(swordImg);
  policecar.scale=0.3;
  policecar.velocityY = 3;
  policecar.lifetime = 150;
  policeGroup.add(policecar);
  }
}
