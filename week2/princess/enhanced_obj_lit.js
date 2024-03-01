/**
 * Enhanced Object Literals -- provides a more concise syntax when creating JS Objects
 */

//method shorthand
const person = {
    name: 'Kasia',
    gender: 'Female',
    greeting() {
        return `Hi! I'm ${this.name}, ${this.gender}.`
    }
}

console.log(person.greeting());

//property shorthand
// const name = 'Kasia';
// const gender = 'Female';

// const person {
//     name, age, greeting() {
//         return `Hi! I'm ${this.name}, ${this.gender}.`
//     }
// }

/**
 * Spread and Rest Operators
 *  
 * ( ... ) 
 *  Spread Operator : expand iterables into individual elements
 *  Rest Operator: collects remaining elements into an array within function argument list
 */

//Spread Opperator
const fruits = ['apple', 'banana', 'kiwi'];
const moreFruits = [...fruits, 'orange', 'grapes'];

console.log(moreFruits);

//--
const sum = (x, y, z) => x + y + z;
const numbers = [1, 2, 3];

console.log(numbers); //array
console.log(...numbers); //individual array elements using the spread operator
console.log(sum(...numbers)); //sum

//combining arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const combinedNumbers = [...num1 , ...num2];
console.log(combinedNumbers);

//copying arrays
const originalArray = [7, 8, 9];
const copiedArray = [...originalArray];

console.log(originalArray, copiedArray);

//object Spreading
const person1 = { name: 'Joe', age: 25 };
const newPerson1 = {...person1 , gender: 'Male'};

console.log(newPerson1);

//spreading elements in Function Calls
const add = (a, b, c) => a + b + c;

const addends = [1,2,3];
const result = add(...addends);

console.log(result);

//Rest Operator

//rest parametes in functions
let sum1 = (...numbers) => {
    return numbers.reduce((acc, val) => acc + val, 0);

}

console.log(sum1(1, 2, 3, 4));

//--
function sumAll(...numbers) {
    let total = 0;
    for(let num of numbers) {
        total += num
    }
    return total ;
}

console.log(sumAll(1, 2, 3));

//--
const myFunction = (firstArg, secArg, ...restOfArgs) => {
    console.log(firstArg);
    console.log(secArg);
    console.log(restOfArgs);
}

myFunction('one', 'two', 'three', 'four', 'five');

//default parameters
const multiply = (a , b = 5) => a * b;

console.log(multiply(8));
console.log(multiply(8, 6));

