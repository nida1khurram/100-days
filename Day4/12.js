"use strict";
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each 
//person’s name, print a message to them. The message should be the same for each person, 
//but personalized with their name.
let names = ['Sana', 'Ali', 'Arshman', 'irha'];
//loop through each name in the array
for (let name of names) {
    //print a personalized with message for each friend
    console.log(`Good Morning ${name},i hope you  are fine!`);
}
