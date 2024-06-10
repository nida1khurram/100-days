// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter
// representing multiple hobbies. It should log each hobby with a statement saying you enjoy 
//that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of 
//arguments as an array, providing a way to handle multiple inputs gracefully.
// Defines a function
function hobby() {
    var hobies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobies[_i] = arguments[_i];
    }
    for (var _a = 0, hobies_1 = hobies; _a < hobies_1.length; _a++) {
        var hobi = hobies_1[_a];
        console.log("I Love ".concat(hobi));
    }
}
hobby("cooking", "reading", "baking");
