const marvel_heroes = ['Spiderman','Thor','Batman']
const DC_heroes = [' Ironman','Captain','Flash']
// marvel_heroes.push(DC_heroes)
const allheroes = marvel_heroes.concat(DC_heroes)// it returns in new array
// console.log( allheroes);
const all_newheroes = [...marvel_heroes,...DC_heroes]//spread all elements
console.log(all_newheroes);
const realanotherarray =[1,2,3,4,[23,324,24,],24, 232,[3,32,423,13,],2]
console.log(realanotherarray.flat(3));

console.log(Array.isArray("Suraj"))
console.log(Array.from("Suraj"))//to convert to array
console.log(Array.from({name : "Suraj"}))//interesting
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));
