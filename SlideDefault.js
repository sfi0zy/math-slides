import Slide from './Slide.js';
import COLORS from './COLORS.js';


export default class SlideDefault extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawCoordinates();
    }


    drawCoordinates() {
        this.setDefaultStyles();

        this.context.fillText('0', 30, 350);

        // Y
        this.context.beginPath();
        this.context.moveTo(50, 600);
        this.context.lineTo(50, 50);
        this.context.lineTo(60, 70);
        this.context.moveTo(50, 50);
        this.context.lineTo(40, 70);
        this.context.moveTo(45, 150);
        this.context.lineTo(55, 150);
        this.context.moveTo(45, 250);
        this.context.lineTo(55, 250);
        this.context.moveTo(45, 450);
        this.context.lineTo(55, 450);
        this.context.moveTo(45, 550);
        this.context.lineTo(55, 550);
        this.context.stroke();
        this.context.fillText('Y',  50, 30);
        this.context.fillText('1',  30, 250);
        this.context.fillText('2',  30, 150);
        this.context.fillText('-1', 30, 450);
        this.context.fillText('-2', 30, 550);

        // X
        this.context.beginPath();
        this.context.moveTo(50, 350);
        this.context.lineTo(750, 350);
        this.context.lineTo(730, 340);
        this.context.moveTo(750, 350);
        this.context.lineTo(730, 360);
        this.context.moveTo(150, 345);
        this.context.lineTo(150, 355);
        this.context.moveTo(250, 345);
        this.context.lineTo(250, 355);
        this.context.moveTo(350, 345);
        this.context.lineTo(350, 355);
        this.context.moveTo(450, 345);
        this.context.lineTo(450, 355);
        this.context.moveTo(550, 345);
        this.context.lineTo(550, 355);
        this.context.moveTo(650, 345);
        this.context.lineTo(650, 355);
        this.context.stroke();
        this.context.fillText('X', 770, 350);
        this.context.fillText('1', 150, 370);
        this.context.fillText('2', 250, 370);
        this.context.fillText('3', 350, 370);
        this.context.fillText('4', 450, 370);
        this.context.fillText('5', 550, 370);
        this.context.fillText('6', 650, 370);
    }


    drawGraph(fx) {
        for (let i = 0; i < 2 * Math.PI; i += 0.01) {
            this.context.beginPath();
            this.context.arc(i * 100 + 50, 350 - fx(i) * 100, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }


    drawDot(x, y) {
        this.context.beginPath();
        this.context.arc(x * 100 + 50, 350 - y * 100, 3, 0, 2 * Math.PI);
        this.context.fill();
    }


    drawLine(x0, y0, x1, y1) {
        this.context.beginPath();
        this.context.moveTo(x0 * 100 + 50, 350 - y0 * 100);
        this.context.lineTo(x1 * 100 + 50, 350 - y1 * 100);
        this.context.stroke();
    }
}

