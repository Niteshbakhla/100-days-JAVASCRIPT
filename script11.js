// Write  a function that takes a number as input and returns the sum of its digin.

// Constraints:-
// The input  number will always be a positive integer.
//The input number can have multiple digits.
//  The input should be the sum of all the digits in the input number.


const sumOfDigits = (num) => {
            const numStr = num.toString();
            const digits = numStr.split("")
            let sum = 0

            for (const digit of digits) {
                        sum += parseInt(digit)
            }
            return sum
}

// console.log(sumOfDigits(123456))


const addAllNumbers = (num) => {

            let sum = 0;

            while (num > 0) {
                        const digit = num % 10
                        sum += digit
                        num = Math.floor(num / 10)
            }

            return sum
}

console.log(addAllNumbers(123))