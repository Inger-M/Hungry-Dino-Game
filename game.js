
const playingGameSound = new Audio("/Sounds/HungryDino_ost_64kb.mp3");

class Game {
  constructor(canvasElement, screens) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');
    this.screens = screens;
  }

  start() {
    this.player = new Player(this);
    this.gameOver = false;
    this.dangers = [];
    this.foods = [];
    this.enableControls();
    this.displayScreen('play');
    this.running = true;
    this.loop();
    playingGameSound.play();
  }

  displayScreen(name) {
    for (let screenName in this.screens) {
      this.screens[screenName].style.display = 'none';
    }
    this.screens[name].style.display = '';
  }

  lose() {
    if ((this.gameOver = true)) {
      this.displayScreen('end');
      this.running = false;
      playingGameSound.stop();
    }
  }

  win() {
    this.displayScreen('win');
    this.running = false;
    playingGameSound.pause();
  }
  
  //playMusic () {
    //if (// screen play is on then... this.displayScreen('play')) {
      
    //}
  //}

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

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      if (this.running) {
        this.loop();
      }
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
        if (this.player.end === true) {
          console.log('dead');
          this.gameOver = true;
          this.lose();
        }
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
          console.log(player.height);
          console.log(player.width);
        if (this.player.width > 500) {
          this.win()
        }
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

