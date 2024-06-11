//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
var data = ["nida", 245, true, "irha", 768, "arshman"];
console.log(data);
var typeOfData = data.filter(function (abc) { return typeof abc === "string"; });
console.log(typeOfData);
