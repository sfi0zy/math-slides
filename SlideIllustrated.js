import Slide from './Slide.js';
import COLORS from './COLORS.js';
import UTILS from './UTILS.js';


export default class SlideIllustrated extends Slide {
    constructor(canvas) {
        super(canvas);
    }


    drawImage(x, y, id, filter) {
        const image = document.getElementById(id);

        switch (typeof filter) {
            case 'string':
                this.renderImageWithStandardFilter(x, y, image, filter);
                break;
            case 'object':
                this.renderImageWithMatrixFilter(x, y, image, filter);
                break;
            default:
                this.renderImageWithoutFilter(x, y, image);
                break;
        }
    }


    drawImageWithConvolveMatrixFilter(x, y, id, filter, factor) {
        const image = document.getElementById(id);

        this.renderImageWithConvolveMatrixFilter(x, y, image, filter, factor);
    }


    renderImageWithoutFilter(x, y, image) {
        this.context.drawImage(image, x, y, 100, 100);
    }


    renderImageWithStandardFilter(x, y, image, filter) {
        this.context.filter = filter;
        this.context.drawImage(image, x, y, 100, 100);
        this.context.filter = 'none';
    }


    renderImageWithMatrixFilter(x, y, image, filter) {
        this.context.drawImage(image, x, y, 100, 100);

        const imageData = this.context.getImageData(x, y, 100, 100);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const color = UTILS.multiplyMatrices(filter,
                [
                    [data[i]],
                    [data[i + 1]],
                    [data[i + 2]],
                    [data[i + 3]]
                ]
            );

            data[i]     = color[0];
            data[i + 1] = color[1];
            data[i + 2] = color[2];
            data[i + 3] = color[3];
        }

        this.context.putImageData(imageData, x, y);
    }


    renderImageWithConvolveMatrixFilter(positionX, positionY, image, filter, factor) {
        this.context.drawImage(image, positionX, positionY, 100, 100);

        const imageData = this.context.getImageData(positionX, positionY, 100, 100);
        const data = imageData.data;
        const newImageData = this.context.createImageData(imageData);
        const newData = newImageData.data;

        const delta = (filter[0].length - 1) / 2;

        for (let pixel = 0; pixel < data.length; pixel += 4) {
            let y = Math.floor(pixel / 100);
            let x = pixel % 100;

            let R = 0;
            let G = 0;
            let B = 0;
            let A = 255;

            for (let i = -delta; i < delta; i++) {
                for (let j = -delta; j < delta; j++) {
                    const partPixel = (y + j*4) * 100 + x + i*4;
                    const multiplier = filter[j + delta][i + delta];

                    if (data[partPixel]) {
                        R += data[partPixel]     * multiplier;
                        G += data[partPixel + 1] * multiplier;
                        B += data[partPixel + 2] * multiplier;
                    } else {
                        R += data[pixel]     * multiplier;
                        G += data[pixel + 1] * multiplier;
                        B += data[pixel + 2] * multiplier;
                    }
                }
            }

            newData[pixel]     = R * factor;
            newData[pixel + 1] = G * factor;
            newData[pixel + 2] = B * factor;
            newData[pixel + 3] = A;
        }

        this.context.putImageData(newImageData, positionX, positionY);
    }
}

