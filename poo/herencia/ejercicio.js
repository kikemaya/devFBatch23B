class Animal {
    constructor(nombre, color) {
      this.nombre = nombre;
      this.color = color;
    }
    sonidoDeAnimal() {
      return "Estoy emitiendo el sonido de " + this.nombre;
    }
}

class Perro extends Animal{
   constructor(nombre, color, pulgas, peludo){
    super(nombre,color);
    this.pulgas = pulgas;
    this.peludo = peludo;
   }
   ladrar(){
    return "guau";
   }
}

class Gato extends Animal{
    constructor(nombre, color, pulgas, peludo){
     super(nombre,color);
     this.pulgas = pulgas;
     this.peludo = peludo;
    }
 
    maullar(){
     return "miau";
    }
 }

 class Frufru extends Gato{
    constructor(nombre, color, pulgas, peludo, edad){
        super(nombre, color, pulgas, peludo)
        this.edad = edad;
    }
 }

const perro = new Perro("Perro", "Azul", 2, true);
const gato = new Gato("Gato", "Rosa", 5, false);
const frufru = new Frufru("Gato", "Rosa", 5, false,7)
const animal = new Animal("Jaguar","negro");

