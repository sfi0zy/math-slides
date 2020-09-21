import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide32 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXXII');

        this.drawText('1) Model XYZ • [         matrix ] = World XYZ', 50, 150, 'left');
        this.drawText('2) World XYZ • [       matrix ] = Camera XYZ', 50, 180, 'left');
        this.drawText('3) Camera XYZ • [             matrix ] = Normalized device coordinates', 50, 210, 'left');
        this.drawText('4) NDC XY • [ Viewport matrix ] = Screen / Canvas coordinates', 50, 240, 'left');

        this.setColor(COLORS.accent);
        this.drawText('Model', 205, 150, 'left');
        this.drawText('View', 210, 180, 'left');
        this.drawText('Projection', 225, 210, 'left');

        this.setColor(COLORS.light);
        this.drawText('XYZ • [ Model matrix ] • [ View matrix ] • [ Projection matrix ] = NDC', 50, 400, 'left');
        this.drawBox(30, 370, 700, 55);
    }
}

