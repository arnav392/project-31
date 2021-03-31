const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var umberalla,rainDrops;
var thunderImg1,thunderImg2,lighting;

function preload(){
    thunderImg1= loadImage("1.png");
    thunderImg2= loadImage("2.png");
}

  function setup(){
   var canvas=createCanvas(400,600);
    engine= Engine.create();
    world = engine.world;

    umbefralla=new stone(400,590,10);

    rainDrops=new Drop(0.400,100);
}

 function draw(){ 
    background(20);
    Engine.update(engine);
    
   umberalla.display();
   rainDrops.display();
    
    
}   

function thunderfall(){
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
       case 1: thunder.addImage(thunderImg1);
       break;
       case 2: thunder.addImage(thunderImg2); 
       break;
       default:break;       
      }
      thunder.scale= random(0.3,0.6);
    }
};


function reposition(){
    if(this.rain.position.y>height){
        Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,300)})
    }
};