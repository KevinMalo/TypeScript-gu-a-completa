function rest( name: string, ...othersParams: string[] ): string {
    return `${name} ${othersParams.join(' ')}`;
}

let fullNames: string = rest('Anthony', 'Edward', 'Tony', 'Stark');

console.log( fullNames );
