import Slide from './Slide.js';
import COLORS from './COLORS.js';


export default class SlideParametric extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawCoordinates();
    }


    drawCoordinates() {
        this.setDefaultStyles();

        this.context.fillText('0', 130, 370);

        // Y
        this.context.beginPath();
        this.context.moveTo(150, 600);
        this.context.lineTo(150, 50);
        this.context.lineTo(160, 70);
        this.context.moveTo(150, 50);
        this.context.lineTo(140, 70);
        this.context.moveTo(145, 150);
        this.context.lineTo(155, 150);
        this.context.moveTo(145, 250);
        this.context.lineTo(155, 250);
        this.context.moveTo(145, 450);
        this.context.lineTo(155, 450);
        this.context.moveTo(145, 550);
        this.context.lineTo(155, 550);
        this.context.stroke();
        this.context.fillText('Y',  150, 30);
        this.context.fillText('1',  130, 250);
        this.context.fillText('2',  130, 150);
        this.context.fillText('-1', 130, 450);
        this.context.fillText('-2', 130, 550);

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
        this.context.fillText('1', 250, 370);
        this.context.fillText('2', 350, 370);
        this.context.fillText('3', 450, 370);
        this.context.fillText('4', 550, 370);
        this.context.fillText('5', 650, 370);
    }


    drawGraph(fx, tmin, tmax) {
        tmin = tmin || 0;
        tmax = tmax || 2 * Math.PI;

        for (let i = tmin; i < tmax; i += 0.01) {
            this.context.beginPath();
            this.context.arc(i * 100 + 150, 350 - fx(i) * 100, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }


    drawGraphParametric(ftx, fty, tmin, tmax) {
        tmin = tmin || 0;
        tmax = tmax || Math.PI;

        for (let i = tmin; i < tmax; i += 0.005) {
            this.context.beginPath();
            this.context.arc(ftx(i) * 100 + 150, 350 - fty(i) * 100, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }


    drawGraphParametricXY(fxy, tmin, tmax) {
        tmin = tmin || 0;
        tmax = tmax || Math.PI;

        for (let i = tmin; i < tmax; i += 0.005) {
            const xy = fxy(i);

            this.context.beginPath();
            this.context.arc(xy.x * 100 + 150, 350 - xy.y * 100, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }


    drawDot(x, y) {
        this.context.beginPath();
        this.context.arc(x * 100 + 150, 350 - y * 100, 3, 0, 2 * Math.PI);
        this.context.fill();
    }


    drawLine(x0, y0, x1, y1) {
        this.context.beginPath();
        this.context.moveTo(x0 * 100 + 150, 350 - y0 * 100);
        this.context.lineTo(x1 * 100 + 150, 350 - y1 * 100);
        this.context.stroke();
    }
}

