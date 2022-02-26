class Danger {
  constructor(gameInstance, x, y, speed) {
    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 10;
    this.height = 10;
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
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
    this.game.context.restore();
  }
}
