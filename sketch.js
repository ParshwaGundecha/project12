var garden,gardenImg;
var rabbit,rabbitImg;
var apples,appleImg;
var leaves,leavesImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  orangeleavesImg = loadImage("orangeLeaf.png");
  redleavesImg = loadImage("redimage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(210,300,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;

}


function draw() {
  background("white");
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();

drawSprites();
}

function createApples(){
  if(frameCount%80==0){
  apples=createSprite(random(50,350),40,10,10)
  apples.addImage(appleImg);
  apples.scale=0.09;
  apples.velocityY=3;
  apples.lifetime=200
}
}

function createLeaves(){
  var select_leaf=Math.round(random(1,2,3))
  if(frameCount%180==0){
  leaves=createSprite(random(50,350),40,10,10);
  if(select_leaf==1){
  leaves.addImage(leavesImg);
}

  if(select_leaf==2){
    leaves.addImage(orangeleavesImg);
  }

  if(select_leaf==3){
    leaves.addImage(redleavesImg);
  }

  leaves.scale=0.09;
  leaves.velocityY=3;
  leaves.lifetime=200;
  }
}