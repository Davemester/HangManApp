
export class GuessArray {

    constructor() {   //ezt majd a player classban példányosítani
       
        this.guessArray = [];
        
    }


    addToGuessArray(letter) {
        this.guessArray.push(letter);
    }

    clearGuessArray () {
        this.guessArray = [];
    }

   /*  addToGoodAnswerArray(letter) {
        this.goodAnswerArray.push(letter);
    } */

    makeFullString() {
        return this.guessArray.concat('');
    } 



}