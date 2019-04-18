"use strict";
// Especifica que la funcion no mute en cosas que no queremos
function sumarN(a, b) {
    return a + b;
}
var sumaFuntion;
// en el caso que la funcion no haga match con las especificaciones de arriba, dara error
sumaFuntion = sumarN;
console.log(sumaFuntion(5, 8));
