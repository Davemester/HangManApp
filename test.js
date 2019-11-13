
import { GameLogic} from './gamelogic.js';
import { Hangman } from './hangmandraw.js';




function mainScript(){
    
    let gamelogic = new GameLogic();
    gamelogic.start();
}
document.getElementById('start').onclick=mainScript; 



/* var hangman = new Hangman();
//hangman.drawHangMan(8);

function clear(){
    hangman.clearCanvas()
}

document.getElementById('submit').onclick = clear;
 */





/* import  {AnswerCheck} from './answercheck.js';
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


hangman.drawHangMan(9); */


// window.setTimeout(()=> {
//     hangman.clearCanvas();
// },3000) 




