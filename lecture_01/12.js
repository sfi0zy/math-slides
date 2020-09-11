import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide12 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XII');

        this.setColor(COLORS.light);
        this.drawGraphParametric(
            (t) => {
                return Math.sin(t);
            },
            (t) => {
                return Math.cos(t);
            },
            0,
            2 * Math.PI
        );
        this.drawText('X = x(t) = sin(t)', 500, 50, 'left');
        this.drawText('Y = y(t) = cos(t)', 500, 80, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphParametric(
            (t) => {
                return 2 * Math.sin(t) + 2;
            },
            (t) => {
                return Math.cos(t) + 1;
            },
            0,
            2 * Math.PI
        );
        this.drawText('X = x(t) = 2 • sin(t) + 2', 500, 130, 'left');
        this.drawText('Y = y(t) = cos(t) + 1', 500, 160, 'left');

        this.setColor(COLORS.accent);
        this.drawGraphParametric(
            (t) => {
                return Math.sin(t) + 3;
            },
            (t) => {
                return Math.cos(5 * t) - 1.5;
            },
            0,
            2 * Math.PI
        );
        this.drawText('X = x(t) = sin(t) + 3', 500, 210, 'left');
        this.drawText('Y = y(t) = cos(5 • t) - 1.5', 500, 240, 'left');

    }
}

