

class Player {
    constructor(gameInstance) {
      this.game = gameInstance;
      this.x = 100;
      this.y = 200;
      this.width = 50;
      this.height = 50;
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
  }
  
  const player = new Player();
 
  