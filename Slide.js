import COLORS from './COLORS.js';


export default class Slide {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 650;
        this.context = this.canvas.getContext('2d');
        this.setColor(COLORS.background);
        this.context.fillRect(0, 0, 800, 650);
        this.setDefaultStyles();
    }


    setDefaultStyles() {
        this.setColor(COLORS.light);
        this.context.lineWidth = 2;
        this.context.lineCap = 'round';
        this.context.lineJoin = 'round';
        this.context.font = '20px Architects Daughter';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
    }


    setColor(color) {
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
    }


    drawText(text, x, y, align) {
        this.context.textAlign = align || 'center';
        this.context.fillText(text, x, y);
    }


    drawMatrix(positionX, positionY, matrix) {
        const height = matrix.length * 50;
        const width  = matrix[0].length * 50;

        this.context.beginPath();
        this.context.moveTo(positionX, positionY);
        this.context.lineTo(positionX, positionY + height);
        this.context.moveTo(positionX, positionY);
        this.context.lineTo(positionX + 10, positionY);
        this.context.moveTo(positionX, positionY + height);
        this.context.lineTo(positionX + 10, positionY + height);

        this.context.moveTo(positionX + width, positionY);
        this.context.lineTo(positionX + width, positionY + height);
        this.context.moveTo(positionX + width, positionY);
        this.context.lineTo(positionX + width - 10, positionY);
        this.context.moveTo(positionX + width, positionY + height);
        this.context.lineTo(positionX + width - 10, positionY + height);
        this.context.stroke();

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                this.drawText(
                    matrix[y][x],
                    positionX + x * 50 + 25,
                    positionY + y * 50 + 25,
                    'center'
                );
            }
        }
    }


    drawNumber(number) {
        this.setColor(COLORS.light);
        this.drawText(number, 770, 620, 'right');
    }


    drawBox(x, y, width, height) {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.stroke();
    }
}

