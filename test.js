
import { Dictionary } from './dictionary.js';
import  {AnswerCheck} from './answercheck.js';
import {TaskWord} from './taskWord.js';
import {GuessArray} from './guessarray.js';


async function test(){
    
    let task = new Dictionary();
    let word = await task.makeTaskWord();
    console.log(word);
   
    //return(word);
    
}

function checkTest () {

   
}

function AnswerTEst() {
    let guess = document.getElementById('guess');
    let answer = document.getElementById('answer');
    let button = document.getElementById('submit');
    let taskword = new TaskWord('anyád');
    let guessArray = new GuessArray();

    button.addEventListener('click', event=>{
        
    })



    
}


AnswerTEst()
