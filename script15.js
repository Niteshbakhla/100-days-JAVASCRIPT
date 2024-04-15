// Write a function to calculation the sum of squares of all elements  in an array . For example given the array [1,2,3], the function should return 14  because 1*1 + 2*2 + 3*3 =1+4+9=14?


const sumOfSquares = (num) => {
            let squareNum = 0
            num.forEach(n => {
                        squareNum += n * n
            });

            return squareNum
}

console.log(sumOfSquares([1, 2, 3]));


const numOfSquare = (num) => {
            return num.reduce((accum, curr) => accum + (curr * curr), 0)
}

console.log(numOfSquare([1, 2, 3]))
