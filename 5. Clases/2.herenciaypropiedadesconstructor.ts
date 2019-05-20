class Avenger {

    constructor(public nombre: string, private nombreReal: string){
        console.log('Constructor Avenger');
    }

    protected getNombre(): string {
        return this.nombre;
    }

}

let tony: Avenger = new Avenger('Iron-Man', 'Tony Stark');

// Xmen hereda las propiedades y metodos de Avenger
class Xmen extends Avenger {
    
    constructor( a: string, b: string) {
        console.log('Constructor xmen');
        super(a,b);
    }

    public getNombre(): string {
        return super.getNombre();
    }

}

let ciclope: Xmen = new Xmen('Ciclope', 'Scott');

console.log( ciclope );
console.log( ciclope.getNombre() );
