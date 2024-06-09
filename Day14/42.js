"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 42: Great Magicians: Add "the Great" to magician names.
// let magician_Names:string[]=["Eric","Adam","Nike"];
console.log("Before Modify");
console.log("----------------------");
var magicianNames = ["Eric", "Adam", "Nike"];
function show_name(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log("Megician Name:".concat(name_1));
    }
}
show_name(magicianNames);
console.log("After Modify");
console.log("----------------------");
function make_greate(great) {
    for (var _i = 0, great_1 = great; _i < great_1.length; _i++) {
        var i = great_1[_i];
        console.log("the great ", i);
    }
}
make_greate(magicianNames);
