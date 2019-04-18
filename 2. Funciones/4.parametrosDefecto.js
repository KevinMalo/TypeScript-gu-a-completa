"use strict";
function nameTony(nombre, apellido, capitalize) {
    if (capitalize === void 0) { capitalize = false; }
    if (capitalize) {
        return "Hola " + nombre.toLocaleUpperCase() + " " + apellido.toLocaleUpperCase();
    }
    else {
        return "Hola " + nombre + " " + apellido;
    }
}
console.log(nameTony('tony', 'stark', true));
