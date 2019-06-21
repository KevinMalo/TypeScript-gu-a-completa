namespace Validaciones {
    
    // solo pueden ser utilizadas desde fuera las 
    // caracteristicas que tengan la palabra reservada Export
    export function validarFecha(fecha: Date): boolean {
        if ( isNaN( fecha.valueOf() ) ) {
            return false;
        }
        return true;
    }

}