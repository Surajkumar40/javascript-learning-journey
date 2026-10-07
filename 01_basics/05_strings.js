const name = "Suraj"
const repoCount = 0
// console.log(name);

// console.log(`Hello ${name.toUpperCase()} what is your repo count ${repoCount}`);

const gameName = new String("Suraj-Kumar-43")
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('j'));
const newstring = gameName.substring(0,3)
console.log(newstring);
const anotherstring = gameName.slice(-8,6)
console.log(anotherstring);
console.log(gameName.replace("-","_"));
console.log(gameName.replaceAll("-","_"));

console.log(gameName.includes('Suraj'));
console.log(gameName.split('-'));


