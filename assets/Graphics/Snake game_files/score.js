class Score {
    constructor(value) {
        this.value = 0;
    }

    draw() {
        const score = document.querySelector('#score span').innerText = this.value
        }
}