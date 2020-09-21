import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide35 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXV');

        this.drawText('brightness = ', 50, 200, 'left');
        this.drawMatrix(200, 100, [
            ['1', '0', '0', 'B'],
            ['0', '1', '0', 'B'],
            ['0', '0', '1', 'B'],
            ['0', '0', '0', '1']
        ]);

        this.drawImage(450, 150, 'lenna', [
            [1, 0, 0, -0.5],
            [0, 1, 0, -0.5],
            [0, 0, 1, -0.5],
            [0, 0, 0, 1]
        ]);

        this.drawImage(550, 150, 'lenna', [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.drawImage(650, 150, 'lenna', [
            [1, 0, 0, 0.5],
            [0, 1, 0, 0.5],
            [0, 0, 1, 0.5],
            [0, 0, 0, 1]
        ]);

        this.drawText('contrast = ', 50, 450, 'left');
        this.drawMatrix(200, 350, [
            ['C', '0', '0', 'T'],
            ['0', 'C', '0', 'T'],
            ['0', '0', 'C', 'T'],
            ['0', '0', '0', '1']
        ]);

        this.drawImage(450, 400, 'lenna', [
            [0.4, 0, 0, 0.3],
            [0, 0.4, 0, 0.3],
            [0, 0, 0.4, 0.3],
            [0, 0, 0, 1]
        ]);

        this.drawImage(550, 400, 'lenna', [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.drawImage(650, 400, 'lenna', [
            [2, 0, 0, -0.5],
            [0, 2, 0, -0.5],
            [0, 0, 2, -0.5],
            [0, 0, 0, 1]
        ]);

        this.setColor(COLORS.dark);
        this.drawText('T = (1 - C) / 2', 550, 550, 'left');
    }
}

