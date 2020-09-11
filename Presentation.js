export default class Presentation {
    constructor(root, slidesCollection) {
        this.root = root;
        this.slidesCollection = slidesCollection;
        this.slidesCache = [];
    }


    render() {
        for (let i = 0; i < this.slidesCollection.length; i++) {
            this.renderSlideByIndex(i);
        }
    }


    renderReverse() {
        for (let i = this.slidesCollection.length - 1; i >= 0; i--) {
            this.renderSlideByIndex(i);
        }
    }


    renderSlide(slide) {
        const canvas = document.createElement('canvas');

        this.root.appendChild(canvas);
        this.slidesCache.push(new slide(canvas));
    }


    renderSlideByIndex(index) {
        this.renderSlide(this.slidesCollection[index]);
    }


    renderLastSlide() {
        this.renderSlide(
            this.slidesCollection[this.slidesCollection.length - 1]
        );
    }
}

