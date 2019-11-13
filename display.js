 
 export class Display {

   static showWrongAttempt(){

        document.getElementById('warning').textContent = 'Wrong letter try Again';  
        window.setTimeout(()=>{
           document.getElementById('warning').textContent='';   
       },3000);
    }

    static showGoodAttempt(array) {
        
        array.forEach((element,index) => {
            let html = document.querySelector('#answer').children[index].firstElementChild;
            html.textContent = element;
        });
    }

    static showUnderScore(array) {

        array.forEach(elem => {
            let html = document.createElement('div');
            html.innerHTML = `<h4>${elem}</h4>`
            html.classList.add('letter');
            document.getElementById('answer').appendChild(html);
        })
    }

    static showLenght(len) {
        document.getElementById('length').value=len;
    }

    static showAttemptsLeft(attempts) {
        document.getElementById('attemptsleft').value = attempts;
    }

    static showGuessedLetters(letter) {

        document.getElementById('guesslist').value += `${letter}; `;

        //document.getElementById('guesslist').value = letters.concat('');
       
    }

    static clearGuessedLetters() {
        document.getElementById('guesslist').value='';
    }

    static boardReset() {

        this.clearGuessedLetters();
        document.getElementById('answer').innerHTML='';
        

    }

    static resetEventListener(element){
        let el = element;     /* document.querySelector('.colorpicker'); */
        let elClone = el.cloneNode(true);   

        el.parentNode.replaceChild(elClone, el);
    }

 }