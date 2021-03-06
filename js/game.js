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
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);  
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]; 
        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
         }

         play(){
             form.hide();
            
             Player.getPlayerInfo();
		player.getCarsAtEnd()
             if(allPlayers !== undefined){
                background(ground);
                image(track,0,-displayHeight*4,displayWidth,displayHeight*5);       
                 var index = 0;
                 var x= 175;
                 var y = 0;
                 for(var plr in allPlayers){
                     index++
                     x = x + 200;
                     y =displayHeight - allPlayers[plr].distance;
                     cars[index-1].x= x;
                     cars[index-1].y= y;
                     fill("red");
                      text(allPlayers[plr].name,x,y-50);


                        if(index === player.index){
                         fill("blue");
                         camera.position.x = displayWidth/2;
                         camera.position.y = cars[index-1].y;
                     }
                     

                 }
             }
             if(keyIsDown(UP_ARROW)&& player.index !== null){
                 player.distance+= 50
                 player.update();

             }
             if(player.distance>3800){
                 gameState = 2;
		 player.rank++;
		 Player.updateCarsAtEnd(player.rank)
             }
             drawSprites();
             
         }
         end(){
             console.log("gameEnded")
	     console.log(player.rank);
         }


}




