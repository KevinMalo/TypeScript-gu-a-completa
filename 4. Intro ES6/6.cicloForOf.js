"use strict";
var Ultron = {
    nombre: 'Ultrón',
    ataque: 255
};
var Ego = {
    nombre: 'Ego',
    ataque: 200
};
var Thanos = {
    nombre: 'Ego',
    ataque: 1000
};
var villanosMarvel = [Ultron, Ego, Thanos];
// Este ciclo itera sobre las propiedades de los objetos
for (var _i = 0, villanosMarvel_1 = villanosMarvel; _i < villanosMarvel_1.length; _i++) {
    var villano_1 = villanosMarvel_1[_i];
    console.log(villano_1.nombre, villano_1.ataque);
}
