import { getHeroeById } from "./bases/08_importaciones_exportaciones";

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () => {
//         // Tarea
//         // importen el 
//         const p1 = getHeroeById(2);        
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe ');
//     }, 2000)
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.log(err));

const getHeroeByIdAsync = (id) => {
    
   return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );   
            //console.log(p1);
            if(p1){                
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe ');
            }                
        }, 2000)
    }); 

}

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
