// A string that needs to be repeat 


const repeatString = (str, num) => {
            if (num <= 1) {
                        return str
            } else {
                        return str + repeatString(str, num - 1)
            }

}
// console.log(repeatString("abd", 20))



const repeatGivenString = (str, num) => {
            return num > 0 ? str.repeat(num) : str
}

console.log(repeatGivenString("abd",5))