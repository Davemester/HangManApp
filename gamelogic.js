
import { Dictionary } from './dictionary.js';
import  {AnswerCheck} from './answercheck.js';
//import {TaskWord} from './taskWord.js';
import {GuessArray} from './guessarray.js';
import {Display} from './display.js';
import { Hangman } from './hangmandraw.js';



export class GameLogic {

    constructor () {
        
        this.guessArray = new GuessArray();
        this.wrongGuessArray = new GuessArray();
        this.attempts = 0;
        this.attemptLimit = 11;
        //this.startButton = document.getElementById('start');
        this.hangman = new Hangman();
    }


    handleGoodAnswer(word,guess) {
        console.log('Good answer handling');
        
        this.guessArray.addToGuessArray(guess.value);
        word.transfromWord(guess.value);
        Display.showGoodAttempt(word.underscoreArray);
        //console.log(this.guessArray)
        Display.showGuessedLetters(guess.value);
    }

    handleWrongAnswer(guess) {

        console.log('BAd answer handling')
        //console.log(guess);
        this.attempts++;
        this.wrongGuessArray.addToGuessArray(guess.value);
        Display.showWrongAttempt();
        Display.showGuessedLetters(guess.value);
        //this.hangman.clearCanvas();
       
        this.hangman.drawHangMan(this.attempts);
    }


    async start() {
        let task = new Dictionary();
        let word = await task.makeTaskWord();
        let guess = document.getElementById('guess');
        let button = document.getElementById('submit');
        //this.hangman.clearCanvas();
        Display.boardReset(); 
        
       
        console.log(word);
        Display.showUnderScore(word.underscoreArray);  //eddig jó
        Display.showLenght(word.wordLetters.length);
        button.addEventListener('click', event=>{

            AnswerCheck.checkLetter(guess.value,word) ? this.handleGoodAnswer(word,guess): this.handleWrongAnswer(guess);
            
            if (AnswerCheck.checkAnswer(this.guessArray,word)) {
                console.log('you win');
                Display.resetEventListener(button);
                this.attempts=0;
                return;
            }

            if (this.attempts === this.attemptLimit) {
                console.log('LOser!!!!!!');
                Display.resetEventListener(button);
                this.attempts=0;
                return;
            }

          
               
        }) 
        
    }
    

}