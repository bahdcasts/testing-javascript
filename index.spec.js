const assert = require('assert')
const { add } = require('./index')

const actual = add(5, 6)
const expectation = 11

assert.equal(actual, expectation)
console.log('Successfully ran all tests !')
