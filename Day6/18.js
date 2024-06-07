// Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places_visit = ["Madina", "Iraq", "Falastine", "Makkah", "Dubai"];
console.log("original order:", places_visit);
console.log("Task 2:alphabetical order without modifying", __spreadArray([], places_visit, true).sort());
console.log("Task 3: original order by printing", places_visit);
console.log("Task 4: reverse alphabetical order z to a", __spreadArray([], places_visit, true).sort().reverse());
console.log("Task 5: original order by printing", places_visit);
places_visit.reverse();
console.log("Task 6 :List of places is reverse :", places_visit);
places_visit.reverse();
console.log("Task 7 :back to original :", places_visit);
places_visit.sort();
console.log("Task 9: Store  array in alphabetical order", places_visit);
places_visit.reverse();
console.log("Task 10: Store  array in reverse alphabetical order", places_visit);
