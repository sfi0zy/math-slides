import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';

export default class Slide33 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXIII');

        this.setViewMatrix([
            [0.4, 0, 0, 0],
            [0, 0.4 * Math.cos(Math.PI / 2), 0.4 * -Math.sin(Math.PI / 2), 1],
            [0, 0.4 * Math.sin(Math.PI / 2), 0.4 * Math.cos(Math.PI / 2), 0],
            [0, 0, 0, 1]
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

        const a = 0.1;

        this.setModelMatrix([
            [Math.cos(a), 0, -Math.sin(a), -0.2],
            [0, 1, 0, 0],
            [Math.sin(a), 0, Math.cos(a), 0],
            [0, 0, 0, 1]
        ]);

        this.drawCamera();

        this.setModelMatrix([
            [Math.cos(-a), 0, -Math.sin(-a), 0.2],
            [0, 1, 0, 0],
            [Math.sin(-a), 0, Math.cos(-a), 0],
            [0, 0, 0, 1]
        ]);

        this.drawCamera();

        this.setColor(COLORS.dark);
        this.drawText('camera #1', 250, 580, 'left');
        this.drawText('camera #2', 450, 580, 'left');
    }


    drawCamera() {
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
        this.drawLine3D(0, 0, -3, 0, 0, 9);
        this.setColor(COLORS.dark);
        this.drawDot3D(0, 0, 9);
    }
}

