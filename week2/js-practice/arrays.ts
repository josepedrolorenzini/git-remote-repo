/**
 * ARRAYS data type
 */

let fruits:Array<string> = ["Apple",'Banana',"orange","Mango"]
let emptyArray:string[] = [];

let mixedArrays:Array<string|number|boolean> = ["tiger",true,12,12.2]

console.log(fruits[0])



let reverseLoop = ():void => {
    let langArray = ['php','javascript','bash','css','python','html','jquery','react','sql'];
    for (let index = langArray.length; index >= 0 ; index--) {
        const element = langArray[index];
        console.log(element);
        
    }
}


///convert array to an Object
let langArray:string[] = ['php','javascript','bash','css','python','html','jquery','react','sql'];
let langObj:object|any = {}; //empty object
for (let ix = 0; ix < langArray.length; ix++) {
    langObj[langArray[ix]] =  ix; // add the content as index
    // langObj[ix] =  langArray[ix];
}

console.log(langObj) ; 