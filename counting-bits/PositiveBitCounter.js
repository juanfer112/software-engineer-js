class PositiveBitCounter {
    static count (input) {
        const result = [0]
        if (input >= 0) { // Defensive programming practices.....
            const binary = input.toString(2); // convert number to binary
            const reverseBinary = this.reverseString(binary);//apply a reverse to binary

            // Add total occurrences of binary numbers array result in zero position
            result[0] = this.countOneOccurrences(reverseBinary, result) // the total quantities binary element are saved

        } else {
            throw new RangeError('You can not type a negative number')
        }
    return result
    }

    static reverseString (str) {  
        return str.split('').reverse() //Rearrange: switch the string secuency from end to the beginning
    }
    
    static countOneOccurrences (array, result) {
        return array.reduce((acum, elem, index) => {
            let elementNumber = 0;
            if (elem === '1') {
            // Save one index positions in result array
            result.push(index)
            elementNumber = 1;
            }
            //count total binary occurrences   
            return acum + elementNumber
        }, 0)
    }
}
module.exports = PositiveBitCounter

