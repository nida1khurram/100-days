"use strict";
// Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places_visit = ["Madina", "Iraq", "Falastine", "Makkah", "Dubai"];
console.log("original order:", places_visit);
console.log("Task 2:alphabetical order without modifying", [...places_visit].sort());
console.log("Task 3: original order by printing", places_visit);
console.log("Task 4: reverse alphabetical order z to a", [...places_visit].sort().reverse());
console.log("Task 5: original order by printing", places_visit);
places_visit.reverse();
console.log("Task 6 :List of places is reverse :", places_visit);
places_visit.reverse();
console.log("Task 7 :back to original :", places_visit);
places_visit.sort();
console.log("Task 9: Store  array in alphabetical order", places_visit);
places_visit.reverse();
console.log("Task 10: Store  array in reverse alphabetical order", places_visit);
