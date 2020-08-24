
var dataBase, form, player , game;
var canvas, backgroundImg, playerCount;
var gameState = 0;
var allPlayers;
var distance = 0;
var cars , car2 ,car3, car4, car1;
var car1Img, car2Img, car3Img, car4Img;
var track, ground;

function preload(){
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png")
}
function setup(){
    dataBase = firebase.database();
    canvas = createCanvas(displayWidth-30,displayHeight -50);
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
 if(playerCount=== 4 ){
     game.update(1);
 }
 if(gameState === 1 ){
     clear();
     game.play();
 }
 if(gameState === 2){
     game.end();
 }
}