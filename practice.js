// function even() {
//      let num;

//      do{
//         num = Math.floor(Math.random() * 20) +1;
//      }
//      while(num % 2 !== 0);

//      console.log(num);
// }
// even()
let num = (Math.floor(Math.random() * 10) + 1) * 2;
// console.log(num);

let arr = [1,3,5,7]

let newarr = arr.map (function (item){
    return item * 2

})
let newar = arr.filter(function(item) {
    return item > 5
    console.log(newar);
})
let newarrr = arr.reduce(function(acc, item){
    return acc + item;

},0)
// console.log(newarr);
// console.log(newar);
// console.log(newarrr);

let array = [5,8,2,10,3]
// console.log(array.includes(8))
let newarray = array.find(item => item > 5)
// console.log(newarray);

array.sort((a,b) => a-b);
// console.log(array);
array.reverse()
// console.log(array);

let user = {
  name: "Suraj",
  age: 21,
  isStudent: true
};

// console.log(user);

for (let key in user) {
//   console.log( user["age"]);
}

let car = {
    brand: "mahindra", 
    model: 2019,
    year:2026
};
// console.log(car.brand)
car.year = 2020;
car.color = "red"
for(let value in car){
    // console.log(value, car[value]);
    
}
let student = {
    name : "Amit", 
    marks : 85,
    subject : "JS"

}
let {name, marks} = student;

// console.log(name);
// console.log(marks);


console.log(Object.keys(student))
console.log(Object.values(student))

let multiply = (a,b) => a*b;

multiply(2,3)

function mul(d,e){
    return d*e;
}
// console.log(mul(3,4))

function calculate(d,e, fn){
    let result = fn(d,e)
    // console.log(result);
    
}
// calculate(5,10, mul)

function outer() {
  let count = 0;   // ← stored in memory

  function inner() {
    count++;       // ← uses outer variable
    // console.log(count);
  }

  return inner;
}

let counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3

let ar = [5, 10, 15, 20];
let max = ar[0];

for(let i  = 0; i< ar.length; i++){
    // console.log(ar[i])
    if(ar[i] > max){
        max = ar[i]

        // console.log(max)
    }
}
// console.log(max);

let mark = [ 45, 78, 90, 35, 60];

let sum = mark.map(function(num){
    return num + 5;
});
let filt = mark.filter(function(num){
    return num > 50
})

let red = mark.reduce(function(acc, crr){
    return acc + crr;
},0)


// console.log(sum);
// console.log(filt);
// console.log(red);

let stuu = {
    name: "Suraj",
    marks: [80,75, 90],
    city : "Lucknow"

}
stuu.grade = "A";

console.log(stuu.marks);
for(let key in stuu){
    console.log((key, stuu[key]));
    
}
let {grade, city} = stuu;
    
console.log(grade);
console.log(city);




let mar = [80, 75, 90];

let exp = mar.reduce(function(acc, cur){
    return acc + cur;
},0)
// console.log(exp);

let students = [
    { name: "Suraj", marks: 80 },
    { name: "Rahul", marks: 90 },
    { name: "Amit", marks: 70 }
];

for(let i = 0; i < students.length; i++){
    console.log(students[i].marks);
    
}

students.forEach(function(students){
    console.log(students.marks);
    
})
 let tottal = students
.reduce(function(acc, students){
    return acc + students.marks;
},0)
console.log(tottal);

let fit = students.filter(function(students){
    return  students.marks> 80;
})
console.log(fit);

let  summ = (a,b,c)  => a * b * c;
console.log(summ(2,4,8));

function sumAll(...numbers){
    return numbers.reduce((acc,cur) => acc +cur,0)
}
console.log(sumAll(5,10,15,20));

let n = [1,2,3,3];
let b = [2,3,4,4,5]

let combine = [...n,...b];
console.log(combine);


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    async function getUser() {
    const response =     await fetch("https://jsonplaceholder.typicode.com/posts/1")
       const data = await response.json();

       console.log(data);
       


    }
    getUser();
    
    