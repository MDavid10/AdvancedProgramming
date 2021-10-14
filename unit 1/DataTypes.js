import {validateWord} from "./Utils.js";
var myNumber = 12;
const myFloat = 3.1416;
let myString = "Hello World";
//const newUtils = myUtils();
console.log(`${myString.length}`);
console.log(`${myString.toLowerCase()}`);
console.log(`${myString.indexOf("o")}`);
/*myUtils.*/validateWord(myString, "World");
if(validateWord(myString, "Hello")){
    console.log("Hi everyone");
}
const mySubstring = myString.substring(5, myString.indexOf("r"));
console.log(mySubstring);
const newSubstring = myString.padEnd(50, ".");
console.log(newSubstring);