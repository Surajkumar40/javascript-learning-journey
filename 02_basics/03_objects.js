//There are two type of the objects can declared
/*1- as a literals (multiple instances) syntax- const myobj={}
2- as a constructor(singleton) syantax- Object.Create
*/
// object literals
const mysmy = Symbol("Key1")

const myobj ={
    name: "Suraj",
    "full_name":"Suraj Kumar",
    age: 18,
    city:"Up",
    islogggedin: false,
    email:"Suraj@google.com",
    [mysmy]: "mysymbol",
}
// console.log(myobj.name);//first way  print
// console.log(myobj["full_name"]);//second ways to print widely used
// console.log(myobj[mysmy]);//first way not print it but second way do it
// console.log(myobj[mysmy]);//data type print
myobj.email="suraj@new.com"
// console.log(myobj.email);
// Object.freeze(myobj)//used to lock not update obj value
myobj.email="suraj@newanother.com"
// console.log(myobj);

myobj.greeting = function(){
    console.log("Hyy JS user");
    
}
myobj.greeting2 =function(){
    console.log(`hyy Js user,${this.name}`);//this is take you inside the obj
    
}
console.log(myobj.greeting());
console.log(myobj.greeting2());


