import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide23 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXIII');

        this.drawText('translate₂ =', 110, 175, 'left');
        this.drawMatrix(230, 100, [
            ['1', '0', 'X'],
            ['0', '1', 'Y'],
            ['0', '0', '1']
        ]);

        this.drawText('rotate₂ =', 130, 400, 'left');
        this.drawMatrix(230, 325, [
            ['cos', '-sin', 0],
            ['sin',  'cos', 0],
            [    0,     0,  1]
        ]);

        this.drawText('scale₂ =', 410, 175, 'left');
        this.drawMatrix(500, 100, [
            ['X', '0', '0'],
            ['0', 'Y', '0'],
            ['0', '0', '1']
        ]);

        this.drawText('skew₂ =', 410, 400, 'left');
        this.drawMatrix(500, 325, [
            ['1', 'X', '0'],
            ['Y', '1', '0'],
            ['0', '0', '1']
        ]);
    }
}

