
const ctx = document.getElementById('canvas').getContext('2d');
class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.snake = new Snake(ctx);
        this.background = new Background(ctx)
        this.drawCount = 0;
        this.IntervalId= null;

        this.gameOverImg = new Image()
        this.gameOverImg.src = "./assets/Graphics/gameover.png"

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
        }, 300);
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
        this.ctx.drawImage(
        this.gameOverImg,
        159.25,
        203.75, 
        201.5,
        112.5
        );
        //img size: 806x450   
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
