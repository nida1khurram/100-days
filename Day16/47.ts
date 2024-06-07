//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
let laptop=[
    {name:"Toshiba",model:" PTSE3U-06NOOG",year:2022,},
    {name:"Dell Vostro",model:"PP26L",year:2021,}]
let [laptop1,laptop2]=laptop
console.log(laptop1);
console.log(laptop2);

export{}



