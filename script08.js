// Factorial Finder

// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative  integer n, denoted as n!, is the product of all positive integers less than or equal to n. The Factorial of 0 is defined as 1.


// Here are some example  of factorial calculatoins:
// factorial(0)=>1
// factorial(1)=>1
// factorial(2)=>2
// factorial(3)=>6
// factorial(4)=>24
// factorial(5)=>120
// factorial(6)=>720

// Your function should work for any non-negative integer input

const factorialNumber = (num) => {
            let val = 1
            for (let i = 1; i <= num; i++) {
                        val *= i
            }
            console.log(val)
}


console.log(factorialNumber(8)) //40320
console.log(factorialNumber(4))// 24


