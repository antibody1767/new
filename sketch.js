
var dataBase, form, player , game;
var canvas, backgroundImg, playerCount;
var gameState = 0;
var allPlayers;

function setup(){
    dataBase = firebase.database();
    canvas = createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw() {

}