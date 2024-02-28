"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// calculator.ts
const readlineSync = __importStar(require("readline-sync"));
class calculadora {
    constructor(welcomeMessage, firstNumber, secondNumber) {
        this.welcomeMessage = welcomeMessage;
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = '';
        this.result = 0;
        this.trueOrFalse = false;
        // this.readline = readlineSync;
    }
    textMessage() {
        // welcome message
        this.welcomeMessage = "Welcome to the Simple Calculator!";
        console.log(this.welcomeMessage);
    }
    operations() {
        do {
            this.textMessage();
            ///console numbers 
            //numero 1
            this.firstNumber = readlineSync.question('Please enter first Number\n');
            let numero1 = Number(this.firstNumber);
            console.log(numero1);
            //numero 2
            this.secondNumber = readlineSync.question('Please enter second Number\n');
            let numero2 = Number(this.secondNumber);
            console.log(numero2);
            this.operation = "Select an operation:\n";
            const operation = readlineSync.question(this.operation);
            console.log(operation);
            switch (operation.toLowerCase()) { //switch
                case 'Addition':
                    this.result = numero1 + numero2;
                case 'addition':
                    this.result = numero1 + numero2;
                    break;
                case 'Subtraction':
                    this.result = numero1 - numero2;
                case 'subtraction':
                    this.result = numero1 - numero2;
                    break;
                case 'Multiplication':
                    this.result = numero1 * numero2;
                case 'multiplication':
                    this.result = numero1 * numero2;
                    break;
                case 'Division':
                    this.result = numero1 / numero2;
                case 'division':
                    this.result = numero1 / numero2;
                    break;
                default:
                    console.log('no valid operation');
                    break;
            } //switch 
            console.log(this.result);
            let continuar = readlineSync.question('Do you wish to continue?\n');
            if (continuar === "y" || continuar === "Y") {
                this.trueOrFalse = true;
            }
            else {
                this.trueOrFalse = false;
            }
        } while (this.trueOrFalse);
    } ///operations method
} ///object calculadora
const calculadoraUx = new calculadora("Welcome to the Simple Calculator!", 'Please enter second Number\n', "Select an operation:\n");
console.log(calculadoraUx);
calculadoraUx.operations();
//// function calculator
let calculator = () => {
    let trueOrFalse = false;
    do {
        calculadoraUx.textMessage();
        let result = 0;
        let welcomeMessage = "Welcome to the Simple Calculator!";
        console.log(welcomeMessage);
        const FirstNumber = 'Please enter first Number\n';
        const num1 = readlineSync.question(FirstNumber);
        console.log(parseFloat(num1));
        let numero1 = Number(num1);
        const secondNumber = 'Please enter second Number\n';
        const num2 = readlineSync.question(secondNumber);
        console.log(parseFloat(num2));
        let numero2 = Number(num2);
        const selectOperation = "Select an operation:\n";
        const operation = readlineSync.question(selectOperation);
        switch (operation) {
            case 'Addition':
                result = numero1 + numero2;
            case 'addition':
                result = numero1 + numero2;
                break;
            case 'Subtraction':
                result = numero1 - numero2;
            case 'subtraction':
                result = numero1 - numero2;
                break;
            case 'Multiplication':
                result = numero1 * numero2;
                break;
            case 'Division':
                result = numero1 / numero2;
                break;
            default:
                console.log('no valid operation');
                break;
        }
        // return result;
        console.log(result);
        /// asking if user want to continue
        const trueOrFalseQuestion = 'Would you like to continue using the cslculator? [y/n]\n';
        const trueOrFalseQuestionAnswer = readlineSync.question(trueOrFalseQuestion);
        if (trueOrFalseQuestionAnswer === 'y' || trueOrFalseQuestionAnswer === "Y") {
            trueOrFalse = true;
        }
        else {
            trueOrFalse = false;
        }
    } while (trueOrFalse);
};
//calculator()
// let otherFun:boolean = () => {
// }
/**

 * Example Output

Welcome to the Simple Calculator!

Please enter the first number: 10

Please enter the second number: 5

Select an operation:

1. Addition

2. Subtraction

3. Multiplication

4. Division

Enter the operation number (1-4): 3

 

Result: 10 * 5 = 50

 

 *

 *

 *

 *

 *

 * npm install readline-sync

 * tsc --init

 * npm i --save-dev @types/readline-sync

 */ 
