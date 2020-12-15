//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    apellido: 'Montana',
    edad: 45, 
    clave: 'ironman'
}

//

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const Owo = ({clave, nombre, edad, rango ='Capitan'}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.1241,
            lng:13.2345
        }
    }

}
//useContext es una palabra reservada ahora 
const {nombreClave, anios, latlng:{lat, lng}}  = Owo(persona);

console.log(nombreClave , anios);
console.log(lat, lng);