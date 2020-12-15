//Arreglos en JS
//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
//arreglo.push(1);

let arreglo2 = [...arreglo,5];

//Las funciones dentro de un metodo son de callback
const arreglo3 = arreglo2.map( function(numero) {
    //Si no hacemos un return , javascript nos enviara valores undefineds
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);