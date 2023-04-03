class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  // Obtener un elemento, dada una posicion/indice
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }
  // Programar los metodos para tu arreglo personalizado, de pop y shift

}

const list = new MyArray()

list.push("Hola")
list.push("Mundo")
console.log(list.get(2))