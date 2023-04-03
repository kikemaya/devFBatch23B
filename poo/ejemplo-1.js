//Sugar syntax. Detras de escenas, es un prototipo
class Animal {
  // Aqui se construyen las propiedades de tu prototipo
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }
  // Por fuera del constructor, puedes crear tus metodos
  sonidoDeAnimal() {
    return "Estoy emitiendo el sonido de " + this.nombre;
  }
}

const jirafa = new Animal("Jirafa", "Amarillo");
const gato = new Animal("Gato Egipcio", "Nude");

console.log(jirafa.sonidoDeAnimal());
console.log(gato.sonidoDeAnimal());
