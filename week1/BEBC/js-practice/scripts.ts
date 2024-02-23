let my_name:string = 'jose lorenzini';
let my_age:number  = 42;

interface myDetails{
    myname:string;
    myAge:number;
    mynum2?:number;
    first_name?:string;
    isStudent?:boolean;
    myUndefinedVar?:undefined;
    mynull?:null;
}

let myPersonalData:myDetails = {
    myname:my_name,
    myAge : my_age,
    mynum2: 24,
    first_name:'jose',
    isStudent:true,
    myUndefinedVar:undefined,
    mynull:null,
}


console.log(myPersonalData);

let person:{name:string,age:number,city:string}={
    name:'jose',
    age:42,
    city:'Sydney'
}
console.log(person)
let person2:object={
    name:'john',
    age:42,
    city:'Sydney'
}
document.body.innerHTML = person.name;
let arraynumber:Array<number> = [1,2,3,4,5]
console.log(arraynumber)

//operators
let a:number =5;
a += 5;
console.log(a)
a -= 5;
console.log(a)
a *= 5;
console.log(a)
a /= 5;
console.log(a)

let names:string = 'Computer',
    statuss:string = 'On';

let machine = {
   names,
   statuss
};

console.log(machine)

interface widgetInterface{
    name:string,
    color:string,
}

let widget:widgetInterface = {
    name:'widget',
    color:'red'
}
let cloneWidget = Object.assign({},widget)
console.log(cloneWidget)


///while
let myNum:number = 1;
while (myNum<=5) {
    console.log(`my num is ${myNum}`);
    myNum++;
}
let x:number = 0;
do {
    console.log(`my x number is ${x}`);
    x++;
} while (x<=5);