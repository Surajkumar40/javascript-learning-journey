// object as constructor (singleton)
const tinderuser = new Object()
tinderuser.name = "Suraj"
tinderuser.age = 18
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularuser ={
    userid : 1234,
    username :{
        fullname :{
            firstname:"Suraj",
            lastname :"Kumar"
        }
    }
 
}
// console.log(regularuser);
// console.log(regularuser.username.fullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = Object.assign(obj1,obj2)// all obj1,obj2 etc are stored in obj1
obj4 = Object.assign({},obj1,obj2)//{} all obj1,obj2 etc are stored in {} 
//obj4 = Object.assign({},obj1,obj2) {} is used as target and obj1, obj2 etc are used as source
// console.log(obj3);
// console.log(obj4);
const obj5 = {...obj1, ...obj2}//spread 
// console.log(obj5);
// console.log(Object.keys(tinderuser))//it will show u in array form to iterate it
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLogged'));

const course = {
 coursename:"Js",
 courseprice:999,
 courseinstructor:"Suraj",
}
const {courseinstructor :instructor} = course// is used for short name declaration(destructure)
console.log(instructor);

//format of api data in json as object
// {
//     name:"Suraj",
//     age:18,

// }

// format of api data in arary form
// [
//     {}
//     {}
//     {}
// ]
