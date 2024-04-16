// Coding Challenges:Find the Minimum Value in an Array.

// Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.



const findMin = (num) => {
            for (let i = 0; i < num.length; i++) {
                        if (num[i] < num[i + 1]) {
                                    return console.log(num[i])
                        }
            }
}

const findMinValue = (num) => {
            const arr = num.sort((a, b) => {
                        if (b > a) return -1

            })

            return arr[0]
}


console.log(findMinValue([1, 2, 3, 4, 5, 15, 14, 10, -9]))
console.log(findMin([100, 200, 500,]))







// Constraints:
// The input array may contain both positive and negative integers.
// The input array may be empty.
// The input array may contain duplicate values.