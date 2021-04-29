class Food {
    constructor(ctx) {
        this.ctx = ctx;

        this.w = 20;
        this.h = 20
        this.numberofCells = 26

        this.apple = new Image()
        this.apple.src = "./assets/Graphics/apple.png"

        this.x = Math.floor(Math.random() * this.numberofCells) * this.w 
        this.y = Math.floor(Math.random() * this.numberofCells) * this.h     
}

    draw() {
        this.ctx.drawImage(
            this.apple,
            this.x,
            this.y, 
            this.w,
            this.h
        )
    }
}
