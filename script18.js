// Q - Write a function to check if a character is uppercase or lowerCase.

//Constraints:
// ? Input char will be a single character.
// ? The character can be any printable ASCII character.
// ? You can assume that the input will always be a string of length.


const isUpperCase = (char) => {
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
                        console.log("It is uppercase", char, char.charCodeAt())
            } else {
                        console.log("It is smallCase", char, char.charCodeAt())
            }
}

console.log(isUpperCase("Z"))
console.log(isUpperCase("z"))

const isCheckCode = (char) => {
            return char === char.toUpperCase();
}

console.log(isCheckCode("s"))






// Notes:
// ? Ensure that the function correctly identifies uppercase characters based on their ASCII
// ? Optimize  the function to handle edge cases efficiency.