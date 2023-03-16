"use strict";

// DEFINICION: JavaScript, es un lenguaje multiparadigma,
// principalmente orientado a objetos y basado en prototipos
function Animal(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  this.sonidoAnimal = function sonidoAnimal() {
    return "Hola, estoy emitiendo el sonido de " + this.nombre;
  };
}

// DEFINICION: Un objeto en Javascript es la instancia de un Prototipo/funcion
const jirafa = new Animal("Jirafa", "Amarillo");
const perro = new Animal("Perro", "Cafe");

console.log(jirafa);
console.log(perro.sonidoAnimal());
