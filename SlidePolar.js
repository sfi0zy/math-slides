import Slide from './Slide.js';
import COLORS from './COLORS.js';


export default class SlidePolar extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawCoordinates();
    }


    drawCoordinates() {
        this.setDefaultStyles();

        // Circles
        this.setColor(COLORS.background2);
        this.context.lineWidth = 1;
        this.context.beginPath();
        this.context.arc(400, 350, 100, 0, 2 * Math.PI);
        this.context.arc(400, 350, 200, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(400, 350, 300, 0.7 * Math.PI, 1.3 * Math.PI);
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(400, 350, 300, 1.7 * Math.PI, 2.3 * Math.PI);
        this.context.stroke();
        this.context.lineWidth = 2;
        this.setColor(COLORS.light);

        // Y
        this.context.beginPath();
        this.context.moveTo(400, 600);
        this.context.lineTo(400, 50);
        this.context.lineTo(410, 70);
        this.context.moveTo(400, 50);
        this.context.lineTo(390, 70);
        this.context.moveTo(395, 150);
        this.context.lineTo(405, 150);
        this.context.moveTo(395, 250);
        this.context.lineTo(405, 250);
        this.context.moveTo(395, 450);
        this.context.lineTo(405, 450);
        this.context.moveTo(395, 550);
        this.context.lineTo(405, 550);
        this.context.stroke();
        this.context.fillText('Y',  400, 30);
        this.context.fillText('1',  380, 230);
        this.context.fillText('2',  380, 130);
        this.context.fillText('-1', 380, 470);
        this.context.fillText('-2', 380, 570);

        // X
        this.context.beginPath();
        this.context.moveTo(50, 350);
        this.context.lineTo(750, 350);
        this.context.lineTo(730, 340);
        this.context.moveTo(750, 350);
        this.context.lineTo(730, 360);
        this.context.moveTo(100, 345);
        this.context.lineTo(100, 355);
        this.context.moveTo(200, 345);
        this.context.lineTo(200, 355);
        this.context.moveTo(300, 345);
        this.context.lineTo(300, 355);
        this.context.moveTo(500, 345);
        this.context.lineTo(500, 355);
        this.context.moveTo(600, 345);
        this.context.lineTo(600, 355);
        this.context.moveTo(700, 345);
        this.context.lineTo(700, 355);
        this.context.stroke();
        this.context.fillText('X',  770, 350);
        this.context.fillText('1',  510, 370);
        this.context.fillText('2',  610, 370);
        this.context.fillText('3',  710, 370);
        this.context.fillText('-1', 285, 370);
        this.context.fillText('-2', 185, 370);
        this.context.fillText('-3', 85, 370);
    }


    drawGraph(fx) {
        for (let i = -Math.PI; i < Math.PI; i += 0.01) {
            this.context.beginPath();
            this.context.arc(i * 100 + 400, 350 - fx(i) * 100, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }


    drawGraphPolar(fp, pmax) {
        pmax = pmax || 2 * Math.PI;

        for (let i = 0; i < pmax; i += 0.005) {
            this.context.beginPath();
            const r = fp(i);
            const x = r * Math.cos(i);
            const y = r * Math.sin(i);
            this.context.arc(x * 100 + 400, 350 - y * 100, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }


    drawDot(x, y) {
        this.context.beginPath();
        this.context.arc(x * 100 + 400, 350 - y * 100, 3, 0, 2 * Math.PI);
        this.context.fill();
    }


    drawLine(x0, y0, x1, y1) {
        this.context.beginPath();
        this.context.moveTo(x0 * 100 + 400, 350 - y0 * 100);
        this.context.lineTo(x1 * 100 + 400, 350 - y1 * 100);
        this.context.stroke();
    }
}

