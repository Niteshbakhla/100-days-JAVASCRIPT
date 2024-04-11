// Q- Write a function to sort an array of numbers in an ascending order.

// todo** -1. The function  should take an array of numbers as input.
//2. It should return a new array with the numbers  sorted in ascending order.
//3. The original array should remain unchanged .
//4. You are not allowed to use the built-in sort() method.


function sortAscendingOrder(num) {
            let val = []
            return num.sort((b, a) => a - b)
}

console.log(sortAscendingOrder([5, 3, 3, 2, 5, 1, 6]))
