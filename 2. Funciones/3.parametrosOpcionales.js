"use strict";
function names(nombre, apellido) {
    if (apellido) {
        return "Hola " + nombre + " " + apellido;
    }
    else {
        return "Hola " + nombre;
    }
}
console.log(names('Orfa', 'Archila'));
console.log(names('Orfa'));
