class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  // Obtener un elemento, dada una posicion/indice
  get(index) {
    return this.data[index]
  }
  // Agregar un elemento al final de mi arreglo
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }
  // Eliminar el utltimo elemento del arreglo
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  // Añadir un elemento al principio
  unshift(item) {
    // Accedo al ultimo elemento
    const lastItem = this.data[this.length - 1]

    // recorrer los valores hacia adelante
    for (let i = 0; i <= this.length - 1; i++) {
      this.data[i + 1] = this.data[i]
    }

    // actualizar los valores del ultimo y primer elemento
    this.data[this.length] = lastItem
    this.data[0] = item

    // actualizar la cantidad de elementos en mi lista y retornar el valor que acabo de agregar
    this.length++
    return item
  }
  // CONSTRUIR EL METODO shift
  shift() {
    // code...
  }
}

const list = new MyArray()

list.push("Hola")
list.push("Mundo")
list.pop()
console.log(list)