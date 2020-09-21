import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide22 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXII');

        this.drawMatrix(150, 100, [[1,0,0],[0,1,0],[0,0,1]]);
        this.drawText('•', 320, 175, 'left');
        this.drawMatrix(340, 100, [['x'], ['y'], ['z']]);
        this.drawText('→', 420, 175, 'left');
        this.drawText('   = 1 • x + 0 • y + 0 • 1 =  ', 470, 140, 'left');
        this.drawText('   = 0 • x + 1 • y + 0 • 1 =  ', 470, 170, 'left');
        this.drawText('   = 0 • x + 0 • y + 1 • z =  ', 470, 200, 'left');

        this.setColor(COLORS.accent);
        this.drawText('x\'                           x', 470, 140, 'left');
        this.drawText('y\'                           y', 470, 170, 'left');
        this.drawText('z\'                            z', 470, 200, 'left');

        this.setColor(COLORS.light);
        this.drawMatrix(150, 350, [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['0', '0', 1]]);
        this.drawText('•', 320, 425, 'left');
        this.drawMatrix(340, 350, [['x'], ['y'], [1]]);
        this.drawText('→', 420, 425, 'left');
        this.drawText('x\' = ax + by + c', 470, 410, 'left');
        this.drawText('y\' = dx + ey + f', 470, 440, 'left');
    }
}

