// for loop

// for (let i = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         // console.log("5 is best number")
//     }
//     // console.log(element);
 
// }

// for (let i = 0; i <= 10; i++) {
    
//     // console.log(`Outer loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
       
//         // console.log(`Inner loop value is: ${j} and outer loop value is ${i}`)
//     }
    
// }
// // console.log("Loops completed")

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
    //    console.log(`${i} * ${j} = ${i*j}`);
       
        
    }
    
}

// let myarray = ['Batman', 'Superman', 'Spiderman', 'Ironman']

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }
 
// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("detected 5")
//         break
//     }
//     console.log(index)
// }
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5")
        continue
    }
    console.log(index)
}