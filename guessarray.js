
export class GuessArray {

    constructor() {
        // this.guess='';
        this.guessArray = [];
        this.goodAnswerArray = [];
    }


    addToGuessArray(letter) {
        this.guessArray.push(letter);
    }

    addToGoodAnswerArray(letter) {
        this.goodAnswerArray.push(letter);
    }

    makeFullString() {
        return this.addToGoodAnswerArray.concat('');
    }



}