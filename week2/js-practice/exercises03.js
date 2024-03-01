//Square
let square = (num) => {
  return num * num;
};
console.log(square(2));

///square numbers each
let numbers = [1, 2];
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

///welcome message string literals
let welcomeMessage = ({ name: props }) => {
  console.log({ name: props });
  return `hello ${props}, welcome to javascript world`;
};

console.log(welcomeMessage({ name: "pepe" }));

//destructuring
const PersonObject = { firstName: "leonardo", lastname: "da vinci" };
const { firstName: leonardo, lastname: davinci } = PersonObject;
console.log(leonardo, davinci);

//destructuring functions
let LeonarDavinci = (f, l) => {
  return `Hi i am ${f}  ${l}`;
};
console.log(LeonarDavinci(leonardo, davinci));

///merge arrays
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
];
console.log("-----companies-----");
console.log(companies);
console.log("----- new companies merge arrays-----");
let newCompanies = [
  ...companies,
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
console.log(newCompanies);

///rectangle Area
let calculateRectangleArea = (length, width) => length * width;
console.warn(calculateRectangleArea(2, 3));

///class person
class person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  iAmThisPerson = () => {
    return `hello everyone I am ${this.name} and i am ${this.age} years old`;
  };
}

let Pedro = new person("pedro", "lorenzini");
console.log(Pedro.iAmThisPerson());

function persona2(name, age) {
  this.name = name;
  this.age = age;
  this.message = function () {
    return `hello World I am ${this.name} and i am ${this.age} years old`;
  };
}

const audioslave = new persona2("audioslave", 1995);
console.log(audioslave.message());
