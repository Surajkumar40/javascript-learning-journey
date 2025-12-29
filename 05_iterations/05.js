let coding = ['python', 'cpp', 'ruby', 'java']

coding.forEach(function (val){// here array acees with the arrayname.foreach() and inside the () we give a callbackfunction in it a callback function is same as function but it doesn't have a name we use only function keyword and parenthesis () and inside it we give a variable to iterate it ex- i=0; i<10;i++; as same as
   // console.log(val);
    
})

coding.forEach( (val) =>{ // with the arrow function same as above 
    // console.log(val);
})

function printme(val){ // function is printing val on by oneby referencing
    // console.log(val);
}
coding.forEach(printme) // pass the function name in parameter to referencee it

coding.forEach( (val, index, arr) =>{
    // console.log(val, index, arr)// you can print value of array , index, full array
})

let mycoding = [{
    languageName: 'Javascript',
    languageFile: 'js'
},{
     languageName: 'Python',
    languageFile: 'py'
},{
     languageName: 'Java',
    languageFile: 'java'
},]

mycoding.forEach((item) =>{
   console.log(item.languageFile)// accesing the items from a object inside a array
})