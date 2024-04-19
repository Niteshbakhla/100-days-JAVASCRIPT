// Write a function to check if a given string starts with a specific substring.


const startWith = (one, two) => {
            const splitValue = one.split(" ");

            if (splitValue[0] === two) {
                        return true
            } else {
                        return false
            }
}

// console.log(startWith("hello World", "hello"))
// console.log(startWith("namskar man", "namskar"))



const checkStartWith = (str, substr) => {
            return str.toLowerCase().startsWith(substr.toLowerCase())

}

// console.log(checkStartWith("hello world", "hello"))



const checkStr = (str, substr) => {
            return str.slice(0, substr.length) === substr;
}

console.log(checkStr("nitesh man", "nitesh"))