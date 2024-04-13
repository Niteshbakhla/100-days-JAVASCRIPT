
function countVowels(word) {
            const vowels = ["a", "e", "i", "o", "u"]

            let num = 0

            for (let i = 0; i < vowels.length; i++) {

                        for (let j = 0; j < word.length; j++) {
                                    if (word[j] === vowels[i]) {
                                                num++
                                    }
                        }
            }

            return num
}

console.log(countVowels("Hello World"))
console.log(countVowels("The quick brown fox"))