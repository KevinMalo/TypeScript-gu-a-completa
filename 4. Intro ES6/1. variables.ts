// Mantiene un ambito global sin importar en que contexto sea declarada

var vainilla;

// Mantiene el ambito contextual en donde fue delarada
function fresa() {
    let arbolFresa;
}

// se usa para declarar constantes que claramente no pueden 
//cambiar de valor luego de ser definido y mantiene su contexto al igual que let
const CHOCOLATE = "";