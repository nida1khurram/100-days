//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each 
//person’s name, print a message to them. The message should be the same for each person, 
//but personalized with their name.
var names = ['Sana', 'Ali', 'Arshman', 'irha'];
//loop through each name in the array
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    //print a personalized with message for each friend
    console.log("Good Morning ".concat(name_1, ",i hope you  are fine!"));
}
