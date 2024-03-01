/**
 * Functions -- written to perform a specific task; 
 *          -- can be reused whenever needed
 * 
 * //Syntax:
 *  'function' keyword <function name> ( <parameter/s> ) { 
 *      <code block>        
 * 
 * //to call a function:
 *      <function name>() 
 *  } 
 * 
 * Benefits of Functions:
 *  * Reusability
 * * Organization
 * * Flexibility
 */

//Function Declaration
function greet() {
    console.log('Hello, welcome to JS Functions!');
}

greet();

//parameters and arguments
function greeting(name) {
    console.log('Hello ' + name + "!");
}

greeting('Joseph');

//return statement
function add(num1, num2) {
    return num1 + num2;
}

let sum = add(3, 5);
console.log(sum);

//multiple parameters and arguments
function fullName(firstName, lastName) {
    console.log('Full Name: ' + firstName + ' ' + lastName);
}

fullName('Jane', 'Carms');

//Function Expression
let square = function(x) {
    return x * x;
};

console.log(square(4));

//Function Hoisting  
meet();

function meet() {
    console.log("Hey!");
};

// Function Hoisting will not work on Function expressions:
// let meet = function() {
//     console.log("Hey!")
// }

//Anonymous Function 
let anon = function() {
    console.log('This is an anonymous function.');
};
anon();

//=== VARIABLE SCOPES ====//

//Global Scope -- variables are accessible from anywhere in your code

let globalVar = 'I am a global variable.';

// function accessVar () {
//     console.log(globalVar);
// };

// accessVar();

//Local Scope -- variables are only accessible within a function or block
function accessVar() {
    let localVar = 'I am a local variable.'
    console.log(localVar);
}

accessVar();
// console.log(localVar);
console.log(globalVar);

//== Nested Functions ==//
function outerFunction() {
    let outerVar = 'I am from the outer function.';

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction(); 
}

outerFunction();

//== Higher Order Functions (HOF) ==//
/**
 * 1. Take functions as arguments
 * 2. Return a function or perform operation on functions
 */

//Function as an argument
function fName(name) {
    console.log("Hi " + name);
}

function sayHi (greetingFunction) {
    greetingFunction("Alice"); 
}

sayHi(fName); //fName('Alice')

//Function as an argument
function applyOperation (x,y, operation) {
    return operation(x,y);
}

function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

let result1 = applyOperation(4, 3, add);
let result2 = applyOperation(6, 3, subtract);

console.log(result1);
console.log(result2);


//Function as a Return Value
function multiply(factor) {
    return function(x) {
        return x * factor;
    }
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(5));
console.log(triple(5));

//== Callback ==//
//function that is passed as an argument to another function

function greet2(my_name, callback) {
    console.log('Hello ' + my_name);
    callback();
}

function sayGoodbye(){
    console.log('Goodbye');
}

greet2('Jon', sayGoodbye);