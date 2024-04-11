// Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number  of times the specified character appears in the string .

// -- 1>The function should be case-sensitive.
// --2> The function should handle both lowercase and uppercase characters.
//--3>The character parameter  can be any printable  ASCII character (The function should accept any character that is part of the ASCII character set and its printable.)

function countChar(word, count) {
            const splitWord = word.split("");
            let num = 0;
            for (let i = 0; i < splitWord.length; i++) {
                        if (splitWord[i].toLowerCase() === count.toLowerCase()) {
                                    num++
                        }
            }
            return num

}

const word = countChar("Missiippiiill", "i")
// console.log(word)



const counter = (word, char) => {
            const lowerWord = word.toLowerCase();
            const loweChar = char.toLowerCase();

            const totalCount = lowerWord.split("").reduce((accum, currentWord) => {
                        if (currentWord === loweChar) {
                                    accum++;
                        }
                        return accum
            }, 0)

            return totalCount

}

const sentence = counter("Niteshhhhss", "h")
console.log(sentence)
