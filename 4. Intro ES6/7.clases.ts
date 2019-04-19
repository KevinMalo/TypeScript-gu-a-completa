class Shield {

    constructor( nombre, sexo ) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

}

// Extiende 
class ShiledHombres extends Shield {

    constructor(nombre, sexo){
        // Usa el constructor de la clase padre
        super(nombre, sexo)
        this.hombre = true;
    }

}

let agente1 = new Shield('Skye', 'Femenino');
let agente2 = new ShiledHombres('Grant Ward','Masculino');

console.log(agente1);
console.log(agente2);