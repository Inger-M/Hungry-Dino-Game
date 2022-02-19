class Game {
    constructor(canvasElement) {
      this.canvas = canvasElement;
      this.context = canvasElement.getContext('2d');
      //this.message = 'Yam yam' // or maybe a sound//
      this.player = new Player(this);
      
      this.dangers = []            
    }

    generateDanger () {
        const dangerSpeed = Math.random() + 0.01;
        const dangerX = Math.random() * 500 - 20; //or this.canvas.width
        const dangerY = Math.random() * 500 - 480;
        const danger = new Danger(this, dangerX, dangerY, dangerSpeed);
        this.dangers.push(danger);
    }
  // adding animation via loop
    loop () {
       window.requestAnimationFrame(() => {
           this.runLogic();
           this.draw();
           this.loop();
       }); 
    }
  
    runLogic () {
       this.player.x += 1;
    //   this.food.y += 1;

       if (Math.random() < 0.01) {
           this.generateDanger();
         }
       for (const danger of this.dangers) {
           danger.runLogic();
       }
    }
  
    draw() {
      this.context.clearRect(0,0,500,500);  
      this.player.draw();
    //  this.food.draw();
      for (const danger of this.dangers) {
        danger.draw();
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
//}
