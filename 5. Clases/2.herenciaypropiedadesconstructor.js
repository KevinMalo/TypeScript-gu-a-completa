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
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log('Constructor Avenger');
    }
    Avenger.prototype.getNombre = function () {
        return this.nombre;
    };
    return Avenger;
}());
var tony = new Avenger('Iron-Man', 'Tony Stark');
// Xmen hereda las propiedades y metodos de Avenger
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        var _this = this;
        console.log('Constructor xmen');
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
var ciclope = new Xmen('Ciclope', 'Scott');
console.log(ciclope);
console.log(ciclope.getNombre());
