import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';


export default class Slide29 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXIX');

        this.setModelMatrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);

        this.setViewMatrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);

        this.setProjectionMatrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);

        this.drawCoordinates();

        this.setColor(COLORS.light);
        this.drawText('X', 720, 310);
        this.setColor(COLORS.dark);
        this.drawText('Y', 420, 100);

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
        ]);

        this.setColor(COLORS.accent);
        this.drawLine3D(-2,  2, 5,  2,  2, 5);
        this.drawLine3D(-2, -2, 5,  2, -2, 5);
        this.drawLine3D(-2,  2, 5, -2, -2, 5);
        this.drawLine3D( 2,  2, 5,  2, -2, 5);
        this.drawLine3D(-0.5,  0.5, 7,  0.5,  0.5, 7);
        this.drawLine3D(-0.5, -0.5, 7,  0.5, -0.5, 7);
        this.drawLine3D(-0.5,  0.5, 7, -0.5, -0.5, 7);
        this.drawLine3D( 0.5,  0.5, 7,  0.5, -0.5, 7);
        this.drawLine3D(-0.5,  0.5, 7, -2,    2,   5);
        this.drawLine3D(-0.5, -0.5, 7, -2,   -2,   5);
        this.drawLine3D(0.5,   0.5, 7,  2,    2,   5);
        this.drawLine3D(0.5,  -0.5, 7,  2,   -2,   5);

        this.setColor(COLORS.light);
        this.drawText('screen coords = [ projection matrix ] • camera coords', 400, 550, 'center');
    }
}

