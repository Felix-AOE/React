//importacion necesita la ruta y el nombre de lo que se quiere exportar, ademas de un export para que nos permita importar en este archivo

import heroes,{owners} from '../data/heroes';

console.log(owners);
//Si tenemos que retornar algo se pueden quitar los {} y la palabra return, ya que se obvia
export const getHeroeById = (id) => heroes.find((heroe)=> heroe.id === id);



console.log(getHeroeById(2) );

//Filter encuentra muchos resultados.
export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner);

console.log(getHeroesByOwner('DC') );