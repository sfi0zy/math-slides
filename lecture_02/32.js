import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide32 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXII');

        this.drawText('1) World XYZ = [         matrix ] • Model XYZ', 50, 150, 'left');
        this.drawText('2) Camera XYZ = [       matrix ] • World XYZ', 50, 180, 'left');
        this.drawText('3) Normalized device coordinates = [             matrix ] • Camera XYZ', 50, 210, 'left');
        this.drawText('4) Screen / Canvas coordinates = [ Viewport matrix ] • NDC XY', 50, 240, 'left');

        this.setColor(COLORS.accent);
        this.drawText('Model', 210, 150, 'left');
        this.drawText('View', 235, 180, 'left');
        this.drawText('Projection', 395, 210, 'left');

        this.setColor(COLORS.light);
        this.drawText('NDC = [ Projection matrix ] • [ View matrix ] • [ Model matrix ] • XYZ', 50, 400, 'left');
        this.drawBox(30, 370, 700, 55);
    }
}

