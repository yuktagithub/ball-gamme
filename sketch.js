const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);

    var box_options={
isStatic: true

    }

    box = Bodies. rectangle(100,100, 30,20,box_options);
    World.add(world,box);

    var orange_options={restitution:1.0}
    
    orange = Bodies.circle(100,150,20,orange_options);
    World.add(world,orange);
     
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,200,20);

    ellipse(ball.position.x, ball.position.y, 20, 20);

    ellipseMode(RADIUS);
    ellipse(orange.position.x,orange.position.y,20);
}