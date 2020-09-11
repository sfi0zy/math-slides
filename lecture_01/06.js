import SlidePolar from '../SlidePolar.js';
import COLORS from '../COLORS.js';


export default class Slide6 extends SlidePolar {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('VI');

        this.setColor(COLORS.light);
        this.drawGraphPolar((x) => {
            return x / 5;
        }, 5 * Math.PI);
        this.drawText('R = f(φ) = φ / 5', 550, 50, 'left');
        this.drawText('φ ∈ [0; 5π]', 550, 80, 'left');
    }
}

