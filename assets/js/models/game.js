
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
        this.maxScore = new MaxScore(ctx)
        
        this.drawCount = 0;
        this.IntervalId = null;

        this.gameOverImg = new Image()
        this.gameOverImg.src = "./assets/Graphics/gameover.png"
        this.gameOverImg.width = 806 / 4
        this.gameOverImg.height = 450 / 4

        this.appleEatAudio = new Audio()
        this.appleEatAudio.src = "./assets/sounds/Apple-bite.mp3"

        this.backGroundMusic = new Audio()
        this.backGroundMusic.loop = true;

        this.backGroundMusic.src= "./assets/sounds/Funny-retro-gaming-music-beat.mp3"

        this.gameOverStatus = false;
        this.fps = 200;

    }

    start() {
        this.backGroundMusic.play()
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollision()
            this.checkEat()
            if (this.drawCount > 60){
                this.drawCount = 0
            }
        }, this.fps);
    }

    draw() {
        this.background.draw()
        this.snake.draw()
        this.food.draw()
        this.score.draw()
        this.maxScore.draw()
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
        this.backGroundMusic.pause()
        this.gameOverStatus = true;
        this.retrybtn()
        this.updateMaxScore()
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
            this.appleEatAudio.play()
            clearInterval(this.intervalId)
            this.fps /= 1.2
            this.start()
        }
    }

    generateFood(){
        const foodX = Math.floor(Math.random() * this.numberofCells)
        const foodY = Math.floor(Math.random() * this.numberofCells)     
        return new Food(this.ctx, foodX, foodY)
    }

    preview() {
        this.background.draw()
        this.score.draw()
        this.maxScore.draw()
        
    }

    retrybtn() {
        if(this.gameOverStatus) {
            document.getElementById('retry-btn').style.display = 'block';
        }
    }

    reinitGame() {
            this.start();
            this.gameOverImg.remove()
            document.getElementById('retry-btn').style.display = "none";
    }

    updateMaxScore() {
        if (this.score.value > this.maxScore.value) {
                localStorage.maxScore = this.score.value
        }
    }
}
