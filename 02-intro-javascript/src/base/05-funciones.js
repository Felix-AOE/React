//funciones en JS
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}
//funcion de flecha
const saludar3 = (nombre)=> `Hola, ${nombre}`;
const saludar4 = ()=> `Hola Mundo`;

console.log(saludar2('Owo'));
console.log(saludar3('Uwu'));
console.log(saludar4());

//Enviar un objeto implcito sin un return
const getUser = () => ({
    uid: '12315546',
    username: 'El_papi1516'
});

const user = getUser();
console.log(user);
/*
function getUsuarioActivo(nombre) {
    return {
        uid: '12315546',
        username: nombre
    }
};
*/


//funcion de flecha con objeto implicito 
const getUsuarioActivo = (nombre)=>({
    uid: '12315546',
    username: nombre
});

const UsuarioActivo = getUsuarioActivo('Fernando');
console.log(UsuarioActivo);