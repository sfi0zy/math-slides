import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';

export default class Slide30 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXX');

        this.setViewMatrix([
            [0.4, 0,                           0,                            0],
            [0,   0.4 * Math.cos(Math.PI / 2), 0.4 * -Math.sin(Math.PI / 2), 1],
            [0,   0.4 * Math.sin(Math.PI / 2), 0.4 * Math.cos(Math.PI / 2),  0],
            [0,   0,                           0,                            1]
        ]);

        this.drawCoordinates();

        this.setColor(COLORS.dark);
        this.drawDefaultBox3D();

        this.setModelMatrix([
            [1, 0, 0, 1.5],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.setColor(COLORS.dark);
        this.drawDefaultBox3D();

        this.setModelMatrix([
            [1, 0, 0, -1.5],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.setColor(COLORS.dark);
        this.drawDefaultBox3D();

        this.setModelMatrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ])

        this.setColor(COLORS.accent);
        this.drawLine3D(-1,  1, 5,  1,  1, 5);
        this.drawLine3D(-1, -1, 5,  1, -1, 5);
        this.drawLine3D(-1,  1, 5, -1, -1, 5);
        this.drawLine3D( 1,  1, 5,  1, -1, 5);
        this.drawLine3D(0, 0, 9, -3,    3,   -2);
        this.drawLine3D(0, 0, 9, -3,   -3,   -2);
        this.drawLine3D(0, 0, 9,  3,    3,   -2);
        this.drawLine3D(0, 0, 9,  3,   -3,   -2);
        this.drawLine3D(-3,  3, -2,  3,  3, -2);
        this.drawLine3D(-3, -3, -2,  3, -3, -2);
        this.drawLine3D(-3,  3, -2, -3, -3, -2);
        this.drawLine3D( 3,  3, -2,  3, -3, -2);
        this.drawText('near', 450, 400, 'left');
        this.drawText('far', 530, 130, 'left');
        this.setColor(COLORS.dark);
        this.drawDot3D(0, 0, 9);
        this.drawText('camera', 420, 550, 'left');

        this.setColor(COLORS.light);
        this.drawText('S = 1 / tan(α)',                70, 400, 'left');
        this.drawText('near = 1',                      70, 430, 'left');
        this.drawText('far = 10',                      70, 460, 'left');
        this.drawText('A = -far / (far - near)',       70, 490, 'left');
        this.drawText('B = -far • near / (far - near)', 70, 520, 'left');


        this.drawText('Projection matrix', 650, 300);

        this.drawMatrix(550, 350, [
            ['S', 0,   0,    0],
            [0,   'S', 0,    0],
            [0,   0,   'A', 'B'],
            [0,   0,  '-1',  0],
        ]);
    }
}

