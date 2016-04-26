'use strict';

const fs = require('fs');
// reset the output file
fs.unlink('./output.txt');

let t = 0;

fs.readFileSync('./input.txt').toString().split('\n').forEach(line => {

    if (t > 0 && line !== '...') {

        const tape = line.split(': ')[1]
            .replace(/'/g, '')
            .replace(/0/g, 1);

        const result = `Tape #${t}: ${tape}`;

        console.log(result);

        fs.appendFileSync('./output.txt', result + '\n');

        t++;
    }

    if (line === 'tapes:') { ++t; }
});
