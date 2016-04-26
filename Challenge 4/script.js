'use strict';

const fs = require('fs');
// reset the output file
fs.unlink('./output.txt');

const incompleteCombos = [
    ['L-LD-D-RD-R'],
    ['D-RD-R'],
    ['R-D-RD'],
    ['D-LD-L'],
    ['R-RD-D-LD-L']
];

const completeCombos = [
    ['L-LD-D-RD-R-P'],
    ['D-RD-R-P'],
    ['R-D-RD-P'],
    ['D-LD-L-K'],
    ['R-RD-D-LD-L-K']
];

let cases = 0, t = 0;

fs.readFileSync('./input.txt').toString().split('\n').forEach(line => {

    if (t === 0) {
        cases = line;
    } else if (t <= cases) {

        let r = 0;

        incompleteCombos.forEach((x, i) => {
            let partialMatches = (line.match(new RegExp(x, 'g')) || []).length;
            if (partialMatches) {
                let completeMatches = (line.match(new RegExp(completeCombos[i], 'g')) || []).length;
                r += (partialMatches - completeMatches);
            }
        });

        const result = `Case #${t}: ${r}`;

        console.log(result);

        fs.appendFileSync('./output.txt', result + '\n');
    }

    t++;
});
