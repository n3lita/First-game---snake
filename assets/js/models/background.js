class Background {
    constructor(ctx) {
        this.ctx = ctx;
    }
        
        
    draw() {
        ctx.beginPath();
        ctx.fillStyle = '#eeeff1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let x = 0; x <= canvas.width; x += canvas.height) {
            ctx.moveTo(0.5 + x, 0);
            ctx.lineTo(0.5 + x, cw);
        }
        for (let x = 0; x <= cw; x += box) {
            ctx.moveTo(0, 0.5 + x);
            ctx.lineTo(cw, 0.5 + x);
        }
        ctx.strokeStyle = '#FFFFFE';
        ctx.stroke();
        ctx.closePath();
    
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#84b71c";
        ctx.strokeRect(0, 0, cw, ch);
    }
}