class Iron {

    private _nombre: string;

    constructor(public nombres: string){
        this._nombre = nombres;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

}

let ironman: Iron = new Iron('Iron-Man');

ironman.nombre = 'Iron Man';

console.log( ironman.nombre );
