let arreglo = [1, 5, 3];
let arreglo2 = [4, 5];
let arreglo4 = [2, 6, 5];

arreglo.push(9);
arreglo.push(7);

arreglo.concat(arreglo2);
let arreglo3 = [
    ...arreglo, 
    ...arreglo2, 
    ...arreglo4
];

let arreglo5 = arreglo;
console.log(arreglo5);
//arreglo.reverse();