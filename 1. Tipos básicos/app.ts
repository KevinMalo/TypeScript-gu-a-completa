// Tipos
let batman: string = "Bruce";
let superman: string = "Clark";

let existe: boolean = false;

// Tuplas
let parejaHeroes: [ string, string ] = [batman,superman];
let villano: [ string, number, boolean ] = ["Lex Lutor",5,true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones

enum FuerzaHeroe { flash = 5,
  superman = 100,
  batman = 1,
  acuaman = 0 }

let fuerzaSuperman = FuerzaHeroe.superman;

// Retorno de funciones
function activar_batiseñal(): string {
  return "activada";
}

function pedir_ayuda(): void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder: any = 100;
let largoDelPoder = (<string>poder).length;
console.log( largoDelPoder );
