// covert Array into objects and Convert  Objects into Array

const obj = {
            name: "Nitesh",
            age: 55,
            city: "Shahdol"
};

let objEntries = Object.entries(obj)
console.log(objEntries.flat())

let ArrayObj = Object.fromEntries(objEntries)
console.log(ArrayObj)




