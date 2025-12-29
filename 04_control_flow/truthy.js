// const useremailId = "Suraj@ai"
// const useremailId = []

// if(useremailId){
//     console.log("Got mail id")
// }
// else{
//  console.log("Can't get id")
// }

//Falsy values
// false, 0, -0, Bigint- 0n, "", null, undefined, NaN

//Truthy values
// "0",'false'," ", [], {}, function(){} // here 0and false are written in string so it considered as true and string have space like " " so it also be true

// if(useremailId.length === 0){
//     console.log("Array is empty");
    
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??)  for specially Null Undefined

let val1
// val1 = 10 ?? 15
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined ?? 10
val1 = null ?? 10 ?? 15


console.log(val1);
// in which nullish operator are used to handle the errors we use because we get some particular value in the output not the null and undefined 


// Ternary Operator 

// condition ? true : false

const icecreamprice = 10
icecreamprice <= 80 ? console.log("less than 80") : console.log("greater than 80");

