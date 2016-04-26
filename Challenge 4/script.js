'use strict';

const fs = require('fs');
// reset the output file
fs.unlink('./output.txt');

const incompleteCombos = [
    'L-LD-D-RD-R',
         'D-RD-R',
         'R-D-RD',
         'D-LD-L',
    'R-RD-D-LD-L'
];

const completeCombos = [
    'L-LD-D-RD-R-P',
         'D-RD-R-P',
         'R-D-RD-P',
         'D-LD-L-K',
    'R-RD-D-LD-L-K'
];

let cases = 0, t = 0;

fs.readFileSync('./testInput.txt').toString().split('\n').forEach(line => {

    if (t === 0) {
        cases = line;
    } else if (t <= cases) {

        let r = 0, aux = {};

        incompleteCombos.forEach((x, i) => {
            let partialMatches = (line.match(new RegExp(x, 'g')) || []).length;
            if (partialMatches) {
                let completeMatches = (line.match(new RegExp(completeCombos[i], 'g')) || []).length;
                if (partialMatches - completeMatches) {
                    aux[x] = partialMatches - completeMatches;
                }
            }
        });

        for (let a in aux) {
            if (a === incompleteCombos[1] && aux.hasOwnProperty(incompleteCombos[0])) {
                r += (aux[a] - aux[incompleteCombos[0]]);
            } else if (a === incompleteCombos[3] && aux.hasOwnProperty(incompleteCombos[4])) {
                r += (aux[a] - aux[incompleteCombos[4]]);
            } else {
                r += aux[a];
            }
        }

        const result = `Case #${t}: ${r}`;

        console.log(result);

        fs.appendFileSync('./output.txt', result + '\n');
    }

    t++;
});
