//Question 45: Cars: Create detailed car objects with flexible properties.
type car={
    man:string,
    color:string,
    model:string,
    feature:string}
    function creatCar(man:string,color:string,model:string,feature:string):car{
return{
    man,
    color,
    model,
    feature,
        }
    }
    const myCar:car = creatCar(`(GM)USA`,`C7`,`black`,`Leather seats`)
    console.log(myCar);
//discord
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }

// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));


    