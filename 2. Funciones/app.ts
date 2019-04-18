// Funciones Básicas
function sumar( a: number, b: number ):number  {
  return a + b;
}

let contar = function( heroes: string[] ): number{
  return heroes.length;
}

let superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar: boolean = true ): void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( nombreHeroe: string, ...personas: string[] ): string{
  return  `${nombreHeroe}, ${ personas.join(", ") } `;
}

unirheroes('Flash','Arrow','Superman',);

// Tipo funcion
function noHaceNada( numero: number, texto: string, booleano: boolean, arreglo: any[] ): void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: ( a: number, b: string, c: boolean, d: any[] ) => void;

noHaceNadaTampoco = noHaceNada;
