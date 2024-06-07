 
let guestlist:string []=["Saad","Ali","Raza","Faiza","Irha","Khan"];
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`I can invite only two people for dinner.`);

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(guestlist.length > 2)
{
    let removeGuest = guestlist.pop()
    console.log(`Dear ${removeGuest}, sorry i can’t invite you to dinner `);
    
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for ( let guest of guestlist){
    console.log(`Dear ${guest}, you are still invited for Dinner. `);
    
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestlist.splice(0,guestlist.length)
console.log("Guest List after Dinner", guestlist);
