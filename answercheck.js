
export class AnswerCheck {

  
    static checkAnswer(guessArray,taskWord) {

        let currentState = taskWord.makeStringFromArray(taskWord.underscoreArray);
       
        return (taskWord.word === currentState);
    } 

   static checkLetter(letter,taskWord) {
       
    return taskWord.wordLetters.includes(letter); 
      
    }


   }

