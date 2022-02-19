// Burgers, Icecream, Pizza!

class Food {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = x;
    this.y = this.y;
    this.width = 40;
    this.height = 40;
  }

  //   runLogic () {
  //     this.food.y += 1;
  // }

  draw() {
    this.game.context.save();
    this.game.context.fillStyle = 'orange';
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
    this.game.context.restore();
  }
}

//  const food = new Food();
