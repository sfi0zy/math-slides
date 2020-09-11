import SlideDefault from '../SlideDefault.js';
import COLORS from '../COLORS.js';


export default class Slide3 extends SlideDefault {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('III');

        this.setColor(COLORS.light);
        this.drawGraph(Math.sin);
        this.drawText('f(x) = sin(x)', 500, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraph((x) => {
            return Math.sin(x) + 1;
        });
        this.drawText('f(x) = sin(x) + 1', 500, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraph((x) => {
            return Math.sin(x + 1);
        });
        this.drawText('f(x) = sin(x + 1)', 500, 150, 'left');
    }
}

