import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide14 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XIV');

        this.setColor(COLORS.light);
        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (() => {
                let y0 = 2;
                let v0 = 0;
                let localT = 0;
                let g = 10;
                let k = 0.8;

                return (t) => {
                    let y = y0 + v0 * localT - g * localT * localT / 2;

                    if (y <= 0) {
                        y = 0;
                        y0 = 0;
                        v0 = (-v0 + g * localT) * k;
                        localT = 0;
                    }

                    localT += 0.005;

                    return y;
                };
            })(),
            0,
            1.8 * Math.PI
        );
        this.drawText('X = x(t) = t', 400, 50, 'left');
        this.drawText('V = v(t) = v₀ + g • t', 400, 80, 'left');
        this.drawText('Y = y(t) = y₀ + v₀ • t + g • t² / 2', 400, 110, 'left');
        this.drawText('Vₙ = -V • k, k = 0.8', 400, 160, 'left');


        this.setColor(COLORS.dark);
        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (() => {
                let y0 = 2;
                let v0 = 0;
                let localT = 0;
                let g = 1.62;
                let k = 0.8;

                return (t) => {
                    let y = y0 + v0 * localT - g * localT * localT / 2;

                    if (y <= 0) {
                        y = 0;
                        y0 = 0;
                        v0 = (-v0 + g * localT) * k;
                        localT = 0;
                    }

                    localT += 0.005;

                    return y;
                };
            })(),
            0,
            1.8 * Math.PI
        );

        this.drawText('g = 1.62 (Moon)', 400, 450, 'left');

        this.setColor(COLORS.accent);

        this.drawGraphParametric(
            (t) => {
                return t;
            },
            (() => {
                let y0 = 2;
                let v0 = 0;
                let localT = 0;
                let g = 10;
                let k = 0.4;

                return (t) => {
                    let y = y0 + v0 * localT - g * localT * localT / 2;

                    if (y <= 0) {
                        y = 0;
                        y0 = 0;
                        v0 = (-v0 + g * localT) * k;
                        localT = 0;
                    }

                    localT += 0.005;

                    return y;
                };
            })(),
            0,
            1.8 * Math.PI
        );

        this.drawText('k = 0.4', 400, 500, 'left');
    }
}

