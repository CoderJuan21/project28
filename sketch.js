
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,350);
	tree = new Tree(600,300);

	

	mango1 = new Mango(560, 240);
	mango2 = new Mango(530, 250);
	mango3 = new Mango(530, 220);
	mango4 = new Mango(620, 290);
	mango5 = new Mango(570, 200);

	slingshot = new SlingShot(stone.body,{x:100, y:300});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
  detectCollision();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
	}
	
	function mouseReleased(){
		slingshot.fly();
	}

 function detectCollision(Lstone, Lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist( stoneBodyPosition.x , stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPositon.y )
	if(distance<-lmango.r + lstone.r)
{
	Matter.Body.setStatic(lmango.body, false);
}
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}



