var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starnight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
  var options=
  {
    restitution:0.5,
    isStatic:true
  }
	starBody = Bodies.circle(650,30,5,options);
	World.add(world, starBody);
}

function draw() 
{
  background(bgImg);
  Engine.update(engine);
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();
}

function keyPressed()
{
  //Write code to move the fairy left or right


  //Write code to fall star
  
}

