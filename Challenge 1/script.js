'use strict';

const fs = require('fs');

fs.unlink('./output.txt');

let cases = 0;

fs.readFileSync('./submitInput.txt').toString().split('\n').forEach((num, t) => {

    let r = 0;

    if (t === 0) {
        cases = num;
    } else if (t <= cases) {

        let people = +num;

        if (people > 0) {

            if (people === 4) {
                r = 1;
            } else {
                while (people > 0) {
                    if (r < 1) {
                        people -= 4;
                    } else {
                        people -= 2;
                    }
                    r++;
                }
            }
        }

        const result = `Case #${t}: ${r}`;

        console.log(result);

        fs.appendFileSync('./output.txt', result + '\n');
    }
});
