let coding = ['python', 'cpp', 'ruby', 'java']

const varaiblefunction = coding.forEach((item) => {
    // console.log(item)
    // if we store this function in  a variable the then try to acess the value of the variable which is given by the function which output is undefined because this function not returns any value
})
// console.log(varaiblefunction)

// filter
// In this function it returns the function value so we can sotre it in a variable to print and it take a arrowfunction in the filter parenthesis and inside it it take callback function and after it take a condition to acees the elements  
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum.filter((num) => num > 4)
// console.log(newnum)


// const Newnum = mynum.filter((num) => {
//     return num > 4// use return keyword if use the block(curlybrackets) else code not give output
// })
// console.log(Newnum)

 const newarray =[1,2,3,4,5,6,7,8,9]

 const emptyarray =[]

 newarray.forEach( (num) => {
    //  console.log(num)
    
    if (num > 4) {
        emptyarray.push(num)
    }
 })
//  console.log(emptyarray);
 
 const Books = [ 
    { title: 'First Book', genre: 'Fiction', publish: '1981', edition: '2004'},
    { title: 'Second Book', genre: 'Non-Fiction', publish: '1980', edition: '2004'},
    { title: 'Third Book', genre: 'Science', publish: '1986', edition: '2004'},
    { title: 'Four Book', genre: 'History', publish: '1961', edition: '2004'},
    { title: 'Fifth Book', genre: 'Fiction', publish: '1981', edition: '2004'},
    { title: 'Six Book', genre: 'History', publish: '1981', edition: '2004'},
    { title: 'Seven Book', genre: 'Non-Fiction', publish: '1981', edition: '2004'},
    { title: 'Eight Book', genre: 'History', publish: '1989', edition: '2004'},
    { title: 'Nine Book', genre: 'Fiction', publish: '1982', edition: '2004'},
    { title: 'TenBook', genre: 'History', publish: '1981', edition: '2004'},
     
 ];

let  userbooks = Books.filter( (bk) => bk.genre === 'History')
 userbooks = Books.filter( (bk) => { return bk.publish > 1980 && bk.genre=== 'History'})
 
 console.log(userbooks)