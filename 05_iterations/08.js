const mynumbers = [1,2,3]
// const initialvalue=0
const total = mynumbers.reduce( function (accumulator, currentvalue,initialvalue){
    // console.log(`accumulator ${accumulator} and  currentvalue ${currentvalue}`);
    
return accumulator + currentvalue 
})
// const total = mynumbers.reduce( function (accumulator, currentvalue){
    // console.log(`accumulator ${accumulator} and  currentvalue ${currentvalue}`);
    
// return accumulator + currentvalue 
// },0)
// reduce method take two parameters accumulator and currentvalue in accoumulator needs starting value which is taken from initial value which is declared outside the function or after {} we can write as above code  and accumulator take value and add it in currentvalue and sum of them stores in the accumulator again and currentvalue changed and accumulaotr give the last sum value and sum it again and store in it

const mytotal =mynumbers.reduce( (acc, curr) => (acc+curr),0)
// console.log(mytotal);

const shootpingitem = [
    {
        course: "Javascript",
        price: 999,
    },
    {
        course: "React",
        price: 4999,
    },
    {
        course: "Web Dev",
        price: 9999,
    },
    {
        course: "Java",
        price: 599,
    },
]

const bill = shootpingitem.reduce((acc,item) => (acc + item.price),0)
console.log(bill)

