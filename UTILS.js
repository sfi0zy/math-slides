function multiplyMatrices(a, b) {
    const m = new Array(a.length);

    for (let row = 0; row < a.length; row++) {
        m[row] = new Array(b[0].length);

        for (let column = 0; column < b[0].length; column++) {
            m[row][column] = 0;

            for (let i = 0; i < a[0].length; i++) {
                m[row][column] += a[row][i] * b[i][column];
            }
        }
    }

    return m;
}


const UTILS = Object.freeze({
    multiplyMatrices
});

export default UTILS;

