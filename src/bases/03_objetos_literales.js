
const person = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4454544,
        lat: 14.3433,
        lng: 34.49887
    }
};

// console.table( person );
const person2 = { ...person };
person2.nombre = 'Peter';

console.log( person );
console.log( person2 );
