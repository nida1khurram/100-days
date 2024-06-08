//Question 35: Animals: Highlight animals with a common trait.
var animal_name = ['cat', 'Goat', 'Dog'];
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
for (var _i = 0, animal_name_1 = animal_name; _i < animal_name_1.length; _i++) {
    var animal = animal_name_1[_i];
    console.log("".concat(animal, " is a great pet!"));
}
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("these animals have in common. Any of these animals would make a great pet!");
