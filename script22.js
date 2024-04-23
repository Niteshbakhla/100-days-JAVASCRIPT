// Write a JavaScript  function findMedian(arr) that takes of numbers as input and returns the median value. If the array has even number  of elements, return the average  of the two middle values.

// for example, the median of 3,3,5,9,15 is 5. If there is an even  number  of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values : so the median of 3,5,7,9  is(5+7)/2 =6

// todo Tips
// Sort the array in ascending order.
// If the array has an odd number of elements, the median is the middle element.
// If the array has even number of elements, the median is the average of the two middle elements.



const findMedian = (arr) => {
            const sortedArr = arr.slice().sort((a, b) => a - b)

            if (sortedArr.length % 2 === 0) {
                        const val = sortedArr.length / 2
                        const result = (sortedArr.length / 2)
                        const actulaResult = (sortedArr[val - 1] + sortedArr[result]) / 2
                        return actulaResult;
            } else {
                        const val2 = Math.floor(sortedArr.length / 2)
                        return sortedArr[val2]
            }
}

console.log(findMedian([10, 20, 30, 40, 50]))

