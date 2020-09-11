import SlidePolar from '../SlidePolar.js';
import COLORS from '../COLORS.js';


export default class Slide8 extends SlidePolar {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('VIII');

        this.setColor(COLORS.light);
        this.drawGraphPolar((x) => {
            return Math.sin(5 * x);
        });
        this.drawText('R = f(φ) = sin(5 • φ)', 500, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphPolar((x) => {
            return 2 * Math.sin(5 * x + 1);
        });
        this.drawText('R = f(φ) = 2 • sin(5 • φ + 1)', 500, 100, 'left');
    }
}

