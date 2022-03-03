const playerImage = new Image();
playerImage.src = '/Game Images/PlayerRun (3).png';

class Player {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 100;
    this.y = 300;
    this.width = 200;
    this.height = 150;
    this.grow = 1.4;
    this.shrink = 2;
    this.end = false;
  }

  draw() {
    // color to the player
    this.game.context.save();
    this.game.context.fillStyle = 'black';
    //drawing the player
    this.game.context.drawImage(
      playerImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    //this.game.context.fillRect(this.x, this.y, this.width, this.height);
    // giving a sound or text message "yam yam"
    //this.message //dont know how to finish this...//
    this.game.context.restore();
  }

  growPlayersize() {
    if (this.width < 500) {
      this.width *= this.grow;
      this.height *= this.grow;
    } else {
      console.log('Dino is full now. Well done!');
    }
  }

  shrinkPlayersize() {
    if (this.width && this.height > 30) {
      this.width /= this.shrink;
      this.height /= this.shrink;
      console.log('Run! A raptor is trying to eat you!');
    } else if (this.width && this.height < 30) {
      this.end = true;
      console.log('here', game.gameOver);
      console.log('Oh no your dead! A raptor ate you');
    } else {
      const shrinkWidth = (this.width /= this.shrink);
      const shrinkHight = (this.height /= this.shrink);
    }
  }
}

const player = new Player();
