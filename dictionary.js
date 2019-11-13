import {TaskWord} from './taskWord.js'

export class Dictionary {
    constructor(){
        this.words=[];
        
    }


    async makeDictonary () {
        const fileUrl = 'http://127.0.0.1:5500/words.txt';
        console.log(fileUrl);
        return fetch(fileUrl).then(r=>r.text()).then(t=>{
            let rawDict = t.split('\n');
            
            rawDict.forEach(item=>{
                if (item.length > 9) {
                    this.words.push(item);
                }
            })
        })
    }


   async makeTaskWord() {
      
        let taskWord;
        return await this.makeDictonary().then(t=>{
            taskWord = new TaskWord(this.randomWord().trim());
            return taskWord;
        }).catch(e=>console.log(e));

    }

    randomWord(){               
        let randWord = Math.floor((Math.random()*this.words.length));
        return this.words[randWord];
    }
}













 /*   const fileUrl = 'http://127.0.0.1:5500/HangMan/words.txt';
        //const fileUrl = 'https://index.hu';

        return fetch(fileUrl).then(r =>r.text())  //vissza kell térni az egész fetch-nek
        .then(t=>{
            //console.log(t)
            this.words=t.split('\n');
           
            let taskWord = new Word(this.randomWord().trim());
            return taskWord;
        }).catch((e)=>{
            console.log(e,'Error')
        }) 
         */