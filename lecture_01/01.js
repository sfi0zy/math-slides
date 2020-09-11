import SlideDefault from '../SlideDefault.js';
import COLORS from '../COLORS.js';


export default class Slide1 extends SlideDefault {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('I');

        this.setColor(COLORS.light);
        this.drawGraph(Math.sin);
        this.drawText('f(x) = sin(x)', 500, 50, 'left');
        this.drawText('x ∈ [0; 2π]', 500, 80, 'left');
    }
}

