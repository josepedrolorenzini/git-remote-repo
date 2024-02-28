let fExpression = function(num1:number,num2:number):number{
        return num1 + num2 ;
}

console.log(fExpression(2,3))



let findMAx = (...numbers:number[]) => {
   return Math.max(...numbers) ;
}
let numeros:Array<number> = [2,10,65,42,16,18,100,2024]
console.log(findMAx(...numeros));

///high order functions - mathoperation
let mathOperation = (callback:Function,num1:number,num2:number)=>{
        return callback(num1,num2)
}

//small functions
let add = (num1:number,num2:number):number =>{
    return num1 + num2 ; 
}
let substract = (num1:number,num2:number):number =>{
    return num1 - num2 ; 
}
let divide = (num1:number,num2:number):number =>{
    return num1 / num2 ; 
}
let multiply = (num1:number,num2:number):number =>{
    return num1 * num2 ; 
}


console.log(mathOperation(add,5,5))
console.log(mathOperation(substract,5,5))
console.log(mathOperation(divide,5,5))
console.log(mathOperation(multiply,5,5))


///class math operations
class mathOperations{
    public name:string;
    public symbol:string;
    constructor(name:string,symbol:string){
        this.name = name;
        this.symbol = symbol;
    }
    add = (num1:number,num2:number):number =>{
        return num1 + num2 ; 
    }
    substract = (num1:number,num2:number):number =>{
        return num1 - num2 ; 
    }
    divide = (num1:number,num2:number):number =>{
        return num1 / num2 ; 
    }
    multiply = (num1:number,num2:number):number =>{
        return num1 * num2 ; 
    }
}

const myMathematicalsObject = new mathOperations('myMathematicalsObject',"+");
///mycallback 
const myCallback = (param:string,num1:number,num2:number)=>{
       let result:number|string ;
       switch (param) {
        case "+":
            result =  myMathematicalsObject.add(num1 , num2);
            break;
        case "/":
            result =  myMathematicalsObject.divide(num1 , num2);
            break;
        case "*":
            result =  myMathematicalsObject.multiply(num1 , num2);
            break;
        case "-":
            result =  myMathematicalsObject.substract(num1 , num2);
            break;
        default:
            result = "not found";
            break;
       }
       return result ; 
}



console.log(myCallback(myMathematicalsObject.symbol,2,2))

//high orders functions examples 
//Function as an argument
function fName(name:string) {
    console.log("Hi " + name);
}

function sayHi (greetingFunction:Function) {
    greetingFunction("Alice"); 
}

sayHi(fName); //fName('Alice')


////FUNCTION AS A PARAMETER
console.debug('FUNCTION AS A PARAMETER')
function applyFunction(myFunction:Function,myArray:number[]){
        return myFunction(...myArray)
}

function EachElementArray(...arr:number[]){
       let  x:number[] = []
        arr.forEach(e => {
            x.push(Math.floor(Math.random() * e) + Math.PI)
          console.log(x) ;
        })
        return x
}

try {
   console.log( applyFunction(EachElementArray,[2,3,4]))
} catch (error) {
    throw new Error('error');
    
}

///callback functions

let getUserData = (obj:object):any => {
    setTimeout(() => {
        // return obj;
        console.log(obj)
        console.log(myMathematicalsObject)
    }, 1000);
}

getUserData({name:"callback",exercise:"week 2 functions",test:"Typescript-js"})