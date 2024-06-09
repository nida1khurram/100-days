//Question 41: Magicians: Display magician names from an array.
var magicianNames = ["Eric", "Adam", "Nike"];
function mag_name(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log("Megician Name:".concat(name_1));
    }
}
mag_name(magicianNames);
