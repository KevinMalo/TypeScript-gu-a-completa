"use strict";
var Validaciones;
(function (Validaciones) {
    // solo pueden ser utilizadas desde fuera las 
    // caracteristicas que tengan la palabra reservada Export
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
