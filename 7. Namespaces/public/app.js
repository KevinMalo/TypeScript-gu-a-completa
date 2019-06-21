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
// Un estilo de libreria donde escribiremos nuestras clases y metodos
// importar namespace
/// <reference path="validaciones/textos.ts" />
/// <reference path="validaciones/fechas.ts" />
console.log(Validaciones.validarTexto('Hola preciosa'));
