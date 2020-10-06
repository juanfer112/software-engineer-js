const PositiveBitCounter = require('./PositiveBitCounter')
const assert = require('assert')

describe('PositiveBitCounter', function () {
  it('Should return a RangeError when a negative value is supplied', function () {
    assert.throws(
      () => PositiveBitCounter.count(-2),
      function isRangeError (error) {
        return (error instanceof RangeError)
      })
  })

  it('Should return zero occurrences for input = 0', function () {
    let expected = [0]
    let actual = PositiveBitCounter.count(0)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 1', function () {
    let expected = [1, 0]
    let actual = PositiveBitCounter.count(1)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 161', function () {
    let expected = [3, 0, 5, 7]
    let actual = PositiveBitCounter.count(161)
    assert.deepEqual(actual, expected)
  })
  // Test bonus added

  it('Should return the expected count for input = 3', function () {
    let expected = [2, 0, 1]
    let actual = PositiveBitCounter.count(3)
    assert.deepEqual(actual, expected)
  })

   it('Should return the expected count for input = 13', function () {
    let expected = [3, 0, 2, 3]
    let actual = PositiveBitCounter.count(13)
    assert.deepEqual(actual, expected)
  })

   it('Should return the expected count for input = 666', function () {
    let expected = [5, 1, 3, 4, 7, 9]
    let actual = PositiveBitCounter.count(666)
    assert.deepEqual(actual, expected)
  })
  
})

