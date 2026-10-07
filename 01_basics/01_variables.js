const Studentid = 1234
let StudentEmail = "Student123@gmail.com" // local variable within the block scope
var StudentPassword = "123456789" // Global variable
StudentCity = 'UTTAR Pradesh'
let StudentPhoto;
// Studentid = 12;  not allowed
console.log(Studentid)
console.log(StudentPassword)
console.table([Studentid, StudentEmail, StudentPassword, StudentCity, StudentPhoto])
/*
prefer the let 
because of the issue of the functional block
*/