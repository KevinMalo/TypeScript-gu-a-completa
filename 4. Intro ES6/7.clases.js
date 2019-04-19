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
var Shield = /** @class */ (function () {
    function Shield(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }
    return Shield;
}());
// Extiende 
var ShiledHombres = /** @class */ (function (_super) {
    __extends(ShiledHombres, _super);
    function ShiledHombres(nombre, sexo) {
        var _this = 
        // Usa el constructor de la clase padre
        _super.call(this, nombre, sexo) || this;
        _this.hombre = true;
        return _this;
    }
    return ShiledHombres;
}(Shield));
var agente1 = new Shield('Skye', 'Femenino');
var agente2 = new ShiledHombres('Grant Ward', 'Masculino');
console.log(agente1);
console.log(agente2);
