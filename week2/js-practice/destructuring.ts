//destructuring
//type-aliases
type myperson = string|number
let person:myperson[] = ['alice',30,'software engineer']
console.log(person)
let [names,age,profession] = person;
console.log(names)
console.log(profession)

let numbers:Array<number> = [1,2,3,4,5];
const [first,second,third] = numbers;
console.log(third)

interface myPerson{
    name:string,
    age:number,
    country:string
}
///object literals
let person2:myPerson = {
    name:"one code camps",
    age:1995,
    country:"Australia"
}

console.log(person2.country)
const {nombre,edad,pais}:any = person2;

interface UserInterface {
    name: string;
}

let user: UserInterface = { name: "user" };

// Use type assertion
const { age1 = 23 } = user as UserInterface & { age1?: number };



console.log(user); 