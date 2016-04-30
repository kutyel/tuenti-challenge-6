'use strict';

const fs = require('fs');

fs.unlink('./output.txt');

function isImmiscible(number) {
    return /^1{1,}0{0,}$/.test(number.toString());
}

let cases = 0;

fs.readFileSync('./testInput.txt').toString().split('\n').forEach((num, t) => {

    let m = 1, ones = 0, zeroes = 0;

    if (t === 0) {
        cases = +num;
    } else if (t <= cases) {

        while (!isImmiscible(+num * m)) {
            m++;
        }

        let r = +num * m;
        ones = r.toString().split('').filter(x => x === '1').length;
        zeroes = r.toString().split('').filter(x => x === '0').length;

        const result = `Case #${t}: ${ones} ${zeroes}`;

        console.log(result);

        fs.appendFileSync('./output.txt', result + '\n');
    }
});
