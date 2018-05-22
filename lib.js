const assert = {
  equal(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Expected ${actual} to equal ${expected}`)
    }
  }
}

const test = function (testTitle, callback) {
  try {
    callback();
    console.log(`Passed: ${testTitle}`)
  } catch (error) {
    console.error(`Failed: ${testTitle}`)
    throw error;
  }
}

module.exports = {
  test, assert
}
