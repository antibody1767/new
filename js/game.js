class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = dataBase.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        dataBase.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player(); 
            var playerCountref = await dataBase.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }   
         }
         play(){
             form.hide();
             textSize(30);
             text("game start", 120,100);
             Player.getPlayerInfo();
             
         }


}




