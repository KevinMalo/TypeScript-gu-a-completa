"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
var conducir;
conducir = function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... run!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var x;
x = function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
};
var Empleados = /** @class */ (function () {
    function Empleados() {
    }
    return Empleados;
}());
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
