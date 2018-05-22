const assert = require('assert')
const { add } = require('./../index')

describe('The ADD function tests', function () {
  it('Should return 11 for arguments 5 and 6', function () {
    const actual = add(5, 6)
    const expectation = 11

    assert.equal(actual, expectation)
  })

  it('Should throw an error if arguments are not passed in', function () {
    assert.throws(() => {
      add()
    })
  })
})
