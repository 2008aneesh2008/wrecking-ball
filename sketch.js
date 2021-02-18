
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var box


function setup() {
	createCanvas(3000, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//roofObject = new roof(width/2,height/4,width/7,20);

	bobDiameter = 80;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1 = new bob(startBobPositionX-bobDiameter*3,startBobPositionY,bobDiameter);
//	bobObject2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
//bobObject3 = new bob(startBobPositionX,startBobPositionY,bobDiameter);
//	bobObject4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
//	bobObject5 = new bob(startBobPositionX+bobDiameter*3,startBobPositionY,bobDiameter);
	
	//Create a Ground
	




	rope1 = new rope(bobObject1.body,{x:450,y:50})

//	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
//	rope3 = new rope(bobObject3.body,roofObject.body,0, 0)
//	rope4 = new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
//	rope5 = new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
	box1 = new Box(900, 100, 70, 70);
	box2 = new Box(900, 100, 70, 70);
	box3 = new Box(900, 100, 70, 70);
	box4 = new Box(900, 100, 70, 70);
	box5 = new Box(900, 100, 70, 70);
	box6 = new Box(900, 100, 70, 70);
	box7 = new Box(800, 100, 70, 70);
	box8 = new Box(800, 100, 70, 70);
	box9 = new Box(800, 100, 70, 70);
	box10 = new Box(800, 100, 70, 70);
	box11 = new Box(800, 100, 70, 70);
	box12 = new Box(800, 100, 70, 70);
	box13 = new Box(700, 100, 70, 70);
	box14 = new Box(700, 100, 70, 70);
	box15 = new Box(700, 100, 70, 70);
	box16 = new Box(700, 100, 70, 70);
	box17 = new Box(700, 100, 70, 70);
	box18 = new Box(700, 100, 70, 70);
	box19 = new Box(700, 100, 70, 70);
	box20 = new Box(700, 100, 70, 70);
	
  
	ground = new Ground(600, 600, 1200, 20);
}


function draw() {
  rectMode(CENTER);
  background(230);
  //roofObject.display();

  rope1.display()
  
  //rope2.display()

  //rope3.display()

  //rope4.display()

  //rope5.display()	






  bobObject1.display();
  //bobObject2.display();
  //bobObject3.display();
  //bobObject4.display();
  //bobObject5.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  
	ground.display()
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-45,y:-45});

  	}

}

