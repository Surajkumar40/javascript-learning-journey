function myname(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}
// myname();

function addnum(nummber1, number2){ //parameters
 console.log(nummber1+number2); 
 
}
addnum(2,3) //arguments

function name(username){
    return `${username} is just logged in`
}
console.log(name('SURAJ'));

function CalculateCartItems(...num1){//...rest is used here to combine all argument in a single array
return num1
}
// console.log(CalculateCartItems(200,300,4000,3))
const user = {
    name: "suraj",
    price:100,
 }
 function getuser(anyuser){
    console.log(`${anyuser.name} is a price ${anyuser.price}`);
    
 }
 getuser(user)

   
 
const arr  =[1,2,3,4]

function returnsecondvalue(anyarr){
    return  anyarr[1]
}
console.log(returnsecondvalue(arr))