// Burgers, Icecream, Pizza!

class Food {
  constructor(gameInstance, x, y, speed) {
    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.speed = speed;
  }

  checkIntersection(element) {
    return (
      element.x + element.width > this.x &&
      element.x < this.x + this.width &&
      element.y + element.height > this.y &&
      element.y < this.y + this.height
    );
  }

  runLogic() {
    this.y += this.speed;
  }

  draw() {
    this.game.context.save();
    this.game.context.fillStyle = 'orange';
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
    this.game.context.restore();
  }
}

//  const food = new Food();
