// Write  a function removeDuplicates that takes an array of elements as input and returns a new array with duplicate elements removed.



const removeDuplicate = (arr) => {
            let arrSum = []

            for (let sum of arr) {
                        if (!arrSum.includes(sum)) {
                                    arrSum.push(sum)
                        }
            }

            return arrSum

}

console.log(removeDuplicate([1, 2, 2, 3, 4, 1, 3, 4, 3, 2, 2, 1, 3, 3, 3, 3,]))