const canvasElement = document.querySelector('canvas');
const context = canvasElement.getContext('2d');
const startScreenElement = document.getElementById('start-screen');
const playScreenElement = document.getElementById('playing-screen');
const endScreenElement = document.getElementById('game-over-screen');

const screenElements = {
    start: startScreenElement,
    play: playScreenElement,
    end: endScreenElement
}

const game = new Game(canvasElement, screenElements);

//logic for start button
const startButton = startScreenElement.querySelector('button');

startButton.addEventListener('click', () => {
    game.displayScreen('play');
    game.start();
});

//logic for play again button
const playAgainButton = endScreenElement.querySelector('button');

playAgainButton.addEventListener('click', () => {
    game.start();
});
  
