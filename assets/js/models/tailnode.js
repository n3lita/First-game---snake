class Tailnode {
    constructor(ctx,x,y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;

        this.w = 20;
        this.h = 20;
    }

    draw() {
        this.ctx.save()
        this.ctx.fillStyle = "#7CA742"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.restore()

    }
}