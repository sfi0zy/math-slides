import SlideDefault from '../SlideDefault.js';
import COLORS from '../COLORS.js';


export default class Slide5 extends SlideDefault {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('V');

        this.setColor(COLORS.light);
        this.drawGraph((x) => {
            return 2 * Math.cos(3 * x);
        });
        this.drawText('f(x) = 2 • cos(3 • x)', 500, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraph((x) => {
            return Math.pow(x + 1, 2);
        });
        this.drawText('f(x) = (x + 1)²', 500, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraph((x) => {
            return 2 * Math.cos(3 * x) / Math.pow(x + 1, 2);
        });
        this.drawText('f(x) = 2 • cos(3 • x) / (x + 1)²', 500, 150, 'left');
    }
}

