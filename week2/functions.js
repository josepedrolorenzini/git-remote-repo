"use strict";
let fExpression = function (num1, num2) {
    return num1 + num2;
};
console.log(fExpression(2, 3));
let findMAx = (...numbers) => {
    return Math.max(...numbers);
};
let numeros = [2, 10, 65, 42, 16, 18, 100, 2024];
console.log(findMAx(...numeros));
///high order functions - mathoperation
let mathOperation = (callback, num1, num2) => {
    return callback(num1, num2);
};
//small functions
let add = (num1, num2) => {
    return num1 + num2;
};
let substract = (num1, num2) => {
    return num1 - num2;
};
let divide = (num1, num2) => {
    return num1 / num2;
};
let multiply = (num1, num2) => {
    return num1 * num2;
};
console.log(mathOperation(add, 5, 5));
console.log(mathOperation(substract, 5, 5));
console.log(mathOperation(divide, 5, 5));
console.log(mathOperation(multiply, 5, 5));
///class math operations
class mathOperations {
    constructor(name, symbol) {
        this.add = (num1, num2) => {
            return num1 + num2;
        };
        this.substract = (num1, num2) => {
            return num1 - num2;
        };
        this.divide = (num1, num2) => {
            return num1 / num2;
        };
        this.multiply = (num1, num2) => {
            return num1 * num2;
        };
        this.name = name;
        this.symbol = symbol;
    }
}
const myMathematicalsObject = new mathOperations('myMathematicalsObject', "+");
///mycallback 
const myCallback = (param, num1, num2) => {
    let result;
    switch (param) {
        case "+":
            result = myMathematicalsObject.add(num1, num2);
            break;
        case "/":
            result = myMathematicalsObject.divide(num1, num2);
            break;
        case "*":
            result = myMathematicalsObject.multiply(num1, num2);
            break;
        case "-":
            result = myMathematicalsObject.substract(num1, num2);
            break;
        default:
            result = "not found";
            break;
    }
    return result;
};
console.log(myCallback(myMathematicalsObject.symbol, 2, 2));
//high orders functions examples 
//Function as an argument
function fName(name) {
    console.log("Hi " + name);
}
function sayHi(greetingFunction) {
    greetingFunction("Alice");
}
sayHi(fName); //fName('Alice')
////FUNCTION AS A PARAMETER
console.debug('FUNCTION AS A PARAMETER');
function applyFunction(myFunction, myArray) {
    return myFunction(...myArray);
}
function EachElementArray(...arr) {
    let x = [];
    arr.forEach(e => {
        x.push(Math.floor(Math.random() * e) + Math.PI);
        console.log(x);
    });
    return x;
}
try {
    console.log(applyFunction(EachElementArray, [2, 3, 4]));
}
catch (error) {
    throw new Error('error');
}
///callback functions
let getUserData = () => {
    setTimeout(() => {
        return myMathematicalsObject.name;
    }, 1000);
};
console.log(getUserData());
