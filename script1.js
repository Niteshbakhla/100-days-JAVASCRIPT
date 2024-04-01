function longestWord(word) {

            const splitWord = word.split(" ");
            for (let i = 0; i < splitWord.length; i++) {
                        if (splitWord[i + 1].length < splitWord[i].length) {
                                    return splitWord[i];
                        }
            }
}
const word = longestWord("Watch Technical Javascript  course on YouTube!");
// console.log(word)

function longestWord2(word) {
            const splitWord = word.split(" ");
            return splitWord.sort((a, b) => {
                        return b.length - a.length


            })
}
const word2 = longestWord2("Hey let's learn Javascript dlkgdsgdskdgaasddd Immediately!")
// console.log(word2)



function longestWord3(word) {
            const splitWord = word.split(" ")
            return splitWord.reduce((accum, currWord) => currWord.length > accum.length ? currWord : accum, "")
}

const word3 = longestWord3("Immediatley LongestWord Technicalway  Islamophobia")
console.log(word3)