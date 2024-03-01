/**
 *  ARROW FUNCTION -- allows you to write JS functions with a shorter, more concise syntax
 * 
 *  [ => ] -- used to define the function
 *  if you have one statement, omit the curly braces { } and return keyword
 *  if has multiple statements or requires return, you still need to put the { } and the return keyword
 * 
 *  if function has no parameters or has more than one parameter, you still need to include the parentheses ()
 *  if function has only one parameter, you can omit the  ( ) 
 */

//old way of making function
// function sayHello (name) {
//     console.log('Hello ' + name);
// }

// sayHello('Princess');

//new way
const greeting = () => console.log("Nice to meet you!")

// return keyword requires the { }
// const greeting = () => { 
//     return 'Nice to meet you!' 
// }

const sayHello = (name) => console.log('Hello ' + name);
sayHello('Princess');

//arrow function w/ 1 parameter
const square = num => num * num;
console.log(square(4));

//arrow function w/ 2 or more parameters
const sum = (a, b) => a + b;

const intro = () => {
    let name = 'Mary';
    let age = 25;

    return 'Hi! My name is ' + name + '. I am ' + age + ' years old.';
}

console.log(intro());
