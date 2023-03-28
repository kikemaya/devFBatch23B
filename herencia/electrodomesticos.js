/* 4.- Queremos saber que Electrodomestico consume más energía. Crea una superclase llamada Electrodoméstico con las
    siguientes características: (Grupo)
    a. Sus atributos son precio, color, consumoEnergetico
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico por default debe ser 100
4.1.- Crea una subclase de Electrodomestico llamada Lavadora
    con las siguientes características: (Clase)
    a. Su atributo es carga(kg de ropa), además de los
       atributos heredados.
    b. Crea el método consumoFinal(). Este se calcula
       multiplicando el consumoEnergetico, (que se pasa por parametro) por la carga. */

class Electrodomestico{
    constructor(precio, color, capacidad){
        this.consumoEnergetico = 100;
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    consumoFinal(){
        return this.consumoEnergetico * this.carga;
    }
}

const lavadora_old = new Lavadora("$"+1500,"blanca","2000","100");
const lavadora = new Lavadora(7000,"gris","14500","20");

document.getElementById("lavadora").innerHTML = `
        <h1>Precio: ${lavadora.precio}</h1>
        <p>Color ${lavadora.color}</p>
        <p>Capacidad ${lavadora.capacidad}</p>
        <p>Carga ${lavadora.carga}</p>`