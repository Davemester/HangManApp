export class TaskWord {

    constructor(word) {
        this.word = word;
        this.wordLetters  = [];
        this.splitWordtoLetters();
        this.underscoreArray = this.makeEmptyLettersArray();
    }

    splitWordtoLetters() {

        this.wordLetters = this.word.split('');
        return this.wordLetters;
    }


    makeEmptyLettersArray() {
        let letterArray = [];
        this.wordLetters.forEach(element => {
            letterArray.push('_');
        });

        return letterArray;
    }
    
    makeStringFromArray(array) {
        let result = array.concat('');
        return result;
    }


    transformUnderScore(letter,pos) {
        this.underscoreArray.splice(pos,1,letter);
    }


}
