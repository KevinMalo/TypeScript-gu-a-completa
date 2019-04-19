let Ultron = {
    nombre: 'Ultrón',
    ataque: 255
}

let Ego = {
    nombre: 'Ego',
    ataque: 200
}

let Thanos = {
    nombre: 'Ego',
    ataque: 1000
}

let villanosMarvel = [Ultron,Ego,Thanos];

// Este ciclo itera sobre las propiedades de los objetos
for (const villano of villanosMarvel) {
    console.log(villano.nombre, villano.ataque);
}