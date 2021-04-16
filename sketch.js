
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg
function preload()
{
	boyImg=loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    stone1=new stone(110,500,40)
    ground1=new ground(400,650,900,20)
	//boy = Bodies.rectangle(150,600,100,150);
  mango1=new mango(530,200,50)
	mango2=new mango(710,300,50)
	mango3=new mango(570,150,50)
	mango4=new mango(570,220,50)
	mango5=new mango(680,210,50)
  mango6=new mango(550,270,50)
  mango7=new mango(680,140,50)
  tree1=new tree(620,100,400,20)
  //600,350,400,600
	sling = new launcher(stone1.body,{x:83,y:515});

//	World.add(world,boy);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree1.display();
  ground1.display();
  imageMode(CENTER)
  image(boyImg ,150,580,200,300);
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
 
  sling.display();
  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)
  detectCollision(stone1,mango6)
  detectCollision(stone1,mango7)

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	sling.fly();
  }
  function keyPressed(){
	if(keyCode === 32){
		
	  Matter.Body.setPosition(stone1.body,{x:100,y:200});
	   sling.attach(stone1.body);
	}
  }

  function detectCollision(lstone1,lmango){
    lmangobodyposition=lmango.body.position;
    lstone1bodyposition=lstone1.body.position;

    var distance=dist(lstone1bodyposition.x,lstone1bodyposition.y,lmangobodyposition.x,lmangobodyposition.y)
    if(distance<=lmango.r+lstone1.r){
      Matter.body.setStatic(lmango.body,false)
    }
  }


