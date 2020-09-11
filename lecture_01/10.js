import SlidePolar from '../SlidePolar.js';
import COLORS from '../COLORS.js';


export default class Slide10 extends SlidePolar {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('X');

        this.setColor(COLORS.light);
        this.drawGraphPolar((x) => {
            return (Math.sin(x) + Math.sin(x * 2) + 2) / 4;
        });
        this.drawText('f(φ) = (sin(φ) + sin(2 • φ) + 2) / 4', 470, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraphPolar((x) => {
            return (Math.sin(x) + Math.sin(x * 3) + 2) / 2;
        });
        this.drawText('f(φ) = (sin(φ) + sin(3 • φ) + 2) / 3', 470, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraphPolar((x) => {
            return Math.sin(x) + Math.sin(x * 4) + 2;
        });
        this.drawText('f(φ) = (sin(φ) + sin(4 • φ) + 2)', 470, 150, 'left');
    }
}

