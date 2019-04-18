type Heroe = {
    nombre: string, 
    apodo: string, 
    edad: number, 
    poderes: string[], 
    getNombre: () => string
};

let numeroTres: Heroe = {
    nombre: "Allison Hargreeves",
    apodo: "THE RUMOR",
    edad: 25,
    poderes: ["el poder de la mentira"],
    getNombre(){
        return this.nombre;
    }
};