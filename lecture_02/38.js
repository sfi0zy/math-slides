import SlideIllustrated from '../SlideIllustrated.js';
import COLORS from '../COLORS.js';


export default class Slide38 extends SlideIllustrated {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXVIII');

        this.drawText('Various', 50, 150, 'left');

        // 1
        this.drawImage(150, 100, 'lenna', [
            [0.2, 0,   0.2, 0],
            [0,   0.2, 0,   0],
            [0.2, 0,   0.2, 0],
            [0,   0,   0,   1]
        ]);

        // 2
        this.drawImage(250, 100, 'lenna', [
            [0.3, 0.7, 0.1, 0],
            [0.3, 0.6, 0.1, 0],
            [0.2, 0.5, 0.1, 0],
            [0,   0,   0,   1]
        ]);

        // 3
        this.drawImage(350, 100, 'lenna', [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        // 4
        this.drawImage(450, 100, 'lenna', [
            [ 1.3, -0.1, -0.1, -0.1],
            [-0.1,  1.3, -0.1, -0.1],
            [-0.1, -0.1,  1.3, -0.1],
            [ 0,    0,    0,    1]
        ]);

        // 5
        this.drawImage(550, 100, 'lenna', [
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 1]
        ]);

        // 6
        this.drawImage(650, 100, 'lenna', [
            [1.4, 0.1, 0,    0.1],
            [0.1, 1.4, 0,    0.1],
            [0.1, 0.1, 1.5, -0.1],
            [0,   0,   0,    1]
        ]);

        // 7
        this.drawImage(150, 200, 'lenna', [
            [0.2, 0,   0  , 0.2],
            [0,   0.2, 0,   0.2],
            [0,   0,   0.2, 0.2],
            [0,   0,   0,   1]
        ]);

        // 8
        this.drawImage(250, 200, 'lenna', [
            [1, 0.3, 0, 0],
            [0, 1,   0, 0],
            [0, 0.3, 1, 0],
            [0, 0,   0, 1]
        ]);

        // 9
        this.drawImage(350, 200, 'lenna', [
            [1.2, 0,   0,   0],
            [0,   1.2, 0,   0.3],
            [0,   0,   1.2, 0],
            [0,   0,   0,   1]
        ]);

        // 10
        this.drawImage(450, 200, 'lenna', [
            [0.3, 0.6, 0.1, -0.2],
            [0.3, 0.6, 0.1, -0.2],
            [0.3, 0.6, 0.1, -0.2],
            [0, 0, 0, 1]
        ]);

        // 11
        this.drawImage(550, 200, 'lenna', [
            [1,   0, 0,   0],
            [0.1, 1, 0.1, 0],
            [0,   0, 1,   0],
            [0,   0, 0,   1]
        ]);

        // 12
        this.drawImage(650, 200, 'lenna', [
            [1,   0,   0,   0],
            [0.1, 1,   0.1, 0],
            [0.1, 0.1, 1,   0],
            [0,   0,   0,   1]
        ]);

        // 13
        this.drawImage(150, 300, 'lenna', [
            [1, 0.3, 0, -0.2],
            [0, 1,   0,  0.3],
            [0, 0.3, 1, -0.2],
            [0, 0,   0,  1]
        ]);

        // 14
        this.drawImage(250, 300, 'lenna', [
            [0.2, 0.2, 0.2, 0],
            [0.2, 0.2, 0.2, 0.1],
            [0.2, 0.2, 0.2, 0],
            [0,   0,   0,   1]
        ]);

        // 15
        this.drawImage(350, 300, 'lenna', [
            [0.2, 0.2, 0.2, 0.3],
            [0.2, 0.2, 0.2, 0.3],
            [0.2, 0.2, 0.2, 0.5],
            [0,   0,   0,   1]
        ]);

        // 16
        this.drawImage(450, 300, 'lenna', [
            [1,   0,   0.5, -0.3],
            [0,   1.5, 0,    0.1],
            [0.5, 0,   1,   -0.3],
            [0,   0,   0,    1]
        ]);

        // 17
        this.drawImage(550, 300, 'lenna', [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        // 18
        this.drawImage(650, 300, 'lenna', [
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        // 19
        this.drawImage(150, 400, 'lenna', [
            [0.4, 0.6, 0.1, 0],
            [0.3, 0.7, 0.1, 0],
            [0.3, 0.6, 0.1, 0],
            [0,   0,   0,   1]
        ]);

        // 20
        this.drawImage(250, 400, 'lenna', [
            [1, 0, 0, -0.1],
            [0, 1, 0, -0.2],
            [0, 0, 1, -0.4],
            [0, 0, 0,  1]
        ]);

        // 21
        this.drawImage(350, 400, 'lenna', [
            [0.1, 0.2, 0.1, 0],
            [0.1, 0.2, 0.1, 0],
            [0.1, 0.2, 0.1, 0],
            [0, 0, 0, 1]
        ]);

        // 22
        this.drawImage(450, 400, 'lenna', [
            [1, 0, 0, -0.2],
            [0, 1, 0, 0],
            [0, 0, 1, -0.2],
            [0, 0, 0, 1]
        ]);

        // 23
        this.drawImage(550, 400, 'lenna', [
            [1,    -0.2, -0.2, 0],
            [-0.2, 1,    -0.2, 0.2],
            [-0.2, -0.2, 1,    0.2],
            [0,    0,    0,    1]
        ]);

        // 24
        this.drawImage(650, 400, 'lenna', [
            [1, 0, 0, 1],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.drawText('1',  230, 180, 'right');
        this.drawText('2',  330, 180, 'right');
        this.drawText('3',  430, 180, 'right');
        this.drawText('4',  530, 180, 'right');
        this.drawText('5',  630, 180, 'right');
        this.drawText('6',  730, 180, 'right');
        this.drawText('7',  230, 280, 'right');
        this.drawText('8',  330, 280, 'right');
        this.drawText('9',  430, 280, 'right');
        this.drawText('10', 530, 280, 'right');
        this.drawText('11', 630, 280, 'right');
        this.drawText('12', 730, 280, 'right');
        this.drawText('13', 230, 380, 'right');
        this.drawText('14', 330, 380, 'right');
        this.drawText('15', 430, 380, 'right');
        this.drawText('16', 530, 380, 'right');
        this.drawText('17', 630, 380, 'right');
        this.drawText('18', 730, 380, 'right');
        this.drawText('19', 230, 480, 'right');
        this.drawText('20', 330, 480, 'right');
        this.drawText('21', 430, 480, 'right');
        this.drawText('22', 530, 480, 'right');
        this.drawText('23', 630, 480, 'right');
        this.drawText('24', 730, 480, 'right');

    }
}

