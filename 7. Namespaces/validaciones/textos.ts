namespace Validaciones {
    
    // solo pueden ser utilizadas desde fuera las 
    // caracteristicas que tengan la palabra reservada Export
    export function validarTexto(texto: string): boolean {
        if ( texto.length > 3) {
            return true;
        }
        return false;
    }

}