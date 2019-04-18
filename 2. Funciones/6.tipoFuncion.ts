// Especifica que la funcion no mute en cosas que no queremos

function sumarN( a: number, b: number): number {
    return a + b;
}

let sumaFuntion: (x: number, y: number) => number ;

// en el caso que la funcion no haga match con las especificaciones de arriba, dara error
sumaFuntion = sumarN;

console.log( sumaFuntion(5,8) );
