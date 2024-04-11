// Write a function checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return indicating the type of triangle :"equilateral", "isosceles", or "scalene".

// *** todo the function  should add here to the following rules.


// If all three sides are of equal length, return "equilateral".
//If only two sides are of equal length, return "isosceles".
// If all three sides have different lengths, return "scalene".

function checkTriangle(sideone, sidetwo, sidethree) {
            if (sideone === sidetwo && sidetwo === sidethree) {
                        return "Equilateral";
            } else if (sideone === sidetwo || sidetwo === sidethree || sidethree === sideone) {
                        return "Isosceles";
            } else {
                        return "scalene";
            }
}

console.log(checkTriangle(2, 2, 1,))
console.log(checkTriangle(1, 1, 1,))
console.log(checkTriangle(2, 4, 1,))
