// Decoradores de clase

function consola( constructor: Function) {
    console.log( constructor );
}

@consola
class Auto {
    
    constructor( public nombre: string ) {

    }

}