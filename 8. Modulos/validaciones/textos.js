"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    return exports.MENSAJES[numError];
}
exports.obtenerError = obtenerError;
