class PositiveBitCounter {
  static count (input) {
    const result = [0]
    if (input >= 0) {// Defensive programming practices.....
      console.log(" Thi is a positive number")
    } else {
      throw new RangeError('You can not type a negative number')
    }

    return result
  }


}

module.exports = PositiveBitCounter

