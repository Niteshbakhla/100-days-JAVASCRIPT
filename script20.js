// Write a javascript  to reverse a string without using any built-in method  or libraries. The function should take a string as input and returns the reversed string.


const reverseString = (str) => {
            let strValue = ""
            for (let i = str.length - 1; i >= 0; i--) {
                        strValue += str[i]
            }

            return strValue
}



console.log(reverseString("nitesh"))