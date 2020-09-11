import SlideDefault from '../SlideDefault.js';
import COLORS from '../COLORS.js';


export default class Slide4 extends SlideDefault {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('IV');

        this.setColor(COLORS.light);
        this.drawGraph(Math.sin);
        this.drawText('f(x) = sin(x)', 500, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraph((x) => {
            return 0.2 * Math.sin(5 * x);
        });
        this.drawText('f(x) = 0.2 • sin(5 • x)', 500, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraph((x) => {
            return Math.sin(x) + 0.2 * Math.sin(5 * x);
        });
        this.drawText('f(x) = sin(x) + 0.2 • sin(5 • x)', 500, 150, 'left');
    }
}

