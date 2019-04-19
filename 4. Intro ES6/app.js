
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker",
 venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];

let spider = [ spiderman1,,spiderman3 ] = versiones;

console.log( spiderman3 );


// Destructuracion de objetos?
let Villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

let { venom: eddie, carnage, sandman } = Villanos;

console.log(eddie);
console.log(carnage);

// Ciclo for Of?
for (const ver of versiones) {
  console.log(ver);
}