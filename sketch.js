const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backGroundImg,timeFull;

var bg ;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backGroundImg){
        background(backGroundImg);
    }

    Engine.update(engine);
    fill ("");
    textSize(30);
    text("TIME:"+timeFull,50,50);
}


async function getTime() 
{
    var response  = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var dateTime  = responseJson.datetime;
    var time  = dateTime.slice(11,13);
    timeFull = dateTime.slice(11,16)
    console.log(timeFull+","+time);
    if(time>4 && time<=6){
        bg = "sunrise1.png";
    }
    if(time>6 && time<=8){
        bg = "sunrise2.png";
    }
    if(time>8 && time<=10){
        bg = "sunrise3.png";
    }
    if(time>10 && time<=12){
        bg = "sunrise4.png";
    }
    if(time>12 && time<=14){
        bg = "sunrise5.png";
    }
    if(time>14 && time<=16){
        bg = "sunset6.png";
    }
    if(time>16 && time<=18){
        bg = "sunset9.png";
    }
    if(time>18 && time<=20){
        bg = "sunset10.png";
    }
    if(time>20 && time<=22){
        bg = "sunset11.png";
    }
    if(time>22 && time<=24){
        bg = "sunset12.png";
    }
    if(time>=0 && time<=2){
        bg = "sunset12.png";
    }
    if(time>2 && time<=4){
        bg = "sunset10.png";
    }
    backGroundImg = loadImage(bg);
}