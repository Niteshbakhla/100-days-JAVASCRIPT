function calculateAge(birthDateStr) {
            const birthDate = new Date(birthDateStr);
            const today = new Date();

            // Calculate age in years
            let age = today.getFullYear() - birthDate.getFullYear();

            // Check for leap year and adjust age if birth date is in February of a leap year
            if (birthDate.getMonth() === 1) { // February
                        const isLeapYear = (birthDate.getFullYear() % 4 === 0 && birthDate.getFullYear() % 100 !== 0) || birthDate.getFullYear() % 400 === 0;
                        if (isLeapYear && today.getDate() < 29) {
                                    age--;
                        }
            }

            // Check if birthday has passed in the current year
            if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                        age--;
            }

            return age;
}

// Example usage
const birthDate = "2002";
const age = calculateAge(birthDate);
console.log("Age:", age, "years");
