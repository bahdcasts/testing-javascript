const { findUserByEmail, findUserById } = require('../async')

describe('The async tests', () => {
  describe('The findUserById function', () => {
    it('should return found user data by id (Using the done callback)', (done) => {
      findUserById(1).then(result => {
        expect(result.user.name).toBe('bahdcoder')
        done();
      })
    })
    it('should return found user data by id (Using returning promises method)', () => {
      return findUserById(1).then(result => {
        expect(result.user.name).toBe('bahdcoder')
      })
    })
    it('should throw an error if user was not found', () => {
      return findUserById(90393).catch(error => {
        expect(error.message).toBe('User with id: 90393 was not found.')
      })
    })
    it('should return user found by id (Using async function)', async () => {
      const result = await findUserById(1)
      expect(result.user.name).toBe('bahdcoder')
    })
  })

  describe('The findUserByEmail', function () {
    it('should find user by email', function () {
      return findUserByEmail('bahdcoder@gmail.com').then(result => {
        expect(result.user.id).toBe(1)
        expect(result.user.email).toBe('bahdcoder@gmail.com')
      })
    })
    it('should throw an error if user was not found by email', () => {
      return findUserByEmail('bahdcoder@notfound.com').catch(error => {
        expect(error.message).toBe('User with email: bahdcoder@notfound.com was not found.')
      })
    })
  })
})
