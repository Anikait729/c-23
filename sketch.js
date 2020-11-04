const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;
var box1, box2;


function setup() {
createCanvas(400, 400);
engine = Engine.create();
world = engine.world;

box1 = new Box(200, 300, 50, 50);
box2 = new Box(185, 100, 50, 70);
ground = new Ground(200, 390, 400, 15);
}

function draw() {
 background(220);
 Engine.update(engine);

ground.display();
box1.display();
box2.display();


}