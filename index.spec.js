const assert = require('assert')
const { add } = require('./index')


console.log('First test')
  const actual = add(5, 6)
  const expectation = 11

  assert.equal(actual, expectation)
  console.log('Successfully ran all tests !')

console.log('End of First test')

console.log('Second test: Test that add function throws an error if no arguments are passed.')
  
  assert.throws(() => {
    add()
  })

  console.log('Successfully ran all tests !')

console.log('End of Second test')

