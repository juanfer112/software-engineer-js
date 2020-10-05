class PositiveBitCounter {
    static count (input) {
        const result = [0]
        if (input >= 0) {// Defensive programming practices.....
            const binary = input.toString(2)// convert number to binary
            const reverseBinary = this.reverseString(binary)//apply a reverse to binary

        } else {
        throw new RangeError('You can not type a negative number')
        }

    return result
    }

    static reverseString (str) {  
        return str.split('').reverse().join('') //Rearrange: switch the string secuency from end to the beginning
  }


}

module.exports = PositiveBitCounter

