function multipeBy5(num){
    return num*5
}
multipeBy5.power = 2
console.log(multipeBy5(5));
console.log(multipeBy5.power);
console.log(multipeBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
const Chai = new createUser("chai", 25)
const tea = createUser("tea", 225)

Chai.printMe()

/*

Here's what happens behind the scene wehn the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructtor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript this.

The new objext is returned: After the constructor function had been called, if it doesn't return a non-primitive value (object, array, function, ets.), the newly created object is returned.

*/