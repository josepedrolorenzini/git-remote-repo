"use strict";
let my_name = 'jose lorenzini';
let my_age = 42;
let myPersonalData = {
    myname: my_name,
    myAge: my_age,
    mynum2: 24,
    first_name: 'jose',
    isStudent: true,
    myUndefinedVar: undefined,
    mynull: null,
};
console.log(myPersonalData);
let person = {
    name: 'jose',
    age: 42,
    city: 'Sydney'
};
console.log(person);
let person2 = {
    name: 'john',
    age: 42,
    city: 'Sydney'
};
document.body.innerHTML = person.name;
let arraynumber = [1, 2, 3, 4, 5];
console.log(arraynumber);
//operators
let a = 5;
a += 5;
console.log(a);
a -= 5;
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
let names = 'Computer', statuss = 'On';
let machine = {
    names,
    statuss
};
console.log(machine);
let widget = {
    name: 'widget',
    color: 'red'
};
let cloneWidget = Object.assign({}, widget);
console.log(cloneWidget);
///while
let myNum = 1;
while (myNum <= 5) {
    console.log(`my num is ${myNum}`);
    myNum++;
}
let x = 0;
do {
    console.log(`my x number is ${x}`);
    x++;
} while (x <= 5);
