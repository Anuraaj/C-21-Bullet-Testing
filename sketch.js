var wall, bullet, display, body, head, handR, handL, legR,legL, blood;

var speed, weight, thickness, just, gun, gunBottom, shot, gunInsert, trigger;

function setup() 
{
  createCanvas(1600, 400);
  bullet = createSprite(100, 250, 25, 5);
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(1000, 300, 15, 300);
  wall.shapeColor = color(80,80,80);
  
  gun = createSprite(100,250,60,10);
  shot = createSprite(90,265,10,1);
  gunInsert = createSprite(95,260,1,10);
  gunBottom = createSprite(80,260,10,35);
  trigger = createSprite(88,258,1,6);
  gunBottom.shapeColor = ("white");
  gun.shapeColor = ("white");
  gunInsert.shapeColor = ("white");
  shot.shapeColor = ("white");
  trigger.shapeColor = ("white");
  
  body = createSprite(1200,250,40,80);
  head = createSprite(1200,195,20,20);
  handL = createSprite(1230,245,10,70);
  handR = createSprite(1170,245,10,70);
  legL = createSprite( 1215, 330,10,80);
  legR = createSprite( 1185, 330,10,80);
  
  

  display = createSprite(800, 50, 200, 50);
  speed = random(223, 321); 
  weight = random(30, 52);
  thickness = random(22,83);
  just = random(-5, -10);

  //bullet.velocityX = speed;
}

function draw()
 {
  background(0, 0, 0);  
  bullet.depth = handR.depth +10;
  bullet.depth = handL.depth +10;
  bullet.depth = body.depth +10;
  bullet.depth = legL.depth +10;
  bullet.depth = legR.depth +10;
  

  fill("white");
  textSize(18);
  text("Display",display.x -30, 20);
  
  textSize(30);
  text("Press Space to Fire", 300,100)

    if(keyDown("space"))
    {
      bullet.velocityX = speed;
    }
  
    /*if(keyDown("r"))
    {
      bullet.x = gun.x;
      speed = random(223, 321);
    } */

    if(bullet.x > 1000)
    {
      display.shapeColor = ("red");
    }
    if(bullet.x < 1000)
    {
      display.shapeColor = ("grey");
    }
    if(wall.x - bullet.x < (wall.width +bullet.width)/2)
    {
      
      //speed = random(223, 321);
      
      bullet.velocityX = 0;
      var damage = 0.5* weight * speed *speed/(thickness*thickness*thickness);
      
      if(damage > 10)
      {
        display.shapeColor = color(255, 0, 0);
        bullet.x = 1170;
        
        blood = createSprite(bullet.x +15, bullet.y,10,15);
        blood.shapeColor = "red";
        textSize(20);
        fill("red");
        text("Fail", 790, 95 )
        text ("Ouch",1180,100)
      }
      
      if(damage < 10)
      {
      display.shapeColor = color(0, 255, 0);
      
      bullet.x = 990;
      fill("green");
      textSize(20);
      text("Pass", 785, 95)
      }
      
    }
  

  drawSprites();
}