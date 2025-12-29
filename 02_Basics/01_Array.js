/* Array */
const myarr = [1,2,1,4,5]
const myar = ["Yooo","aish","skas"]
const newarr = new Array(2,3,453,2)
// console.log(newarr[2]);

//Methods
myarr.push(7)//to add at last
myarr.pop()//to delete from last
// console.log(myarr);
myarr.unshift(9)//to add at starting
myarr.shift()//to delete from starting
// console.log(myarr);
// console.log(myarr.includes(9));// array includes nummber true or false
// console.log(myarr.indexOf(2));

const newstringarr =myarr.join()// it show in string type
// console.log(newstringarr);
// console.log(typeof newstringarr);

console.log('A',myarr)
const arrn1 = myarr.slice(1,3)//it not include last index value and original array remains same
console.log(arrn1);
console.log('B',myarr)

const arrn2 = myarr.splice(1,3)//it include last index value and it will delete the parameters elements from original array.
//in which splice method delete the 2,1,4 from original array
console.log(arrn2);
console.log('C',myarr)



