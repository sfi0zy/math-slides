import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide13 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XIII');

        this.setColor(COLORS.light);
        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (t) => {
                return 2 * Math.abs(Math.cos(t));
            },
            0,
            2 * Math.PI
        );
        this.drawText('X = x(t) = t', 400, 50, 'left');
        this.drawText('Y = y(t) = 2 • |cos(t)|', 400, 80, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphParametric(
            (t) => {
                return 5 * t / (t + 1);
            },
            (t) => {
                return 2 * Math.abs(Math.cos(5 * t)) / (t*t + 1);
            },
            0,
            2 * Math.PI
        );
        this.drawText('X = x(t) = 5 • t / (t + 1)', 400, 400, 'left');
        this.drawText('Y = y(t) = 2 • |cos(5 • t)| / (t² + 1)', 400, 430, 'left');
        this.drawText('t ∈ [0; 2π]', 400, 460, 'left');
    }
}

