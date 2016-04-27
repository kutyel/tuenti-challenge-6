'use strict';

const fs = require('fs');
const unirest = require('unirest');

fs.unlink('./output.txt');

const url = 'http://52.49.91.111:9988';

const words = fs.readFileSync('./words.txt').toString().split('\n');

words.filter(x => x.length === 4).forEach(x =>
    unirest.post(url)
        .header('Accept', 'application/json')
        .send({ 'word': x })
        .end(response => {
            if (!response.error) {
                fs.appendFileSync('./output.txt', response.body);
            }
        })
);
