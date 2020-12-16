import {getHeroeById, getHeroesByOwner} from "./base/08-imp-exports";
/*
//En las promesas hay que dar dos datos de callback uno por si falla y otro si esta nice 
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const Heroe = getHeroeById(2);
        console.log(Heroe)
        
        resolve(Heroe);
    }, 2000 );
});

//El parametro heroe no tiene nada que ver con el de la promesa, enterminos de sintaxis 
promesa.then( (Heroe) => {
    console.log('Heroe', Heroe);
})
.catch( err => console.warn( err ) );

*/

const getHeroeByAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const Heroe = getHeroeById(id);
            if (Heroe) {
                resolve(Heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
            
        }, 2000 );
    });
}
getHeroeByAsync(10)
    .then(console.log)
    .catch( console.warn );