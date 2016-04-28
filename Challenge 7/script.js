'use strict';

const fs = require('fs');
const subarray = require('max-subarray');

const input = 'testInput.txt';
const output = 'output.txt';

fs.unlink(output);

const UPPER = '.ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = '.abcdefghijklmnopqrstuvwxyz';

function kadane(array) {
    return subarray(array).reduce((ac, v) => ac += v, 0);
}

function findMaxSum(matrix, numCols, numRows) {
    let maxSum = 0;

    for (let left = 0; left < numCols; left++) {
        let temp = [];

        for (let i = 0; i < numRows; i++) {
            temp.push(0);
        }

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

let t = 1, index = 1, indexOfCase = 1;

const inputFile = fs.readFileSync(input).toString().split('\n');

const cases = +inputFile[0];

let r = 0, n = 0, m = 0, matrix = [], initializingMatrix = false, finishedCase = false;

while (t <= cases && index < inputFile.length) {

    const line = inputFile[index];

    if (index === indexOfCase) {
        n = +line.split(' ')[0];
        m = +line.split(' ')[1];

        // next case index
        matrix = [];
        indexOfCase += (n + 1);
        initializingMatrix = true;
        finishedCase = false;
    } else if (initializingMatrix) {
        let aux = [];

        for (let y = 0; y < m; y++) {
            let num = UPPER.indexOf(line[y]);
            if (num < 0) {
                num = LOWER.indexOf(line[y]) * -1;
            }
            aux.push(num);
        }
        matrix.push(aux);

        if (matrix.length === n) {
            initializingMatrix = false;
            finishedCase = true;
        }
    }
    if (finishedCase) {

        // if all the numbers are positive -> the max sum is Infinity
        if (matrix.every(x => x.every(y => y > 0))) {
            r = 'INFINITY';
            // if all numbers are negative -> the max sum is the empty rectangle, 0
        } else if (matrix.every(x => x.every(y => y < 0))) {
            r = 0;
            // otherwise, get the max sum of the rectangle
        } else {
            r = findMaxSum(matrix, m, n);
        }

        const result = `Case #${t}: ${r}`;

        console.log(result);

        fs.appendFileSync(output, result + '\n');

        t++;
    }
    index++;
}
