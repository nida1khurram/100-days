//Store the names of a few of your friends in a array called names
let friendsName: string[]=["Sana","Ali","Arshman","irha"]
//Print each person’s name by accessing each element in the list, one at a time.

friendsName.forEach(function (abc) { return console.log(abc); });

//2 method
friendsName.forEach((i) =>
{
    console.log(`${ i} `)})
