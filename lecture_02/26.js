import Slide3D from '../Slide3D.js';
import COLORS from '../COLORS.js';
import UTILS from '../UTILS.js';


export default class Slide26 extends Slide3D {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXVI');

        this.drawCoordinates();

        this.setDefaultStyles();
        this.drawText('X', 720, 310);
        this.setColor(COLORS.dark);
        this.drawText('Y', 420, 100);
        this.setColor(COLORS.accent);
        this.drawText('Z', 80, 520);

        this.setColor(COLORS.dark);
        this.drawDefaultBox3D();

        this.drawDot3D(0, 0, 0);
        this.drawDot3D(1, 0, 0);
        this.drawDot3D(0, 0, 1);
        this.drawDot3D(1, 0, 1);
        this.drawDot3D(0, 1, 0);
        this.drawDot3D(1, 1, 0);
        this.drawDot3D(0, 1, 1);
        this.drawDot3D(1, 1, 1);

        this.setDefaultStyles();
        this.drawText('A', 370, 335);
        this.drawText('B', 460, 340);
        this.drawText('C', 490, 290);
        this.drawText('D', 405, 285);

        this.drawText('A\'', 370, 245);
        this.drawText('B\'', 460, 250);
        this.drawText('C\'', 490, 200);
        this.drawText('D\'', 405, 195);
    }
}

