
let f_name:string="nida";

// Shows the name in all small letters
console.log(f_name.toLowerCase());

 // Shows the name in ALL Cap LETTERS
console.log(f_name.toUpperCase());

// Shows the name with the First Letter capital
console.log(f_name.charAt(0).toUpperCase() + f_name.slice(1).toLowerCase());


let pName= "nida zahid ali"
let words:string[]= pName.split(" ");//array split in index ['pakistan', 'zindabad']

let tName: string = " "
for(let i = 0 ; i < words.length; i++){
    tName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};
console.log("Titlecase"+tName);

