//Question 42: Great Magicians: Add "the Great" to magician names.

console.log(`Before Modify`);
console.log(`----------------------`);
let magicianNames:string[]=["Eric","Adam","Nike"];
function show_name(magicianNames:string[]):void{

    for(let name of magicianNames){
        console.log(`Megician Name:${name}`);
    }
}
show_name(magicianNames)

console.log(`After Modify`);
console.log(`----------------------`);
function make_greate(great:string[]):void
{
    for(let i of great){
        console.log(`the great ` ,i);
    }
}
make_greate(magicianNames);

export{}