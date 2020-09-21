import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';


export default class Slide28 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXVIII');

        this.drawCoordinates();

        this.setDefaultStyles();
        this.drawText('X', 720, 310);
        this.setColor(COLORS.dark);
        this.drawText('Y', 420, 100);
        this.setColor(COLORS.accent);
        this.drawText('Z', 80, 520);
        this.setDefaultStyles();

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
        this.drawLine3D(-0.5,  0.5, 7,  0.5,  0.5, 7);
        this.drawLine3D(-0.5, -0.5, 7,  0.5, -0.5, 7);
        this.drawLine3D(-0.5,  0.5, 7, -0.5, -0.5, 7);
        this.drawLine3D( 0.5,  0.5, 7,  0.5, -0.5, 7);
        this.drawLine3D(-0.5,  0.5, 7, -1,    1,   5);
        this.drawLine3D(-0.5, -0.5, 7, -1,   -1,   5);
        this.drawLine3D(0.5,   0.5, 7,  1,    1,   5);
        this.drawLine3D(0.5,  -0.5, 7,  1,   -1,   5);

        this.drawSmallAxis(0, 0, 7);


        this.setColor(COLORS.light);
        this.drawText('camera coords = [ view matrix ] • global coords', 400, 550, 'center');
    }
}

