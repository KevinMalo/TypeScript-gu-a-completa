"use strict";
var brand = "Tesla";
var model = 'X';
var color = "black";
function congrats() {
    return "Gracias por su compra";
}
var mensaje = "Hola, su auto es un " + brand + " de modelo " + model + " y es de color " + color + ".\n" + congrats();
console.log(mensaje);
