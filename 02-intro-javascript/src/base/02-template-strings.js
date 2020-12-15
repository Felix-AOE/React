const nombre = 'Felix';
const apellido = 'Cabello';
//AltGr + } = ``
const nombreCompleto = `${nombre} ${apellido} ${1+1}`; 

//Ctrl + space = sujerencia 
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)} `);
