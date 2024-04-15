// Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

function isPowerOfTwo(num) {
            let value = false;
            for (let i = 1; i < num; i++) {
                        if (2 ** i === num) {
                                    value = true;
                        }
            }
            return value;
}

console.log(isPowerOfTwo(12))

// Notes:-
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should  return  true if the given number is a power of 2, and false otherwise.
