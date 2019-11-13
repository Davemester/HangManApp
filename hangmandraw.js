export class Hangman {


    constructor(){
        
        this.canvasParent = document.getElementById('hangman');
        this.resetCanvas();
        this.canvasParent.innerHTML=`<canvas id="hangmancanvas" width="300" height="300"></canvas>`;
        this.canvas = this.canvasParent.firstChild;
        this.canvasDrawer = this.canvas.getContext('2d');
        this.clearCanvas();
       
    }


    clearCanvas() {
       
        this.canvasDrawer.clearRect(0,0,300,300)
    }

    resetCanvas() {
        this.canvasParent.innerHTML='';
    }

    drawHangMan(drawparts) {
       
        let drawList = [this.drawBottom,this.drawMainLine,this.drawHorizontalLine,this.drawDiagonalLine,
            this.drawRope,this.drawHead,this.drawBody,this.drawLeftFoot,this.drawRightFoot,
            this.drawLeftArm,this.drawRightArm,this.drawLeftEye,this.drawRightEye,this.drawMouth];
       

        drawList[drawparts-1].call(this.canvasDrawer);
        
    }
    
    drawBottom() {
       
        this.lineWidth = 10;
        this.moveTo(10,280);
        this.lineTo(80,280);
        this.stroke();  
    }

    drawMainLine() {
       
        this.lineWidth = 10;
        this.moveTo(45,280);
        this.lineTo(45,50);
        this.stroke();
    }

    drawHorizontalLine() {
        
        this.lineWidth = 10;
        this.moveTo(40,50);
        this.lineTo(150,50);
        this.stroke();    
    }

    drawDiagonalLine() {
       
        this.lineWidth = 10;
        this.moveTo(45,90);
        this.lineTo(75,50);
        this.stroke();    
    }

    drawRope() {
       
        this.lineWidth = 10;
        this.moveTo(145,50);
        this.lineTo(145,90);
        this.stroke(); 
    }

    drawHead() {
        
        this.lineWidth=5;
        this.beginPath();
        this.arc(145,114,25,0,2*Math.PI)
        this.stroke();
    }

    drawBody() {
      
        this.lineWidth=5;
        this.moveTo(145,140);
        this.lineTo(145,220);
        this.stroke(); 
    }


    drawLeftFoot() {
       
        this.lineWidth=5;
        this.moveTo(146,220);
        this.lineTo(125,260);
        this.stroke(); 
    }


    drawRightFoot() {
       
        this.lineWidth=5;
        this.moveTo(146,220);
        this.lineTo(165,260);
        this.stroke(); 
    }

    drawLeftArm() {
       
        this.lineWidth=5;
        this.moveTo(145,170);
        this.lineTo(115,200);
        this.stroke(); 
    }

    drawRightArm() {
       
        this.lineWidth=5;
        this.moveTo(145,170);
        this.lineTo(175,200);
        this.stroke(); 
    }

    drawLeftEye() {
        
        this.lineWidth=3;
        this.beginPath();
        this.arc(135,110,5,0,2*Math.PI)
        this.stroke();
    }

    drawRightEye() {
       
        this.lineWidth=3;
        this.beginPath();
        this.arc(155,110,5,0,2*Math.PI)
        this.stroke();
    }

    drawMouth() {
        
        this.lineWidth=3;
        this.moveTo(135,127);
        this.lineTo(155,127);
        this.stroke(); 
    }
    
  
   
}