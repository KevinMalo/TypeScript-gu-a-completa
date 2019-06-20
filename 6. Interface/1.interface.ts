// Una interface es una especie de contrato donde todas las partes que 
// se suscriban deben cumplir sus propiedades

interface Avengers {
    nombre: string,
    poder?: string //Propiedad opcional
    regenerar( nombreReal: string ): void; // regenerar?( nombreReal: string ): void para que sea opcional
}

// Interface de una funcion
interface DosNumeros {
    ( num1: number, num2: number): number
}

// Interface en una clase
class BlackPanter implements Avengers {
    nombre: string;
    regenerar( nombreReal: string ): void {
        console.log(`Regenerar a ${nombreReal}`);
    }
}

let blackPanter = new BlackPanter();
blackPanter.regenerar('Challa');

let hulk: Avengers = {
    nombre: 'Robert Bruce Banner',
    poder: 'Super fuerza',
    regenerar( nombreReal: String){
        console.log(`Se ha regenerado ${nombreReal}`);
    }
}

function enviarMision( avenger :Avengers) {
    console.log( `Enviando a mision a ${avenger.nombre}` );
    avenger.regenerar('Hulk');
}

enviarMision(hulk);

let sumas: DosNumeros;
sumas = function(a: number,b: number) {
    return a + b
}
