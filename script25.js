function factorialRecursive(n) {
            // Base case: if n is 0 or 1, return 1
            if (n === 0 || n === 1) {
                        return 1;
            }

            // Recursive step: call factorialRecursive with a smaller input and multiply the result with n
            return n * factorialRecursive(n - 1);
}



console.log(factorialRecursive(4))


const findFactor = (n) => {
            if (n === 0 || n === 1) {
                        return 1;
            }

            let result = 1;

            for (let i = 1; i <= n; i++) {
                        result *= i
            }

            return result
}


console.log(findFactor(5))