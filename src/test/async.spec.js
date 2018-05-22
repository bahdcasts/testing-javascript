const assert = require('assert')
const { findUserByEmail, findUserById } = require('../async')

describe('The async tests', () => {
  describe('The findUserById function', () => {
    it.only('should return found user data by id', () => {
      return findUserById(1).then(result => {
        assert.equal(result.user.name, 'bahdcoder')
      })
    })
  })

  describe('The findUserByEmail', function () {
    it('should find user by email', function () {
      return findUserByEmail('bahdcoder@gmail.com')
    })
  })
})
