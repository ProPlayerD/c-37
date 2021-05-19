class Form{
    constructor(){
      this.title = createElement("h1")
      this.input = createInput("name")
      this.button = createButton("START")
      this.greetings = createElement("h2");
    }

  display(){
    
    this.title.html("Car game")
    this.title.position(135,40);

    this.title.style("font-family","Century Gothic")
    
    this.input.position(130,160)

    
    this.button.position(200,200);
    this.button.style("background","blue")
    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.title.hide()
        player.name = this.input.value()

        
        this.greetings.html("Hello! "+player.name)
        this.greetings.position(130,160) 
        
        playerCount++
        player.index = playerCount
        player.updateCount(playerCount);
        player.updateInfo()
    })
  }  
  
  hidden(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greetings.hide()
  }
}