const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 423422345,
        lat:14.34534,
        log:45.34556
    }
}

//clonacion de un objeto
const persona2 = {...persona}
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);