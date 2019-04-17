"use strict";
// permiten crear una colección de valores relacionados con nombres memorables
var poderHeroes;
(function (poderHeroes) {
    poderHeroes[poderHeroes["capitanaMarvel"] = 200] = "capitanaMarvel";
    poderHeroes[poderHeroes["hulk"] = 180] = "hulk";
    poderHeroes[poderHeroes["loky"] = 90] = "loky";
})(poderHeroes || (poderHeroes = {}));
var capitanaMarvel = poderHeroes.capitanaMarvel;
console.log(capitanaMarvel);
