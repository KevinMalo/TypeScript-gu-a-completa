"use strict";
// Representa un valor que nunca puede suceder
var tuRelacionConElla;
//
var a; // Ok
var b = false; // Error
var c = null; // Error
var d = "monday"; // Error
//
function error(mensaje) {
    throw new Error(mensaje);
}
error('Error critico');
// ESTUDIAR MAS ESTO
