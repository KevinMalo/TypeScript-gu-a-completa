"use strict";
// Los genericos permiten enviar cualquier tipo de dato y detectarlo
// Funciones genericas
function regresar(params) {
    return params;
}
console.log(regresar(15));
console.log(regresar("kEVIN"));
console.log(regresar(new Date()));
// Arreglos genericos
var herores = ["Batman", "Bati chica", "Jesus"];
// Clases genericas
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = "10";
cuadrado.altura = 5;
console.log(cuadrado.area());
