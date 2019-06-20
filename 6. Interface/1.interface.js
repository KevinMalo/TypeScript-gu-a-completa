"use strict";
// Una interface es una especie de contrato donde todas las partes que 
// se suscriban deben cumplir sus propiedades
// Interface en una clase
var BlackPanter = /** @class */ (function () {
    function BlackPanter() {
    }
    BlackPanter.prototype.regenerar = function (nombreReal) {
        console.log("Regenerar a " + nombreReal);
    };
    return BlackPanter;
}());
var blackPanter = new BlackPanter();
blackPanter.regenerar('Challa');
var hulk = {
    nombre: 'Robert Bruce Banner',
    poder: 'Super fuerza',
    regenerar: function (nombreReal) {
        console.log("Se ha regenerado " + nombreReal);
    }
};
function enviarMision(avenger) {
    console.log("Enviando a mision a " + avenger.nombre);
    avenger.regenerar('Hulk');
}
enviarMision(hulk);
var sumas;
sumas = function (a, b) {
    return a + b;
};
