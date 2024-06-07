// Toshiba Model PTSE3U-06NOOG
// let laptop={
//     name:"Toshiba",
//     model:" PTSE3U-06NOOG",
//     year:2022,
// describe:function(){
//     // console.log(laptop);
//     console.log(`This laptop is a ${this.name} ${this.model} ${this.year}.`);
// }
// };
// laptop.describe()
var laptop = {
    name: "Toshiba",
    model: " PTSE3U-06NOOG",
    year: 2022,
};
function abc() {
    console.log("This laptop is".concat(laptop.name, ", ").concat(laptop.model, ", ").concat(laptop.year));
}
abc();
