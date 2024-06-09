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
    