"use strict";
var Iron = /** @class */ (function () {
    function Iron(nombres) {
        this.nombres = nombres;
        this._nombre = nombres;
    }
    Object.defineProperty(Iron.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Iron;
}());
var ironman = new Iron('Iron-Man');
ironman.nombre = 'Iron Man';
console.log(ironman.nombre);
