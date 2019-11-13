
import { Dictionary } from './dictionary.js';
import  {AnswerCheck} from './answercheck.js';
import {GuessArray} from './guessarray.js';
import {Display} from './display.js';
import { Hangman } from './hangmandraw.js';



export class GameLogic {

    constructor () {
        
        this.guessArray = new GuessArray();
        this.attempts = 0;
        this.attemptLimit = 11;
        this.hangman = new Hangman();
        this.startButton = document.querySelector('#start');
    }


    handleGoodAnswer(word,guess) {
        
        word.transfromWord(guess.value);
        Display.showGoodAttempt(word.underscoreArray);
        
    }

    handleWrongAnswer(guess) {
        
        this.attempts++;
        this.guessArray.addToGuessArray(guess.value);
        Display.showWrongAttempt();
        Display.showGuessedLetters(this.guessArray.guessArray);
        Display.showAttemptsLeft(this.attemptLimit-this.attempts)
        this.hangman.drawHangMan(this.attempts);
    }

    prepeareNewGame(word) {
        //this.startButton.onclick='';
        this.hangman.clearCanvas();
        Display.boardReset(); 
        Display.hideImages();
       
        
        Display.showUnderScore(word.underscoreArray);  
        Display.showLenght(word.wordLetters.length);
        Display.showAttemptsLeft(this.attemptLimit-this.attempts);
    }

    handleWinning(button) {
        console.log('you win');
        Display.resetEventListener(button);
        this.attempts=0;
        Display.showWinningImage();
        //this.startButton.onclick=this.start;
    }

    handleLoosing(button) {
        console.log('LOser!!!!!!');
        Display.resetEventListener(button);
        this.attempts=0;
        Display.showLooseImage();
        //this.startButton.onclick=this.start;
    }

    async start() {
        let task = new Dictionary();
        let word = await task.makeTaskWord();
        let guess = document.getElementById('guess');
        let button = document.getElementById('submit');
        this.prepeareNewGame(word);
        console.log(word);
        button.addEventListener('click', event=>{

            
            AnswerCheck.checkLetter(guess.value,word) ? this.handleGoodAnswer(word,guess): this.handleWrongAnswer(guess);
            
            if (AnswerCheck.checkAnswer(this.guessArray,word)) {
                this.handleWinning(button);
                return;
            }

            if (this.attempts === this.attemptLimit) {
               this.handleLoosing(button);
                return;
            }

          
               
        }) 
        
    }
    

}