let arreglo1 = [1, 5, 3, 7];

//Al hacer esto en realidad no se esta haciendo una copia
let arreglo2 = arreglo1;

let arreglo3 = [
    ...arreglo1
]

arreglo1.reverse()
console.log(arreglo3);
