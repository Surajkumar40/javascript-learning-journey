const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
    resolve()

        
    },1000)
})

promiseOne.then(function (){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Suraj", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
}) 
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
       console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is resolved or rejected")
)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript", password:"12345"})
        } else{
            resolve('ERROR: JS went wrong')
        }
    },1000)
});

// async function consumepromiseFive() {
//    const response =  await promiseFive
//    console.log(response);
   
// }
// async function consumepromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     } catch(error){
//         console.log(error)
//     }
// }

// consumepromiseFive()

// async function getAllUsers(){
//     try {
//   const response =  await  fetch('https://jsonplaceholder.typicode.com/users')
// //   console.log(response);
  
//     const data = await response.json()
//     console.log(data);
//       }catch (error) {
//         console.log("E:",error)
//       }
  
// }
// getAllUsers()
// fetch('https:///jsonplaceholder.typicode/com/users')
fetch('https://api.github.com/users/surajkumar40').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
}).catch((error) => console.log(error)) 