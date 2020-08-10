class Form{
    constructor(){
        this.button = createButton("start");
        this.input = createInput("name");
        this.greeting = createElement("h3");
 }
display(){
    var title = createElement("h2");
    title.html("car Racing game");
    title.position(130,0);
    this.button.position(200,200);
    this.input.position(200,260);
    this.button.mousePressed(function(){
       this.input.hide();
       this.button.hide();
       player.name = this.input.value();
       playerCount= playerCount+ 1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("welcome, "+player.name+" the game will start in a few seconds");
       this.greeting.position(50,230);
   });


}
}