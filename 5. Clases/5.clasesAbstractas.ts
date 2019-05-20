// Sirve para crear una "Super clase" y heredar sus propiedades y metodos a otras clases
// estas clases no pueden ser instanciadas.
abstract class IronPatriot {

    constructor(public nombre: string, public nombreReal: string){
    }

}

class Rhodes extends IronPatriot {

}

let rodhes: Rhodes = new Rhodes('Iron Patriot','James Rhodes');

console.log( rodhes.nombre );
