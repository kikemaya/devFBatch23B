class Animal {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }
  sonidoDeAnimal() {
    return "Estoy emitiendo el sonido de " + this.nombre;
  }
}

const jirafa = new Animal("Jirafa", "Amarillo");
const gato = new Animal("Gato Egipcio", "Nude");

console.log(jirafa.sonidoDeAnimal());
console.log(gato.sonidoDeAnimal());
