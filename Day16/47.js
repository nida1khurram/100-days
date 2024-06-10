"use strict";
//Question 47: Advanced Array Destructuring: Given an array of objects representing different
// laptops, each with properties make, model, and year, use array destructuring to assign the 
//first and second laptops to variables. Then, log these variables.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays 
//of objects, simplifying access to complex data structures.
//obj in array
var laptop = [
    { name: "Toshiba", model: " PTSE3U-06NOOG", year: 2022, },
    { name: "Dell Vostro", model: "PP26L", year: 2021, }
];
//destructure array (break array)
var laptop1 = laptop[0], laptop2 = laptop[1];
console.log("Detail of Laptop 1", laptop1);
console.log("Detail of Laptop 2", laptop2);
