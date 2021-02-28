
var ground
you.createSprite(50,300,20,20);


createSprite(200,390,400,5);
ground.scale=2;

function preload(){

}

background("white");
  
  jump();
  duck();
  createGravity();
  you.collide(ground);
  drawSprites(); 

function createGravity(){
    you.velocityY = you.velocityY + 0.8;
    
}    
function jump() {
if(keyDown("up")&&(you.y>338)){
   you.velocityY = -12 ;
  }
  if(keyWentDown("up")&&(you.y>338)){
   you.setAnimation("you_jump");
  }
  if(keyWentUp("up")){
    you.setAnimation("you");
  }  
}
function duck() {
if(keyDown("down")&&(you.y<338)){
   you.velocityY = +12 ;
  }
  if(keyWentDown("down")){
   you.setAnimation("you_duck");
  }
  if(keyWentUp("down")){
    you.setAnimation("you");
  }  
}