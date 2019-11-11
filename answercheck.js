import {GuessArray} from './guessarray.js';


export class AnswerCheck {

    /* constructor(taskWord) {

        this.taskWord = taskWord;
    } */

    checkAnswer(guessArray,taskWord) {

        return (taskWord.word === guessArray.makeFullString())
    } 

   checkAndTransformLetter(letter,taskWord) {

        let position = taskWord.wordsLetters.indexOf(letter);
        if (taskWord.wordsLetters.includes(letter)) {
                taskWord.transformUnderScore(letter, position);
        }
      
   }

} 