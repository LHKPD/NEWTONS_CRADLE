
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,250,230,20);
	
	//Create the Bodies Here.
	bob1 = new BOB(320,575,40);
	bob2 = new BOB(360,575,40);
	bob3 = new BOB(400,575,40);
	bob4 = new BOB(440,575,40);
	bob5 = new BOB(480,575,40);
	Engine.run(engine);

	
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();


}



