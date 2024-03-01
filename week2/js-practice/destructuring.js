"use strict";
let person = ['alice', 30, 'software engineer'];
console.log(person);
let [names, age, profession] = person;
console.log(names);
console.log(profession);
let numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(third);
///object literals
let person2 = {
    name: "one code camps",
    age: 1995,
    country: "Australia"
};
console.log(person2.country);
const { nombre, edad, pais } = person2;
let user = { name: "user" };
// Use type assertion
const { age1 = 23 } = user;
console.log(user);
