
export class GuessArray {

    constructor() {   
       
        this.guessArray = [];
        
    }


    addToGuessArray(letter) {
        console.log(letter)
        if (!this.guessArray.includes(letter)) {
            console.log('nincs benne')
            this.guessArray.push(letter);
        }
    }

    clearGuessArray () {
        this.guessArray = [];
    }

   

    makeFullString() {
        return this.guessArray.concat('');
    } 



}