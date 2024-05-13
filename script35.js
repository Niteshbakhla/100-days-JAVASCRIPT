const isEmptyObject = (obj) => {
            for (let key in obj) {
                        if (Object.hasOwnProperty.call(obj, key)) {
                                    return "It's not empty";
                        }
            }
            return "It's empty";
};

console.log(isEmptyObject({}));  // It's empty
console.log(isEmptyObject({ name: "nitesh" }));  // It's not empty
console.log(isEmptyObject({ keyWithNull: null }));  // It's not empty
console.log(isEmptyObject({ keyWithUndefined: undefined }));  // It's not empty

console.log(isEmptyObject({}))
// console.log(isEmptyObject({ name: "nitesh" }))
// console.log(isEmptyObject({ keyWithNull: null }))
// console.log(isEmptyObject({ keyWithUndefined: undefined }))


const isEmpty = (obj) => {
            return Object.keys(obj).length === 0
}

console.log(isEmpty({}))
console.log(isEmpty({ name: "nitesh" }))

