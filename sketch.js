var iss, spacecraft;
var bg, issImg, spacecraftImg;
var docked = false;

function preload(){

  bg = loadImage("space.jpg");
  
  issImg = loadImage("iss.png");

  spacecraftImg = loadImage("spacecraft1.png");
  spacecraftImg1 = loadImage("spacecraft2.png");
  spacecraftImg2 = loadImage("spacecraft3.png");
  spacecraftImg3 = loadImage("spacecraft4.png");
}

function setup() {

  createCanvas(800,400);

 spacecraft = createSprite(285,240);
 spacecraft.addImage("spacecraft",spacecraftImg);
 spacecraft.scale = 0.15;

 iss = createSprite(330,130);
 iss.addImage(issImg);
 iss.scale = 0.25;
}



function draw() {
  background(bg);
  

  spacecraft.addImage(spacecraftImg);
  if(!docked){
    spacecraft.x = spacecraft.x + random(-1,1);
  
    if(keyDown('UP ARROW')){
    spacecraft.y = spacecraft.y-2;
    }

  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage("spacecraft",spacecraftImg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage("spacecraft",spacecraftImg1);
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage("spacecraft",spacecraftImg3);
  spacecraft.x = spacecraft.x - 1;
}
  }



  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    docked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }


  drawSprites();
}