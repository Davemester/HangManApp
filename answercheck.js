import {Display} from './display.js';


export class AnswerCheck {

  
    static checkAnswer(guessArray,taskWord) {

        return (taskWord.word === guessArray.makeFullString())
    } 

   static checkAndTransformLetter(letter,taskWord) {
       

    if (!taskWord.wordLetters.includes(letter)) {
       Display.showWrongAttempt();
       return;
    }


    taskWord.wordLetters.forEach((item,position)=>{
        if ( item === letter) {
            console.log(position);
            taskWord.transformUnderScore(item, position);
            
        }
    })
    return true;
    
   }

} 