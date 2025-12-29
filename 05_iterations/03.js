// For of loop
// ['', '','']
// [{},{},{}]

// let arr = [1 , 2 , 3 , 4 , 5 , 6]
// for (const num of arr) {
//     // console.log(num);
    
// }

const greetings = 'Hello World'

for (const  greet of greetings) {
    // console.log(`Each char of greetin: ${greet}`)
}

let map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map)

for (const  [key, value] of  map) {
    // console.log(key,  ':-', value)
    
}

let myobj ={
    game1 : "gameyes",
    game2 : "gameno"
}
for (const [key, value] of  myobj) {
    // console.log(key, ':-', value)  //Object is not iteratable with this method for this we  have another method to itrate
}