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
  document.getElementById('score').style.display = "block"
  game.start()
})


const retryButton = document.getElementById('retry-btn');
retryButton.addEventListener('click', event => {
  game.gameOverStatus = false;
  game = new Game(ctx)
  game.start()
  retryButton.style.display = 'none';
})

const updatemaxScorebutton = document.getElementById('updateBtn');
updatemaxScorebutton.addEventListener('click', event => {
localStorage.maxScore = 0;
})

  document.addEventListener('keydown', event => {
    game.onKeyEvent(event)
  })
});