
// Funciones en JS
// const saludar = function( nombre ){
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

console.log( saludar2('Carlos') );
console.log( saludar3('Goku'));
console.log( saludar4() );

const getUser = () => (
    {
        uid: 'ABCDE23',
        username: 'El_papi1502'
    }
);

console.log(getUser());

// Tarea
// 1. Transformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo(nombre){
    return{
        uid: 'ABC345',
        username: nombre
    }
};

const getUsuarioActivo2 = (nombre) =>
    ({
        uid: 'ABC345',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Carlos');
console.log( usuarioActivo );

console.log( getUsuarioActivo2('Marco') ); 