class Score {
    constructor(ctx){
    const score = document.getElementById('score-number').innerHTML
    this.value = 17;

    }


    draw() {
        this.ctx.fillText(this.value)
        }
}