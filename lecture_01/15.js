import SlideParametric from '../SlideParametric.js';
import COLORS from '../COLORS.js';


export default class Slide15 extends SlideParametric {
    constructor(canvas) {
        super(canvas);

        this.drawNumber('XV');

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
                    let x = t;
                    let y = y0 + v0 * localT - g * localT * localT / 2;

                    if (y <= (1 - x / 4)) {
                        y = 1 - x / 4;
                        y0 = 1 - x / 4;
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
        this.drawText('Y = y(t) = y₀ + v₀ • t + g • t² / 2', 400, 50, 'left');

        this.setColor(COLORS.dark);
        this.drawGraph((x) => {
                return 1 - x / 4;
        }, -1, 2 * Math.PI);

        this.drawText('Y = f(x) = 1 - x / 4', 400, 100, 'left');

        this.setColor(COLORS.accent);
        this.drawGraphParametricXY(
            (() => {
                let y0 = 2;
                let x0 = 0;
                let vy0 = 0;
                let vx0 = 1;
                let localT = 0;
                let g = 10;
                let k = 0.8;

                return (t) => {
                    let x = x0 + vx0 * localT;
                    let y = y0 + vy0 * localT - g * localT * localT / 2;

                    if (y <= (1 - x / 4)) {
                        const vx = vx0;
                        const vy = vy0 - g * localT;

                        x0 = x;
                        vx0 = vx0 * 1.85;

                        y0 = 1 - x / 4;
                        vy0 = (-vy0 + g * localT) * k * 0.75;
                        localT = 0;
                    }

                    localT += 0.005;

                    return { x, y };
                };
            })(),
            0,
            1.8 * Math.PI
        );
        this.drawText('?', 400, 150, 'left');
    }
}

