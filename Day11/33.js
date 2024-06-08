//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// • Store the numbers 1 through 9 in a array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinal = void 0;
    if (num === 1) {
        ordinal = "st";
    }
    else if (num === 2) {
        ordinal = "nd";
    }
    else if (num === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(num).concat(ordinal));
}
