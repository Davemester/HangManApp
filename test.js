
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

async function AnswerTEst() {

    let task = new Dictionary();
    let word = await task.makeTaskWord();
    console.log(word);
    let guess = document.getElementById('guess');
    let answer = document.getElementById('answer');
    let button = document.getElementById('submit');

    let guessArray = new GuessArray();  //ez a player classban lesz

    button.addEventListener('click', event=>{

        //console.log(guess.value,taskword);
        AnswerCheck.checkAndTransformLetter(guess.value,word);
        answer.textContent=word.underscoreArray;  //display class fogja megmutatni
    })



    
}


AnswerTEst()
