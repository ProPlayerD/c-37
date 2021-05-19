class Game{
    constructor(){

    }

    //read the gameState value from the database
    getState(){
        dataBase.ref("gameState").on("value",function(data){
            gameState= data.val()
        })
    }

    //write the gameState value to the database
    updateState(state){
        dataBase.ref("/").update({
            gameState:state
        })
    }
    start(){
      if(gameState === 0){
        player = new Player()
        player.getCount()

        form = new Form()
        form.display()
        
      }


    }

    play(){
      form.hidden()
      text("Race Started!",120,100)
    }
}