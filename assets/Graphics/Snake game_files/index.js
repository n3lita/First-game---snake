document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

const game = new Game(ctx)
  game.preview()


const button = document.getElementById('start-btn');
const snakeimg = document.getElementById('snake')
const instructions = document.getElementById('instructions')
button.addEventListener('click', event => {
  button.remove()
  snakeimg.remove()
  instructions.remove()
  game.start()
})


  
  document.addEventListener('keydown', event => {
    game.onKeyEvent(event)
  })
});