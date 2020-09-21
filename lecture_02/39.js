import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide39 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXIX');

        this.drawImage(400, 60, 'lenna');
        this.drawImage(400, 210, 'lenna');
        this.drawImage(400, 420, 'lenna');

        this.drawMatrix(150, 35, [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]);

        this.drawText('→', 540, 110, 'left');

        this.drawImageWithConvolveMatrixFilter(600, 60, 'lenna', [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ], 1);

        this.drawMatrix(150, 195, [
            [1, 2, 1],
            [2, 4, 2],
            [1, 2, 1],
        ]);

        this.drawText('1/9 • ', 100, 265, 'left');
        this.drawText('→', 540, 260, 'left');

        this.drawImageWithConvolveMatrixFilter(600, 210, 'lenna', [
            [1, 2, 1],
            [2, 4, 2],
            [1, 2, 1],
        ], 1/9);


        this.drawMatrix(100, 365, [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, 3, 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ]);

        this.drawText('1/25 • ', 30, 480, 'left');
        this.drawText('→', 540, 480, 'left');

        this.drawImageWithConvolveMatrixFilter(600, 430, 'lenna', [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, 3, 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ], 1/25);
    }
}

