  import  heroes  from '../data/heroes';
//import heroes, { owners }  from '../data/heroes';

//console.log( owners );

// console.log( heroes );

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if( heroe.id === id ) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

//console.log( getHeroeById(1) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log( getHeroesByOwner('Marvel'));