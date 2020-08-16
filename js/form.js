class Form{
    constructor(){
        this.button = createButton("start");
        this.input = createInput("name");
        this.greeting = createElement("h3");
 }
 hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();

 }
display(){
    var title = createElement("h2");
    title.html("car Racing game");
    title.position(displayWidth/2 -20,0);
    this.button.position(displayWidth/2 -20,displayHeight/2 -50);
    this.input.position(displayWidth/2 -20, displayHeight/2 +40);
    this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
       player.name = this.input.value();
       playerCount= playerCount+ 1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("welcome, "+player.name+" the game will start in a few seconds");
       this.greeting.position(displayWidth/2 -20, displayHeight/2 -50);
   });


}
}