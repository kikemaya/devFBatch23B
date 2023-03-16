"use strict";

// objetos literales != objetos de poo (programacion orientada a ojetos)
const jaguar = {
  // se les asigna atributos/propiedades
  // clave : valor, sintaxis para añadir propiedades y metodos
  nombre: "Jaguar",
  color: "amarillo",
  // un metodo es una funcion definida dentro de un objeto
  funcionJaguar: () => {
    return "Gruñido de jaguar";
  },
};

// Podemos acceder a los valores de nuestras propiedades
// mediante la notacion de punto
console.log(jaguar.funcionJaguar());
