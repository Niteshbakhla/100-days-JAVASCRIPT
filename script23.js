const findNumbers = (num) => {
            let numObj = {}

            for (let numVal of num) {
                        numObj.hasOwnProperty(numVal) ? numObj[numVal]++ : numObj[numVal] = true
            }

            return numObj

}

console.log(findNumbers([1, 2, 2, 3, 3, 5, 5, 2, 1, 5, 2, 1]))

const numbers = [1, 2, 2, 1, 2, 3, 3, 1, 2];

let counts = {}

for (let element of numbers) {
            counts[element] = (counts[element] || 0) + 1
}

console.log(counts)