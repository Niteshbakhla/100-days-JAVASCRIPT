// Write a function to convert a string a camelCase & snake_case.

const isCamelCase = (word) => {
            const splitWord = word.trim().split(" ")
            const tr = splitWord.map((curelem, index) => {
                        if (index === 0) {
                                    return curelem
                        } else {
                                    return curelem.charAt(0).toUpperCase() + curelem.slice(1)
                        }
            })
            return splitWord.join("")

}

console.log(isCamelCase("hello world thapa"))