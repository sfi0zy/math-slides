import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide36 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXVI');

        this.drawText('Grayscale ? = ', 50, 200, 'left');
        this.drawMatrix(200, 100, [
            ['0.33', '0.33', '0.33', '0'],
            ['0.33', '0.33', '0.33', '0'],
            ['0.33', '0.33', '0.33', '0'],
            ['0', '0', '0', '1']
        ]);

        this.drawText('→', 585, 200, 'left');

        this.drawImage(450, 150, 'lenna', [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.drawImage(650, 150, 'lenna', [
            [0.33, 0.33, 0.33, 0],
            [0.33, 0.33, 0.33, 0],
            [0.33, 0.33, 0.33, 0],
            [0, 0, 0, 1]
        ]);

        this.drawText('Black & White', 50, 450, 'left');
        this.drawMatrix(200, 350, [
            ['R', 'G', 'B', '0'],
            ['R', 'G', 'B', '0'],
            ['R', 'G', 'B', '0'],
            ['0', '0', '0', '1']
        ]);

        this.drawImage(450, 400, 'lenna', [
            [0.3, 0.6, 0.1, 0],
            [0.3, 0.6, 0.1, 0],
            [0.3, 0.6, 0.1, 0],
            [0, 0, 0, 1]
        ]);

        this.drawImage(550, 400, 'lenna', [
            [0.5, 0.4, 0.1, 0],
            [0.5, 0.4, 0.1, 0],
            [0.5, 0.4, 0.1, 0],
            [0, 0, 0, 1]
        ]);

        this.drawImage(650, 400, 'lenna', [
            [0.04, 0.95, 0.01, 0],
            [0.04, 0.95, 0.01, 0],
            [0.04, 0.95, 0.01, 0],
            [0, 0, 0, 1]
        ]);
    }
}

