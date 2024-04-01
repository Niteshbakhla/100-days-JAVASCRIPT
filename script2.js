// Q- Your are required to implement a function generateHash that generates  a has tag from a given input string.

// The input string should be  converted to a hash tag format , where each word  is capitalized and concatenated together  without spaces.

//If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespaces, the function should return false

// OtherWise, the function should return the generated hash tag  prefixed with #


function generateHash(hash) {
            const tag = "#";
            const hashWord = hash.split(" ")

            if (hash.length > 280 || hash.trim().length === 0) {
                        return false;
            }

            const val = hashWord.map((word, index) => {
                        return word.replace(word[0], word[0].toUpperCase())

            }).join("")

            return `#${val}`

}

const hashWord = generateHash("nitesh the great man")
console.log(hashWord)