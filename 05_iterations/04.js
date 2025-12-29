let myobject ={
    js: 'Javascript',
    css: 'Cascading style sheet',
    rb: 'Ruby',
    swift: 'Swift'
}

for (const key in myobject) {
//    console.log(`${key}  is known as ${myobject[key]}`);
   
}

let programming= ['js', 'css','java','cpp','py']
for (const key in programming) {
    // console.log(key);
    
}
for (const key in programming) {
    // console.log(programming[key]);
    
}
let map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
for (const key in  map) {
//    console.log(key); // map is not iteratable we have different method to acees element
   
}