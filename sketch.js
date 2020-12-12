
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(1300,500,50,60)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display()
  
  drawSprites();
 
}



