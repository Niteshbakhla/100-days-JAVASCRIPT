const lengthOfString = (str, num) => {
            const splitStr = str.split(" ")

            if (num <= 0) {
                        return str
            }
            if (splitStr.length > num) {
                        return splitStr.slice(0, num).join(" ").concat("...")

            } 
}

const str = "This is very great that I am doing good in life and you too."
console.log(lengthOfString(str, 5))