class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
	this.rank = null;

    }
    getCount(){
        var playerCountref = dataBase.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        dataBase.ref("/").update({
            playerCount: count
        })

    }

	getCarsAtEnd(){
dataBase.ref("carsAtEnd").on("value",(data) =>{
this.rank = data.val()
})
	}

	static updateCarsAtEnd(rank){
   	dataBase.ref("/").update(
	{
	carsAtEnd:rank
	})
	}

    	update(){
      	 var playerIndex = "players/player"+ this.index;
         dataBase.ref(playerIndex).set({
          name: this.name,
            distance: this.distance
        })
  
    }

    static getPlayerInfo(){
        var playerInforef = dataBase.ref("players");
        playerInforef.on("value",(data)=>{
            allPlayers= data.val();
        })
    }
}