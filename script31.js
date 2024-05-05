// Write a string represnting  the password  to be validated .
// The function  should validate the password based on the following criteria.

// The password must contain at least one lowercase letter, one uppercase letter , and one digit .
// The function should return  true if the password meets all the criteria , otherwise , it should return false, l


const isPasswordIsValid = (pass) => {
            let hasUppercase = /[A-Z]/.test(pass)
            let hasLowercase = /[a-z]/.test(pass)
            let hasDigit = /\d/.test(pass)

            if (hasUppercase && hasLowercase && hasDigit) {
                        return true
            } else {
                        return false
            }
          
}



console.log(isPasswordIsValid("niTesh1"))
console.log(isPasswordIsValid("nitesH1"))