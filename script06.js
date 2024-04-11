// Write a function to determine whether a given string is a plaidrome or not. A palidrome is a word, phrase, number, or other  sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// ----------------
/*    constraints:    */
// ------------------


const isPalidrome = (word) => {
            const sent = word.split("").reverse().join("").toLowerCase().replace(/\W/g, "")
            console.log(sent)
            if (sent === word.toLowerCase()) {
                        return true || sent;
            } else {
                        return false
            }
}

console.log(isPalidrome("tattarrattat"))
// console.log(isPalidrome("a man, a girl, a women, a beautifull gir"))







// The input string may contain letters, digits, spaces, punctuation, and special characters.
// The function should be case-insensitive, meaning "Racercar" and "racecar" should be considered the same.
// Ignore spaces, punctuation, and special characters when determining  if a string  is a palidrome.
// The function shoul return  true if the input string is a palidrome and false otherwise.



// ________________________________________________________________________________________

// Note.

// .replace(/\W/g, ""): Uses the replace () method with a regular expression (/\W/g) to remove all non-word characters from the string. Here:
// \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).
// The g flag performs a global search, meaning it replaces all accurrences of non-word characters in the string.
// So, replace(/\W/g,"")replaces all non-word characters with an empty string, effectively removing then from the string.
