class Score {
    constructor(value) {
        this.value = 0;
    }

    draw() {
        const score = document.querySelector('#score span').innerText = this.value;
        }
}

class MaxScore {
    constructor(value) {
        this.value = Number(localStorage.maxScore) || 0;
    }

    draw() {
        const maxScore = document.querySelector('#max-score span').innerText = this.value;
    }

}

