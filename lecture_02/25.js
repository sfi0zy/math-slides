import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide25 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXV');

        this.drawText('matrix (a, b, c, d, e, f) =', 70, 200, 'left');
        this.drawMatrix(310, 125, [
            ['a', 'c', 'e'],
            ['b', 'd', 'f'],
            ['0', '0', '1']
        ]);

        this.drawText('~', 480, 200, 'left');
        this.drawMatrix(510, 100, [
            ['a', 'c', '0', 'e'],
            ['b', 'd', '0', 'f'],
            ['0', '0', '1', '0'],
            ['0', '0', '0', '1'],
        ]);

        this.drawText('matrix3d(a₁, b₁, c₁, d₁, a₂, b₂, c₂, d₂, a₃, b₃, c₃, d₃, a₄, b₄, c₄, d₄)', 70, 380, 'left');

        this.setColor(COLORS.dark);
        this.drawText('translate, translateX, translateY, translateZ', 70, 450, 'left');
        this.drawText('rotate, rotateX, rotateY, rotateZ', 70, 480, 'left');
        this.drawText('scale, scaleX, scaleY, scaleZ', 70, 510, 'left');
        this.drawText('skew, skewX, skewY', 70, 540, 'left');

        this.setColor(COLORS.dark);
        this.drawText('CSS', 150, 60, 'left');
        this.drawText('2D', 370, 60, 'left');
        this.drawText('3D', 600, 60, 'left');
    }
}

