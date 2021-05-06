
const ctx = document.getElementById('canvas').getContext('2d');
class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.numberofCells = 26

        this.snake = new Snake(ctx);
        this.background = new Background(ctx)
        this.food = this.generateFood()
        this.tailNode = new Tailnode(ctx)
        this.score = new Score(ctx)
        
        this.drawCount = 0;
        this.IntervalId = null;

        this.gameOverImg = new Image()
        this.gameOverImg.src = "./assets/Graphics/gameover.png"
        this.gameOverImg.width = 806 / 4
        this.gameOverImg.height = 450 / 4



    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollision()
            this.checkEat()
            if (this.drawCount > 60){
                this.drawCount = 0
            }
        }, 200);
    }

    draw() {
        this.background.draw()
        this.snake.draw()
        this.food.draw()
        this.score.draw()
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
            this.gameOverImg.width,
            this.gameOverImg.height
        );  
    }

    checkCollision() {
        const wallsColission =  this.snake.x + this.snake.w > this.ctx.canvas.width ||  
                            this.snake.y + this.snake.h > this.ctx.canvas.height ||
                            this.snake.x < 0 ||
                            this.snake.y < 0

        const selfColission = this.snake.tail.some(tailNode => {
            return (tailNode.x === this.snake.x && tailNode.y === this.snake.y)
        })

        if (wallsColission || selfColission) {
            return this.gameOver()
        }
    }

    checkEat() {
        if(this.snake.collideWith(this.food)) {
            this.food = this.generateFood()
            this.snake.grow()
            this.score.value++
        }
    }

    generateFood(){
        const foodX = Math.floor(Math.random() * this.numberofCells)
        const foodY = Math.floor(Math.random() * this.numberofCells)     
        return new Food(this.ctx, foodX, foodY)
    }

    /*updateScore() {
        if(this.checkEat()) {
         this.score.value++
        }
     } */
}
