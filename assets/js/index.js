document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

window.game = new Game(ctx)
  game.preview()


const startButton = document.getElementById('start-btn');
const snakeimg = document.getElementById('snake')
const instructions = document.getElementById('instructions')
startButton.addEventListener('click', event => {
  startButton.remove()
  snakeimg.remove()
  instructions.remove()
  game.start()
})


const retryButton = document.getElementById('retry-btn');
retryButton.addEventListener('click', event => {
  game.gameOverStatus = false;
  game = new Game(ctx)
  game.start()
  retryButton.style.display = 'none';
})


  document.addEventListener('keydown', event => {
    game.onKeyEvent(event)
  })
});