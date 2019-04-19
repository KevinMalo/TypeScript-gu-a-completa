// No cambian el ambito del this a diferencia de las funciones normales
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
let y = ( a, b ) => a+b;
console.log( y(9,5) );
