const assert = require('assert')
const { findUserByEmail, findUserById } = require('../async')

describe('The async tests', () => {
  describe('The findUserById function', () => {
    it('should return found user data by id (Using the done callback)', (done) => {
      findUserById(1).then(result => {
        assert.equal(result.user.name, 'bahdcoder')
        done();
      })
    })
    it('should return found user data by id (Using returning promises method)', () => {
      return findUserById(1).then(result => {
        assert.equal(result.user.name, 'bahdcoder')
      })
    })
    it('should throw an error if user was not found', () => {
      return findUserById(90393).catch(error => {
        assert.equal(error.message, 'User with id: 90393 was not found.')
      })
    })
    it('should return user found by id (Using async function)', async () => {
      const result = await findUserById(1)
      assert.equal(result.user.name, 'bahdcoder')
    })
  })

  describe('The findUserByEmail', function () {
    it('should find user by email', function () {
      return findUserByEmail('bahdcoder@gmail.com').then(result => {
        assert.equal(result.user.id, 1)
        assert.equal(result.user.email, 'bahdcoder@gmail.com')
      })
    })
    it('should throw error if user was not found by email', async () => {
      try {
        await findUserByEmail('bahd@me.com')
        assert.fail('EXPECTED_ERROR')
      } catch (error) {
        if (error.message === 'EXPECTED_ERROR') {
          throw error
        }
        assert.equal(error.message, 'User with email: bahd@me.com was not found.')
      }
    })
  })
})
