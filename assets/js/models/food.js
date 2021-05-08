class Food {
    constructor(ctx,x,y) {
        this.ctx = ctx;

        this.w = 20;
        this.h = 20

        this.apple = new Image()
        this.apple.src = "./assets/Graphics/apple.png"

        this.x = x * this.w;
        this.y = y * this.h;
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
