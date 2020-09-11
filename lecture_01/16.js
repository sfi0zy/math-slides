import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide16 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XVI');

        this.setColor(COLORS.light);

        const x0 = 0;
        const y0 = 0;
        const x1 = 0.7;
        const y1 = 0.2;
        const x2 = 0.2;
        const y2 = 0.7;
        const x3 = 1;
        const y3 = 1;

        this.drawGraphParametric(
            (t) => {
                return Math.pow(1-t, 3) * x0 + 3*Math.pow(1-t, 2) * t * x1 + 3*(1-t) * t*t * x2 + t * t * t * x3;
            },
            (t) => {
                return Math.pow(1-t, 3) * y0 + 3*Math.pow(1-t, 2) * t * y1 + 3*(1-t) * t*t * y2 + t*t*t * y3;
            },
            -0.3,
            Math.PI * 0.55
        );
        this.drawText('X = x(t) = (1-t)³x₀ + 3(1-t)²tx₁ + 3(1-t)t²x₂ + t³x₃', 350, 50, 'left');
        this.drawText('Y = y(t) = (1-t)³y₀ + 3(1-t)²ty₁ + 3(1-t)t²y₂ + t³y₃', 350, 80, 'left');

        this.setColor(COLORS.accent);

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

        this.drawText('t ∈ [0; 1]', 350, 430, 'left');
        this.setColor(COLORS.light);
        this.drawText('t ∈ [-1; ∞]', 350, 400, 'left');

        this.setColor(COLORS.dark);
        this.drawDot(x0, y0);
        this.drawDot(x1, y1);
        this.drawDot(x2, y2);
        this.drawDot(x3, y3);
        this.drawLine(x0, y0, x1, y1);
        this.drawLine(x2, y2, x3, y3);
        this.drawText('A: (0, 0)', 350, 110, 'left');
        this.drawText('B: (0.7, 0.2)', 350, 140, 'left');
        this.drawText('C: (0.2, 0.7)', 350, 170, 'left');
        this.drawText('D: (1, 1)', 350, 200, 'left');
    }
}

