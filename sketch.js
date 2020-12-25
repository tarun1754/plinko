const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  division1=new Division(700,50,50,10);
  division2=new Division(700,100,50,10);
  division3=new Division(700,150,50,10);
  division4=new Division(700,200,50,10);
  division5=new Division(700,250,50,10);
  division6=new Division(700,300,50,10);
  division7=new Division(700,350,50,10);
  division8=new Division(700,400,50,10);
}

function draw() {
  background(255,255,255);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j,j <=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var w=15;w,w <=width-10;w=w+50){
    plinkos.push(new Plinko(w,175));
  }
  for(var r=0;r<particles.length;r++){
    particles[r].display();
  }
  for(var o=0;o<divisions.length;o++){
    divisions[o].display();
  }
  drawSprites();
}