// Las propiedades o metodos estaticos se pueden llamar sin instanciar la clase
var AntMan = /** @class */ (function () {
    function AntMan() {
    }
    AntMan.crearAntMan = function () {
        return new AntMan();
    };
    AntMan.nombre = 'Scott Lang';
    return AntMan;
}());
console.log(AntMan.nombre);
var antman = AntMan.crearAntMan();
console.log(antman);
