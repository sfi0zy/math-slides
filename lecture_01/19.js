import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide19 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XIX');

        this.setColor(COLORS.light);

        let x0 = -1;
        let y0 = 1;
        let x1 = 0;
        let y1 = -1;
        let x2 = 1;
        let y2 = -1;
        let x3 = 2;
        let y3 = 0;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            0,
            1
        );

        this.drawText('X = x(t) = (1-t)³x₀ + 3(1-t)²tx₁ + 3(1-t)t²x₂ + t³x₃', 250, 50, 'left');
        this.drawText('Y = y(t) = (1-t)³y₀ + 3(1-t)²ty₁ + 3(1-t)t²y₂ + t³y₃', 250, 80, 'left');
        this.drawText('t ∈ [0; 1]', 250, 110, 'left');

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);

        this.setColor(COLORS.accent);

        x0 = 2;
        y0 = 0;
        x1 = 3;
        y1 = 1;
        x2 = 4;
        y2 = 0;
        x3 = 2;
        y3 = -1;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            0,
            1
        );

        this.drawText('t ∈ [0; 1]', 250, 140, 'left');

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);

        this.setColor(COLORS.light);

        x0 = 2;
        y0 = -1;
        x1 = 0;
        y1 = -2;
        x2 = 2;
        y2 = -2;
        x3 = 3;
        y3 = -2;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            0,
            1
        );

        this.drawText('t ∈ [0; 1]', 250, 170, 'left');

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);

        this.setColor(COLORS.accent);

        x0 = 3;
        y0 = -2;
        x1 = 4;
        y1 = -2;
        x2 = 5;
        y2 = 0;
        x3 = 4;
        y3 = 2;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            0,
            1
        );

        this.drawText('t ∈ [0; 1]', 250, 200, 'left');

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);
    }
}

