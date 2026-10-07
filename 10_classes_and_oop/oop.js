// Object literal
const user = {
    username: "Suraj",
    loginCount: 8,
    signedIn: true,

    getUsrDetails: function(){
        // console.log("Got user details from databse");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getUsrDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`${this.username}`);
        
    }

    // return this
}
// new keyword is use and it create a new empty object
//  step1- creation of empty object
// step2- constructor function called with help of new keyword(i packed all arguments and give them)
// step3- all the arguments are injected in the this keyword
// step4- we get with the function


const userOne = new User("Suraj", 4, true)
const userTwo = new User("Chai", 7, true)
// console.log(userOne);
// console.log(userOne.constructor);
// console.log(userTwo);

//instanceof in js


//Prototype
const newHero = ["hulk", "spiderman"]
console.log(newHero);
