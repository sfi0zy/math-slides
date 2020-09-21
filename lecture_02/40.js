import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide40 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXX');

        this.drawImage(400, 60, 'lenna');
        this.drawImage(400, 430, 'lenna');

        this.drawMatrix(150, 35, [
            [-1, 0, -1],
            [ 0, 2,  0],
            [-1, 0, -1],
        ]);

        this.drawImageWithConvolveMatrixFilter(600, 60, 'lenna', [
            [-1, 0, -1],
            [ 0, 2,  0],
            [-1, 0, -1],
        ], 1);

        this.drawMatrix(150, 195, [
            [-1, -1,  -1],
            [-1, 'A', -1],
            [-1, -1,  -1],
        ]);

        this.drawText('→', 540, 110, 'left');

        this.drawImageWithConvolveMatrixFilter(400, 210, 'lenna', [
            [-1, -1, -1],
            [-1,  4, -1],
            [-1, -1, -1],
        ], 1);

        this.drawImageWithConvolveMatrixFilter(500, 210, 'lenna', [
            [-1, -1,   -1],
            [-1,  3.6, -1],
            [-1, -1,   -1],
        ], 1);

        this.drawImageWithConvolveMatrixFilter(600, 210, 'lenna', [
            [-1, -1,   -1],
            [-1,  3.1, -1],
            [-1, -1,   -1],
        ], 1);

        this.drawMatrix(100, 365, [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, '-A', 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ]);

        this.drawText('1/25 • ', 30, 480, 'left');

        this.drawImageWithConvolveMatrixFilter(500, 430, 'lenna', [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, -3, 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ], 1/25);

        this.drawImageWithConvolveMatrixFilter(600, 430, 'lenna', [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, -10, 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ], 1/25);
    }
}

