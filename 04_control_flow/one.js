const value = 10;
if(value > 5){
   // console.log("Value is greater than 5");
}
else{
   // console.log("Value is not greater than 5");

}
// Comparison Operators 
//>,<,=>,>=,==,===,!=,!==

const score = 100

if(score>100){
    let grade = "A";
  //  console.log(`You got ${grade}`)
}
else{
   // console.log(`You failed to get grade${grade}`)// can't acces grade because it is blocked scoped
}

const balance = 1000;
if (balance > 500)  console.log("Check"); // it have a implicit scope/block like let we have block always end with semicolon.

if(balance < 500){
   console.log("Balance is greater then 500")
}
else if(balance < 750){
   console.log("Balance is greater then 750")
}
else{
   console.log("Balance is greater then 1000")
}

const UserLoggedIn = true
const UserDebitCard = true
const LoggedInWithGoogle  = false
const LoggedInWithEmail = true

if(UserLoggedIn && UserDebitCard){
   console.log("User Allow");
   
}
if(LoggedInWithGoogle || LoggedInWithEmail){
   console.log("User can logged in");
   
}