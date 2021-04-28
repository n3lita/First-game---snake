document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  const game = new Game(ctx)
  game.start()

  document.addEventListener('keydown', event => {
    game.onKeyEvent(event)
  })
});