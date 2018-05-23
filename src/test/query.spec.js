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

      expect(actual).toEqual(expectation)
    })

    it('Should return an object: { number: 3 } when number=3 is passed into it', function () {
      expect(parse('number=3')).toEqual({
        number: "3"
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
      expect(actual).toBe(expectation)
    })

    it('eliminates all undefined and null values', () => {
      const queryObject = {
        by: 'kati-frantz',
        popular: undefined,
        unanswered: null
      }

      expect(stringify(queryObject)).toBe('by=kati-frantz')
    })
  })
})
