const { add } = require('./index')
const { test, assert } = require('./lib')

test('The add function adds two numbers', function () {
  const actual = add(3, 4)
  const expected = 9
  assert.equal(actual, expected)
})

