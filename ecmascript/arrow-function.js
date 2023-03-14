
//Funcion clásica
function suma(a, b){
    return a+b;
}

//Funcion flecha
const suma2 = (a, b) => {
    console.log("Si lleva mas de una linea, lleva llaves y return")
    return a + b;
}

//Funcion flecha una linea
const suma3 = (a, b) =>  a + b;
// const suma3 = (a, b) =>  {return a + b };

console.log(suma3(7,7));
console.log(suma2(5,6));
