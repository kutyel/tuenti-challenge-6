'use strict';

const fs = require('fs');
const subarray = require('max-subarray');

fs.unlink('./output.txt');

const upper = '.ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = '.abcdefghijklmnopqrstuvwxyz';

function kadane(array) {
    return subarray(array).reduce((ac, v) => ac += v, 0);
}

// https://prismoskills.appspot.com/lessons/Dynamic_Programming/Chapter_07_-_Submatrix_with_largest_sum.jsp
function findMaxSum(matrix, numCols, numRows) {
    let maxSum = 0;

    for (let left = 0; left < numCols; left++) {
        // TODO make this dynamic
        let temp = [0, 0, 0];

        for (let right = left; right < numCols; right++) {
            // Find sum of every mini-row between left and right columns and save it leto temp[]
            for (let i = 0; i < numRows; ++i) {
                temp[i] += matrix[i][right];
            }
            // Find the maximum sum subarray in temp[].
            let sum = kadane(temp);

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

fs.readFileSync('./input.txt').toString().split('\n').forEach((line, t) => {

    let cases = 0, r = 0, x = 0, y = 0;

    if (t === 0) {
        cases = line;
    } else if (t <= cases) {

        if (t === 1) {
            x = line.split(' ')[0];
            y = line.split(' ')[1];
        } else {

            // run the matrix
            for (let i = 0; i <= x; i++) {
                for (let j = 0; j <= y; j++) {

                }
            }

            const result = `Case #${t}: ${r}`;

            console.log(result);

            fs.appendFileSync('./output.txt', result + '\n');
        }
    }
});
