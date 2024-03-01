//string methods
const message = "Hola mundo";
let words = message.split(", ")
console.log(words)

//split by space
let sentences = 'The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. '
console.log(sentences.split(" "))
console.log(sentences.split(""))

let email = "jp@gmail.com"
console.log(email.split("@"));//the @ will determinated where to split the sentences

//includes() search for a word matches nd returns true or false
console.log(sentences.includes('reduce'))


const words2 = ['reduce', 'filter', 'objects', 'destructuring', 'spread'];
console.log(words2.includes('objects'));//true
console.log(words2.includes('prototype'));///false


const result = words2.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]