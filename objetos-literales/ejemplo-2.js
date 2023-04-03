"use strict";

const cinthya = {
  // Idealmente, si le pones "" a un atributo, para mantener
  // tu codigo uniforme, tienes que añadir "" a los demas atributos
  "primer nombre": "Cinthya",
  apellido: "Garcilazo",
  intereses: ["Libros", "Tatuajes", "Cajeta"],
  x1: "uno",
  x2: "dos",
};

// const clave = "intereses";

// Tambien podemos acceder a los atributos de nuestros objetos
// mediante la notacion de corchetes cuadrados, square brackets
console.log(cinthya["primer nombre"]);
console.log(cinthya["x" + 1]);

