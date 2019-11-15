export class TaskWord {

    constructor(word) {
        this.word = word;
        this.wordLetters  = [];
        this.splitWordtoLetters();
        this.underscoreArray = this.makeEmptyLettersArray();
        this.strength;
        this.calculateStrength();
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
        let result='';

        array.forEach(item =>{
            if (item!=='_'){
                result+=item;
            }
        })
        return result;
    }


    transfromWord(letter) {
        this.wordLetters.forEach((item,position)=>{
            if ( item === letter) {
                
                this.transformUnderScore(item, position);
            }
        })
    }


    transformUnderScore(letter,pos) {
        this.underscoreArray.splice(pos,1,letter);
    }

    calculateStrength() {

        
        if (this.wordLetters.length<12) {
            this.strength = 11;
        }

        if (this.wordLetters.length<14 && this.wordLetters.length>11) {
            this.strength = 13;
        }

        if (this.strength >=14) {
            this.strength = 15;
        }
    }


}
