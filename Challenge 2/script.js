'use strict';

const fs = require('fs');
// reset the output file
fs.unlink('./output.txt');

const corpus = fs.readFileSync('./corpus.txt').toString().split(' ');
let cases = 0, t = 0;

fs.readFileSync('./submitInput.txt').toString().split('\n').forEach(line => {

    let top = [], r = {}, start = 0, end = 0;

    // first line
    if (t === 0) {
        cases = line;
    } else if (t <= cases) {
        // limits of the case
        start = line.split(' ')[0];
        end = line.split(' ')[1];
        // slice corpus
        for (let i = start - 1; i < end; i++) {
            let word = corpus[i];
            // add words to diccionary -> word: count
            if (r.hasOwnProperty(word)) {
                r[word]++;
            } else {
                r[word] = 1;
            }
        }
        // add the top ranking words to a sortable array
        for (let w in r) {
            top.push([w, r[w]]);            
        }
        // sort the words to know the more frequent
        top.sort((a, b) => a[1] - b[1]).reverse();
        
        const result = `Case #${t}: ${top[0][0]} ${top[0][1]},${top[1][0]} ${top[1][1]},${top[2][0]} ${top[2][1]}`;

        console.log(result);

        fs.appendFileSync('./output.txt', result + '\n');
    }

    t++;
});
