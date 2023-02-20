class GuessingGame {
    constructor() { }

    numsArr = [];

    setRange(min, max) {
        //console.log(min + " / " + max);
        this.numsArr = [];
        for (let i = min; i <= max; i++) {
            this.numsArr.push(i);
        }
    }

    guess() {
        return this.numsArr[Math.floor(this.numsArr.length / 2)];
    }

    lower() {
        this.setRange(this.numsArr[0],
            this.guess());
    }

    greater() {
        this.setRange(this.guess(),
            this.numsArr[this.numsArr.length - 1]);
    }
}

let aGame = new GuessingGame();
aGame.setRange(0, 100);

module.exports = GuessingGame;
