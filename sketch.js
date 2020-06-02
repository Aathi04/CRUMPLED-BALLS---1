const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	middleDustbin = new Dustbin(750,380,250,20);
	leftDustbin = new Dustbin(870,330,20,120);
	rightDustbin = new Dustbin(620,330,20,120);
	paper = new Paper(200,390);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  middleDustbin.display();
  leftDustbin.display();
  rightDustbin.display(); 
  paper.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});

	}
}



