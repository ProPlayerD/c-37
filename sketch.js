var dataBase,game,player,form,playerCount,gameState = 0,players;


function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    game = new Game()
    game.getState();
    game.start()
   
}

function draw(){
   if(playerCount === 4){
      game.updateState(1);
 
   }
    if(gameState === 1){
      game.play()
    }  
}


