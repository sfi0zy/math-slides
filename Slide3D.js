import Slide from './Slide.js';
import COLORS from './COLORS.js';
import UTILS from './UTILS.js';

const CENTER_X = 400;
const CENTER_Y = 300;
const SCALE = 100;

export default class Slide3D extends Slide {
    constructor(canvas) {
        super(canvas);

        this.setModelMatrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);

        const a = 0.3;
        const b = -0.05;
        const c = 0.2;

        this.setViewMatrix(UTILS.multiplyMatrices([
            [Math.cos(a), 0, -Math.sin(a), 0],
            [0, 1, 0, 0],
            [Math.sin(a), 0, Math.cos(a), 0],
            [0, 0, 0, 1],
        ], UTILS.multiplyMatrices([
            [Math.cos(b), -Math.sin(b), 0, 0],
            [Math.sin(b), Math.cos(b), 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ], [
            [1, 0, 0, 0],
            [0, Math.cos(c), -Math.sin(c), 0],
            [0, Math.sin(c), Math.cos(c), 0],
            [0, 0, 0, 1]
        ])));

        this.setProjectionMatrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);
    }


    setModelMatrix(matrix) {
        this.modelMatrix = matrix;
    }


    setViewMatrix(matrix) {
        this.viewMatrix = matrix;
    }


    setProjectionMatrix(matrix) {
        this.projectionMatrix = matrix;
    }


    drawCoordinates() {
        this.setDefaultStyles();
        this.drawLine3D(-3, 0, 0, 3, 0, 0);
        this.drawDot3D(3, 0, 0);
        this.setColor(COLORS.dark);
        this.drawLine3D(0, -2, 0, 0, 2, 0);
        this.drawDot3D(0, 2, 0);
        this.setColor(COLORS.accent);
        this.drawLine3D(0, 0, -3, 0, 0, 10);
        this.drawDot3D(0, 0, 10);
        this.setDefaultStyles();
    }


    drawDot3D(x, y, z, withPerspective) {
        let A = [[x], [y], [z], [1]];

        A = UTILS.multiplyMatrices(this.projectionMatrix,
                UTILS.multiplyMatrices(this.viewMatrix,
                    UTILS.multiplyMatrices(this.modelMatrix, A)));

        A[0] = A[0] / (1 + A[3] * 0.09);
        A[1] = A[1] / (1 + A[3] * 0.09);
        A[2] = A[2] / (1 + A[3] * 0.09);

        this.context.beginPath();
        this.context.arc(CENTER_X + SCALE * A[0], CENTER_Y - SCALE * A[1], 5, 0, 2 * Math.PI);
        this.context.fill();
    }


    drawLine3D(x0, y0, z0, x1, y1, z1) {
        let A = [[x0], [y0], [z0], [1]];

        A = UTILS.multiplyMatrices(this.projectionMatrix,
                UTILS.multiplyMatrices(this.viewMatrix,
                    UTILS.multiplyMatrices(this.modelMatrix, A)));

        let B = [[x1], [y1], [z1], [1]];

        B = UTILS.multiplyMatrices(this.projectionMatrix,
                UTILS.multiplyMatrices(this.viewMatrix,
                    UTILS.multiplyMatrices(this.modelMatrix, B)));

        A[0] = A[0] / (1 + A[3] * 0.09);
        A[1] = A[1] / (1 + A[3] * 0.09);
        A[2] = A[2] / (1 + A[3] * 0.09);
        B[0] = B[0] / (1 + B[3] * 0.09);
        B[1] = B[1] / (1 + B[3] * 0.09);
        B[2] = B[2] / (1 + B[3] * 0.09);

        this.context.beginPath();
        this.context.moveTo(CENTER_X + SCALE * A[0], CENTER_Y - SCALE * A[1]);
        this.context.lineTo(CENTER_X + SCALE * B[0], CENTER_Y - SCALE * B[1]);
        this.context.stroke();
    }


    drawDefaultBox3D() {
        this.drawLine3D(0,0,0,  1,0,0);
        this.drawLine3D(0,0,0,  0,0,1);
        this.drawLine3D(1,0,1,  1,0,0);
        this.drawLine3D(1,0,1,  0,0,1);

        this.drawLine3D(0,1,0,  1,1,0);
        this.drawLine3D(0,1,0,  0,1,1);
        this.drawLine3D(1,1,1,  1,1,0);
        this.drawLine3D(1,1,1,  0,1,1);

        this.drawLine3D(0,0,0,  0,1,0);
        this.drawLine3D(1,0,0,  1,1,0);
        this.drawLine3D(0,0,1,  0,1,1);
        this.drawLine3D(1,0,1,  1,1,1);
    }


    drawSmallAxis(x, y, z) {
        this.setColor(COLORS.light);
        this.drawLine3D(x, y, z, x + 0.3, y, z);
        this.drawDot3D(x + 0.3, y, z);
        this.setColor(COLORS.dark);
        this.drawLine3D(x, y, z, x, y + 0.3, z);
        this.drawDot3D(x, y + 0.3, z);
        this.setColor(COLORS.accent);
        this.drawLine3D(x, y, z, x, y, z + 0.5);
        this.drawDot3D(x, y, z + 0.5);
    }
}

