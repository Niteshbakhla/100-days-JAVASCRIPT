// In Math, the mean is the average  of a set of numbers, or the numeric value that represents the center of a collection  of numbers.


// ? Contstraints :
// ? The input array may contain positive and negative integers.
// ? The input  array may be empty. If it is empty, the function should return 0


const calculateMean = (num) => {
            const totalValue = num.reduce((accum, currentnum) => accum + currentnum, 0)
            if (num.length === 0) return 0
            const answer = totalValue / num.length

            return answer
}

console.log(calculateMean([-1, 0, 1]))
console.log(calculateMean([]))
console.log(calculateMean([1, 2, 3, 4, 5]))
console.log(calculateMean([10, 20, 30]))