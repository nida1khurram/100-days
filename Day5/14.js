"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who 
//would you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to dinner.
//*list of guest list in array
var guestlist = ["Ali", "Sana", "Irha"];
exports.guestlist = guestlist;
//print message
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var name_1 = guestlist_1[_i];
    console.log("Dear Friend ".concat(name_1, " , I would like to invite to dinner today please join us and enjoy!"));
}
