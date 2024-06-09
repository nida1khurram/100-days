function creatCar(man, color, model, feature) {
    return {
        man: man,
        color: color,
        model: model,
        feature: feature,
    };
}
var myCar = creatCar("(GM)USA", "C7", "black", "Leather seats");
console.log(myCar);
