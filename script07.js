// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array?


const findMax = (num) => {
            let max = num[0]
            for (let i = 0; i < num.length; i++) {
                        if (num[i] > max) {
                                    max = num[i]
                        }
            }
            return max
}


console.log(Math.max(1, 100, 90, 1000, 40, 8))

console.log(findMax([2, 100, 80, 5, 60, 600, 8, 900]))
