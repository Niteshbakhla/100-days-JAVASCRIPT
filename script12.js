// Write a function that takes an array of integers as input and removes any duplicate elements,returning a new array with only the unique elements.


// The new Set() method in javascript creates a  new Set object. A Set object is a collection of unique values it can store any type of value, whether primitive values or references.


const removeDuplicateNumbers = (arr) => {
            const arrval = [...new Set(arr)]
            return arrval
}

console.log(removeDuplicateNumbers([1, 2, 3, 4, 5, 6, 1, 2, 6, 5, 4]))


const duplicateValues = (arr) => {
            const uniqueValue = {}
            arr.map((val) => {
                        if (!uniqueValue[val]) {
                                    uniqueValue[val] = true
                        }
            })

            let resultArray = Object.keys(uniqueValue).map(Number)
            return resultArray
}

console.log(duplicateValues([1, 2, 3, 1, 1, 3, 3, 5, 5, 2, 3, 5, 6, 2, 3, 4, 3, 3]))




// Constraints:
// The input array may contain both positive and negative integers.
// The input array may be empty.
// The elemetns in the input array are not guranteed to be sorted.
// The output array should retain the original order of elements from the  input array.





