class Game {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');
    //this.message = 'Yam yam' // or maybe a sound//
    this.player = new Player(this);

    this.dangers = [];
    this.foods = [];
    this.enableControls();
  }

  enableControls() {
    window.addEventListener('keydown', (event) => {
      const code = event.code;
      switch (code) {
        case 'ArrowUp':
          this.player.y -= 10;
          break;
        case 'ArrowDown':
          this.player.y += 10;
          break;
        case 'ArrowLeft':
          this.player.x -= 10;
          break;
        case 'ArrowRight':
          this.player.x += 10;
          break;
      }
    });
  }

  generateDanger() {
    const dangerSpeed = Math.random() + 0.01;
    const dangerX = Math.random() * 500 - 20; //or this.canvas.width
    const dangerY = Math.random() * 500 - 480;
    const danger = new Danger(this, dangerX, dangerY, dangerSpeed);
    this.dangers.push(danger);
  }

  generateFood() {
    const foodSpeed = Math.random() + 0.01;
    const foodX = Math.random() * 500 - 20; //or this.canvas.width
    const foodY = Math.random() * 500 - 440;
    if (this.foods.length < 10) {
      const food = new Food(this, foodX, foodY, foodSpeed);
      this.foods.push(food);
    }
  }
  removingJunk() {
    //if () {//our of canvas 500 *500 then//))) {
    //}
    //const this.foods.slice()
  }
  // use splice
  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      this.loop();
    });
  }

  runLogic() {
    if (Math.random() < 0.01) {
      this.generateDanger();
    }
    for (const danger of this.dangers) {
      danger.runLogic();
      const areIntersecting = danger.checkIntersection(this.player);
      if (areIntersecting) {
        console.log('areIntersecting');
        const indexOfDanger = this.dangers.indexOf(danger);
        this.dangers.splice(indexOfDanger, 1);
        this.player.shrinkPlayersize();
      }
    }

    if (Math.random() < 0.009) {
      this.generateFood();
    }
    for (const food of this.foods) {
      food.runLogic();
      const areIntersecting = food.checkIntersection(this.player);
      if (areIntersecting) {
        console.log('areIntersecting');
        const indexOfFood = this.foods.indexOf(food);
        this.foods.splice(indexOfFood, 1);
        this.player.growPlayersize();
      }
    }
  }

  draw() {
    this.context.clearRect(0, 0, 500, 500);
    this.player.draw();

    for (const danger of this.dangers) {
      danger.draw();
    }

    for (const food of this.foods) {
      food.draw();
    }
  }
}

//class Game {
// constructor(canvasElement) {
//   this.canvas = canvasElement;
//   this.context = canvasElement.getContext('2d');
//   this.score = 100;
//   this.player = new Player(this);
//   this.enemies = [];
//   this.enableControls();
// }

// loop() {
//   window.requestAnimationFrame(() => {
//     this.runLogic();
//     this.draw();
//     this.loop();
//   });
// }
// enableControls() {
//   window.addEventListener('keydown', (event) => {
//     const code = event.code;
//     switch (code) {
//       case 'ArrowUp':
//         this.player.y -= 10;
//         break;
//       case 'ArrowDown':
//         this.player.y += 10;
//         break;
//       case 'ArrowRight':
//         this.player.x += 10;
//         break;
//       case 'ArrowLeft':
//         this.player.x -= 10;
//         break;

//     }
//   });
// }

//  draw() {
//    this.context.clearRect(0, 0, 500, 500);
//    for (const enemy of this.enemies) {
//      enemy.draw();
//    }
//    this.player.draw();
//    this.drawScore();
//  }
//
