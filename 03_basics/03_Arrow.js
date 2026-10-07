
const user = {
    name: "Suraj",
    price:99,

    welcomemessage : function() {
        console.log(`${this.name} , welcome to website.`);
        console.log(this);//whole ooutut of this object
        
    }
}
// user.welcomemessage()
// user.name = "Sam"
// user.welcomemessage()
// console.log(this);//{}

// function chai(){
//     let username="Suraj";
//     console.log(this.username);// this is used in object not in functions output in function is undefined
// }
    
// chai()
// const chai= () => {
//     let username="Suraj";
//     console.log(this); 
    
// }
// chai()

// const sum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(sum(2,3));

//  const sum = (num1, num2) => num1 + num2 //implicit return
//  console.log(sum(2,3));
 //   const sum = (num1, num2) => (num1 + num2) 
 const sum = (num1, num2) => ({username:"Suraj"}) // declaration as object parenthesis is compulsury
 console.log(sum(2,3));