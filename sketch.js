const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunder,thunderImg,thunder2Img,thunder3Img,thunder4Img;
var boy;
var drops = [];
var maxDrops = 100;

function preload(){
    thunderImg = loadImage("images/thunder.png");
    thunder2Img = loadImage("images/thunder2.png");
    thunder3Img = loadImage("images/thunder3.png");
    thunder4Img = loadImage("images/thunder4.png");
}

function setup(){
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella(250,500);
   
    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(0);
    if(frameCount%50 === 0){
        thunder = createSprite(250,100,10,10);
        thunder.scale = 0.5;
        var rand = Math.round(random(1,40));
        switch(rand){
            case 10:  thunder.addImage("thunder",thunderImg);
            break;
            case 20:thunder.addImage("thunder",thunder2Img);
            break;
            case 30:thunder.addImage("thunder",thunder3Img);
            break;
            case 40: thunder.addImage("thunder",thunder4Img);
            default : thunder.shapeColor = "black";
        }
    }
    
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500),random(0,700)));
    }
    for (var i = 0; i < maxDrops; i++) {
     
        drops[i].display();
        drops[i].updatePosition();
        
      }

    Engine.update(engine);

    boy.display();

    drawSprites();
}   

