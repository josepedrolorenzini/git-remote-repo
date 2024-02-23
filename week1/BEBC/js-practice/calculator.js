"use strict";
let calculadora = {
    num1: 1,
    num2: 2,
    add(n1, n2) {
        // return this.num1 + this.num2;
        return n1 + n2;
    },
    division(n1, n2) {
        return n1 / n2;
    },
    multiply(n1, n2) {
        return n1 * n2;
    },
    substract(n1, n2) {
        return n1 - n2;
    },
};
console.log(calculadora.add(3, 5));
console.log(calculadora.division(3, 5));
console.log(calculadora.multiply(3, 5));
console.log(calculadora.substract(3, 5));
calculadora.__defineGetter__('getting', () => { return 4; });
