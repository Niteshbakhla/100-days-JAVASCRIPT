const findMode = (arr) => {
            let modeObj = {};
            let maxFrequency = 0;
            let modes = [];

            for (let num of arr) {
                        modeObj[num] = (modeObj[num] || 0) + 1;
                        if (modeObj[num] > maxFrequency) {
                                    maxFrequency = modeObj[num];
                                    modes = num;
                        }
            }

            if (modes.length === Object.keys(modeObj).length) {
                        return "No mode"; // All numbers occur with the same frequency
            }

            return modes;
}

console.log(findMode([1, 2, 3, 1, 3, 9, 3, 2, 3, 1, 2])); // Output: [3]
