// Challenge: Calculate the Average  array of numbers as input and returns of the average of those numbers.

// Your function should:

// Accept the array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of  elements in the array to find the average .
// Return the calculated average.



const findAverage = (num) => {
            const totalPrice = num.reduce((accum, currentNum) => {
                        return accum += currentNum / num.length
            }, 0)
            return totalPrice
}

console.log(findAverage([5, 10, 2, 8]))
