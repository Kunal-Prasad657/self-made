var player
function preload(){
 bg=loadImage("New folder/bg2.png");
 bg2=loadImage("New folder/bg1.jpg");
}
function setup(){
createCanvas(800,800);
player=new Player();
npc=new NPC();
}
function draw (){
    background(bg);
    changeBG();
    player.display();
    move();
    npc.display();
    drawSprites();
}
function changeBG (){
    if (keyDown("e")){
      background(bg2)   
    }
   
}
function  move() {
    if(keyDown("left")){
        player.velocityX=-1

    }
    if(keyDown("right")){
        player.x=player.x + 1;

    }
    if(keyDown("up")){
        player.y=player.y - 1;

    }
    if(keyDown("down")){
        player.y=player.y +1;

    }

    
}
function collides(){
    if(player.isTouching(house)){
        player.velocityX=0;
        player.velocityY=0;
    }
}
