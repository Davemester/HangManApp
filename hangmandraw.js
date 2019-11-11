export class Hangman {


    constructor(){

        this.canvas = document.getElementById('hangman');
        this.canvasDrawer = this.canvas.getContext('2d');
        this.canvasDrawer.lineWidth = 10;
        this.drawList = [this.drawBottom,this.drawMainLine,this.drawHorizontalLine,this.drawDiagonalLine,
        this.drawRope,this.drawHead,this.drawBody,this.drawLeftFoot,this.drawRightFoot];
    }


    clearCanvas() {
        this.canvasDrawer.clearRect(0,0,300,300)
    }

    drawRect() {
        this.canvasDrawer.fillRect(0,0,150,75);
    }

    drawBottom() {
        this.canvasDrawer.moveTo(10,280);
        this.canvasDrawer.lineTo(80,280);
        this.canvasDrawer.stroke();
    }

    drawMainLine() {
        this.canvasDrawer.moveTo(45,280);
        this.canvasDrawer.lineTo(45,50);
        this.canvasDrawer.stroke();
    }

    drawHorizontalLine() {
        this.canvasDrawer.moveTo(40,50);
        this.canvasDrawer.lineTo(150,50);
        this.canvasDrawer.stroke();    
    }

    drawDiagonalLine() {
        this.canvasDrawer.moveTo(45,90);
        this.canvasDrawer.lineTo(75,50);
        this.canvasDrawer.stroke();    
    }

    drawRope() {
        this.canvasDrawer.moveTo(145,50);
        this.canvasDrawer.lineTo(145,90);
        this.canvasDrawer.stroke(); 
    }

    drawHead() {
        this.canvasDrawer.lineWidth=5;
        this.canvasDrawer.beginPath();
        this.canvasDrawer.arc(145,114,25,0,2*Math.PI)
        this.canvasDrawer.stroke();
    }

    drawBody() {
        this.canvasDrawer.moveTo(145,140);
        this.canvasDrawer.lineTo(145,220);
        this.canvasDrawer.stroke(); 
    }


    drawLeftFoot() {
        this.canvasDrawer.moveTo(146,220);
        this.canvasDrawer.lineTo(125,260);
        this.canvasDrawer.stroke(); 
    }


    drawRightFoot() {
        this.canvasDrawer.moveTo(146,220);
        this.canvasDrawer.lineTo(165,260);
        this.canvasDrawer.stroke(); 
    }

    /* ToDO:
    
        -rajzot befejezni
        -game logicot megcsinálni
    
    */
   
}