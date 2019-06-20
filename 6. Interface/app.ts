// Crear interfaces
interface X {
  a: string,
  b: number
}


interface Auto {
  (auto: any): void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
let conducir: Auto;
conducir = function conducirBatimovil( auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean,
  comer: boolean,
  llorar?: boolean
}

let guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason: Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad {
  ( ciudadanos: string[] ): number
}

let x: Ciudad;
x = function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Empleado {
  nombre: string,
  edad: number,
  sexo: boolean,
  estadoCivil: string,
  imprimirBio(): void
}

class Empleados implements Empleado {
  nombre: string;
  edad: number;
  sexo: boolean;
  estadoCivil: string;
  imprimirBio(): void;

}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
