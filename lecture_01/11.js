import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide11 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XI');

        this.setColor(COLORS.light);
        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (t) => {
                return t;
            },
            -1,
            Math.PI
        );
        this.drawText('X = y(t) = t', 500, 50, 'left');
        this.drawText('Y = x(t) = t', 500, 80, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (t) => {
                return t / 2;
            },
            -1,
            Math.PI
        );
        this.drawText('X = x(t) = t', 500, 130, 'left');
        this.drawText('Y = y(t) = t / 2', 500, 160, 'left');

        this.setColor(COLORS.accent);
        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (t) => {
                return (t / 2) - 1;
            },
            -1,
            Math.PI
        );
        this.drawText('X = x(t) = t', 500, 210, 'left');
        this.drawText('Y = y(t) = (t / 2) - 1', 500, 240, 'left');
    }
}

