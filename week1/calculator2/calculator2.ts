import * as readlineSync from 'readline-sync';

type operators={
    operator:string,
    num1:number|string,
    num2:number|string,
    checkOperation(param:string):number|string
}

let calculator:operators =   {
    operator : readlineSync.question("what operation would you like to do?"),
    num1: readlineSync.question("enter first number .. "),
    num2: readlineSync.question("enter first number .. "),
    checkOperation(operator:string):number|string{
        if(operator === "addition" || operator === "+"){
            return Number(this.num1 )+ Number(this.num2);
        }else if(operator === "substraction" || operator === "-"){
            return Number(this.num1 ) - Number(this.num2);
        }else if(operator === "multiplication" || operator === "*"){
            return Number(this.num1 ) * Number(this.num2);
        }else if(operator === "division" || operator === "/"){
            return Number(this.num1 ) / Number(this.num2);
        }else{
            return "not founded";
        }
    }
    

}

console.log(calculator)
console.log(calculator.checkOperation(calculator.operator))