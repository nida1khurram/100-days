//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests
//*list of guest list in array
let guestlist:string []=["Ali","Faiza","Irha"];

for (let guest of guestlist){
    console.log(`Dear Friend ${guest},we found a bigger dinner table. `);

}
// • Add one new guest to the beginning of your array.
guestlist.unshift("Saad")

// • Add one new guest to the middle of your array.
guestlist.splice(guestlist.length/2,0, "Raza")


//  • Use append() to add one new guest to the end of your list. 
guestlist.push("Khan")

// • Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation message");

for (let guest of guestlist){
    console.log(`Dear Friend ${guest}, you are invited to Dinner. `);
}
export{}