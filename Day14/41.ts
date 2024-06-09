//Question 41: Magicians: Display magician names from an array.
let magicianNames:string[]=["Eric","Adam","Nike"];
function mag_name(magicianNames:string[]):void{

    for(let name of magicianNames){
        console.log(`Megician Name:${name}`);
    }
}
mag_name(magicianNames)
