
const ctx = document.getElementById('canvas').getContext('2d');
class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.snake = new Snake(ctx);
        this.background = new Background(ctx)
        this.drawCount = 0;
        this.IntervalId= null;

    }


    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollision()
            if (this.drawCount > 60){
                this.drawCount = 0
            }
        }, 1000 / 60);
    }

    draw() {
        this.background.draw()
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
        this.ctx.fillStyle = "black"
        this.ctx.font = "40px Verdana";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "GAME OVER",
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );
    }

    checkCollision() {
        if (this.snake.x + this.snake.w >=this.ctx.canvas.width ||  
            this.snake.y + this.snake.h >= this.ctx.canvas.height ||
            this.snake.x <= 0 ||
            this.snake.y <=0)
            {
            return this.gameOver()
        }
    }
}
