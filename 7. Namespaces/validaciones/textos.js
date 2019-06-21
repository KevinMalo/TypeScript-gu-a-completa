"use strict";
var Validaciones;
(function (Validaciones) {
    // solo pueden ser utilizadas desde fuera las 
    // caracteristicas que tengan la palabra reservada Export
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
