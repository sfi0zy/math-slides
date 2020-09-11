import SlidePolar from '../SlidePolar.js';
import COLORS from '../COLORS.js';


export default class Slide9 extends SlidePolar {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('IX');

        this.setColor(COLORS.light);
        this.drawGraphPolar((x) => {
            return Math.sin(x) + 0.2 * Math.sin(2 * x);
        });
        this.drawText('f(φ) = sin(φ) + 0.2 • sin(2 • φ)', 470, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphPolar((x) => {
            return 2 * Math.sin(x) + 0.2 * Math.sin(10 * x);
        });
        this.drawText('f(φ) = 2 • sin(φ) + 0.2 • sin(10 • φ)', 470, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraphPolar((x) => {
            return Math.sin(3 * x - Math.PI / 2) * Math.sin(4 * x);
        });
        this.drawText('f(φ) = sin(3 • φ - π / 2) • sin(4 • φ)', 470, 150, 'left');
    }
}

