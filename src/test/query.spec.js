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

    it('Should return an object: { number: 3 } when number=3 is passed into it', function () {
      assert.deepEqual(parse('number=3'), {
        number: 3
      })
    })
  })

  describe('The stringify function', function () {
    it('Should return a query string when an object is passed into it', () => {
      const queryObject = {
        by: 'kati-frantz',
        sort: 'popular'
      }

      const actual = stringify(queryObject)
      const expectation = 'by=kati-frantz&sort=popular'
      assert.equal(actual, expectation)
    })

    it('eliminates all undefined and null values', () => {
      const queryObject = {
        by: 'kati-frantz',
        popular: undefined,
        unanswered: null
      }

      assert.equal(stringify(queryObject), 'by=kati-frantz')
    })
  })
})
