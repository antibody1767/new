class Form{
    constructor(){

    }
display(){
    var title = createElement("h2");
    title.html("car Racing game");
    title.position(130,0);
   var button = createButton("start");
   var input = createInput("name");
   button.position(200,200);
   input.position(200,260);
   button.mousePressed(function(){
       input.hide();
       button.hide();
       var name = input.value();
       playerCount= playerCount+ 1;
       player.update(name);
       player.updateCount(platerCount);
       var greeting = createElement("h2");
       greeting.html("welcome, "+name+" the game will start in a few seconds");
       greeting.position(180,230);
   });


}
}