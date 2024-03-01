/**
 * DESTRUCTURING  -- simplifies exracting values from complex data structures; use it for cleaner and more readable code.
 * 
 * 
 * 
 */

//Destructuring from Arrays
let person = [ 'Alice', 30, 'Software Engineer'];

//traditional way of accessing each element
// let namee = person[0];
// let age = person[1];
// let job = person[2];

//new way (destructuring)
// const [namee, age, job ] = person;
//console.log(person);

//skipping elements -- uses comma ( , ) to skip the element that you dont need
const[namee, ,job] = person;
console.log(person);
console.log(namee, job);

const numbers = [1, 2, 3, 4, 5];
const[first, second,  ,fourth] = numbers;

console.log(first); //1
console.log(second); //2
console.log(fourth); //4

//Destructing Objects
/**
 * JS Objects --  can store various data types; used to represent a collection of key:value pairs
 */

//object literals
let person2 = {
    fname: 'Aiman',
    age: 18,
    country: 'Australia'
}

console.log(person2.fname);


//new way(Object destructuring) -- use { } and specify the property you want to extract
const {fname, age} = person2;
console.log(fname);

const person3 = {
    name: 'Anu',
    agee: 20,
    city: 'Sydney'
}

const{name, agee} = person3;
console.log(name);
console.log(agee);

//--
const numberss = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3
}

const{firstNum, secondNum, thirdNum, fourthNum} = numberss;
console.log(fourthNum); //undefined

//Destructuring with Default Values
const user = { 
    name: 'Bob' 
};

const {age1 = 25} = user;
console.log(age1);

//Nested Objects
// let nestedObj = {
//     first_name : 'Alice',
//     age2: 25,
//     address : {
//         city: 'Wonderland',
//         country: 'Fairyland'
//     }
// };

// //destructure nested objects

// //destructuring pattern should be defined before accessing the variables
// const {first_name, age2, address} = nestedObj;

// console.log(first_name);
// console.log(address.city);
// console.log(address.country);


//default values in nested destructuring
let nestedObj = {
    first_name : 'Alice',
    age2: 25,
    address : {
        city: 'Wonderland',
        country: 'Fairyland'
    }
};

const {first_name, age2, address, gender = 'Female'  } = nestedObj;
const {city, country} = address;

console.log(nestedObj, gender)
console.log(gender);
console.log(city, country);