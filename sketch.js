
var dataBase, form, player , game;
var canvas, backgroundImg, playerCount;
var gameState = 0;
var allPlayers;
var distance = 0;
var cars , car2 ,car3, car4, car1;
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
     game.play()
 }
}