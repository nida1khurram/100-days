"use strict";
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change
// the name of each section based on what you need at that moment, like adjusting labels based 
//on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: This is like having labels you can rewrite anytime, which is great for
// when you need to adjust your list based on new information.
// A way to make a flexible list
function flexibleObjeKey(key, value) {
    var objKey = {};
    // Setting up a section in the list with a changeable name
    objKey[key] = value;
    return objKey;
}
// Using the flexible list setup for a user's preference
var createObj = flexibleObjeKey("theme", "dark");
// Showing the user's choice
console.log(createObj);
