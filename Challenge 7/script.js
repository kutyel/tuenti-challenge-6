'use strict'

const fs = require('fs')
const input = 'submitInput.txt'
const output = 'output.txt'

fs.unlink(output)

const UPPER = '.ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER = '.abcdefghijklmnopqrstuvwxyz'

function sum (array) {
  return array.reduce((x, y) => x += y, 0)
}

function kadane (a) {
  let now = 0
  let prev = 0
  for (let i = 0; i < a.length; i++) {
    prev = Math.max(0, prev + a[i])
    now = Math.max(prev, now)
  }
  return now
}

function findMaxSum (matrix, numCols, numRows) {
  let maxSum = 0

  for (let left = 0; left < numCols; left++) {
    let temp = []

    for (let i = 0; i < numRows; i++) {
      temp.push(0)
    }

    for (let right = left; right < numCols; right++) {
      // Find sum of every mini-row between left and right columns and save it leto temp[]
      for (let i = 0; i < numRows; ++i) {
        temp[i] += matrix[i][right]
      }
      // Find the maximum sum subarray in temp[].
      let sum = kadane(temp)

      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }
  return maxSum
}

let t = 1
let index = 1
let indexOfCase = 1
let r = 0
let n = 0
let m = 0
let matrix = []
let initializingMatrix = false
let finishedCase = false

const inputFile = fs.readFileSync(input).toString().split('\n')
const cases = +inputFile[0]

while (t <= cases && index < inputFile.length) {
  const line = inputFile[index]

  if (index === indexOfCase) {
    n = +line.split(' ')[0]
    m = +line.split(' ')[1]

    matrix = []
    indexOfCase += n + 1
    initializingMatrix = true
    finishedCase = false
  } else if (initializingMatrix) {
    let aux = []
    for (let i = 0; i < m; i++) {
      let num = UPPER.indexOf(line[i])
      if (num < 0) {
        num = LOWER.indexOf(line[i]) * -1
      }
      aux.push(num)
    }
    matrix.push(aux)

    if (matrix.length === n) {
      initializingMatrix = false
      finishedCase = true
    }
  }
  if (finishedCase) {
    // transpose the matrix to check for Infinity
    const transposedMatrix = matrix[0].map((col, i) => matrix.map(row => row[i]))
    // if all the numbers are positive -> the max sum is Infinity
    if (matrix.every(x => x.every(y => y > 0)) ||
      // or the sum of any row or col is a positive number (thanks to @nramirez)
      matrix.some(x => sum(x) > 0) || transposedMatrix.some(x => sum(x) > 0)) {
      r = 'INFINITY'
    // if all numbers are negative -> the max sum is the empty rectangle, 0
    } else if (matrix.every(x => x.every(y => y < 0))) {
      r = 0
    // otherwise, get the max sum of the rectangle
    } else {
      // repeat the matrix, at least 2 times
      let augmentedMatrix = []
      let repeats = 2
      m *= repeats; n *= repeats
      while (repeats--) {
        matrix.forEach(arr => augmentedMatrix.push(arr.concat(arr)))
      }
      r = findMaxSum(augmentedMatrix, m, n)
    }
    const result = `Case #${t}: ${r}`
    console.log(result)
    fs.appendFileSync(output, result + '\n')
    t++
  }
  index++
}
