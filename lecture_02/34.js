import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide34 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXIV');

        this.drawText('new color = ', 170, 300, 'left');
        this.drawMatrix(300, 200, [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]);
        this.drawText('effect', 365, 300, 'left');
        this.drawText('• old color', 520, 300, 'left');
    }
}

