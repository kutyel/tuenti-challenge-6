'use strict'

const fs = require('fs')
fs.unlink('./output.txt')

// TODO: this is not yet finished
fs.readFileSync('./input.txt').toString().split('\n').forEach((line, t) => {
  if (t > 0 && line !== '...') {
    const tape = line.split(': ')[1]
      .replace(/'/g, '')
      .replace(/0/g, 1)

    const result = `Tape #${t}: ${tape}`
    console.log(result)
    fs.appendFileSync('./output.txt', result + '\n')
  }

  if (line === 'tapes:') { ++t }
})
