function init() {
    var stage = new createjs.Stage("canvas");
    var rectangle = new createjs.Shape();
    rectangle.graphics.beginFill("#F2F2F2").drawRect(10, 10, 50, 50);
    rectangle.x = 50;
    rectangle.y = 50;
    stage.addChild(rectangle);
    stage.update();
}

// Canvas
var canvas;
var stage;

// Background
var bgImg = new Image();
var bg; 
var bg2Img = new Image(); 
var bg2;

// Spaceship
var shipImg = new Image(); 
var ship;

// Enemy 
var enemyImg = new Image();

// Boss
var bImg = new Image(); 
var boss;

// Lives 
var liveImg = new Image();

// Bullets
var bulletImg = new Image();

// Win / Lose
var winImg = new Image(); 
var loseImg = new Image(); 
var win; 
var lose;