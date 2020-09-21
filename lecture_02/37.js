import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide37 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXVII');

        this.drawText('saturation = ', 50, 200, 'left');
        this.drawMatrix(200, 100, [
            ['R+S', 'G', 'B', '0'],
            ['R', 'G+S', 'B', '0'],
            ['R', 'G', 'B+S', '0'],
            ['0', '0', '0', '1']
        ]);

        let s = 0.3;
        let r = (1 - s) * 0.3;
        let g = (1 - s) * 0.6;
        let b = (1 - s) * 0.1;

        this.drawImage(450, 150, 'lenna', [
            [r+s, g, b, 0],
            [r, g+s, b, 0],
            [r, g, b+s, 0],
            [0, 0, 0, 1]
        ]);

        s = 1;
        r = (1 - s) * 0.3;
        g = (1 - s) * 0.6;
        b = (1 - s) * 0.1;

        this.drawImage(550, 150, 'lenna', [
            [r+s, g, b, 0],
            [r, g+s, b, 0],
            [r, g, b+s, 0],
            [0, 0, 0, 1]
        ]);

        s = 2;
        r = (1 - s) * 0.3;
        g = (1 - s) * 0.6;
        b = (1 - s) * 0.1;

        this.drawImage(650, 150, 'lenna', [
            [r+s, g, b, 0],
            [r, g+s, b, 0],
            [r, g, b+s, 0],
            [0, 0, 0, 1]
        ]);

        this.drawText('S = saturation', 200, 400, 'left');
        this.drawText('R = (1 - S) • 0.3086', 200, 430, 'left');
        this.drawText('G = (1 - S) • 0.6034', 200, 460, 'left');
        this.drawText('B = (1 - S) • 0.0820', 200, 490, 'left');
    }
}

