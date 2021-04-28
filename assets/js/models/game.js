
const ctx = document.getElementById('canvas').getContext('2d');
class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.snake = new Snake(ctx);
        this.drawCount = 0;
        this.IntervalId= null;

    }


    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            if (this.drawCount > 500){
                this.drawCount = 0
            }
        }, 1000 / 60);
    }

    draw() {
        this.snake.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move() {
        this.snake.move()
    }

    onKeyEvent(event) {
        this.snake.onKeyEvent(event);
    }

    gameOver() {
        clearInterval(this.intervalId);
        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "GAME OVER",
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );
    }
}