import SlideDefault from '../SlideDefault.js';
import COLORS from '../COLORS.js';


export default class Slide2 extends SlideDefault {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('II');

        this.setColor(COLORS.light);
        this.drawGraph(Math.sin);
        this.drawText('f(x) = sin(x)', 500, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraph((x) => {
            return 2 * Math.sin(x);
        });
        this.drawText('f(x) = 2 • sin(x)', 500, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraph((x) => {
            return 0.5 * Math.sin(5 * x);
        });
        this.drawText('f(x) = 0.5 • sin(5 • x)', 500, 150, 'left');
    }
}

