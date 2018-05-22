const { add } = require('./index')

const result = add(5, 6)

if (result !== 11) {
  throw new Error('The add function did not return 11 when adding 5 and 6.')
}
