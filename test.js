
import { Dictionary } from './dictionary.js';
import  {AnswerCheck} from './answercheck.js';
import {TaskWord} from './taskWord.js';
import {GuessArray} from './guessarray.js';
import {Display} from './display.js';
import { Hangman } from './hangmandraw.js';

async function test(){
    
    let task = new Dictionary();
    let word = await task.makeTaskWord();
    console.log(word);
   
    //return(word);
    
}

function checkTest () {

   
}

async function AnswerTEst() {

    let task = new Dictionary();
    let word = await task.makeTaskWord();
    console.log(word);
    let guess = document.getElementById('guess');
    let answer = document.getElementById('answer');
    let button = document.getElementById('submit');

    let guessArray = new GuessArray();  //ez a player classban lesz
    Display.showUnderScore(word.underscoreArray);

    button.addEventListener('click', event=>{

       if ( AnswerCheck.checkAndTransformLetter(guess.value,word)) {
            console.log('jó')
            Display.showGoodAttempt(word.underscoreArray);
            //Display.bottomDraw();
       }
    
    })



    
}


AnswerTEst();
 let hangman = new Hangman();


hangman.drawBottom();
hangman.drawMainLine();
hangman.drawHorizontalLine();
hangman.drawDiagonalLine();
hangman.drawRope();
hangman.drawHead();
hangman.drawBody();
hangman.drawLeftFoot();
hangman.drawRightFoot();

// window.setTimeout(()=> {
//     hangman.clearCanvas();
// },3000) 




