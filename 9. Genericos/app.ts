// Los genericos permiten enviar cualquier tipo de dato y detectarlo

// Funciones genericas

function regresar<T>(params:T) {
    return params
}

console.log( regresar(15) );
console.log( regresar("kEVIN") );
console.log( regresar(new Date() ) );

// Arreglos genericos

let herores: Array<string> = ["Batman", "Bati chica", "Jesus"];

// Clases genericas

class Cuadrado<T extends number | string> {
    base: T;
    altura: T;
    area():number{
        return +this.base * +this.altura;
    }
}

let cuadrado = new Cuadrado();

cuadrado.base = "10";
cuadrado.altura = 5;

console.log( cuadrado.area() );
