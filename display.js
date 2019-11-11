 export class Display {
/* 
    constructor() {
    } */

   static showWrongAttempt(){

        document.getElementById('warning').textContent = 'Wrong letter try Again';    //ezt majd a display classba kell
        window.setTimeout(()=>{
           document.getElementById('warning').textContent='';   //betenni
       },3000);

    }

    static showGoodAttempt(array) {

        array.forEach((element,index) => {
            let html = document.querySelector('#answer').children[index].firstElementChild;
            html.textContent = element;
            //document.getElementById('answer').appendChild(html);

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


  /*  static draw (starta, endb, drawtox, drawtoy) {
        picture.moveTo(starta, endb);
        picture.lineTo(drawtox, drawtoy);
        picture.stroke();
    };

   static bottomDraw () {
        document.getElementById('hangman').this.draw(0, 150, 150, 150);
    };
 */

 }