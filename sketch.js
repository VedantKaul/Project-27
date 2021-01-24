
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob_1, bob_2, bob_3, bob_4, bob_5;
var rope, rope_2, rope_3, rope_4, rope_5;
var engine, world;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  bob_1 = new Bob(277.5, 420);
  bob_2 = new Bob(320, 420);
  bob_3 = new Bob(362.5, 420);
  bob_4 = new Bob(405, 420);
  bob_5 = new Bob(447.5, 420);

  rope = new Rope(bob_1.body, {x: 277.5, y:300});
  rope_2 = new Rope(bob_2.body, {x: 320, y:300});
  rope_3 = new Rope(bob_3.body, {x: 362.5, y:300});
  rope_4 = new Rope(bob_4.body, {x: 405, y:300});
  rope_5 = new Rope(bob_5.body, {x: 447.5, y:300});

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  bob_1.display();
  bob_2.display();
  bob_3.display();
  bob_4.display();
  bob_5.display();

  rope.display();
  rope_2.display();
  rope_3.display();
  rope_4.display();
  rope_5.display();

  keyPressed();
  keyPressed_2();
  drawSprites();
}

function keyPressed(){
  if(keyDown("LEFT_ARROW")){
  Body.applyForce(bob_1.body, bob_1.body.position,{x: 85, y:45});
  }
}

function keyPressed_2(){
  if(keyDown("RIGHT_ARROW")){
  Body.applyForce(bob_5.body, bob_5.body.position,{x: -125, y:-45});
  }
}