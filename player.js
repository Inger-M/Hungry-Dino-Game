

class Player {
    constructor(gameInstance) {
      this.game = gameInstance;
      this.x = 100;
      this.y = 300;
      this.width = 50;
      this.height = 50;
      this.grow = 1.1;
    }

    draw() {
      // color to the player
      this.game.context.save();
      this.game.context.fillStyle = 'black';
      //drawing the player
      this.game.context.fillRect(this.x, this.y, this.width, this.height);
      // giving a sound or text message "yam yam"
      //this.message //dont know how to finish this...//
      this.game.context.restore();
    }

    growPlayersize () {
      if (this.width && this.height < 350) {
        const growWidth = this.width *= this.grow;
        const growHeight = this.height *= this.grow; 
      } else {
          console.log('Dino is full now Well done!');
        }
  
      
      
    }
     
  }
  
  const player = new Player();


 
  