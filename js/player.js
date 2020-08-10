class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

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