//import {GuessArray} from './guessarray.js';


export class AnswerCheck {

    /* constructor(taskWord) {

        this.taskWord = taskWord;
    } */

    static checkAnswer(guessArray,taskWord) {

        return (taskWord.word === guessArray.makeFullString())
    } 

   static checkAndTransformLetter(letter,taskWord) {
       

    if (!taskWord.wordLetters.includes(letter)) {
       document.getElementById('warning').textContent = 'Wrong letter try Again';    //ezt majd a display classba kell
       window.setTimeout(()=>{
           document.getElementById('warning').textContent='';   //betenni
       },3000);
       return;
    }

    let position = taskWord.wordLetters.indexOf(letter);
    taskWord.transformUnderScore(letter, position);

   }

} 