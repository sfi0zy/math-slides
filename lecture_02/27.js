import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';


export default class Slide27 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXVII');

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
        this.drawSmallAxis(0, 0, 0);

        this.setModelMatrix([
            [1, 0, 0, 1.5],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.setColor(COLORS.dark);
        this.drawDefaultBox3D();
        this.drawSmallAxis(0, 0, 0);

        this.setModelMatrix([
            [1, 0, 0, -1.5],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        this.setColor(COLORS.dark);
        this.drawDefaultBox3D();
        this.drawSmallAxis(0, 0, 0);

        this.setColor(COLORS.light);
        this.drawText('global coords = [ model matrix ] • model coords', 400, 550, 'center');
    }
}

