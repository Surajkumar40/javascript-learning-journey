// ES6

const { use } = require("react");

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;   
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserame(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Suraj", "suraj", "suraj@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUserame());

//behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
    
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.Username = function(){
    return `${this.username}`
}
const tea = new User("tea" , "tea@gmial.com", "123")
console.log(tea.encryptPassword());
console.log(tea.Username());

