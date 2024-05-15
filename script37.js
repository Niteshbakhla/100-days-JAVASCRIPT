//  Write a function calculationSimpleInterest  that  calculates the simple interest given the principal amount, rate of interest per annum, and time in years.



const calculateSimpleInterest = (principal, rate, year) => {
            return (principal * rate * year) / 100

}
console.log(calculateSimpleInterest(1000, 5, 3))