function nameTony( nombre: string, apellido: string, capitalize: boolean = false ): string {
    if ( capitalize ) {
        return `Hola ${nombre.toLocaleUpperCase()} ${apellido.toLocaleUpperCase()}`;
    }else {
        return `Hola ${nombre} ${apellido}`;
    }
}

console.log( nameTony('tony', 'stark', true) );
