const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnumbers = mynumbers.map( (num) => num + 10)
// console.log(newnumbers)
 

// Chaining in methods
const newnumbers = mynumbers.map( (num) => num * 10 ).
             map((num) => num + 1).
             filter((num) => num > 40)
console.log(newnumbers)

