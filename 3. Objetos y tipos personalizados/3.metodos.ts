let numeroDos: { nombre: string, apodo: string, edad: number, poderes: string[], getNombre: () => string } = {
    nombre: "Diego Hargreeves",
    apodo: "THE KRAKEN",
    edad: 26,
    poderes: ["contener la respiración indefinidamente","luchador hábil"],
    getNombre(){
        return this.nombre;
    }
};