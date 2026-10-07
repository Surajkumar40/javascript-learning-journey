// Javascript Execution Context (JEC)

// An Execution Context (EC) is the environment where JavaScript code is evaluated and executed.
/*It is like "container" that holds:

Variables (created in memory)
Functions
Scope chain (to resolve variables)
Value of this
Whenever JavaScript runs your code, it creates an execution context.*/

// Type of EC are three:
/*1- Global Execution Context (GEC) - created when js program first run, creates global object (window in browser, global in node) and 'this' keyword points to global object
2- Functional Execution Context (FEC) - created every time when a function is invoked it has its own memory space(variables, inner functions, etc) and this keyword points to the object that invoked the function
3- Eval Execution Context (EEC) - (rarely used) Created when code inside eval*/

// How Execution Context Works 
/*1-Creation phase- in this phase, the memory is allocated for variables and functions. Variables are initialized with 'undefined', and functions are stored in memory
2-Execution phase- in this phase, the code is executed line by line, and variables are assigned their actual values
// Example of Execution Context
var a = 10; // GEC
var b = 20; // GEC              
function sum(){ // GEC
    var c = 30; // FEC
    console.log(a+b+c); // FEC
}
sum(); // GEC
// In the above example, when the code runs, a Global Execution Context (GEC) is created. When the function 'sum' is invoked, a new Functional Execution Context (FEC) is created for that function. The FEC has access to its own variables and the variables in the GEC due to scope chain.*/
 
//Execution Context Stack (ECS)
/* It is a stack data structure that keeps track of all the execution contexts created during the execution of a JavaScript program. The ECS follows the Last In First Out (LIFO) principle, meaning the most recently created execution context is the first one to be removed from the stack when its execution is complete.*/
// When a function is invoked, a new execution context is created and pushed onto the stack.*/