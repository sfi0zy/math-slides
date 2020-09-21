import Slide from '../Slide.js';
import COLORS from '../COLORS.js';


export default class Slide21 extends Slide {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XXI');

        this.drawText('v₂ = (x, y)', 100, 100, 'left');
        this.drawText('v₃ = (x, y, z)', 100, 130, 'left');
        this.drawText('v₄ = (x, y, z, w)', 100, 160, 'left');

        this.drawText('color₃ = (r, g, b)', 300, 130, 'left');
        this.drawText('color₄ = (r, g, b, a)', 300, 160, 'left');

        this.drawText('angle₁ = (α)', 550, 100, 'left');
        this.drawText('angle₂ = (α, β)', 550, 130, 'left');
        this.drawText('angle₃ = (α, β, γ)', 550, 160, 'left');

        this.drawText('A₂ =', 100, 325, 'left');
        this.drawMatrix(150, 275, [['a','b'],['c','d']]);

        this.drawText('B₂ =', 300, 325, 'left');
        this.drawMatrix(350, 275, [['e','f'],['g','h']]);

        this.drawText('C₃ =', 500, 325, 'left');
        this.drawMatrix(550, 245, [['a','b','c'],['d','e','f'],['g','h','i']]);

        this.drawText('A • B ≠ B • A', 320, 500, 'left');
    }
}

