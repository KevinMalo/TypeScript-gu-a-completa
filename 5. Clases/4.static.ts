// Las propiedades o metodos estaticos se pueden llamar sin instanciar la clase
class AntMan {

    static nombre: string = 'Scott Lang';

    constructor(){    }

    static crearAntMan() {
        return new AntMan();
    }
}

console.log( AntMan.nombre );

let antman = AntMan.crearAntMan();

console.log( antman );

