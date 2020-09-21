import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide24 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXIV');

        this.drawMatrix(100, 200, [
            ['1', '0', 'tx'],
            ['0', '1', 'ty'],
            ['0', '0', '1']
        ]);

        this.drawText('•', 280, 270, 'left');

        this.drawMatrix(310, 200, [
            ['sx', '0', '0'],
            ['0', 'sy', '0'],
            ['0', '0',  '1']
        ]);

        this.drawText('=', 485, 270, 'left');

        this.drawMatrix(520, 200, [
            ['sx', '0', 'tx'],
            ['0', 'sy', 'ty'],
            ['0', '0',  '1']
        ]);

        this.drawText('translate', 140, 450, 'left');
        this.drawText('scale', 370, 450, 'left');
        this.drawText('(translate + scale)', 520, 450, 'left');
    }
}

