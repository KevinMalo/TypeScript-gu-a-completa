"use strict";
var Tesla = /** @class */ (function () {
    function Tesla(model, autopilot, security) {
        this.autopilot = true; // solo puede ser modificado dentro de la misma clase o herencias
        this.room = 4;
        console.log('Constructor works');
        this.model = model;
        this.autopilot = autopilot;
        this.security = security;
    }
    Tesla.prototype.all = function () {
        var txt = "Model: " + this.model + "\n        Autopilot: " + this.autopilot + " \n        Security: " + this.security + "\n        Room: " + this.room;
        console.log(txt);
    };
    return Tesla;
}());
var model3 = new Tesla('Model 3', true, 3);
console.log(model3);
model3.all();
