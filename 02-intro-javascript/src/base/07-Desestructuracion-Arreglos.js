const personajes = ['Goku', 'Vegeta', 'trunks'];

const [,p1] = personajes;
console.log(p1);



const retornoarreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornoarreglo();
console.log(letras,numeros);

//Tarea 
const Owo = (valor) =>{
    return [valor,()=>{console.log('Hola mundo')}] ;
}
const [nombre, setNombre] = Owo('Goku');
console.log(nombre);
setNombre();