"use strict";
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range
//  of comparisons.
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings
console.log("nida" == "nida"); // True
// console.log("nida" = "Nida"); // False
//Tests using the lower case function
let t1 = "World";
let t2 = "world";
console.log("lower case true :", t1.toLowerCase() == t2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(10 > 5); // True
console.log(2 < 1); // False
// // • Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// • Test whether an item is in a array
let fName = ["Sana", "Ali", "Raza"];
if (fName.includes("Sana")) {
    console.log("Is 'Sana' in array");
}
console.log(fName.includes("Sana")); //true
// • Test whether an item is not in a array
let x = [2, 4, 6, 8];
console.log(!x.includes(3)); //true
