class Animal {
  constructor(nombre, color) {
    this.nombre = nombre
    this.color = color
  }
  saludo() {
    return "Hola, soy un animal generico..."
  }
}

class Perro extends Animal {
  constructor(nombre, color, raza) {
    super(nombre, color)
    this.raza = raza
  }
  saludo() {
    return "Hola, soy " + this.nombre + ", donde esta Charlie?"
  }
}

const snoppy = new Perro("Snoopy", "Blanco", "Dalmata")
console.log(snoppy.nombre);
console.log(snoppy.saludo());