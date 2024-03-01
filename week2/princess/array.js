/**
 * Array -- a special variable that can hold more than one value at a time.
 * 
 *  index - each item in an array is stored
 *         -- always starts at index[0]
 */

let fruits = ['Apple', 'Banana', 'Orange', 'Mango']; 

//empty array
let emptyArray = [];

//array of mixed values
let mixedArray = ['Tiger', true, 12, 3.25];

console.log(fruits[0]);
console.log(fruits[2]);

// == Modifying Elements ==

//updating index
fruits[1] = 'Grapes';
console.log("Updated index 1:" ,fruits);

//push() -- add one or more elemets at the end of an array
fruits.push('Lemon');
console.log("Using the push():" ,fruits);

//pop() -- remove the last element from an array
fruits.pop();
console.log("Using the pop():" ,fruits);

//shift() -- remove the first element of an array
fruits.shift();
console.log("Using the shift():" , fruits);

//unshift() -- add an item from the front of the array
fruits.unshift('Corn');
console.log("Using the unshift():", fruits);

//splice()
fruits.splice(2, 1, 'Watermelon');
console.log("Using the splice():", fruits);

let colors = ["red", "green", "blue"];
//Remove the second item 
colors.splice(1, 1);
console.log(colors);
//Insert 'purple' at index[1]
colors.splice(1, 0, 'purple');
console.log(colors);
    //splice(<target index>, <remove item>, <insert item>)


//slice() 
//new array containing elements from index[1](inclusive) to index[2](exclusive)
let slicedFruits = fruits.slice(1, 3);
    //slice(<starting index -- index of the first item to include(inclusive)> , <ending index -- index of the ite after the last item to include(exclusive)> )
console.log("Old array:" , fruits);
console.log("Sliced array:", slicedFruits);

//length -- used to get the size of array
let numberOfFruits = fruits.length;
console.log("Fruits array length:", numberOfFruits);
console.log("slicedFruits array length:", slicedFruits.length);

//indexOf -- used to find and return the index of an item in an array
let indexx = fruits.indexOf('Watermelon');
console.log("Watermelon is at index:", indexx);

//Looping thru array
//for loop
 for(let i = 0; i < fruits.length; i++) {
    console.log("For Loops:", fruits[i]);
 }

//forEach loop
fruits.forEach(function(fruit) {
    console.log("forEach Loop: ", fruit);
})