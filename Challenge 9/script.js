'use strict'

const fs = require('fs')
fs.unlink('./output.txt')
let cases = 0

fs.readFileSync('./testInput.txt').toString().split('\n').forEach((num, t) => {
  let m = +num
  let fact2 = 0
  let fact5 = 0
  let mod = 0
  let ones = 1
  let zeroes = 0

  if (t === 0) {
    cases = m
  } else if (t <= cases) {
    // the factors 2 and 5 are satisfied using zeros
    while (m % 2 === 0) {
      fact2++
      m /= 2
    }
    while (m % 5 === 0) {
      fact5++
      m /= 5
    }

    zeroes = Math.max(fact2, fact5)

    // the rest of the factors are satisfied using ones
    mod = 1 % m

    while (mod !== 0) {
      mod = (10 * mod + 1) % m
      ones++
    }

    const result = `Case #${t}: ${ones} ${zeroes}`
    console.log(result)
    fs.appendFileSync('./output.txt', result + '\n')
  }
})
