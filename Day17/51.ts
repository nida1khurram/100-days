// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates
 //the area of  a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in 
// JavaScript and TypeScript, making your code cleaner and more readable.

//func syntax 
//function(){}
// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}
console.log(`Original Function :${calculateArea(4,6)}`);
//arrow func syntax
//function()=>
// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(`Arrow Function :${calculateAreaArrow(4,6)}`); // Logs the area of the rectangle

export{}