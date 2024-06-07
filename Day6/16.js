"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests
//*list of guest list in array
var guestlist = ["Ali", "Faiza", "Irha"];
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear Friend ".concat(guest, ",we found a bigger dinner table. "));
}
// • Add one new guest to the beginning of your array.
guestlist.unshift("Saad");
// • Add one new guest to the middle of your array.
guestlist.splice(guestlist.length / 2, 0, "Raza");
//  • Use append() to add one new guest to the end of your list. 
guestlist.push("Khan");
// • Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation message");
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear Friend ".concat(guest, ", you are invited to Dinner. "));
}
