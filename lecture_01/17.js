import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide17 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XVII');

        this.setColor(COLORS.light);

        let x0 = 0;
        let y0 = 1;
        let x1 = 2;
        let y1 = 1;
        let x2 = 0;
        let y2 = -1;
        let x3 = 1;
        let y3 = 3;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            0,
            Math.PI * 0.55
        );

        this.drawText('X = x(t) = (1-t)³x₀ + 3(1-t)²tx₁ + 3(1-t)t²x₂ + t³x₃', 350, 50, 'left');
        this.drawText('Y = y(t) = (1-t)³y₀ + 3(1-t)²ty₁ + 3(1-t)t²y₂ + t³y₃', 350, 80, 'left');
        this.drawText('t ∈ [0; ∞]', 350, 110, 'left');

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);

        this.setColor(COLORS.accent);

        x0 = 3;
        y0 = -1;
        x1 = 5;
        y1 = -2;
        x2 = 5;
        y2 = 0;
        x3 = 2;
        y3 = 2;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            0,
            Math.PI * 0.55
        );

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);
    }
}

