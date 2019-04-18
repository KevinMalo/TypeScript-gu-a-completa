function names( nombre: string, apellido?: string ): string {
    if ( apellido ) {
        return `Hola ${nombre} ${apellido}`;
    }else {
        return `Hola ${nombre}`;
    }
}

console.log( names('Orfa', 'Archila') );
console.log( names('Orfa') );
