// Write a function  arrays are equal that takes two arrays arr1 and arr2 as input and returns ture if the arrays are equal (i.e., contain the same elements in the same order and false otherwise.)


const functionArrayEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length) {
                        return console.log("length is not same")
            }

            return arr1.every((current, index) => {
                        if (current === arr2[index]) {
                                    return console.log("value are  not same")
                        }
            })
}

console.log(functionArrayEqual([1, 2, 6, 3, 5], [1, 2, 6, 3, 6]))

// Note :
// The function should return false if the arrays have different lengths.
// The function should compare each element of arr1 with the corresponding element in arr2.
// The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.
