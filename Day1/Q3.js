"use strict";
let f_name = "nida";
// Shows the name in all small letters
console.log(f_name.toLowerCase());
// Shows the name in ALL Cap LETTERS
console.log(f_name.toUpperCase());
// Shows the name with the First Letter capital
console.log(f_name.charAt(0).toUpperCase() + f_name.slice(1).toLowerCase());
let pName = "nida zahid ali";
let words = pName.split(" "); //array split in index ['pakistan', 'zindabad']
let tName = " ";
for (let i = 0; i < words.length; i++) {
    tName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log("Titlecase" + tName);
