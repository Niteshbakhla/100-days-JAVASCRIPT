const generateTextBarChart = (bar) => {
          
            const newArr = bar.map((currElem, index) => {
                        let number = 0
                        let star = ""

                        while (number < currElem) {
                                    star = star + "*";
                                    number++;
                        }
                        return `${index + 1}:${star}`
            });
             
            return newArr
}

console.log(generateTextBarChart([5, 3, 9, 2, 1]));
