// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter
// representing multiple hobbies. It should log each hobby with a statement saying you enjoy 
//that hobby.

// Explain & TIP: Rest parameters allow a function to accept an indefinite number of 
//arguments as an array, providing a way to handle multiple inputs gracefully.

// Defines a function
function hobby(...hobies:string[]):void{
    for(let hobi of hobies){
        console.log(`I Love ${hobi}`);
    }
}
hobby("cooking","reading","baking")