//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

let data:any[]=["nida",245,true,"irha",768,"arshman"]
console.log(data)
let typeOfData:string[]=data.filter(abc=> typeof abc === "string")
console.log(typeOfData)