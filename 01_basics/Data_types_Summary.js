/**************Primitive****************/
// 7types- String, Int, Boolean, Symbol, Null, Undefined, BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = true
const areatempt = null
let userEmail;
let id = Symbol(123)
let anotherid = Symbol(123)
console.log(id===anotherid);
let numberbig = 1234567890n //n is used to make it BigInt
console.log(numberbig);
console.log(typeof numberbig);


/***********Reference(Non-Primitive**********/
// Array, Object, Functions
let heros = ["Shaktiman", "Dada", "YoYooo"]
let myobj ={
    name:"Suraj",
    age:19
}

myFunnction = function(){
    console.log("Hello Suraj")
}

console.log(typeof heros);

//+++++++++++++++++++++++++++++++++++++
// Memory
// Stack(Primitive), Heap(Non-Primmitive)

let myname = "Suraj@googledotcom"
let anothername = "Anothergoogledotcom"

// console.log(myname);
// console.log(anothername);

let myFunction =  {
    email: "surajgogledotcom",
    name:"Suraj",
}
let anotherfunction = myFunction
anotherfunction = "Newgoogledotcomm"
console.log(myFunction);
console.log(anotherfunction);

