const person = {
    name:'pedro',
    age:42,
    country:'Mexico'
}
const {name,age} = person;

const {year=1981} = person;
console.log(person, year ,person.year)

///nested objects
let nestedObj = {
    firstname:"typescript",
    ages:12,
    address:{
        city:"wonderland",
        country:"Siberia"
    }
}

///destructurin nested objects
// const {firstname,ages,...address} = nestedObj;
const {firstname,ages,address} = nestedObj;
console.log(firstname);
console.log(ages)
// console.log(address.address.city)
// console.log(address.address.country)
// console.log(address)
// const [city,country] = address;
// console.log(city,country)

// const {firstname1,ages1,address1,gender='female'} = nestedObj;
// console.log(nestedObj)


//enhanced object literals --- provides a more concie when creating js objects
const person11 = {
    name:"pepe",
    gender:"transmutant",
    greeting(){
        return `hi ${this.name} you are ${this.gender}`
    }

}
let greet = person11.greeting.bind(person11)

console.log(greet())
console.log(person11.greeting(person11))

/// ... spread operators: expand iterables into individual elements
/// ... rest operatos: collects remaining elements into an array within function arguments list

//spread operators
const fruits = ['apple','banana','kiwi'];
const moreFruits = [...fruits,'orange','iron maiden'];
console.log(moreFruits)


const sum = (x,y,z) => x + y + x;
const numero = [1,2,3];
console.log(numero); //normal array
console.log(...numero); ///individual array elements with spread operators
console.log(sum(...numero)) //suma
const num1 = [1,2,3];
const num2 = [4,5,6]
const newnum12 =[...num1, ...num2];
console.log(newnum12)
//copy arrays
const originalArray = [7,8,9];
const copyArray     = [...originalArray] ;

////object spreading
const person1 = {name:'joe',age:24};
const newPersson = {...person1,gender:"animal"}
console.log(newPersson)
let newPJson = JSON.stringify(newPersson)
console.log(newPJson);
///functions with spread operator
const add = (a,b,c) => a+b+c
const addsss2 = [1,2,3]
const result = add(...addsss2)
console.log(result)

///rest paramenters in functions
function spreadF(...props){
    return props
}
console.log(spreadF(1,2,3,4));

//reduces method
let product = (...props)=>{
    return props.reduce((accumulator,value)=> accumulator + value , 0)
}
console.log(product(1,2,3,4,5))

//rest operators with functions
function sumall(...numeros){
    let total = 0;
    for (const iterator of numeros) {
        total += iterator;
    }
    return total;
}

console.log(sumall(23,6,13))

const mySpreadFunction = (firstArgument,secondArgument,...restOfargument) => {
    console.log(firstArgument,
        secondArgument,
        restOfargument)
}

mySpreadFunction("one","two","three/tres","four/cuatro","five/cinco");

const multiplicacion = (a,b=5)=>a*b
console.log(multiplicacion(8)+2)

