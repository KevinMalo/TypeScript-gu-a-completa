// Hace que solo sea instanciada una sola vez la clase
class ViudaNegra {

    static instancia: ViudaNegra;

    private constructor( public nombre: string ) {

    }

    static getaViuda(){
        if ( !ViudaNegra.instancia ) {
            ViudaNegra.instancia = new ViudaNegra('Natasha Romanoff');
        }

        return ViudaNegra.instancia;

    }

}

let natasha = ViudaNegra.getaViuda();
console.log(natasha);




