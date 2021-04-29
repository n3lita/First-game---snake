class Snake {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height / 2;

        this.w = 20;
        this.h = 20;

        this.v = 20;

        this.direction = 'up'
        this.gridSquare = 26;
    }


    draw() {
        this.ctx.save()
        this.ctx.fillStyle = "#699a27"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.restore()
    }

    move() { 
         if (this.direction === 'up') {
            this.y -= this.v;
        } else if (this.direction === 'down') {
            this.y += this.v;
        } else if (this.direction === 'right') {
            this.x += this.v;
        } else if (this.direction === 'left') {
            this.x-= this.v;
        }
    } 

    onKeyEvent(event) {
        if (event.type === 'keydown') {
            switch (event.keyCode) {
                case UP:
                    if(this.direction != 'down')
                    this.direction = 'up'
                    break;
                case DOWN:
                    if(this.direction != 'up')
                    this.direction = 'down'
                    break;
                case RIGHT:
                    if(this.direction != 'left')
                    this.direction = 'right'
                    break;
                case LEFT:
                    if(this.direction != 'right')
                    this.direction = 'left'
                    break;
            }
        }
    }
}