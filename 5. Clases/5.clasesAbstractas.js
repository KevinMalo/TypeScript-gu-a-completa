"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Sirve para crear una "Super clase" y heredar sus propiedades y metodos a otras clases
// estas clases no pueden ser instanciadas.
var IronPatriot = /** @class */ (function () {
    function IronPatriot(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return IronPatriot;
}());
var Rhodes = /** @class */ (function (_super) {
    __extends(Rhodes, _super);
    function Rhodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rhodes;
}(IronPatriot));
var rodhes = new Rhodes('Iron Patriot', 'James Rhodes');
console.log(rodhes.nombre);
