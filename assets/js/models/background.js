class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height
        this.square = 20

    }
        
        
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#eeeff1';
        this.ctx.fillRect(0, 0, this.w, this.h);
        for (let x = 0; x <= this.w; x += this.square) {
            this.ctx.moveTo(0.5 + x, 0);
            this.ctx.lineTo(0.5 + x, this.w);
        }
        for (let x = 0; x <= this.w; x += this.square) {
            this.ctx.moveTo(0, 0.5 + x);
            this.ctx.lineTo(this.w, 0.5 + x);
        }
        this.ctx.strokeStyle = '#FFFFFE';
        this.ctx.stroke();
        this.ctx.closePath();
    
        this.ctx.lineWidth = 2;
        ctx.strokeStyle = "#87FF33";
        ctx.strokeRect(0, 0, this.w, this.h);
    }
}