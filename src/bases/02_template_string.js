
const nombre = 'Charly';
const apellido = 'Sam';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo(nombre)}` );