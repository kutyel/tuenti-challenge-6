'use strict';

const fs = require('fs');

fs.unlink('./output.txt');

const url = '52.49.91.111:9988';

const words = fs.readFileSync('./words.txt').toString().split('\n');

const possibility = words.filter(x => x.length === 4);

// TODO: curl very possibility to the "Hangman"" service

fs.appendFileSync('./output.txt', possibility.join('\n'));
