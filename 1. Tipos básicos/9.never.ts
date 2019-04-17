// Representa un valor que nunca puede suceder

let tuRelacionConElla: never;

//
let a: never; // Ok
let b: never = false; // Error
let c: never = null; // Error
let d: never = "monday"; // Error

//
function error( mensaje:string ): never {
    throw new Error(mensaje);
}

error('Error critico');

// ESTUDIAR MAS ESTO