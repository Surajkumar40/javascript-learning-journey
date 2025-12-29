let a =20

if(true){
  let a =1
  const b=2
  var c=3
  console.log("Inner",a);
  
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "Suraj"

  function two(){
    const website = "Yahoo"
    // console.log(username);
    
  }
  // console.log(website);
  two()
  
}
one()

if(true){
  const username = "Suraj"

  if(username === "Suraj"){
    const website = " Youtube"
    console.log(username + website);
    
  }
}

// +++++++++++interesting++++++
console.log(ones(5));

function ones(num){
  return num+1
}
ones(5)

const funvar = function twos(num){
  return num+2
}
console.log(funvar(4))