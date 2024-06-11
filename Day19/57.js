// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find 
//the average, giving us an idea of how well someone did overall.
//list grade
var grade = [55, 25, 57, 95, 25];
// Calculates the average grade
var sum = grade.reduce(function (pre, currentVal) { return pre + currentVal; }, 0) / grade.length;
console.log(sum);
