const assert = require('assert')
const { parse, stringify } = require('../query')

describe('The query package', function () {
  describe('The parse function', function () {
    it('Should return an object of all query params when a query string is passed to it.', function () {
      const query = '?by=kati-frantz&popular=true&category=nodejs'
      const actual = parse(query)
      const expectation = {
        by: 'kati-frantz',
        popular: 'true',
        category: 'nodejs'
      }

      assert.deepEqual(actual, expectation)
    })
  })

  describe('The stringify function', function () {
    it('Should return a query string when an object is passed into it', () => {
      // tests go here.
    })
  })
})
