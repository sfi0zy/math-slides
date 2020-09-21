import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';


export default class Slide31 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXI');

        const s = 1 / (Math.tan(90 * Math.PI / 360));
        const n = 0.001;
        const f = 10;

        this.setProjectionMatrix([
            [s, 0, 0,          0],
            [0, s, 0,          0],
            [0, 0, -(f)/(f-n), -f*n/(f-n)],
            [0, 0, -1,         0]
        ]);

        this.drawCoordinates();

        this.setColor(COLORS.dark);
        this.drawLine3D(1, 0, 0, 1, 0, 10);
        this.drawLine3D(2, 0, 0, 2, 0, 10);
        this.drawLine3D(3, 0, 0, 3, 0, 10);
        this.drawLine3D(-1, 0, 0, -1, 0, 10);
        this.drawLine3D(-2, 0, 0, -2, 0, 10);
        this.drawLine3D(-3, 0, 0, -3, 0, 10);
        this.drawLine3D(-3, 0, 1, 3, 0, 1);
        this.drawLine3D(-3, 0, 2, 3, 0, 2);
        this.drawLine3D(-3, 0, 3, 3, 0, 3);
        this.drawLine3D(-3, 0, 4, 3, 0, 4);
        this.drawLine3D(-3, 0, 5, 3, 0, 5);
        this.drawLine3D(-3, 0, 6, 3, 0, 6);
        this.drawLine3D(-3, 0, 7, 3, 0, 7);
        this.drawLine3D(-3, 0, 8, 3, 0, 8);

        this.setDefaultStyles();
        this.drawText('X', 720, 310);
        this.setColor(COLORS.dark);
        this.drawText('Y', 420, 100);
        this.setColor(COLORS.accent);
        this.drawText('Z', 100, 520);
        this.setDefaultStyles();

        this.drawText('X\' = X / (1 + 0.09 • W)', 100, 100, 'left');
        this.drawText('Y\' = Y / (1 + 0.09 • W)', 100, 130, 'left');

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
    }
}

