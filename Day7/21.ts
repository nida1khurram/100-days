//Question 21: Think of something you could store in a TypeScript Object. Write a program 
//that creates Objects containing these items.
//object
const food :{
    item:string,
    price:number,
    description:string
}= {
    item:"chicken roll",
    price:150,
    description:"delicious full of chicken roll",
};
console.log(`Food info: ${food.item}, food Price: ${food.price}, description: ${food.description}`);

export{}