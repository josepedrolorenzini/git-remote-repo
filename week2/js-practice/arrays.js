"use strict";
/**
 * ARRAYS data type
 */
let fruits = ["Apple", 'Banana', "orange", "Mango"];
let emptyArray = [];
let mixedArrays = ["tiger", true, 12, 12.2];
console.log(fruits[0]);
let reverseLoop = () => {
    let langArray = ['php', 'javascript', 'bash', 'css', 'python', 'html', 'jquery', 'react', 'sql'];
    for (let index = langArray.length; index >= 0; index--) {
        const element = langArray[index];
        console.log(element);
    }
};
///convert array to an Object
let langArray = ['php', 'javascript', 'bash', 'css', 'python', 'html', 'jquery', 'react', 'sql'];
let langObj = {}; //empty object
for (let ix = 0; ix < langArray.length; ix++) {
    langObj[langArray[ix]] = ix; // add the content as index
    // langObj[ix] =  langArray[ix];
}
console.log(langObj);
