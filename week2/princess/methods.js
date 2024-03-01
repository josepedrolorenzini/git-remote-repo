//== String Methods ===

//split() -- lets you break/split an array of strings separating them into substrings based on a specified separator

const message = "Hello, world!";
let words = message.split(", ");
console.log(words);

//splitting a string into words
const sentence = "The quick brown fox jumps over a lazy dog.";
let words2 = sentence.split(" "); //split by space
console.log(words2);

//splittin into characters
const sent = "Hello";
let words3 = sent.split('') //split by empty string
console.log(words3);

const email = 'sample.email@gmail.com';
const words4 = email.split('@');
console.log(words4);

//includes() -- search for word matches and returns true or false
//if a word is present in a sentence
const containsWord = sentence.includes("fox");
console.log(containsWord);

//check if substring is present in a larger string
let str = "Hello there!";
let subStr = str.includes("or");
console.log(subStr);

//length -- displays the number of characters in a string, including whitespaces
let sampleString = "Welcome to Modern JS";
const strLength = sampleString.length;
const emptyStr = '';
console.log(strLength);
console.log(emptyStr.length);

//toLowerCase() ; toUpperCase()
let mixedCases = 'ThiS Has SomE MixEd CasE!';
const lowerCaseVer = mixedCases.toLowerCase();
const upperCaseVer = mixedCases.toUpperCase();

console.log(lowerCaseVer, upperCaseVer);



