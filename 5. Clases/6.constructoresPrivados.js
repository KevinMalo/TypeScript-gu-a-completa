// Hace que solo sea instanciada una sola vez la clase
var ViudaNegra = /** @class */ (function () {
    function ViudaNegra(nombre) {
        this.nombre = nombre;
    }
    ViudaNegra.getaViuda = function () {
        if (!ViudaNegra.instancia) {
            ViudaNegra.instancia = new ViudaNegra('Natasha Romanoff');
        }
        return ViudaNegra.instancia;
    };
    return ViudaNegra;
}());
var natasha = ViudaNegra.getaViuda();
console.log(natasha);
