"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you 
//need to send out a new set of invitations with a replacement guest
//*list of guest list in array
let guest = ["Ali", "Sana", "Irha"];
//*step1 Add a print statement at the end of your program stating the name of the guest who can’t make it.
let personWhoCant = "Sana";
console.log(`${personWhoCant},can't make it to dinner `);
// console.log(guestlist[1], `cnat make it to dinner`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest = "Faiza";
guest[guest.indexOf(personWhoCant)] = newGuest;
// Print a second set of invitation messages, one for each person who is still in your list.
console.log(" second set of invitation messages");
guest.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
