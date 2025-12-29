// let myName = "Suraj    "
// let myChannel = "chai    "

// console.log(myName.replace.truelength);
// console.log(myName.trim().length);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.suraj = function(){
    console.log(`suraj is present in all objects`);
    
}
Array.prototype.heysuraj = function(){
    console.log(`Suraj says hello`);
    
}

// heroPower.suraj()
myHeroes.suraj()
myHeroes.heysuraj()
// heroPower.heysuraj()

//inheritance

const user ={
    name: "chai",
    email: "chai@email.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSuport ={
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeacherSuport
}
Teacher.__proto__ =  user

//modern syntax

Object.setPrototypeOf(TeacherSuport, Teacher)

let anotherUsername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"suraj".trueLength()
"iceTea".trueLength()