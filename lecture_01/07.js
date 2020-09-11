import SlidePolar from '../SlidePolar.js';
import COLORS from '../COLORS.js';


export default class Slide7 extends SlidePolar {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('VII');

        this.setColor(COLORS.light);
        this.drawGraph(Math.sin);
        this.drawText('Y = f(x) = sin(x)', 500, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphPolar(Math.sin);
        this.drawText('R = f(φ) = sin(φ)', 500, 100, 'left');
    }
}

